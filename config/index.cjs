/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxb55a8865619f0f82',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8d04766492cb59fd3fab2c448ad55972',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小敲',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqueq5lyMmYCeH5xZQcxevPPaMbc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'gix0n1rsDTRZAlhpf9s-M93ShOjgaEqlSXar0QY722s',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小敲', year: '2001', date: '08-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小敲', year: '2001', date: '10-02',
        },
        {
          type: '节日', name: '在一起纪念日', year: '2022', date: '01-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-01-17' },
//         // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-01-18' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'fdo2_D8WMGO8MCr2nw3DOjzjB06Nj0iEQiikBS0qFh4',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqueq5gZwA-4nNwMt3n1nFlFPiZA',
    }
  ],

}

module.exports = USER_CONFIG

