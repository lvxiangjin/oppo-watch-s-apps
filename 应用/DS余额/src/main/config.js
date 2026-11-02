/**
 * DeepSeek 余额查询配置
 *
 * ★ 把 apiKey 换成你自己的，格式 sk-xxxxxxxx（platform.deepseek.com → API keys）
 *   这个 key 会被打进 rpk 包里，只适合自己用，别把构建产物发给别人。
 */
export default {
  apiUrl: 'https://api.deepseek.com/user/balance',

  // ★★★ 填这里 ★★★
  apiKey: 'sk-REPLACE_ME',

  // 前台自动刷新间隔（毫秒）
  refreshMs: 60000,

  // 单次请求超时（毫秒）
  requestTimeout: 10000,

  // 优先显示的币种；没有就取接口返回的第一个
  preferCurrency: 'CNY',

  // 调试用：true 时不发请求，直接显示下面这份示例数据
  mock: false,
  mockData: {
    is_available: true,
    balance_infos: [
      { currency: 'CNY', total_balance: '110.00', granted_balance: '10.00', topped_up_balance: '100.00' }
    ]
  }
}
