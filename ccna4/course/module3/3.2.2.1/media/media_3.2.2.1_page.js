loadScript("../../../common/scripts/swfobject.js", registerSWF); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container, _id) {
	if(_id==1)
	{
   highlightedBtnSrc = ['media_3.2.2.1.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#slide_1").append(imgElement);
   $("#imgHighlighted").css({
  'position': 'relative',
  'left': '0px',
  'top' : '0px'
});
 }  
   var domElement = new createjs.DOMElement(htmlElement);

});
