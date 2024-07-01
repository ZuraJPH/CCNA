loadScript("../../../common/scripts/swfobject.js", registerSWF); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(_container, _id) {
	
   highlightedBtnSrc = ['media_4.2.2.6.png'];

   var imgElement = document.createElement("div");
    imgElement.style.cssText = "position:absolute;left:0px;top:0px";
   imgElement.id = "domElement_img";
   imgElement.innerHTML = "<img id='imgHighlighted' height='490' width='680' src="+highlightedBtnSrc[0]+"></img>";
   console.log("created");
   $("#imgHighlighted").css({
  'position': 'absolute',
  'left': '100px'
});
 
   $("#htmlMedia").append(imgElement);
   
   var domElement = new createjs.DOMElement(htmlElement);

});
