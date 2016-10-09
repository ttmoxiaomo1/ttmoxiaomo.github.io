/**
 * Created by huanghaitao on 2016/10/8.
 */




function calc(){
    var $length=0;
    function getData(event){
        var e = event || window.event;
//获取滚动距离(FF每次滚动 data为3或者-3，其他为120或者-120)
        var data = e.detail || e.wheelDelta;
        $length += data;
        console.log(data,$length);
//当鼠标开始往下滚动时候;隐藏头部
        if(data>0){
            document.getElementById("header").style.top="-80px";
        }
        var $ul= document.getElementsByTagName("ul");
        var obj= document.getElementsByTagName("ul")[0].getElementsByTagName("li");
        var $objlen=obj.length;
        for(var i=0;i<$objlen;i++){
            if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
                obj[i].style.top= (-20)*$length+"px";
            }
            else {
                obj[i].style.top= (1)*$length+"px";

            }
        }

        console.log(obj[0].style.top);
    }
//IE之外的绑定事件方法
    if(document.addEventListener && !document.attachEvent)
    {
        document.addEventListener('mousewheel',getData);
//FF绑定滚动事件
        document.addEventListener('DOMMouseScroll',getData);
    }
//IE
    else if(document.attachEvent && !document.addEventListener){
        document.attachEvent('onmousewheel',getData);
    }else{
        window.onmousewheel = getData;
    }

}

calc();


