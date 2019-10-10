
            try {
                var pv = new MPing.inputs.PV(); // 构造pv 请求,可选参数为pageId，可以为数字、字符串、或者{page_id: "1212"}；如埋点方案未要求或者未提到pageid，请忽略，即 var pv = new MPing.inputs.PV();
                pv.page_param = 'B';
                var mping = new MPing(); // 构造上报实例
                mping.send(pv); // 上报pv
            } catch (e) {}
        