/**
 * AI 塔罗配置
 * apiKey 在构建时由 build.sh 从 ~/.config/dsbalance.key 注入，源码里不保存真实 key
 */
export default {
  apiUrl: 'https://api.deepseek.com/chat/completions',
  model: 'deepseek-chat',
  apiKey: 'sk-REPLACE_ME',
  requestTimeout: 20000,
  maxTokens: 120,
  temperature: 1.1
}
