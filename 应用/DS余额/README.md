# DS 余额

在手表上查看 DeepSeek API 余额。

## 界面

```
DEEPSEEK
剩余额度
¥ 189.97
CNY · 充值 ¥132.06 · 赠送 ¥57.90
可用 · 13:42
```

- 打开自动查询，之后每 60 秒刷新
- 没网时显示上次缓存
- 点击屏幕手动刷新
- 金额 80px，其余文字 20~30px

## API

```http
GET https://api.deepseek.com/user/balance
Authorization: Bearer sk-...
```

返回：

```json
{
  "is_available": true,
  "balance_infos": [
    {
      "currency": "CNY",
      "total_balance": "189.97",
      "granted_balance": "57.90",
      "topped_up_balance": "132.06"
    }
  ]
}
```

## 配置 key

```bash
printf '%s' 'sk-你的key' > ~/.config/dsbalance.key
chmod 600 ~/.config/dsbalance.key
./build.sh
```

`build.sh` 会临时替换 `src/main/config.js` 里的 `apiKey`，构建后还原。

调试时可以用 mock 模式（`config.js` 里 `mock: true`），不请求网络直接显示示例数据。

## 构建

```bash
./build.sh
```

产物：仓库根目录的 `dsbalance.rpk`。

## 文件

```
src/
├── app.js
├── manifest.json
├── assets/icon.png
└── main/
    ├── config.js     # API 地址 / key 占位符 / 刷新间隔 / mock
    └── index.ux      # 圆屏布局 + fetch + 缓存
build.sh
```

## 说明

- 手表无 Wi-Fi，请求经手机代理出网（OPPO 健康/瑰元助手的调试通道）
- 真机不支持 canvas，本应用是纯 HTML 布局
- key 内嵌在 rpk 里，不要分享构建产物

## License

MIT
