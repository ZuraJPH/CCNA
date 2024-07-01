
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
	$("#canvasId").append("<canvas id='childCanvas' width='960' height='356'></canvas>");	
	var childStage = new createjs.Stage(document.getElementById("childCanvas"));	
	var im = new Image();
	
	//Create Flowchart IMAGE component
	im.onload = function()
	{		
		var _img = new createjs.Bitmap(this);
		_img.y = 0;
		_img.x = 12;
		childStage.addChild(_img);
		initSlide();	
	}
	im.src = "4.4.1.3.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide()
	{
		var textArray = [{compId:"ID_txt05",x:"818",y:"72.45",width:"128.4",expand:"up+down",align:"center",size:"11"},
		{compId:"ID_txt01",x:"40",y:"68.45",width:"98.45",expand:"up+down",align:"center",size:"11"},
		{compId:"ID_txt02", x:"287", y:"71.75", width:"86.35", expand:"up+down", align:"center", size:"11"},
		{compId:"ID_txt04", x:"657.8" ,y:"67", width:"88" ,expand:"up+down" ,align:"center" ,size:"11"},
		{compId:"ID_txt03", x:"452.55" ,y:"71.75", width:"92" ,expand:"up+down", align:"center" ,size:"11"},
		{compId:"ID_txt06" ,x:"110.6" ,y:"158.45" ,width:"128.4" ,expand:"up", align:"center" ,size:"11"},
		{compId:"ID_txt07" ,x:"273.55" ,y:"230" ,width:"113.45", expand:"up+down" ,align:"center" ,size:"11"},
		{compId:"ID_txt08", x:"429.55" ,y:"298" ,width:"128.4" ,expand:"left+right" ,align:"center" ,size:"11"},
		{compId:"ID_txt11", x:"163.15" ,y:"60.45" ,width:"50.65" ,expand:"up", align:"left" ,size:"11"},
		{compId:"ID_txt12" ,x:"396.05" ,y:"59" ,width:"47.8" ,expand:"up" ,align:"left" ,size:"11"},
		{compId:"ID_txt13" ,x:"572.95" ,y:"58", width:"45.75" ,expand:"up" ,align:"left" ,size:"11"},
		{compId:"ID_txt14" ,x:"775.1" ,y:"58", width:"48.75", expand:"up" ,align:"left" ,size:"11"},
		{compId:"ID_txt15" ,x:"390.05" ,y:"220", width:"70.2", expand:"up" ,align:"left" ,size:"11"},
		{compId:"ID_txt16" ,x:"228.25" ,y:"218" ,width:"34.8" ,expand:"up" ,align:"right" ,size:"11"},
		{compId:"ID_txt17" ,x:"335.95" ,y:"128.35" ,width:"80.65" ,expand:"right", align:"left" ,size:"11"},
		{compId:"ID_txt18" ,x:"706.7" ,y:"128.35" ,width:"80.65" ,expand:"right" ,align:"left" ,size:"11"},
		{compId:"ID_txt19" ,x:"506.15" ,y:"128.35" ,width:"80.65" ,expand:"right" ,align:"left" ,size:"11"},
		{compId:"ID_txt20" ,x:"54" ,y:"301.45" ,width:"128.4" ,expand:"down" ,align:"left" ,size:"11"},
		{compId:"ID_txt21" ,x:"90" ,y:"10.45" ,width:"80.65" ,expand:"right" ,align:"left" ,size:"11"},
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
});