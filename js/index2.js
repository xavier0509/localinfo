
console.log("分辨率高:"+window.screen.height);
console.log("分辨率宽:"+window.screen.width);

var data={
    "A43":{"info":[{"title":"屏幕参数","vaule":["LGD IPS硬屏分辨率 1920*1080视角178° LGD IPS硬屏分辨率 1920*1080视角178°LGD IPS硬屏分辨率 1920*1080视角178°"]},{"title":"存储","vaule":["1GB DDR3闪存","4GB eMMC高速闪存"]},{"title":"音频","vaule":["Dolby+环绕声"]},{"title":"处理器","vaule":["CPU:Cortex A7 1.2G 4核","GPU:Mali450 4核","VPU:视频处理器2核"]},{"title":"无线","vaule":["内置WIFI (802.11n/b/g)"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享"]},{"title":"屏幕参数","vaule":["LGD IPS硬屏","分辨率 1920*1080","视角178°"]},{"title":"存储","vaule":["1GB DDR3闪存","4GB eMMC高速闪存"]},{"title":"音频","vaule":["Dolby+环绕声"]},{"title":"处理器","vaule":["CPU:Cortex A7 1.2G 4核","GPU:Mali450 4核","VPU:视频处理器2核"]},{"title":"无线","vaule":["内置WIFI (802.11n/b/g)"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享"]},{"title":"屏幕参数","vaule":["LGD IPS硬屏","分辨率 1920*1080","视角178°"]},{"title":"存储","vaule":["1GB DDR3闪存","4GB eMMC高速闪存"]},{"title":"音频","vaule":["Dolby+环绕声"]},{"title":"处理器","vaule":["CPU:Cortex A7 1.2G 4核","GPU:Mali450 4核","VPU:视频处理器2核"]},{"title":"无线","vaule":["内置WIFI (802.11n/b/g)"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享"]},{"title":"屏幕参数","vaule":["LGD IPS硬屏","分辨率 1920*1080","视角178°"]},{"title":"存储","vaule":["1GB DDR3闪存","4GB eMMC高速闪存"]},{"title":"音频","vaule":["Dolby+环绕声"]},{"title":"处理器","vaule":["CPU:Cortex A7 1.2G 4核","GPU:Mali450 4核","VPU:视频处理器2核"]},{"title":"无线","vaule":["内置WIFI (802.11n/b/g)"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享"]}]},
    "15UEnglish":{"info":[{"title":"Screen","vaule":["4k","Resolution:3840*2160"]},{"title":"DDR","vaule":["RAM:1.5GB Double Channel DDR3"]},{"title":"eMMC","vaule":["4GB eMMC High Speed Flash"]},{"title":"Media","vaule":["H.265、H.264 Hard Decoding","DOLBY、DTS"]},{"title":"Processor","vaule":["CPU:Cortex A53 Quad Core","GPU:Mali450 MP4 4+2Core"]},{"title":"Wireless","vaule":["2.4G、WIFI Hotspot","Single frequency simplex"]},{"title":"TIC","vaule":["Support TV party、Cloud enjoy","AirPlay、AirMirror、DLNA"]}]},
    "A43English":{"info":[{"title":"Screen","vaule":["LGD IPS","Resolution:1920*1080","Visual Angle:178°"]},{"title":"Storage","vaule":["1GB DDR3","4GB eMMC"]},{"title":"Media","vaule":["Dolby+Surround"]},{"title":"Processor","vaule":["CPU:Cortex A7 1.2G Quad Core","GPU:Mali450 Quad Core","VPU:Video Processor Double Core"]},{"title":"Wireless","vaule":["Built-in WIFI(802.11n/b/g)"]},{"title":"Interaction","vaule":["TV Pie,Share among Devices"]}]},
    "15UChinese":{"info":[{"title":"屏幕参数","vaule":["4k","分辨率:3840*2160"]},{"title":"运行存储","vaule":["1.5GB 双通道DDR3"]},{"title":"存储内存","vaule":["4GB eMMC高速闪存"]},{"title":"音视频","vaule":["H.265和H.264硬解码","DOLBY、DTS"]},{"title":"处理器","vaule":["CPU:Cortex A53 4核","GPU:Mali450 MP4 4+2核"]},{"title":"无线","vaule":["2.4GHz单频WiFi、自带热点","单频加工"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享","AirPlay、AirMirror、DLNA"]}]},
    "A43Chinese":{"info":[{"title":"屏幕参数","vaule":["LGD IPS硬屏","分辨率 1920*1080","视角178°"]},{"title":"存储","vaule":["1GB DDR3闪存","4GB eMMC高速闪存"]},{"title":"音频","vaule":["Dolby+环绕声"]},{"title":"处理器","vaule":["CPU:Cortex A7 1.2G 4核","GPU:Mali450 4核","VPU:视频处理器2核"]},{"title":"无线","vaule":["内置WIFI (802.11n/b/g)"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享"]}]},
    "A55Chinese":{"info":[{"title":"屏幕参数","vaule":["LGD 4K IPS硬屏","分辨率 3840*2160"]},{"title":"存储","vaule":["DDR 2GB双通道DDR3","16GB eMMc高速闪存"]},{"title":"音视频","vaule":["H.265、H.264硬解码","DOLBY、DTS2.0"]},{"title":"处理器","vaule":["CPU:四核Cortex A9 1.5G","GPU:八核 Mali450"]},{"title":"无线","vaule":["2.4GHz和5GHz双频WiFi、双收双发","自带热点、蓝牙4.0/2.4G","WiHD 60Hz(需购买配件)"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享","AirPlay、AirMirror"]}]},
    "14UChinese":{"info":[{"title":"屏幕参数","vaule":["4分辨率 3840*2160","±178°广视角","60Hz刷新率"]},{"title":"存储","vaule":["2GBDDR3存储","8GB eMMc高速闪存"]},{"title":"音视频","vaule":["4K解码(H.265、H.264)","4K影院音效、DOLBY、DTS解码","清脆人声、环绕声","悬浮音响"]},{"title":"处理器","vaule":["CPU:四核Cortex A9","GPU:四核 Mali450","VPU:双核Hi-VEngine"]},{"title":"无线","vaule":["蓝牙","Wi-Fi热点","双频wifi（802.11ac/b/g/n）"]},{"title":"多屏互动","vaule":["支持电视派、多屏云享","MHL、Miracast"]},{"title":"img","value":["http://i9.hexunimg.cn/2014-02-11/162035025.jpg","http://anhui.sinaimg.cn/2014/1208/U8364P1276DT20141208171441.jpg"]}]}
    }

var flag = 0;//标志位，0为没有图片
var leftNum;
var rightNum;
var arr = [];//每一项的数目存储到数组中
var leftcount = 0;
var rightcount = 0;

//获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function showInfo() {
    // body...
    console.log("可见宽:"+document.body.clientWidth);
    console.log("可见高:"+document.body.clientHeight);
    var leftTitle = document.getElementById('leftTable');
    var rightTitle = document.getElementById('rightTable');
    model = getQueryString("model");
    chip = getQueryString("chip");
    language = getQueryString("language");
    screen = getQueryString("screen");
    console.log(model);
    console.log(data);
    localinfo = model + language;
    // localinfo = "A43";
    var str = data[localinfo];//该机型的全部信息
    console.log("str:"+str);
    var infoNum = str.info.length;//分类数目
    console.log("infoNum:"+infoNum);

    for (var i = 0; i < infoNum; i++) {
        if (str.info[i].title == "img") {flag = 1};
    };

    if (flag == 0) {
        leftNum = Math.ceil(infoNum/2);//左边分类数目
        console.log("leftNum:"+leftNum);
        rightNum = infoNum - leftNum;//右边分类数目
        console.log("rightNum:"+rightNum);
    }
    else{
        leftNum = Math.ceil((infoNum - 1) /2);//左边分类数目
        console.log("leftNum:"+leftNum);
        rightNum = infoNum - leftNum - 1;//右边分类数目
        console.log("rightNum:"+rightNum);
        document.getElementById("moreInfo").innerHTML = "更多信息";
        for (var i = 0; i < str.info[infoNum - 1].value.length; i++) {
            var img = document.createElement("img");
            img.src = str.info[infoNum - 1].value[i];
            document.getElementById("infoImg").appendChild(img);
        };
        
    }
    
    
    
    //创建左边表格
    for(i = 0; i < leftNum; i++){
        var x=leftTitle.insertRow(i);
        var y=x.insertCell(0);
        var z=x.insertCell(1);
        y.setAttribute("valign","top");
        y.setAttribute("class","title");
        z.setAttribute("class","content");
        y.id = "LT"+i;
        z.id = "LC"+i;
    }
    //创建右边表格
    for(i = 0; i < rightNum; i++){
        var x=rightTitle.insertRow(i);
        var y=x.insertCell(0);
        var z=x.insertCell(1);
        y.setAttribute("valign","top");
        y.setAttribute("class","title");
        z.setAttribute("class","content");
        y.id = "RT"+i;
        z.id = "RC"+i;
    }

    //显示左边参数
    for (var i = 0; i < leftNum; i++) {
        document.getElementById("LT"+i).innerHTML = str.info[i].title;
         for (var j = 0; j < str.info[i].vaule.length; j++) {
            console.log(str.info[i].vaule[j]+"<br/>");
            document.getElementById("LC"+i).innerHTML += str.info[i].vaule[j]+"<br/>";
            if (j == str.info[i].vaule.length-1) {
                document.getElementById("LC"+i).innerHTML += "<br/>";
            }
        };
    } 
    //显示右边参数
    for (var i = 0; i < rightNum; i++) {
        document.getElementById("RT"+i).innerHTML = str.info[i+leftNum].title;
        for (var j = 0; j < str.info[i+leftNum].vaule.length; j++) {
            console.log(str.info[i+leftNum].vaule[j]+"<br/>");
            document.getElementById("RC"+i).innerHTML += str.info[i+leftNum].vaule[j]+"<br/>";
            if (j == str.info[i+leftNum].vaule.length-1) {
                document.getElementById("RC"+i).innerHTML += "<br/>";
            }
        };
    }  
}