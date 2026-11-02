#!/usr/bin/env bash
# 从本地 key 文件注入 apiKey，构建后还原源码，避免 key 留在仓库里
set -euo pipefail
cd "$(dirname "$0")"

KEY_FILE="${DS_KEY_FILE:-$HOME/.config/dsbalance.key}"
[ -f "$KEY_FILE" ] || { echo "缺少 $KEY_FILE"; exit 1; }

BAK="$(mktemp)"
cp src/main/config.js "$BAK"
trap 'cp "$BAK" src/main/config.js; rm -f "$BAK"' EXIT

KEY="$(tr -d '\r\n' < "$KEY_FILE")" python3 -I - <<'PY'
import os, re
key = os.environ['KEY']
p = 'src/main/config.js'
s = open(p, encoding='utf-8').read()
s2, n = re.subn(r"apiKey:\s*'[^']*'", "apiKey: '%s'" % key, s, count=1)
if n != 1:
    raise SystemExit('config.js 里没找到 apiKey 字段')
open(p, 'w', encoding='utf-8').write(s2)
PY

gx build -d oppo-rtos-watch -f

OUT="../../dsbalance.rpk"
cp .glyphix-work/dist/oppo-rtos-watch/com.rtos.dsbalance/bundle.pkg "$OUT"
echo "built: $(pwd)/$OUT"
