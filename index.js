const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/joeyyap', (req, res) => {
    const json = {
        "JoeyYapDoc": {
            "DocHead": {
                "MerchantId": "JOEYYAP",
                "Charset": "UTF-8",
                "Language": "zh-Hant",
                "ContentType": "Web",
                "ItemCode": "item001",
                "RequestData": {
                    "ReturnType": "JSON",
                    "iSex": "1",
                    "iYear": "1950",
                    "iMonth": "4",
                    "iDay": "10",
                    "iHour": "16",
                    "iCalendar": "1",
                    "LeapMonth": "0",
                    "iGetYear": "1950",
                    "iGetMonth": "4",
                    "iGetDay": "10",
                    "iGetHour": "16",
                    "iKounID": "12",
                    "iHourFlag": "1",
                    "iDebug": "1"
                },
                "ReturnCode": {
                    "ErrorNo": "E000",
                    "ErrorDesc": "No Error"
                }
            },
            "DocContent": {
                "DebugInfo": {
                    "BirthYear": {
                        "Value": "1950",
                        "KanID": "6",
                        "ChihID": "2"
                    },
                    "BirthMonth": {
                        "Value": "2",
                        "KanID": "5",
                        "ChihID": "3"
                    },
                    "BirthDay": {
                        "Value": "24",
                        "KanID": "1",
                        "ChihID": "11"
                    },
                    "BirthHour": {
                        "Value": "16",
                        "KanID": "0",
                        "ChihID": "8"
                    },
                    "FlowYear": {
                        "Value": "1950",
                        "KanID": "6",
                        "ChihID": "2"
                    },
                    "FlowMonth": {
                        "Value": "2",
                        "KanID": "5",
                        "ChihID": "3"
                    },
                    "FlowDay": {
                        "Value": "24",
                        "KanID": "1",
                        "ChihID": "11"
                    },
                    "FlowHour": {
                        "Value": "16",
                        "KanID": "0",
                        "ChihID": "8"
                    },
                    "BirthLunarDateExt": "庚寅(1950)年己卯(2)月乙亥(24)日甲申(16)時",
                    "FlowLunarDateExt": "庚寅(1950)年己卯(2)月乙亥(24)日甲申(16)時"
                },
                "BasicInfo": {
                    "SolarBirthDesc": "西元1950年4月10日申時",
                    "LunarBirthDesc": "庚寅(1950)年2月24日申時",
                    "Age": "1",
                    "AnimalName": "虎",
                    "AnimalAge": "1",
                    "PosNegName": "陽男",
                    "FiveLevelName": "木3局",
                    "FateKoun": {
                        "KounChih": "7",
                        "KounChihName": "未",
                        "MasterStarID1": "6"
                    },
                    "BodyKoun": {
                        "KounChih": "11",
                        "KounChihName": "亥"
                    },
                    "FateMaster": {
                        "StarID": "3",
                        "StarName": "武曲"
                    },
                    "BodyMaster": {
                        "StarID": "11",
                        "StarName": "天梁"
                    }
                },

                "KounInfo1": {
                    "KounChih": "0",
                    "VertexKounChih": "0-4-8",
                    "OppositeKounChih": "6",
                    "KounKan": "4",
                    "KounKanChihName": "戊子",
                    "KounID": "5",
                    "KounName": "部屬",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "11",
                                "StarName": "天梁",
                                "Bright": "1",
                                "BrightName": "廟",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "21",
                                "StarName": "文曲",
                                "Bright": "3",
                                "BrightName": "得",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "3",
                        "Star": [
                            {
                                "ID": "18",
                                "StarName": "陰煞",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "64",
                                "StarName": "恩光",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "90",
                                "StarName": "天傷",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "67",
                                "StarName": "沐浴"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "82",
                                "StarName": "將軍"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "102",
                                "StarName": "弔客"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "110",
                                "StarName": "災煞"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "9-21-33-45-57-69-81",
                    "BigLimitedAgeRange": "53 - 62",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo2": {
                    "KounChih": "1",
                    "VertexKounChih": "1-5-9",
                    "OppositeKounChih": "7",
                    "KounKan": "5",
                    "KounKanChihName": "己丑",
                    "KounID": "6",
                    "KounName": "遷移",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "5",
                                "StarName": "廉貞",
                                "Bright": "4",
                                "BrightName": "利",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "12",
                                "StarName": "七殺",
                                "Bright": "1",
                                "BrightName": "廟",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "33",
                                "StarName": "天魁",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "3",
                        "Star": [
                            {
                                "ID": "23",
                                "StarName": "紅鸞",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "57",
                                "StarName": "寡宿",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "63",
                                "StarName": "天壽",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "68",
                                "StarName": "冠帶"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "83",
                                "StarName": "奏書"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "103",
                                "StarName": "病符"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "111",
                                "StarName": "天煞"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "10-22-34-46-58-70-82",
                    "BigLimitedAgeRange": "63 - 72",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo3": {
                    "KounChih": "2",
                    "VertexKounChih": "2-6-10",
                    "OppositeKounChih": "8",
                    "KounKan": "4",
                    "KounKanChihName": "戊寅",
                    "KounID": "7",
                    "KounName": "疾厄",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "0"
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "22",
                                "StarName": "文昌",
                                "Bright": "7",
                                "BrightName": "陷",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "4",
                        "Star": [
                            {
                                "ID": "16",
                                "StarName": "天姚",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "51",
                                "StarName": "台輔",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "45",
                                "StarName": "天廚",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "91",
                                "StarName": "天使",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "69",
                                "StarName": "臨官"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "84",
                                "StarName": "飛廉"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "92",
                                "StarName": "歲建"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "112",
                                "StarName": "指背"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "11-23-35-47-59-71-83",
                    "BigLimitedAgeRange": "73 - 82",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "1",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo4": {
                    "KounChih": "3",
                    "VertexKounChih": "3-7-11",
                    "OppositeKounChih": "9",
                    "KounKan": "5",
                    "KounKanChihName": "己卯",
                    "KounID": "8",
                    "KounName": "財帛",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "0"
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "19",
                                "StarName": "地空",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "29",
                                "StarName": "咸池",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "53",
                                "StarName": "天空",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "70",
                                "StarName": "帝旺"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "85",
                                "StarName": "喜神"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "93",
                                "StarName": "晦氣"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "113",
                                "StarName": "咸池"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "12-24-36-48-60-72-84",
                    "BigLimitedAgeRange": "83 - 92",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo5": {
                    "KounChih": "4",
                    "VertexKounChih": "4-8-0",
                    "OppositeKounChih": "10",
                    "KounKan": "6",
                    "KounKanChihName": "庚辰",
                    "KounID": "9",
                    "KounName": "子女",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "4",
                                "StarName": "天同",
                                "Bright": "5",
                                "BrightName": "平",
                                "FourHaw": "4",
                                "FourHawName": "忌"
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "0"
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "54",
                                "StarName": "天哭",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "39",
                                "StarName": "三台",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "71",
                                "StarName": "衰"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "86",
                                "StarName": "病符"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "94",
                                "StarName": "喪門"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "114",
                                "StarName": "月煞"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "1-13-25-37-49-61-73",
                    "BigLimitedAgeRange": "93 - 102",
                    "isSmallLimited": "1",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo6": {
                    "KounChih": "5",
                    "VertexKounChih": "5-9-1",
                    "OppositeKounChih": "11",
                    "KounKan": "7",
                    "KounKanChihName": "辛巳",
                    "KounID": "10",
                    "KounName": "夫妻",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "3",
                                "StarName": "武曲",
                                "Bright": "5",
                                "BrightName": "平",
                                "FourHaw": "2",
                                "FourHawName": "權"
                            }, {
                                "ID": "13",
                                "StarName": "破軍",
                                "Bright": "5",
                                "BrightName": "平",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "14",
                                "StarName": "左輔",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "50",
                                "StarName": "天月",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "56",
                                "StarName": "孤辰",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "72",
                                "StarName": "病"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "87",
                                "StarName": "大耗"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "95",
                                "StarName": "貫索"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "115",
                                "StarName": "亡神"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "2-14-26-38-50-62-74",
                    "BigLimitedAgeRange": "103 - 112",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "1"
                },
                "KounInfo7": {
                    "KounChih": "6",
                    "VertexKounChih": "6-10-2",
                    "OppositeKounChih": "0",
                    "KounKan": "8",
                    "KounKanChihName": "壬午",
                    "KounID": "11",
                    "KounName": "兄弟",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "2",
                                "StarName": "太陽",
                                "Bright": "2",
                                "BrightName": "旺",
                                "FourHaw": "1",
                                "FourHawName": "祿"
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "0"
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "3",
                        "Star": [
                            {
                                "ID": "26",
                                "StarName": "龍池",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "44",
                                "StarName": "天福",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "46",
                                "StarName": "截路",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "73",
                                "StarName": "死"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "88",
                                "StarName": "伏兵"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "96",
                                "StarName": "官符"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "104",
                                "StarName": "將星"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "3-15-27-39-51-63-75",
                    "BigLimitedAgeRange": "113 - 122",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo8": {
                    "KounChih": "7",
                    "VertexKounChih": "7-11-3",
                    "OppositeKounChih": "1",
                    "KounKan": "9",
                    "KounKanChihName": "癸未",
                    "KounID": "0",
                    "KounName": "命宮",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "6",
                                "StarName": "天府",
                                "Bright": "1",
                                "BrightName": "廟",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "3",
                        "Star": [
                            {
                                "ID": "20",
                                "StarName": "地劫",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "32",
                                "StarName": "陀羅",
                                "Bright": "1",
                                "BrightName": "廟",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "34",
                                "StarName": "天鉞",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "3",
                        "Star": [
                            {
                                "ID": "24",
                                "StarName": "天喜",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "61",
                                "StarName": "月德",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "47",
                                "StarName": "空亡",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "74",
                                "StarName": "墓"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "89",
                                "StarName": "官府"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "97",
                                "StarName": "小耗"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "105",
                                "StarName": "攀鞍"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "4-16-28-40-52-64-76",
                    "BigLimitedAgeRange": "3 - 12",
                    "isSmallLimited": "0",
                    "isBigLimited": "1",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo9": {
                    "KounChih": "8",
                    "VertexKounChih": "8-0-4",
                    "OppositeKounChih": "2",
                    "KounKan": "0",
                    "KounKanChihName": "甲申",
                    "KounID": "1",
                    "KounName": "父母",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "1",
                                "StarName": "天機",
                                "Bright": "3",
                                "BrightName": "得",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "7",
                                "StarName": "太陰",
                                "Bright": "4",
                                "BrightName": "利",
                                "FourHaw": "3",
                                "FourHawName": "科"
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "25",
                                "StarName": "天馬",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "30",
                                "StarName": "祿存",
                                "Bright": "1",
                                "BrightName": "廟",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "4",
                        "Star": [
                            {
                                "ID": "48",
                                "StarName": "解神",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "49",
                                "StarName": "天巫",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "27",
                                "StarName": "鳳閣",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "55",
                                "StarName": "天虛",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "75",
                                "StarName": "絕"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "78",
                                "StarName": "博士"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "98",
                                "StarName": "大耗"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "106",
                                "StarName": "歲驛"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "5-17-29-41-53-65-77",
                    "BigLimitedAgeRange": "13 - 22",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo10": {
                    "KounChih": "9",
                    "VertexKounChih": "9-1-5",
                    "OppositeKounChih": "3",
                    "KounKan": "1",
                    "KounKanChihName": "乙酉",
                    "KounID": "2",
                    "KounName": "福德",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "0",
                                "StarName": "紫微",
                                "Bright": "2",
                                "BrightName": "旺",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "8",
                                "StarName": "貪狼",
                                "Bright": "4",
                                "BrightName": "利",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "3",
                        "Star": [
                            {
                                "ID": "15",
                                "StarName": "右弼",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "31",
                                "StarName": "擎羊",
                                "Bright": "7",
                                "BrightName": "陷",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "41",
                                "StarName": "火星",
                                "Bright": "3",
                                "BrightName": "得",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "28",
                                "StarName": "破碎",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "62",
                                "StarName": "天才",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "76",
                                "StarName": "胎"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "79",
                                "StarName": "力士"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "99",
                                "StarName": "龍德"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "107",
                                "StarName": "息神"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "6-18-30-42-54-66-78",
                    "BigLimitedAgeRange": "23 - 32",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "1",
                    "isFlowHour": "0"
                },
                "KounInfo11": {
                    "KounChih": "10",
                    "VertexKounChih": "10-2-6",
                    "OppositeKounChih": "4",
                    "KounKan": "2",
                    "KounKanChihName": "丙戌",
                    "KounID": "3",
                    "KounName": "田宅",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "9",
                                "StarName": "巨門",
                                "Bright": "7",
                                "BrightName": "陷",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "0"
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "6",
                        "Star": [
                            {
                                "ID": "17",
                                "StarName": "天刑",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "52",
                                "StarName": "封誥",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "58",
                                "StarName": "蜚廉",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "59",
                                "StarName": "華蓋",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "40",
                                "StarName": "八座",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "65",
                                "StarName": "天貴",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "77",
                                "StarName": "養"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "80",
                                "StarName": "青龍"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "100",
                                "StarName": "白虎"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "108",
                                "StarName": "華蓋"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "7-19-31-43-55-67-79",
                    "BigLimitedAgeRange": "33 - 42",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "1",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                },
                "KounInfo12": {
                    "KounChih": "11",
                    "VertexKounChih": "11-3-7",
                    "OppositeKounChih": "5",
                    "KounKan": "3",
                    "KounKanChihName": "丁亥",
                    "KounID": "4",
                    "KounName": "事業",
                    "StarType1": {
                        "StarTypeID": "1",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "10",
                                "StarName": "天相",
                                "Bright": "3",
                                "BrightName": "得",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType2": {
                        "StarTypeID": "2",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "42",
                                "StarName": "鈴星",
                                "Bright": "4",
                                "BrightName": "利",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType3": {
                        "StarTypeID": "3",
                        "StarTotals": "2",
                        "Star": [
                            {
                                "ID": "60",
                                "StarName": "天德",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }, {
                                "ID": "43",
                                "StarName": "天官",
                                "Bright": "",
                                "BrightName": "",
                                "FourHaw": "",
                                "FourHawName": ""
                            }
                        ]
                    },
                    "StarType6": {
                        "StarTypeID": "6",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "66",
                                "StarName": "長生"
                            }
                        ]
                    },
                    "StarType7": {
                        "StarTypeID": "7",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "81",
                                "StarName": "小耗"
                            }
                        ]
                    },
                    "StarType8": {
                        "StarTypeID": "8",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "101",
                                "StarName": "天德"
                            }
                        ]
                    },
                    "StarType9": {
                        "StarTypeID": "9",
                        "StarTotals": "1",
                        "Star": [
                            {
                                "ID": "109",
                                "StarName": "劫煞"
                            }
                        ]
                    },
                    "SmallLimitedAgeList": "8-20-32-44-56-68-80",
                    "BigLimitedAgeRange": "43 - 52",
                    "isSmallLimited": "0",
                    "isBigLimited": "0",
                    "isFlowYear": "0",
                    "isFlowMonth": "0",
                    "isFlowDay": "0",
                    "isFlowHour": "0"
                }
            }
        }
    };
    res.json(json);
    res.end();
});

app.listen(process.env.PORT || 3000);