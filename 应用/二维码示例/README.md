# qrwatch —— 手表二维码应用（每 10 秒自动换码）

Glyphix OS 应用。主页面显示二维码，10 秒自动切换下一条，点击屏幕手动切换。

## 换码内容
编辑 `src/main/qr-data.js`：
```js
export default [
  { label: '名片主页', value: 'https://example.com/' },
  { label: 'WiFi 分享', value: 'WIFI:T:WPA;S:MyHome;P:12345678;;' },
]
```
`<qrcode>` 组件最高 QR 版本 12 ≈ 300 字节载荷（纯数字更多）。

## 构建 / 安装 / 图标
见仓库根 README 与 [文档/构建与安装.md](../../文档/构建与安装.md)。
注意：**manifest.json 的 `icon` 字段必须保留**（OWS 真机安装校验）。
本仓库不包含构建产物，请按上面流程自行构建。
