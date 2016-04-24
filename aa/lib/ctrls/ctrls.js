/// <reference path="../app.js" />
mainModule.controller("navbarCtrl", ["$scope", function ($scope) {
    $scope.topMenu = [
   {
       name: "网站首页",
       url: "#/main",
       child: null
   },
   {
       name: "关于我们",
       url: "#/",
       child: [
           { name: "产品优势", url: "#/" },
           { name: "企业荣誉", url: "#/" },
           { name: "公司环境", url: "#/" },
           { name: "企业文化", url: "#/" }

       ]
   },
   {
       name: "产品中心",
       url: "#/",
       child: [
           { name: "仪器类", url: "#/" },
           { name: "色谱柱", url: "#/" },
           { name: "进样瓶", url: "#/" },
           { name: "配件类", url: "#/" },
           { name: "滤器类", url: "#/" },
           { name: "气相色谱仪", url: "#/" }
       ]
   },
   {
       name: "新闻中心",
       url: "#/newsList/1",
       child:null
       //child: [
       //     { name: "恒信新闻", url: "#/" },
       //    { name: "行业动态", url: "#/" },
       //    { name: "恒信公告", url: "#/" }
       //]
   },
   {
       name: "招贤纳士",
       url: "#/jobsList/1",
       child: null
   },
   {
       name: "联系我们",
       url: "#/",
       child: null
   }
    ];
}]);