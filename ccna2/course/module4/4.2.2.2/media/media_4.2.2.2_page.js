
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

var mainMovieClip;

(Animation = function(control,id){	
//alert(control)	
	var manifest = [
		{src:"images/computer.png", id:"computer"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/media_1222.png", id:"media_1222"},
		{src:"images/Server_file.png", id:"Server_file"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"},
		{src:"images/Switch_workgrouppngcopy.png", id:"Switch_workgrouppngcopy"}
	];
	return manifest;			
});

	
	