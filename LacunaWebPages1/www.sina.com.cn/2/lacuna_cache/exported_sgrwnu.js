
    //正式数据路径，把这个路径改成404地址可以请求默认数据，测试容错
    leju.conf.url = '//adm.leju.com/get_abp_list/PG_514AC419D66F33';
    //容错数据路径
    leju.conf.defaultUrl = '//staticadm.leju.com/get_abp_list/PG_514AC419D66F33.js';
    //获取数据
    var lejuMedia = leju.getData();
