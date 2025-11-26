import { DaySchedule } from './types';

export const ITINERARY_DATA: DaySchedule[] = [
  {
    dayId: 1,
    date: "12/10",
    weekday: "週三",
    route: "台南 ➔ 宜蘭",
    highlight: "舒適移動，晚上泡湯消除疲勞",
    activities: [
      {
        id: "d1-1",
        time: "09:00",
        title: "出發",
        description: "睡飽再出發，避開上班車潮。走國道3號接國道5號。",
        type: "travel"
      },
      {
        id: "d1-2",
        time: "12:00",
        title: "午餐點",
        description: "建議在石碇服務區或深坑老街(吃豆腐)休息用餐。",
        location: "深坑老街",
        type: "food"
      },
      {
        id: "d1-3",
        time: "14:30",
        title: "宜蘭親子熱點 (二選一)",
        description: "依天氣與喜好選擇。",
        type: "activity",
        options: [
          {
            id: "d1-opt-a",
            time: "14:30",
            title: "張美阿嬤農場",
            description: "三星鄉。穿浴衣餵水豚、笑笑羊，環境很乾淨。",
            location: "張美阿嬤農場",
            type: "activity"
          },
          {
            id: "d1-opt-b",
            time: "14:30",
            title: "蜡藝蠟筆城堡",
            description: "蘇澳。雨天備案首選，有很多色彩DIY。",
            location: "蜡藝蠟筆城堡",
            type: "activity"
          }
        ]
      },
      {
        id: "d1-4",
        time: "17:00",
        title: "入住與晚餐",
        description: "建議住礁溪泡溫泉。晚餐可飯店內用或羅東夜市。",
        tips: ["阿灶伯羊肉湯", "魏姐包心粉圓"],
        location: "礁溪溫泉",
        type: "hotel"
      }
    ]
  },
  {
    dayId: 2,
    date: "12/11",
    weekday: "週四",
    route: "宜蘭 ➔ 花蓮",
    highlight: "體驗最美蘇花改，抵達花蓮慢活",
    activities: [
      {
        id: "d2-1",
        time: "10:00",
        title: "出發",
        description: "走蘇花改 (台9線)。",
        type: "travel"
      },
      {
        id: "d2-2",
        time: "11:00",
        title: "台泥 DAKA 園區",
        description: "星巴克、7-11休息。整點有音樂水舞秀。",
        location: "台泥 DAKA 園區",
        type: "rest"
      },
      {
        id: "d2-3",
        time: "13:00",
        title: "佳興冰果室",
        description: "檸檬汁必買，什錦麵很大碗適合分食。",
        location: "佳興冰果室",
        type: "food"
      },
      {
        id: "d2-4",
        time: "14:30",
        title: "七星潭",
        description: "海邊疊石頭、看戰機起降，享受單純快樂。",
        location: "七星潭",
        type: "activity"
      },
      {
        id: "d2-5",
        time: "16:30",
        title: "Check-in & 晚餐",
        description: "入住花蓮市區(連住兩晚)。晚餐去東大門夜市。",
        tips: ["原住民一條街特色料理"],
        location: "東大門夜市",
        type: "hotel"
      }
    ]
  },
  {
    dayId: 3,
    date: "12/12",
    weekday: "週五",
    route: "花蓮深度遊",
    highlight: "不用長途開車，孩子的主場",
    activities: [
      {
        id: "d3-1",
        time: "全日",
        title: "行程方案選擇",
        description: "選擇一個區域玩整天。",
        type: "activity",
        options: [
          {
            id: "d3-opt-a",
            time: "方案 A",
            title: "遠雄海洋公園",
            description: "遊樂園+水族館+纜車，看海豚海獅表演。",
            location: "遠雄海洋公園",
            type: "activity"
          },
          {
            id: "d3-opt-b",
            time: "方案 B",
            title: "自然休閒派",
            description: "立川漁場摸蜆仔 -> 星巴克洄瀾門市 -> 知卡宣親水公園/新天堂樂園。",
            location: "立川漁場",
            type: "activity"
          }
        ]
      },
      {
        id: "d3-2",
        time: "18:00",
        title: "續住花蓮市區",
        description: "晚上輕鬆休息，準備明日往南。",
        type: "hotel"
      }
    ]
  },
  {
    dayId: 4,
    date: "12/13",
    weekday: "週六",
    route: "花蓮 ➔ 台東池上",
    highlight: "花蓮縱谷與最美田園風光",
    activities: [
      {
        id: "d4-1",
        time: "10:00",
        title: "出發往南",
        description: "離開花蓮市，走山線(台9線)。",
        type: "travel"
      },
      {
        id: "d4-2",
        time: "11:00",
        title: "花蓮觀光糖廠",
        description: "吃紅豆鮮奶冰、餵魚 (小朋友最愛)。",
        location: "花蓮觀光糖廠",
        type: "activity"
      },
      {
        id: "d4-3",
        time: "13:00",
        title: "午餐",
        description: "大農大富附近餐廳，或瑞穗吃牛奶鍋。",
        type: "food"
      },
      {
        id: "d4-4",
        time: "14:30",
        title: "大農大富平地森林",
        description: "全台最美龍貓森林隧道，租電動車騎車。",
        location: "大農大富平地森林園區",
        type: "activity"
      },
      {
        id: "d4-5",
        time: "16:30",
        title: "前往池上",
        description: "今晚住池上或關山，縮短明日車程。",
        location: "池上鄉",
        type: "hotel"
      }
    ]
  },
  {
    dayId: 5,
    date: "12/14",
    weekday: "週日",
    route: "台東 ➔ 台南",
    highlight: "伯朗大道騎車，帶著滿足的心情回家",
    activities: [
      {
        id: "d5-1",
        time: "09:00",
        title: "伯朗大道 / 天堂路",
        description: "租電動四輪車看金城武樹。早上空氣最好。",
        location: "伯朗大道",
        type: "activity"
      },
      {
        id: "d5-2",
        time: "12:00",
        title: "午餐",
        description: "悟饕池上飯包文化故事館 (在火車車廂用餐)。",
        location: "悟饕池上飯包文化故事館",
        type: "food"
      },
      {
        id: "d5-3",
        time: "13:30",
        title: "回程",
        description: "開始往南開，經南迴公路。",
        type: "travel"
      },
      {
        id: "d5-4",
        time: "15:30",
        title: "大武之心南迴驛",
        description: "最新海景休息站。",
        location: "大武之心南迴驛",
        type: "rest"
      },
      {
        id: "d5-5",
        time: "18:00",
        title: "抵達台南",
        description: "趕上晚餐時間，旅程結束。",
        location: "台南",
        type: "travel"
      }
    ]
  }
];