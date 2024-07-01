
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(slideContainer,id){
var c=document.getElementById("canvas");
c.height=490;
c.width=680;
});