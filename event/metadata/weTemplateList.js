module.exports = [
    {
        "templateName":"系统基础模版",
        "weKey":"we-base-ac874f09-1909-872d-0adc-b2d55fad5b43",
        "groupCount":1,
        "pageCount":1,
        "cardCount":9,
        "templatePoint":'[{"pointId":103,"pointName":"心跳检测","pointDesc":"心跳检测点位，包含停留时间","weType":1,"replacePointIdKey":"HeartBeatPointId","fieldList":[{"fieldName":"stayTime","fieldAlias":"停留时长","fieldType":"FLOAT","fieldLength":10,"fieldDesc":"停留时长","groupByFlag":0,"weType":0}]},{"pointId":108,"pointName":"浏览量","pointDesc":null,"weType":0,"replacePointIdKey":null,"fieldList":[{"fieldName":"shenFenBiaoShi","fieldAlias":"身份标识","fieldType":"VARCHAR","fieldLength":60,"fieldDesc":"标识用户唯一性：身份证，手机号，userId","groupByFlag":0,"weType":0},{"fieldName":"shouJiHao","fieldAlias":"手机号","fieldType":"VARCHAR","fieldLength":11,"fieldDesc":"手机号码","groupByFlag":0,"weType":0},{"fieldName":"yeMianDiZhi","fieldAlias":"页面地址","fieldType":"VARCHAR","fieldLength":200,"fieldDesc":"页面访问的url, 尽量不要携带参数","groupByFlag":0,"weType":0}]},{"pointId":124,"pointName":"注册信息","pointDesc":null,"weType":0,"replacePointIdKey":null,"fieldList":[{"fieldName":"shenFenBiaoShi","fieldAlias":"身份标识","fieldType":"VARCHAR","fieldLength":60,"fieldDesc":"标识用户唯一性：身份证，手机号，userId","groupByFlag":0,"weType":0},{"fieldName":"shouJiHao","fieldAlias":"手机号","fieldType":"VARCHAR","fieldLength":11,"fieldDesc":"手机号码","groupByFlag":0,"weType":0},{"fieldName":"youXiang","fieldAlias":"邮箱","fieldType":"VARCHAR","fieldLength":50,"fieldDesc":"用户邮箱","groupByFlag":0,"weType":0}]},{"pointId":125,"pointName":"下单信息","pointDesc":null,"weType":0,"replacePointIdKey":null,"fieldList":[{"fieldName":"shenFenBiaoShi","fieldAlias":"身份标识","fieldType":"VARCHAR","fieldLength":60,"fieldDesc":"标识用户唯一性：身份证，手机号，userId","groupByFlag":0,"weType":0},{"fieldName":"dingDanHao","fieldAlias":"订单号","fieldType":"VARCHAR","fieldLength":50,"fieldDesc":"订单编号","groupByFlag":0,"weType":0},{"fieldName":"dingDanZongE","fieldAlias":"订单总额","fieldType":"INT","fieldLength":10,"fieldDesc":"订单的总价格","groupByFlag":0,"weType":0}]},{"pointId":126,"pointName":"页面访问信息","pointDesc":"页面浏览信息，用于归类的","weType":0,"replacePointIdKey":null,"fieldList":[{"fieldName":"shenFenBiaoShi","fieldAlias":"身份标识","fieldType":"VARCHAR","fieldLength":60,"fieldDesc":"标识用户唯一性：身份证，手机号，userId","groupByFlag":0,"weType":0},{"fieldName":"fangWenDiZhi","fieldAlias":"访问地址","fieldType":"VARCHAR","fieldLength":100,"fieldDesc":"用于归类的页面访问地址","groupByFlag":1,"weType":0}]}]',
        "detail":{
            "type":1,
            "projectId":"event10324",
            "groupList":[
                {
                    "id":325,
                    "name":"默认分组",
                    "type":2,
                    "sort":null,
                    "pageList":[
                        {
                            "id":326,
                            "name":"默认页面",
                            "type":3,
                            "sort":null,
                            "cardList":[
                                {
                                    "id":319,
                                    "name":"心跳次数",
                                    "type":6,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":0,
                                    "chartTableShow":"chart",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":30,
                                    "calcRule":"[{\"calcName\":\"数量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"0\"},\"pointId\":103,\"queryCriteria\":[]},\"calcNameKey\":\"shuliang20230428103201\"}]"
                                },
                                {
                                    "id":322,
                                    "name":"实时流量",
                                    "type":6,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":0,
                                    "chartTableShow":"chart",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"全站流量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"0\"},\"pointId\":108,\"queryCriteria\":[]},\"calcNameKey\":\"quanzhanliuliang20230429152725\"},{\"calcName\":\"全站日活\",\"unit\":\"人\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[]},\"calcNameKey\":\"quanzhanrihuo20230429152725\"},{\"calcName\":\"注册人数\",\"unit\":\"人\",\"prePoint\":{\"calcField\":{\"fieldName\":\"shenFenBiaoShi\",\"isRepeat\":\"1\"},\"pointId\":124,\"queryCriteria\":[]},\"calcNameKey\":\"dingdanliang20230429152725\"},{\"calcName\":\"应用平均使用时间\",\"unit\":\"s\",\"prePoint\":{\"calcField\":{\"fieldName\":\"stayTime\",\"isRepeat\":\"2\"},\"pointId\":103,\"queryCriteria\":[]},\"calcNameKey\":\"apppingjunshiyongshijian20230429195332\",\"endPoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[]},\"calcType\":\"/\"}]"
                                },
                                {
                                    "id":331,
                                    "name":"注册漏斗图",
                                    "type":5,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":0,
                                    "chartTableShow":"trend",
                                    "togetherList":"",
                                    "refreshFrequency":null,
                                    "calcRule":"[{\"calcName\":\"网站访问人数\",\"calcNameKey\":\"wangzhanfangwenrenshu20230429205734\",\"prePoint\":{\"pointId\":108,\"calcField\":{\"fieldIndex\":0,\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\",\"andOr\":\"a\"},\"queryCriteria\":[]}},{\"calcName\":\"注册人数\",\"calcNameKey\":\"zhucerenshu20230429205734\",\"prePoint\":{\"pointId\":124,\"calcField\":{\"fieldIndex\":1,\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\",\"andOr\":\"a\"},\"queryCriteria\":[]}},{\"calcName\":\"下单人数\",\"calcNameKey\":\"xiadanrenshu20230429213227\",\"prePoint\":{\"pointId\":125,\"calcField\":{\"fieldIndex\":2,\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\",\"andOr\":\"a\"},\"queryCriteria\":[]}}]"
                                },
                                {
                                    "id":333,
                                    "name":"页面访问量堆叠图",
                                    "type":4,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":1,
                                    "chartTableShow":"chart",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"PV量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"fangWenDiZhi\",\"isRepeat\":\"4\"},\"pointId\":126,\"queryCriteria\":[]},\"calcNameKey\":\"pvliang20230429211601\"}]"
                                },
                                {
                                    "id":334,
                                    "name":"页面访问量占比",
                                    "type":4,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":1,
                                    "chartTableShow":"chart-pie",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"数量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"fangWenDiZhi\",\"isRepeat\":\"4\"},\"pointId\":126,\"queryCriteria\":[]},\"calcNameKey\":\"shuliang20230429211653\"}]"
                                },
                                {
                                    "id":335,
                                    "name":"每个页面访问人数",
                                    "type":2,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":0,
                                    "chartTableShow":"chart",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"首页\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home1.html\"}]},\"calcNameKey\":\"shouyefangwenrenshu20230429221139\"},{\"calcName\":\"产品\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home2.html\"}]},\"calcNameKey\":\"chanpinyefangwenrenshu20230429221139\"},{\"calcName\":\"价格\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home3.html\"}]},\"calcNameKey\":\"jiegeyefangwenrenshu20230429221139\"},{\"calcName\":\"案例\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home4.html\"}]},\"calcNameKey\":\"anli20230429221139\"},{\"calcName\":\"文档\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home5.html\"}]},\"calcNameKey\":\"wendang20230429221139\"},{\"calcName\":\"版本\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home6.html\"}]},\"calcNameKey\":\"banben20230429221139\"},{\"calcName\":\"关于\",\"prePoint\":{\"calcField\":{\"fieldName\":\"weCustomerKey\",\"isRepeat\":\"1\"},\"pointId\":108,\"queryCriteria\":[{\"fieldName\":\"yeMianDiZhi\",\"rule\":\"等于\",\"value\":\"home7.html\"}]},\"calcNameKey\":\"guanyu20230429221139\"}]"
                                },
                                {
                                    "id":336,
                                    "name":"注册人数、下单转化率",
                                    "type":3,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":0,
                                    "chartTableShow":"chart",
                                    "togetherList":"",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"注册人数\",\"unit\":\"人\",\"prePoint\":{\"calcField\":{\"fieldName\":\"shenFenBiaoShi\",\"isRepeat\":\"1\"},\"pointId\":124,\"queryCriteria\":[]},\"calcNameKey\":\"zhucerenshu20230429221958\"},{\"calcName\":\"注册成功率\",\"unit\":\"%\",\"prePoint\":{\"calcField\":{\"fieldName\":\"shenFenBiaoShi\",\"isRepeat\":\"1\"},\"pointId\":125,\"queryCriteria\":[]},\"endPoint\":{\"calcField\":{\"fieldName\":\"shenFenBiaoShi\",\"isRepeat\":\"1\"},\"pointId\":124,\"queryCriteria\":[]},\"calcType\":\"/\",\"calcNameKey\":\"zhucechenggonglu20230429221958\"}]"
                                },
                                {
                                    "id":337,
                                    "name":"下单量",
                                    "type":1,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":0,
                                    "chartTableShow":"chart",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"数量\",\"unit\":\"个\",\"prePoint\":{\"calcField\":{\"fieldName\":\"dingDanHao\",\"isRepeat\":\"1\"},\"pointId\":125,\"queryCriteria\":[]},\"calcNameKey\":\"shuliang20230429222054\"}]"
                                },
                                {
                                    "id":338,
                                    "name":"页面访问量图表",
                                    "type":4,
                                    "pageId":326,
                                    "conversionCycle":1,
                                    "groupByFlag":1,
                                    "chartTableShow":"table",
                                    "togetherList":"total,average,yoyRatio,ringRatio",
                                    "refreshFrequency":0,
                                    "calcRule":"[{\"calcName\":\"PV量\",\"unit\":\"次\",\"prePoint\":{\"calcField\":{\"fieldName\":\"fangWenDiZhi\",\"isRepeat\":\"4\"},\"pointId\":126,\"queryCriteria\":[]},\"calcNameKey\":\"pvliang20230429222200\"}]"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
]