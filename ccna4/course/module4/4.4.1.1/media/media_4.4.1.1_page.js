
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

//Function triggers when all the slides/view contents are loaded
(slideViewDidLoad = function(container,id){	
	if(id==1){
		loadFirst();
	}else if(id==2){
		loadSecond();
	}
	function loadFirst(){
	//Create new div with scroll property into root container
	$("#slide_1").append("<div id='canvasId' style='top:60px;left:40px;position:absolute;width:600px;height:400px;overflow-x:auto;'></div>");	
	var canvasDOM = new createjs.DOMElement(document.getElementById("canvasId"));
	canvasDOM.x = 0;
	canvasDOM.y = 10;
	root.addChild(canvasDOM);
	
	//Create new canvas & stage into new div
	$("#canvasId").append("<canvas id='childCanvas' width='855' height='400'></canvas>");	
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
	im.src = "4.4.1.1S1.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide(){
	var textArray = [
		{compId:"ID_s1_txt12", x:"60.9" ,y:"254.45", width:"129", expand:"up+down", align:"center", size:"11",class:"orangeCallOut"},
		{compId:"ID_s1_txt01", x:"25.9" , y:"100.45", width:"134.65", expand:"up+down" ,align:"center", size:"11"},
		{compId:"ID_s1_txt02", x:"217.9", y:"101.45" ,width:"97.75", expand:"up+down", align:"center" ,size:"11"},
		{compId:"ID_s1_txt04", x:"331.85", y:"93", width:"36.5", expand:"up", align:"left", size:"11"},
		{compId:"ID_s1_txt03" ,x:"276.85", y:"149.95" ,width:"36.5", expand:"right" ,align:"left", size:"11"},
		{compId:"ID_s1_txt05", x:"377.85", y:"100.45", width:"97.75", expand:"up+down", align:"center" ,size:"11"},
		{compId:"ID_s1_txt06", x:"401.8", y:"149.95", width:"36.5", expand:"right", align:"left", size:"11"},
		{compId:"ID_s1_txt07", x:"490.8", y:"92", width:"36.5", expand:"up", align:"left", size:"11"},
		{compId:"ID_s1_txt08", x:"546.85", y:"100.45", width:"97.75", expand:"up+down" ,align:"center" ,size:"11"},
		{compId:"ID_s1_txt09", x:"570.8" ,y:"149.95", width:"36.5", expand:"right", align:"left" ,size:"11"},
		{compId:"ID_s1_txt10", x:"658.8", y:"92", width:"36.5", expand:"up", align:"left" ,size:"11"},
		{compId:"ID_s1_txt11", x:"705.85" ,y:"100.45" ,width:"134.65" ,expand:"up+down" ,align:"center" ,size:"11"},
		{compId:"ID_s1_txt13" ,x:"285.85", y:"249", width:"77.7" ,expand:"up", align:"right" ,size:"11"},
		{compId:"ID_s1_txt14", x:"377.9" ,y:"259.5", width:"97.75", expand:"up+down" ,align:"center", size:"11"},
		{compId:"ID_s1_txt15", x:"488.8", y:"249", width:"77.7" ,expand:"up" ,align:"left" ,size:"11"},
		{compId:"ID_s1_txt17", x:"682.8", y:"282.95", width:"115.85" ,expand:"down", align:"center" ,size:"11"},
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
	function loadSecond(){
		
	//Create new div with scroll property into root container
	$("#slide_2").append("<div id='canvasId_' style='top:60px;left:40px;position:absolute;width:600px;height:400px;overflow-x:auto;'></div>");	
	var canvasDOM_ = new createjs.DOMElement(document.getElementById("canvasId_"));
	canvasDOM_.x = 0;
	canvasDOM_.y = 10;
	root.addChild(canvasDOM_);
	
	//Create new canvas & stage into new div
	$("#canvasId_").append("<canvas id='childCanvas_' width='848' height='335'></canvas>");	
	var childStage_ = new createjs.Stage(document.getElementById("childCanvas_"));	
	var im_ = new Image();
	
	//Create Flowchart IMAGE component
	im_.onload = function()
	{		
		var _imgs = new createjs.Bitmap(this);
		_imgs.y = 0;
		_imgs.x = 12;
		childStage_.addChild(_imgs);
		initSlide2();	
	}
	im_.src = "4.4.1.1S2.png";
	
	//Create Flowchart TEXT components using an array
	function initSlide2(){
	var textArray = [
		{compId:"ID_s2_txt12", x:"60.9" ,y:"254.45", width:"129", expand:"up+down", align:"center", size:"11"},
		{compId:"ID_s2_txt01", x:"25.9" , y:"100.45", width:"134.65", expand:"up+down" ,align:"center", size:"11",class:"orangeCallOut"},
		{compId:"ID_s1_txt02", x:"217.9", y:"101.45" ,width:"97.75", expand:"up+down", align:"center" ,size:"11"},
		{compId:"ID_s1_txt04", x:"331.85", y:"93", width:"36.5", expand:"up", align:"left", size:"11"},
		{compId:"ID_s1_txt03" ,x:"276.85", y:"149.95" ,width:"36.5", expand:"right" ,align:"left", size:"11"},
		{compId:"ID_s1_txt05", x:"377.85", y:"100.45", width:"97.75", expand:"up+down", align:"center" ,size:"11"},
		{compId:"ID_s1_txt06", x:"401.8", y:"149.95", width:"36.5", expand:"right", align:"left", size:"11"},
		{compId:"ID_s1_txt07", x:"490.8", y:"92", width:"36.5", expand:"up", align:"left", size:"11"},
		{compId:"ID_s1_txt08", x:"546.85", y:"100.45", width:"97.75", expand:"up+down" ,align:"center" ,size:"11"},
		{compId:"ID_s1_txt09", x:"570.8" ,y:"149.95", width:"36.5", expand:"right", align:"left" ,size:"11"},
		{compId:"ID_s1_txt10", x:"658.8", y:"92", width:"36.5", expand:"up", align:"left" ,size:"11"},
		{compId:"ID_s1_txt11", x:"705.85" ,y:"100.45" ,width:"134.65" ,expand:"up+down" ,align:"center" ,size:"11"},
		{compId:"ID_s1_txt13" ,x:"285.85", y:"249", width:"77.7" ,expand:"up", align:"right" ,size:"11"},
		{compId:"ID_s1_txt14", x:"377.9" ,y:"259.5", width:"97.75", expand:"up+down" ,align:"center", size:"11"},
		{compId:"ID_s1_txt15", x:"488.8", y:"249", width:"77.7" ,expand:"up" ,align:"left" ,size:"11"},
		{compId:"ID_s1_txt17", x:"682.8", y:"282.95", width:"115.85" ,expand:"down", align:"center" ,size:"11"},
];						
		
		//Add each text object into the new stage
		var tComp;				
		for(var i = 0;i<textArray.length;i++)
		{
			textArray[i].div = "canvasId_";
			tComp = getCJSElement("TEXT",textArray[i],"canvasId_");
			childStage_.addChild(tComp);
		}
		
		//Update stage for rendering new Image & Text objects
		update = true;
		childStage_.update();
	}	
	}
	
	
});
