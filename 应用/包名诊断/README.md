# 包列表（诊断）

显示手表上已安装的应用包名，用于排查"某个应用到底装没装""桌面槽位被谁占了"。

## 界面

```
包列表 23
com.tencent.wechatrtos
com.xfaith.woodenfish
com.rtos.dsbalance
...
```

- 顶部是包名总数
- 带 `tencent` / `weixin` / `wechat` / `woodenfish` / `rtos` 的包名排在最前
- 其余按字母排序
- 列表可上下滑动

## 用法

1. 构建并安装
2. 从桌面或瑰元助手「启动应用」打开
3. 对照包名判断

> 这是诊断工具，不修改任何数据。

## 构建

```bash
gx build -d oppo-rtos-watch -f
```

## 文件

```
src/
├── app.js
├── manifest.json
├── assets/icon.png
└── main/index.ux
```

## 备注

- 在真机上可用（纯 HTML 列表，不依赖 canvas）
- `@system.package.list('app')` 返回包名数组
- 表盘包（`type: dial`）不在 `list('app')` 里，需要 `list('dial')`

## License

MIT
