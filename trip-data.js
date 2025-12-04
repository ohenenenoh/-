// trip-data.js
window.tripData = {
  tripTitle: '熊本 · 九州小旅行',
  tripDate: '12/28 ～ 1/4',

  myMapUrl: 'https://www.google.com/maps/d/u/0/edit?mid=1YXjJyNyDDuUmN8SwXTAgrjVtihAQwWk&usp=sharing',

  flightInfo: {
    depart: {
      date: '114/12/28',
      weekday: '六',
      time: '09:00',
      flightNo: 'CI198',
      route: '高雄 KHH → 熊本 KMJ'
    },
    return: {
      date: '115/01/04',
      weekday: '日',
      time: '13:25',
      flightNo: 'CI199',
      route: '熊本 KMJ → 高雄 KHH'
    }
  },

  fx: {
    rateTwdToJpy: 4.96,
    twd: '',
    jpy: ''
  },

  days: [
    {
      date: '12/28',
      city: '熊本半日遊',
      stops: [
        { time: '09:00-12:25', title: '抵達熊本', note: '抵達後準備展開熊本第一天行程', category: 'transport' },
        { time: '12:30', title: 'JR售票處領取 JR Pass', note: '熊本站 JR 售票處領取 5 日 JR Pass（約 15 分鐘）', category: 'transport' },
        { time: '13:00', title: '前往飯店寄放行李', note: '(JR 水道町) 永安國際精選酒店寄放行李（約 15 分鐘）', category: 'stay' },
        { time: '13:30', title: '勝烈亭新市街本店 午餐', note: '享用炸豬排午餐（約 60 分鐘）', category: 'food' },
        { time: '14:30', title: '熊本城', note: '參觀天守閣及博物館，建議停留約 90 分鐘', category: 'sight' },
        { time: '16:00', title: '城彩苑', note: '逛古風商店街及品嘗小吃，約 60 分鐘', category: 'shopping' },
        { time: '17:00', title: '古町周邊散步', note: '周邊街區自由探索約 45 分鐘', category: 'free' },
        { time: '18:00', title: '馬櫻下通店 晚餐', note: '品嘗當地馬肉料理，約 90 分鐘', category: 'food' },
        { time: '19:30', title: '返回飯店休息', note: '回 (JR 水道町) 永安國際精選酒店休息', category: 'stay' }
      ]
    },
    {
      date: '12/29',
      city: '三角一日遊',
      stops: [
        { time: '10:21-11:29', title: '搭 JR A 列車前往三角', note: '從熊本搭 JR A 列車前往三角', category: 'transport' },
        { time: '11:40', title: '千蘭拉麵 午餐', note: '在三角享用拉麵午餐（約 60 分鐘）', category: 'food' },
        { time: '12:50', title: '三角西港散步', note: '漫步三角西港，欣賞海港風情（約 90 分鐘）', category: 'sight' },
        { time: '14:20', title: '浦島資料屋', note: '參訪並品嘗起司蛋糕（約 30 分鐘）', category: 'food' },
        { time: '15:00', title: '三角西港珈琲屋 和蘭館', note: '咖啡休憩約 40 分鐘', category: 'food' },
        { time: '16:00', title: '搭 JR 返回熊本', note: '約 1 小時車程返回熊本', category: 'transport' },
        { time: '17:30', title: '熊本晚餐自由安排', note: '市區自由覓食', category: 'food' },
        { time: '—', title: '宿 永安國際精選酒店', note: '回到熊本同一間住宿', category: 'stay' }
      ]
    },
    {
      date: '12/30',
      city: '熊本 → 福岡',
      stops: [
        { time: '09:00', title: '熊本前往福岡', note: '搭 JR 移動至福岡，約 2 小時', category: 'transport' },
        { time: '11:30', title: '抵達福岡・寄放行李', note: '至 APA 飯店（東平博多）寄放行李', category: 'stay' },
        { time: '12:00', title: '福岡車站周邊美食', note: '藥院燒肉、明太子麵包等', category: 'food' },
        { time: '14:00', title: '太宰府天滿宮', note: '參拜及參觀，建議停留約 90 分鐘', category: 'sight' },
        { time: '16:00', title: '市區觀光與逛街', note: '中洲川端商圈、天神地下街等', category: 'shopping' },
        { time: '18:30', title: '福岡晚餐', note: '推薦博多拉麵或中洲屋台街', category: 'food' },
        { time: '—', title: '入住 APA 東平站博多飯店', note: '回飯店休息', category: 'stay' }
      ]
    },
    {
      date: '12/31',
      city: '福岡 → 門司港',
      stops: [
        { time: '09:00', title: '福岡出發前往門司港', note: '約 1 小時車程', category: 'transport' },
        { time: '10:30', title: '門司港車站與周邊', note: '漫步懷舊建築，約 60 分鐘', category: 'sight' },
        { time: '11:30', title: '舊門司稅關', note: '免費開放，含咖啡廳休息約 45 分鐘', category: 'sight' },
        { time: '12:30', title: '海鮮午餐', note: '門司港當地海鮮料理', category: 'food' },
        { time: '14:00', title: '藍翼吊橋', note: '觀賞開橋秀，停留約 20 分鐘', category: 'sight' },
        { time: '15:00', title: '門司港海峽廣場', note: '購物休憩約 90 分鐘', category: 'shopping' },
        { time: '17:00', title: '返回福岡', note: '回福岡市區，晚餐及住宿', category: 'transport' }
      ]
    },
    {
      date: '1/1',
      city: '福岡 → 由布院',
      stops: [
        { time: '10:11', title: '搭布院之森列車', note: '從福岡搭乘布院之森列車前往由布院，約 2 小時', category: 'transport' },
        { time: '12:27', title: '抵達由布院・寄放行李', note: '行李寄放於由布院 lamp 住宿', category: 'stay' },
        { time: '13:00', title: '由布院美術館', note: '預約參觀時間', category: 'sight' },
        { time: '15:00', title: '湯之坪街道散步', note: '逛老街、品嘗各種小吃', category: 'shopping' },
        { time: '16:00', title: '自由時間', note: '悠閒享受由布院氛圍', category: 'free' },
        { time: '—', title: '晚餐與住宿由布院 lamp', note: '回住宿休息', category: 'stay' }
      ]
    },
    {
      date: '1/2',
      city: '由布院 → 阿蘇',
      stops: [
        { time: '08:00', title: '由布院金鱗湖', note: '早晨散步，之後前往 JR 大分轉乘', category: 'sight' },
        { time: '11:00', title: '前往阿蘇草千里', note: '約 2 小時車程，途中用餐', category: 'transport' },
        { time: '13:00', title: '阿蘇草千里', note: '欣賞壯麗草原風光，停留約 90 分鐘', category: 'sight' },
        { time: '14:30', title: '阿蘇火山博物館', note: '參觀約 60 分鐘', category: 'sight' },
        { time: '15:30', title: '阿蘇車站周邊', note: '阿蘇牛奶、起司布丁等美食', category: 'food' },
        { time: '17:00', title: '入住 Fairfield by Marriott Aso', note: '辦理入住休息', category: 'stay' }
      ]
    },
    {
      date: '1/3',
      city: '阿蘇 → 熊本',
      stops: [
        { time: '09:00', title: '阿蘇周邊散步／溫泉', note: '上午簡單散步或溫泉體驗', category: 'free' },
        { time: '12:00', title: '搭 JR 返回熊本', note: '約 1.5 小時車程', category: 'transport' },
        { time: '下午', title: '熊本自由活動', note: '市區自由逛街或購物', category: 'free' },
        { time: '晚上', title: '熊本晚餐', note: '安排當地美食', category: 'food' },
        { time: '—', title: '住宿 熊本銀座通大和 Roynet', note: '入住熊本最後一晚', category: 'stay' }
      ]
    },
    {
      date: '1/4',
      city: '熊本 → 台灣',
      stops: [
        { time: '早上', title: '退房與自由活動', note: '退房後可於附近購買伴手禮', category: 'shopping' },
        { time: '11:30', title: '前往機場', note: '預留時間至熊本機場', category: 'transport' },
        { time: '13:25', title: '熊本出發返回台灣', note: '搭機回台，結束旅程', category: 'transport' }
      ]
    }
  ],

  // 行李清單預設
  items: [
    { id: 1, name: '保溫瓶 / 水壺', category: 'food', checked: false },
    { id: 2, name: '隨身零食（堅果、能量棒）', category: 'food', checked: false },
    { id: 3, name: '胃藥、消化錠', category: 'food', checked: false },
    { id: 10, name: '外套（防風、防雨）', category: 'clothes', checked: false },
    { id: 11, name: '上衣與褲子（依天數準備）', category: 'clothes', checked: false },
    { id: 12, name: '襪子與內衣褲', category: 'clothes', checked: false },
    { id: 13, name: '睡衣', category: 'clothes', checked: false },
    { id: 14, name: '帽子 / 圍巾 / 手套', category: 'clothes', checked: false },
    { id: 20, name: '牙刷牙膏 / 牙線', category: 'stay', checked: false },
    { id: 21, name: '洗面乳 / 卸妝用品', category: 'stay', checked: false },
    { id: 22, name: '保養品（化妝水、乳液）', category: 'stay', checked: false },
    { id: 23, name: '隱形眼鏡與保養液', category: 'stay', checked: false },
    { id: 24, name: '小毛巾、洗澡用品', category: 'stay', checked: false },
    { id: 30, name: '護照與影本', category: 'transport', checked: false },
    { id: 31, name: '身分證 / 健保卡', category: 'transport', checked: false },
    { id: 32, name: '機票 / 電子機票截圖', category: 'transport', checked: false },
    { id: 33, name: 'JR Pass / 車票 / IC 卡', category: 'transport', checked: false },
    { id: 34, name: '錢包（現金 / 信用卡）', category: 'transport', checked: false },
    { id: 35, name: '國內外駕照（若需開車）', category: 'transport', checked: false },
    { id: 40, name: '手機與充電線', category: 'other', checked: false },
    { id: 41, name: '行動電源', category: 'other', checked: false },
    { id: 42, name: '相機 / 記憶卡 / 充電器', category: 'other', checked: false },
    { id: 43, name: '日幣現金與兌換收據', category: 'other', checked: false },
    { id: 44, name: '常備藥（頭痛、感冒、過敏）', category: 'other', checked: false },
    { id: 45, name: '雨傘 / 折疊傘', category: 'other', checked: false },
    { id: 46, name: '口罩與酒精', category: 'other', checked: false }
  ],

  nextId: 1000
};
