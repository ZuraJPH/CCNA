
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(){	
	
	//Create new div with scroll property into root container
	$("#commonMediaText").append("<div id='canvasId' style='top:50px;left:40px;position:absolute;width:600px;height:450px;overflow-x:auto;'>      </div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='1455' height='356'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 10;
		_img.x = 12;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "media_4.4.1.4.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt01", x:"45", y:"76", width:"90", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt02", x:"94", y:"20", width:"34.2",  align:"left",expand:"right", size:"11" },
						{compId:"ID_txt03", x:"164", y:"70", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt04", x:"40", y:"263", width:"132.6", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt05", x:"232", y:"79", width:"90", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt07", x:"344", y:"70", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt08", x:"282", y:"137", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt09", x:"200", y:"221", width:"134.6", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt10", x:"408", y:"79", width:"90", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt11", x:"525", y:"70", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt12", x:"463", y:"137", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt15", x:"705", y:"70", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt16", x:"643", y:"137", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt13", x:"591", y:"79", width:"90", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt14", x:"490", y:"224", width:"90", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt17", x:"450", y:"210", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt18", x:"611", y:"210", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt19", x:"784", y:"79", width:"76.4", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt20", x:"895", y:"70", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt21", x:"798", y:"137", width:"34.2", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt22", x:"965", y:"79", width:"83.4", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt23", x:"1075", y:"70", width:"38.15", expand:"right", align:"left", size:"11" },
						{compId:"ID_txt24", x:"1007", y:"137", width:"46.2", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt25", x:"1164", y:"79", width:"75.3", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt26", x:"1259", y:"70", width:"38.15", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt27", x:"1193", y:"137", width:"46.2", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt28", x:"940", y:"305", width:"128.6", expand:"up+down", align:"center", size:"11" },
						{compId:"ID_txt29", x:"1325", y:"83", width:"120.6", expand:"up+down", align:"center", size:"11" },
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
		//update = true;
		childStage.update();
	}	
});