
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);


(slideViewDidLoad = function(container,_id)
{
	if(_id == 1)
	{	
				
		var textElement = getCJSElement("TEXTBOX",{x:"-5",y:"255",width:"438",height:"161",titleId:"ID_btn0"+1+"_title",bodyId:"ID_btn0"+1+"_body",animated:"0",visible:"1"});
		container.addChild(textElement);	
			
		$("td").each(function(i) 
		{			
    		$("#td"+i).click(function() 
			{
				restore();
				$("#td"+i).removeClass("tdFill");
      			$("#td"+i).addClass("tdOver");
				initSlide(i);
			});
	  	});		
		function initSlide(n)
		{
			textElement.visible = true;
			if(n<10)n="0"+n;
			textElement.setTitleId("ID_btn"+n+"_title");
			textElement.setBodyId("ID_btn"+n+"_body");	
		}
			
		function restore()
		{
			
			$("td").each(function(i) 
			{
				$("#td"+i).removeClass("tdOver");
				$("#td"+i).addClass("tdFill");
			});
				
		}
	}
});

