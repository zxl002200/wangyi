var app = angular.module("app", ["ui.router"]);
app.controller("my", function ($scope,$http,$timeout) {
    $http.get("data.json").then(function (data) {
        // console.log(data.data);
        $scope.obj1=data.data.dom1_a;
        $scope.obj2=data.data.dom1_b;
        $scope.obj3=data.data.dom1_c;
        $scope.obj4=data.data.dom1_d;
    })
    $timeout(function(){
        $scope.myswiper=new Swiper(".swiper-container",{
        	loop:true,
        	autoplay:2000,
        	autoplayDisableOnInteraction:false,
            pagination:".swiper-pagination",
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        })
        var myiscoll=new IScroll("section",{
            probeType:3,
            // mouseWheel:true,
            // momentum:false
        });
        var count=0;
        myiscoll.on("scroll",function(){
            if(myiscoll.y>50){
                $("#load1").css("display","block")
            }
            if(myiscoll.y<myiscoll.maxScrollY-50){
                count=1
            }
        })
        myiscoll.on("scrollEnd",function(){
            $("#load1").css("display","none");
            if(count==1){
                $(".div5").css("display","block");
                myiscoll.refresh();
            }
        })

    },500);
});
//漏油
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/one.yi')
    $stateProvider.state("one", {
        url: "/one",
        templateUrl: "dom1.html"
    }).state("one.yi", {
        url: "/one.yi",
        templateUrl: "dom1_a.html",
        controller:"my"
    }).state("one.er", {
        url: "/one.er",
        templateUrl: "dom1_b.html",
        controller:"my"
    }).state("one.san", {
        url: "/one.san",
        templateUrl: "dom1_c.html",
        controller:"my"
    }).state("one.si", {
            url: "/one.si",
            templateUrl: "dom1_d.html",
            controller:"my"
        })
        .state("two", {
            url: "/two",
            template: '<h2>eeeeee</h2>'
        })
        .state("three", {
            url: "/three",
            template: '<h2>哈哈哈哈</h2>'
        })
        .state("four", {
            url: "/four",
            template: '<h2>见面</h2>'
        })
})

