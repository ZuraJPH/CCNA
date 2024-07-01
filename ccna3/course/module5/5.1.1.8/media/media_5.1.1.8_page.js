
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){	
//alert(control)	
		var manifest = [
		{src:"images/_5118.jpg", id:"_5118"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"}
	];
	return manifest;			
});

(slideViewDidLoad = function(slideContainer,id){
var c=document.getElementById("canvas");
c.height=490;
});