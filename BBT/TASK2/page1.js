$(function () {
    var package = Array(2); 
    var catchall = document.cookie; 
    var l1 = catchall.length-1; 
    console.log("这是获取到的cookie" + l1 + "" + catchall); 
    var people = ""; 
    function getname() {
        for (var i = 9; i <= l1; i++) {
            people = people + catchall[i]; 
            console.log(people + "←是people的值" + "______" + catchall[i] + "→是catchall[" + i + "]的值"); 
        }
        // if(people.length>l1){
        //     l1=people.length-l1+1;
        //     for(var i=l1;i<=people.length;i++){
        //         people[i]="";
        //     }
        // }
    }; 
    getname(); 
console.log(people); 
alert("~\(0,<)欢迎" + people + "(> u o)/~"); 

changeImage = function () {
    element = document.getElementById('you'); 
    console.log(element.src); 
    if (element.src.match("11")) {
        element.src = "images/y.jpg"; 
        return; 
    }
    if (element.src.match("y")) {
        element.src = "images/o.jpg"; 
        return; 
    }
    if (element.src.match("o")) {
        element.src = "images/u.jpg"; 
        return; 
    }
    if (element.src.match("u")) {
        element.src = "images/11.jpeg"; 
        return; 
    }
    //点点乐
}

var order = []; 
var allmsg = []; 
var allpeople = []; 
var oldmsg; 
var newmsg; 
var passage = document.createElement("div"); 
var label = document.createElement("label"); 
var compilebox = document.createElement("div"); 
hao = function () {
    var msg = $("#fudu").val(); 
    alert(msg); 
    package = JSON.stringify( {
    people, 
    msg, 
})
$.ajax
( {
    url:"bbs.php", 
    type:"POST", 
    contentTyoe:'application/x-www-form-urlencoded', 
    dataType:"json", 
    data:package, 
    success:function (data) {
            alert(data["errmsg"] + "errcode:[" + data["errcode"] + "]"); 
            showall(people, msg); 
        }
}); 
}

playfudu = function () {
    var hihi = document.getElementById("allmsg"); 
    var guding = document.createElement("div"); 
    guding.id = "cantmove"; hihi.appendChild(guding); 
    $.ajax( {
    url:"show.php", 
    type:"POST", 
    contentTyoe:'application/x-www-form-urlencoded', 
    dataType:"json", 
    data:package, 
    success:function (data) {

        for (var i = 0; i < data.length; i++) {
            order[i] = data[i]["num"]; 
            allpeople[i] = data[i]["fuduji"]; 
            allmsg[i] = data[i]["msg"]; 
            var x = document.createElement("label"); 
            x.innerText = "第"+order[i]+"条留言：";
            guding.appendChild(x); 
            var y = document.createElement("label");
            y.innerText = "复读机："+(allpeople[i]);
            guding.appendChild(y);
            var z = document.createElement("p");
            z.innerText = "说："+(allmsg[i]); 
            guding.appendChild(z); 
        }
        // var json = eval(data);
        // alert(json);
        // json
        // alert(data);
        // allmsg=JSON.parse(data);
        // for (var i = 0; i <= data.length;i++) {
        //     allmsg[i]=data[i];
        //     console.log("allmsg=" + allmsg[i]); 
        // };
        // function jiangju(){
        //     var hihi=document.getElementById("allmsg");
        //     var guding=document.createElement("div");
        //     guding.id="cantmove";
        //     hihi.appendChild(guding);
        //     for(var n=0;n<=order.length;n++){
        //         var x=document.createElement("label");
        //         guding.appendChild(x);
        //         x.innerText=order[n];
        //         var y=document.createElement("label");
        //         y.innerText=(allpeople[n]);
        //         guding.appendChild(y);
        //         var z=document.createElement("p");
        //         z.innerText=(allmsg[n]);
        //         guding.appendChild(z);
        //         console.log(allmsg[n]);
        //     }
        }
        }); 

 }
 


function compile() {
    var msg = $("#fudu").val(); 
    //a=x=people;b=msg=y;
    var newwords = document.createElement("textarea"); 
    newwords.type = "txt"; newwords.cols = "15"; newwords.rows = "12"; 
    newwords.placeholder = "！修改你的话"; 
    newwords.id="new";
    compilebox.appendChild(newwords);


  
    // bibi["people"]=a;
    // bibi["oldmsg"]=b;
    // bibi["newmsg"]=newwords.val();
    var queren = document.createElement("input"); 
    queren.type="submit";queren.value = "确认";
   compilebox.appendChild(queren);
    queren.onclick = function() {
        // 这里执行点击后操作    
        oldmsg = msg; 
        newmsg = $("#new").val(); 
        console.log("newmsg="+newmsg);
         var bibi = JSON.stringify( {
            people, 
            oldmsg, 
            newmsg
        }); 
        yoxi(bibi); 
    }
    function yoxi(bibi){
        $.ajax( {
            url:"compile.php", 
            type:"POST", 
            contentTyoe:'application/x-www-form-urlencoded', 
            dataType:"json", 
            data:bibi, 
            success:function (data) {
                alert("修改成" + data["newmsg"]); }})
    }
}
function delmsg() {
    var msg = $("#fudu").val(); 
    var who = JSON.stringify( {
        people, 
        oldmsg:msg, 
        newmsg:"复读到最后一无所有"
    })
    $.ajax
    ( {
        url:"compile.php", 
        type:"POST", 
        contentTyoe:'application/x-www-form-urlencoded', 
        dataType:"json", 
        data:who, 
        success:function (data) {
            alert(data["newmsg"]); 
                }
            
    }); 
}
// function oooo() {
//     alert("ooooo"); 
// }
function showall() {
    var msg = $("#fudu").val(); 
    var words = document.createTextNode(msg); 
    var br = document.createElement("div"); 
    // var all= 
    console.log("这是你" + "__" + people + "的留言：" + "__________" + msg); 
    label.innerText = "复读机" + ":" + people; 
    var showbox = document.getElementById("showbox"); 
    showbox.appendChild(passage); 
    passage.appendChild(label); 
     passage.appendChild(br); 
   var t = passage.lastChild; 
//    console.log(t)
   t.appendChild(words); 
   passage.appendChild(compilebox); 
   var bianji = document.createElement("input"); 
   bianji.onclick = function() {
       // 这里执行点击后操作
       compile(); 
   }
   var shanchu = document.createElement("input"); 
   shanchu.onclick = function() {
    // 这里执行点击后操作
    delmsg(); 
}
   compilebox.appendChild(bianji); 
   compilebox.appendChild(shanchu); 
//    var huifu=document.createElement("input");
bianji.id = "bianji"; 
   bianji.type = "button"; bianji .value = "编辑"; 
//    document.getElementById("#bianji").onclick=function(){
//        compile(x,y);
//    }
   shanchu.id = "shanchu";
   shanchu.type = "button";shanchu.value="删除";
//    document.getElementById("#bianji").onclick=function(){
//        compile(x,y);
//    }
//    shanchu.type = "submit"; shanchu .value = "删除"; shanchu .onclick=delmsg(x); 

}

})