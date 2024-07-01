(function (lib, img, cjs) {

var p; // shortcut to reference prototypes


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,257);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,254);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,114);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-12,-11.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-11.8,24,24);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-12.3,-11.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-11.3,24,24);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-12,-11.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-11.9,24,24);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-12,-11.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-11.5,24,24);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-12,-12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text= new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt01", width:"104",  expand:"left"}); 	
	//this.text = new cjs.Text("ID_txt01;w:104;a:r;e:l", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 176;
	this.text.setTransform(20,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.4,19);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text= new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02", width:"600",  expand:"up"}); 	
	//this.text = new cjs.Text("ID_txt02;w:600;a:l;e:up;bg:white", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 176;
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.4,19);


(lib.bubble02 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("BUBBLE",{width:"109",compId:"ID_txt04" ,align:"left",tailPosition:"7",tailFlip:"0"});
	//this.text = new cjs.Text("ID_txt04;w:109.2;h:80;a:l;tp:7;tf:0", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 176;
	this.text.setTransform(20,-30);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.4,19);


(lib.bubble01 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("BUBBLE",{width:"85",compId:"ID_txt03" ,align:"left",tailPosition:"5",tailFlip:"0"});
	//this.text = new cjs.Text("ID_txt03;w:85;h:45;a:l;tp:7;tf:0", "11px 'CiscoSans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 176;
	this.text.setTransform(-45,-15);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,180.4,19);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_394 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(394).call(this.frame_394).wait(1));

	// text
	this.instance = new lib.Symbol2();
	this.instance.setTransform(101.6,53.5,1,1,0,0,0,52,8.5);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(240,366.9,1,1,0,0,0,300,8.5);

	this.text = new cjs.Text("SRV2", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(432,280.7);

	this.text_1 = new cjs.Text("SRV1", "bold 11px 'CiscoSans'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(22,161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text},{t:this.instance_1},{t:this.instance}]}).wait(395));

	// bubble2
	this.instance_2 = new lib.bubble02();
	this.instance_2.setTransform(315.5,280.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(389).to({x:409.5,y:218.9,alpha:1},0).wait(6));

	// bubble01
	this.instance_3 = new lib.bubble01();
	this.instance_3.setTransform(31.8,123,1,1,0,0,0,35.5,22.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({x:30.8,y:101,alpha:1},0).wait(392));

	// icons
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(1.8,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(395));

	// 72
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(192.4,166);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:303.9,y:166.2},50).to({x:378.9,y:98.3},49).wait(296));

	// 219
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.setTransform(192.8,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:192.7,y:165.4},50).to({x:304.1,y:165.6},49).to({x:240.9,y:78.8},50).wait(246));

	// 87
	this.instance_7 = new lib.Tween9("synched",0);
	this.instance_7.setTransform(192.6,62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:192.4,y:165.9},99).to({x:303.9,y:166.1},50).to({x:225,y:285.7},72).wait(174));

	// 175
	this.instance_8 = new lib.Tween3("synched",0);
	this.instance_8.setTransform(192.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:61.3},50).to({y:90},49).to({x:192.4,y:165.6},50).to({x:303.9,y:165.8},85).to({x:378.9,y:98.3},61).wait(100));

	// 121
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.setTransform(30.3,171.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:110.9,y:104.8},64).to({x:192.4,y:166.1},41).to({x:192.6,y:40.7},1).to({x:192.4,y:166.1},91).to({startPosition:0},6).to({x:303.9,y:166.3},70).to({x:358,y:243.5},64).to({x:426.8,y:292.2},52).wait(6));

	// queue
	this.instance_10 = new lib.Bitmap8();
	this.instance_10.setTransform(178.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(395));

	// Lines
	this.instance_11 = new lib.Bitmap2();
	this.instance_11.setTransform(38.5,46.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(395));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,22.5,555.9,354.9);


(lib.Main = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(104.5,39.6);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(44.5,62.1,555.9,354.9);


// stage content:
(lib.media_1125A = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(384.5,307.1,555.9,354.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;