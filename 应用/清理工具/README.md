# 清理（卸载侧载应用）

批量卸载侧载包，用于恢复被占用的桌面入口。

## 行为

打开后依次调用 `@system.package.remove()`，删除列表里的包，最后删除自己：

```js
const targets = [
  'com.rtos.dsdial',
  'com.rtos.dsbalance',
  'com.rtos.pkglist',
  'com.rtos.qrwatch',
  'com.xfaith.woodenfish',
  'com.rtos.cleanup'
]
```

界面上会显示每个包的 `OK` / `FAIL`。

## 使用场景

- 侧载后桌面入口错乱，重启也没恢复
- 想从商店重装"敲木鱼"，但签名冲突
- 想把手表恢复干净状态

## 改包名

编辑 `src/main/index.ux` 里的 `targets` 数组，增删要移除的包名。

## 构建

```bash
gx build -d oppo-rtos-watch -f
```

## 注意

- `pkg.remove` 对运行中的应用可能失败；本应用把自己放在最后
- 表盘包卸载不会清理 Glyphix 的 `ADBT_Dial` 数据库记录（框架已知问题）
- 删完后**重启手表**

## License

MIT
