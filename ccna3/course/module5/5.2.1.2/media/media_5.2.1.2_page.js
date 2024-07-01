function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(control,id){	
		var manifest = [
		{src:"images/_5212.jpg", id:"_5212"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Wan_line.png", id:"Wan_line"}
	];
	return manifest;			
});
(slideViewDidLoad = function(slideContainer,id){
var c=document.getElementById("canvas");
c.height=490;
});