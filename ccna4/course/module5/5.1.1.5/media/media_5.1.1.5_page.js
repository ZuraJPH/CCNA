
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);
var mainMovieClip;

(Animation = function(){
	var manifest = [
		{src:"images/media_6262.png", id:"media_6262"}
	];
	return manifest;			
});
