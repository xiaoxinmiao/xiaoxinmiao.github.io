mainModule
.controller('sideMenuCtrl', function ($scope) {
    $scope.sideMenu = [
        {
            name: "气相色谱仪", url: "#/", child: [
                { name: "检测茶油中6号溶剂的含量", url: "#/" },
                { name: "药品中有机溶剂残留检测", url: "#/" },
                { name: "智能化气相色谱仪", url: "#/" },
                { name: "化妆品中甲醇含量的测定", url: "#/" },
                { name: "化妆品中乙醇含量检测仪", url: "#/" }

                ,
                { name: "气相色谱分析检测环已胺含量", url: "#/" },
                { name: "气相色谱仪测定工业用甲乙酮纯度", url: "#/" },
                { name: "气相色谱法测定工业用苯乙烯中微量苯的含量", url: "#/" },
                { name: "GC2020N乙醇检测色谱仪", url: "#/" },
                { name: "GC2020N气相色谱检测26种农药残留", url: "#/" }
            ], isFocus: false
        },
        {
            name: "变压器油分析检测仪", url: "#/", child: null, isFocus: false
        },
        {
            name: "白酒分析检测仪", url: "#/", child: null, isFocus: false
        },
        {
            name: "液化石油气检测", url: "#/", child: [
                { name: "液化石油气中二甲醚专用气相色谱仪", url: "#/" },
                { name: "液化气分析仪", url: "#/" }
            , { name: "检测焦炉煤气中低含量的萘", url: "#/" }
            ], isFocus: false
        },
        {
            name: "汽油中苯、甲苯的色谱分析", url: "#/", child: null, isFocus: false
        }
        //6
        ,
        {
            name: "血液中酒精含量的检测", url: "#/", child: null, isFocus: false
        }
        ,
        {
            name: "印刷色谱仪", url: "#/", child: null, isFocus: false
        }
        ,
        {
            name: "烟包中VOC含量检测专用色谱仪", url: "#/", child: null, isFocus: false
        }
        ,
        {
            name: "瓶坯中“AA”检测专用色谱仪", url: "#/", child: null, isFocus: false
        }
        ,
        {
            name: "室内环境检测设备", url: "#/", child: null, isFocus: false
        }
        //10
          ,
        {
            name: "残留环氧乙烷（EO）的检测", url: "#/", child: null, isFocus: false
        }
          ,
        {
            name: "全自动顶空进样器", url: "#/", child: null, isFocus: false
        }
          ,
        {
            name: "热解析仪", url: "#/", child: null, isFocus: false
        }
          ,
        {
            name: "气相色谱工作站", url: "#/", child: null, isFocus: false
        }
          ,
        {
            name: "气相色谱仪配套设备", url: "#/", child: [
                { name: "封口钳", url: "#/" },
                { name: "氢气发生器", url: "#/" },
                { name: "静音无油空气泵", url: "#/" },
                { name: "气体采样袋", url: "#/" },
                { name: "氮氢空一体机发生器", url: "#/" },
                { name: "毛细管色谱柱", url: "#/" },
                { name: "顶空瓶顶空垫", url: "#/" }
            ], isFocus: false
        }
        ,
        {
            name: "硫氮分析仪", url: "#/", child: [
                { name: "TS-2000 总硫分析仪", url: "#/" },
                { name: "TN-2000 总氮分析仪", url: "#/" }
            ], isFocus: false
        }
    ];

    $scope.focusItem = function (index) {
        $scope.sideMenu[index].isFocus = true;
    }
    $scope.blurItem = function (index) {
        $scope.sideMenu[index].isFocus = false;
    }
    $scope.meinv = { name: "/sources/images/nav/mm.jpg", qq1: "/sources/images/nav/qq1.png", qq2: "/sources/images/nav/qq2.png" };
})
.controller('showImgCtrl', function ($scope) {
    $scope.imgs = [
                {
                    id: 1,
                    name: "",
                    imgM: "/sources/images/firstPage/s1.jpg",
                    imgL: "/sources/images/firstPage/t1.jpg",
                    isFocus: true
                },
                {
                    id: 2,
                    name: "",
                    imgM: "/sources/images/firstPage/s2.jpg",
                    imgL: "/sources/images/firstPage/t2.jpg",
                    isFocus: false
                },
                {
                    id: 3,
                    name: "",
                    imgM: "/sources/images/firstPage/s3.jpg",
                    imgL: "/sources/images/firstPage/t3.jpg",
                    isFocus: false
                },
                {
                    id: 4,
                    name: "",
                    imgM: "/sources/images/firstPage/s4.jpg",
                    imgL: "/sources/images/firstPage/t4.jpg",
                    isFocus: false
                },
                {
                    id: 5,
                    name: "",
                    imgM: "/sources/images/firstPage/s5.jpg",
                    imgL: "/sources/images/firstPage/t5.jpg",
                    isFocus: false
                },
                {
                    id: 6,
                    name: "",
                    imgM: "/sources/images/firstPage/s6.jpg",
                    imgL: "/sources/images/firstPage/t6.jpg",
                    isFocus: false
                },
                {
                    id: 7,
                    name: "",
                    imgM: "/sources/images/firstPage/s7.jpg",
                    imgL: "/sources/images/firstPage/t7.jpg",
                    isFocus: false
                }
    ];
    $scope.focusItem = function (index) {
        for (var i = 0; i < $scope.imgs.length; i++) {
            $scope.imgs[i].isFocus = false;
        }
        $scope.imgs[index].isFocus = true;
    };
   
    // $scope.blurItem = function (index)
    // {
    //     for (var i = 0; i < $scope.imgs.length; i++) {
    //         $scope.imgs[i].isFocus = true;
    //     }
    //    $scope.imgs[index].isFocus = false;
    //}

})



;