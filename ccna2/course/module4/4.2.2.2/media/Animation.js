(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,470,400);


// symbols:
(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.media_1222 = function() {
	this.initialize(img.media_1222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Server_file = function() {
	this.initialize(img.Server_file);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,143);


(lib.Switch_workgroup = function() {
	this.initialize(img.Switch_workgroup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,79);


(lib.Switch_workgrouppngcopy = function() {
	this.initialize(img.Switch_workgrouppngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,79);


(lib.slide_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// img
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.Switchworkgroup = function() {
	this.initialize();

	// img
	this.instance = new lib.Switch_workgrouppngcopy();
	this.instance.setTransform(0,-61.9,0.78,0.785);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-61.9,128.8,62);


(lib.Serverfile = function() {
	this.initialize();

	// img
	this.instance = new lib.Server_file();
	this.instance.setTransform(0,-89.9,0.623,0.625);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-89.9,63.5,89.4);


(lib.computer_1 = function() {
	this.initialize();

	// img
	this.instance = new lib.computer();
	this.instance.setTransform(0,-73.9,0.626,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73.9,89.5,74.2);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// icons
	this.text = new cjs.Text("S2", "bold 11px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 34;
	this.text.setTransform(343.6,280.9);

	this.instance = new lib.Switchworkgroup();
	this.instance.setTransform(349.8,277.5,0.396,0.47,0,0,0,64.4,-30.8);

	this.instance_1 = new lib.Serverfile();
	this.instance_1.setTransform(349.8,223.4,0.42,0.42,0,0,0,31.7,-44.7);

	this.instance_2 = new lib.computer_1();
	this.instance_2.setTransform(397.3,318.8,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_3 = new lib.computer_1();
	this.instance_3.setTransform(308.3,325.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_4 = new lib.computer_1();
	this.instance_4.setTransform(432.3,276.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_5 = new lib.computer_1();
	this.instance_5.setTransform(271.3,276.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.text_1 = new cjs.Text("S1", "bold 11px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 34;
	this.text_1.setTransform(109.6,280.9);

	this.instance_6 = new lib.Switchworkgroup();
	this.instance_6.setTransform(115.8,277.5,0.396,0.47,0,0,0,64.4,-30.8);

	this.instance_7 = new lib.Serverfile();
	this.instance_7.setTransform(115.8,223.4,0.42,0.42,0,0,0,31.7,-44.7);

	this.instance_8 = new lib.computer_1();
	this.instance_8.setTransform(162.3,320.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_9 = new lib.computer_1();
	this.instance_9.setTransform(73.3,319.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_10 = new lib.computer_1();
	this.instance_10.setTransform(198.3,276.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_11 = new lib.computer_1();
	this.instance_11.setTransform(37.3,276.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.text_2 = new cjs.Text("S1", "bold 11px Arial", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 35;
	this.text_2.setTransform(109.6,108.9);

	this.instance_12 = new lib.Switchworkgroup();
	this.instance_12.setTransform(115.8,105.5,0.396,0.47,0,0,0,64.4,-30.8);

	this.instance_13 = new lib.Serverfile();
	this.instance_13.setTransform(115.8,48.4,0.42,0.42,0,0,0,31.7,-44.7);

	this.instance_14 = new lib.computer_1();
	this.instance_14.setTransform(158.3,161.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_15 = new lib.computer_1();
	this.instance_15.setTransform(69.3,163.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_16 = new lib.computer_1();
	this.instance_16.setTransform(198.3,104.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.instance_17 = new lib.computer_1();
	this.instance_17.setTransform(37.3,104.3,0.461,0.461,0,0,0,44.7,-39.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.text_2},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.text_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).to({state:[]},319).wait(128));

	// env 13
	this.instance_18 = new lib.envelopeclosedstatic();
	this.instance_18.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(289).to({alpha:1},0).to({x:396.2,y:321},26).to({_off:true},3).wait(129));

	// env 12
	this.instance_19 = new lib.envelopeclosedstatic();
	this.instance_19.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(289).to({alpha:1},0).to({x:308.2,y:326},26).to({_off:true},3).wait(129));

	// env 11
	this.instance_20 = new lib.envelopeclosedstatic();
	this.instance_20.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(289).to({alpha:1},0).to({y:218},26).to({_off:true},3).wait(129));

	// env 10
	this.instance_21 = new lib.envelopeclosedstatic();
	this.instance_21.setTransform(347.2,276,0.432,0.432,0,0,0,1.3,0);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(289).to({alpha:1},0).to({x:431.2},26).to({_off:true},3).wait(129));

	// env 9
	this.instance_22 = new lib.envelopeclosedstatic();
	this.instance_22.setTransform(117.1,274.9,0.432,0.432,0,0,0,1.3,0);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(189).to({alpha:1},0).to({x:119,y:273.1},1).to({x:120.9,y:271.4},1).to({x:122.8,y:269.7},1).to({x:124.7,y:268},1).to({x:126.6,y:266.3},1).to({x:128.6,y:264.7},1).to({x:130.5,y:263},1).to({x:132.5,y:261.4},1).to({x:134.5,y:259.8},1).to({x:136.5,y:258.2},1).to({x:138.5,y:256.6},1).to({x:140.5,y:255},1).to({x:142.6,y:253.5},1).to({x:144.6,y:252},1).to({x:146.7,y:250.5},1).to({x:148.8,y:249},1).to({x:150.9,y:247.5},1).to({x:153.1,y:246.1},1).to({x:155.2,y:244.7},1).to({x:157.4,y:243.3},1).to({x:159.6,y:242},1).to({x:161.8,y:240.6},1).to({x:164,y:239.3},1).to({x:166.3,y:238.1},1).to({x:168.6,y:236.8},1).to({x:170.9,y:235.6},1).to({x:173.2,y:234.4},1).to({x:175.5,y:233.3},1).to({x:177.8,y:232.2},1).to({x:180.2,y:231.1},1).to({x:182.6,y:230.1},1).to({x:185,y:229.1},1).to({x:187.4,y:228.1},1).to({x:189.9,y:227.2},1).to({x:192.3,y:226.4},1).to({x:194.8,y:225.5},1).to({x:197.3,y:224.8},1).to({x:199.8,y:224},1).to({x:202.4,y:223.3},1).to({x:204.9,y:222.7},1).to({x:207.5,y:222.1},1).to({x:210,y:221.6},1).to({x:212.6,y:221.1},1).to({x:215.2,y:220.7},1).to({x:217.9,y:220.3},1).to({x:220.5,y:220},1).to({x:223.1,y:219.7},1).to({x:225.8,y:219.5},1).to({x:228.4,y:219.4},1).to({x:231.1,y:219.3},1).to({x:233.7},1).to({x:236.4},1).to({x:239,y:219.4},1).to({x:241.7,y:219.5},1).to({x:244.3,y:219.8},1).to({x:247,y:220},1).to({x:249.6,y:220.4},1).to({x:252.3,y:220.8},1).to({x:254.9,y:221.2},1).to({x:257.5,y:221.7},1).to({x:260.1,y:222.3},1).to({x:262.7,y:222.9},1).to({x:265.3,y:223.6},1).to({x:267.9,y:224.3},1).to({x:270.4,y:225.1},1).to({x:273,y:226},1).to({x:275.5,y:226.8},1).to({x:278,y:227.8},1).to({x:280.5,y:228.8},1).to({x:283,y:229.8},1).to({x:285.4,y:230.9},1).to({x:287.8,y:232},1).to({x:290.2,y:233.2},1).to({x:292.6,y:234.4},1).to({x:295,y:235.6},1).to({x:297.3,y:236.9},1).to({x:299.6,y:238.2},1).to({x:301.9,y:239.6},1).to({x:304.2,y:240.9},1).to({x:306.5,y:242.4},1).to({x:308.7,y:243.8},1).to({x:310.9,y:245.3},1).to({x:313.1,y:246.8},1).to({x:315.3,y:248.3},1).to({x:317.4,y:249.9},1).to({x:319.5,y:251.5},1).to({x:321.6,y:253.1},1).to({x:323.7,y:254.8},1).to({x:325.8,y:256.4},1).to({x:327.8,y:258.1},1).to({x:329.8,y:259.8},1).to({x:331.8,y:261.5},1).to({x:333.8,y:263.3},1).to({x:335.8,y:265.1},1).to({x:337.7,y:266.8},1).to({x:339.6,y:268.6},1).to({x:341.6,y:270.5},1).to({x:343.4,y:272.3},1).to({x:345.3,y:274.2},1).to({x:347.2,y:276},1).to({x:344.2},1).to({x:341.3},1).to({x:338.3},1).to({x:335.3},1).to({x:332.4},1).to({x:329.4},1).to({x:326.4},1).to({x:323.5},1).to({x:320.5},1).to({x:317.6},1).to({x:314.6},1).to({x:311.6},1).to({x:308.7},1).to({x:305.7},1).to({x:302.8},1).to({x:299.8},1).to({x:296.8},1).to({x:293.9},1).to({x:290.9},1).to({x:287.9},1).to({x:285},1).to({x:282},1).to({x:279.1},1).to({x:276.1},1).to({x:273.1},1).to({x:270.2},1).wait(2).to({_off:true},1).wait(129));

	// env 8
	this.instance_23 = new lib.envelopeclosedstatic();
	this.instance_23.setTransform(115.8,273.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(165).to({alpha:1},0).to({x:196.8,alpha:0},24).to({_off:true},130).wait(128));

	// env 7
	this.instance_24 = new lib.envelopeclosedstatic();
	this.instance_24.setTransform(115.8,273.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(165).to({alpha:1},0).to({x:34.8,alpha:0},24).to({_off:true},130).wait(128));

	// env 6
	this.instance_25 = new lib.envelopeclosedstatic();
	this.instance_25.setTransform(115.8,273.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(165).to({alpha:1},0).to({x:161.8,y:320.4,alpha:0},24).to({_off:true},130).wait(128));

	// envelope5
	this.instance_26 = new lib.envelopeclosedstatic();
	this.instance_26.setTransform(115.8,215.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(135).to({alpha:1},0).to({y:273.4},20).wait(10).to({x:72.8,y:319.4,alpha:0},24).to({_off:true},130).wait(128));

	// envelope4
	this.instance_27 = new lib.envelopeclosedstatic();
	this.instance_27.setTransform(115.8,101.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(44).to({alpha:1},0).to({x:197.8},45).wait(2).to({alpha:0},0).to({_off:true},228).wait(128));

	// envelope3
	this.instance_28 = new lib.envelopeclosedstatic();
	this.instance_28.setTransform(115.8,101.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(44).to({alpha:1},0).to({x:36.8},45).wait(2).to({alpha:0},0).to({_off:true},228).wait(128));

	// envelope2
	this.instance_29 = new lib.envelopeclosedstatic();
	this.instance_29.setTransform(115.8,101.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(44).to({alpha:1},0).to({x:157.8,y:161.4},45).wait(2).to({alpha:0},0).to({_off:true},228).wait(128));

	// envelope1
	this.instance_30 = new lib.envelopeclosedstatic();
	this.instance_30.setTransform(115.8,40.4,0.432,0.432,0,0,0,1.3,0);
	this.instance_30.alpha = -1;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({alpha:1},5).to({y:101.4},30).wait(9).to({x:68.8,y:160.4},45).wait(2).to({alpha:0},0).to({_off:true},228).wait(128));

	// curve lline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AyCEbQSoxtReRt");
	this.shape.setTransform(231.6,247.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},319).wait(128));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AR1NUQAHAHAHAHIAOgOgASRNUIAAomASRNUIMgAAAbHWJIo2o1A+wtiIMfAAIAAomAqTllIn+n9Io1I1AyREuIAAImIMgAAApbWJIo2o1Io1I1A+wNUIMfAAAyRtiIMgAAAFyNUIMDAAASDNiIonIn");
	this.shape_1.setTransform(233,190.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},319).wait(128));

	// bg
	this.instance_31 = new lib.media_1222();
	this.instance_31.setTransform(1.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31}]}).wait(447));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;