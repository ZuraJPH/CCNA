
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(container,id){	
	
	if(id ==2)
	{
	//Create new div with scroll property into root container
	$("#slide_2").append("<div id='canvasId' style='top:0px;left:60px;position:absolute;width:545px;height:420px;overflow-y:auto;'>      </div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 50.9;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='480' height='554'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 50.9;
		_img.x = 138;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "media_8.1.1.4B.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [
		{compId:"ID_s2_txt01",x:"140.6",y:"20",width:"392.6",expand:"down",align:"left",size:"12"},
		{compId:"ID_s2_txt03",x:"20",y:"73.75",width:"89.15",expand:"up",align:"left",size:"10",bold:1},
		{compId:"ID_s2_txt05", x:"140.60", y:"142.3", width:"392", expand:"down", align:"left", size:"10"},
		
		{compId:"ID_s2_txt07",x:"140.60",y:"170",width:"392.6",expand:"down",align:"left",bold:1},
		{compId:"ID_s2_txt04",x:"20",y:"220",width:"89.15",expand:"up",align:"center",size:"10",bold:1},
		{compId:"ID_s2_txt06", x:"140.60", y:"280", width:"392", expand:"down", align:"left", size:"10"},
		
		{compId:"ID_s2_txt02",x:"140",y:"300",width:"392",expand:"down",align:"left",bold:1,size:"10"},
		{compId:"ID_s2_txt09",x:"20",y:"350",width:"89.15",expand:"up",align:"right",size:"10",bold:1},
		{compId:"ID_s2_txt11", x:"140", y:"400", width:"392", expand:"down", align:"left", size:"10"},
		
		{compId:"ID_s2_txt08",x:"140",y:"423.8",width:"392",expand:"down",align:"left",bold:1},
		{compId:"ID_s2_txt10",x:"20",y:"480",width:"89.15",expand:"up",align:"right",size:"10",bold:1},
		{compId:"ID_s2_txt12", x:"140", y:"530.4", width:"392", expand:"down", align:"left", size:"10"},
	];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId");
			childStage.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage.update();
	}	
	}
});