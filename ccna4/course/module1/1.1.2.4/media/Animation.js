(function (lib, img, cjs) {

var p; // shortcut to reference prototypes





// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,352,241);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,221);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("BUBBLE",{width:"85",compId:"ID_txt05",size:"11" ,align:"left",tailPosition:"6",tailFlip:"1"});
	//this.text = new cjs.Text("ID_txt05,w:85,h:45,a:l,t_p:6", "bold 11px 'Courier New'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(10,2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,16.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text = getCJSElement("BUBBLE",{width:"95",compId:"ID_txt04",size:"11" ,align:"left",tailPosition:"6",tailFlip:"1"});
	//this.text = new cjs.Text("ID_txt04,w:95,h:45,a:l,t_p:6", "bold 11px 'Courier New'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(0,2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,16.5);


(lib.bubble02 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(42.5,15.5,1,1,0,0,0,42.5,22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7,189,16.5);


(lib.bubble01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(32.5,36.5,1,1,0,0,0,47.5,22.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,14,189,16.5);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_148 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(148).call(this.frame_148).wait(1));

	// bubble2
	this.instance = new lib.bubble02();
	this.instance.setTransform(427.4,266.2,1,1,0,0,0,35.5,22.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(144).to({regX:0,regY:0,x:453.9,y:187,alpha:1},0).wait(5));

	// bubble01
	this.instance_1 = new lib.bubble01();
	this.instance_1.setTransform(37.8,135,1,1,0,0,0,35.5,22.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regY:22.4,x:117.8,y:69.9,alpha:1},0).wait(146));

	// Topology
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.setTransform(69.1,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149));

	// Line_Hilight_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(2,2,1).p("AgUgXIApAv");
	this.shape.setTransform(430.8,199.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,2,1).p("AgbgfIA3A/");
	this.shape_1.setTransform(431.4,200.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F26200").ss(2,2,1).p("AgignIBFBP");
	this.shape_2.setTransform(432.1,200.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F26200").ss(2,2,1).p("AgoguIBRBd");
	this.shape_3.setTransform(432.7,201.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F26200").ss(2,2,1).p("Agvg2IBfBt");
	this.shape_4.setTransform(433.4,202.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F26200").ss(2,2,1).p("Ag2g+IBtB9");
	this.shape_5.setTransform(434,203);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F26200").ss(2,2,1).p("Ag9hFIB7CL");
	this.shape_6.setTransform(434.6,203.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F26200").ss(2,2,1).p("AhDhNICHCb");
	this.shape_7.setTransform(435.3,204.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F26200").ss(2,2,1).p("AhKhVICVCr");
	this.shape_8.setTransform(435.9,205.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F26200").ss(2,2,1).p("AhRhdICjC7");
	this.shape_9.setTransform(436.6,205.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F26200").ss(2,2,1).p("AhYhkICxDJ");
	this.shape_10.setTransform(437.2,206.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F26200").ss(2,2,1).p("AhfhsIC/DZ");
	this.shape_11.setTransform(437.8,207.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F26200").ss(2,2,1).p("Ahlh0IDLDp");
	this.shape_12.setTransform(438.5,208);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F26200").ss(2,2,1).p("Ahsh8IDZD5");
	this.shape_13.setTransform(439.1,208.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F26200").ss(2,2,1).p("AhziDIDnEI");
	this.shape_14.setTransform(439.8,209.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F26200").ss(2,2,1).p("Ah6iLID1EX");
	this.shape_15.setTransform(440.4,210.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F26200").ss(2,2,1).p("AiBiTIEDEn");
	this.shape_16.setTransform(441,210.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F26200").ss(2,2,1).p("AiHibIEPE3");
	this.shape_17.setTransform(441.7,211.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F26200").ss(2,2,1).p("AiOiiIEdFF");
	this.shape_18.setTransform(442.3,212.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F26200").ss(2,2,1).p("AiViqIErFV");
	this.shape_19.setTransform(443,213.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F26200").ss(2,2,1).p("AiciyIE5Fl");
	this.shape_20.setTransform(443.6,213.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F26200").ss(2,2,1).p("Aiii5IFFFz");
	this.shape_21.setTransform(444.2,214.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F26200").ss(2,2,1).p("AipjBIFTGD");
	this.shape_22.setTransform(444.9,215.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F26200").ss(2,2,1).p("AiwjJIFhGT");
	this.shape_23.setTransform(445.5,216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},121).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(5));

	// Line_Hilight_4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F26200").ss(2,2,1).p("AgLgRIAXAj");
	this.shape_24.setTransform(387.7,145.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F26200").ss(2,2,1).p("AgPgWIAfAt");
	this.shape_25.setTransform(388,146.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F26200").ss(2,2,1).p("AgSgbIAlA3");
	this.shape_26.setTransform(388.3,146.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F26200").ss(2,2,1).p("AgWggIAtBB");
	this.shape_27.setTransform(388.6,147.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F26200").ss(2,2,1).p("AgZglIAzBL");
	this.shape_28.setTransform(388.9,147.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F26200").ss(2,2,1).p("AgdgqIA7BV");
	this.shape_29.setTransform(389.2,148);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F26200").ss(2,2,1).p("AgggvIBBBf");
	this.shape_30.setTransform(389.6,148.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F26200").ss(2,2,1).p("Agkg0IBIBp");
	this.shape_31.setTransform(389.9,148.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F26200").ss(2,2,1).p("Agng5IBPBz");
	this.shape_32.setTransform(390.2,149.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F26200").ss(2,2,1).p("Agrg+IBWB9");
	this.shape_33.setTransform(390.5,149.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F26200").ss(2,2,1).p("AguhDIBdCH");
	this.shape_34.setTransform(390.8,150.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F26200").ss(2,2,1).p("AgxhIIBkCR");
	this.shape_35.setTransform(391.1,150.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F26200").ss(2,2,1).p("Ag1hNIBrCb");
	this.shape_36.setTransform(391.4,151);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F26200").ss(2,2,1).p("Ag5hSIBzCl");
	this.shape_37.setTransform(391.7,151.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F26200").ss(2,2,1).p("Ag8hXIB5Cv");
	this.shape_38.setTransform(392,151.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F26200").ss(2,2,1).p("AhAhcICBC5");
	this.shape_39.setTransform(392.3,152.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F26200").ss(2,2,1).p("AhDhhICHDD");
	this.shape_40.setTransform(392.6,152.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F26200").ss(2,2,1).p("AhHhmICPDN");
	this.shape_41.setTransform(392.9,153.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F26200").ss(2,2,1).p("AhKhrICVDX");
	this.shape_42.setTransform(393.2,153.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F26200").ss(2,2,1).p("AhNhwICbDh");
	this.shape_43.setTransform(393.5,154);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F26200").ss(2,2,1).p("AhRh1ICjDr");
	this.shape_44.setTransform(393.8,154.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F26200").ss(2,2,1).p("AhVh6ICqD1");
	this.shape_45.setTransform(394.1,154.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F26200").ss(2,2,1).p("AhYh/ICxD/");
	this.shape_46.setTransform(394.4,155.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F26200").ss(2,2,1).p("AhciEIC5EJ");
	this.shape_47.setTransform(394.7,155.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F26200").ss(2,2,1).p("AhfiJIC/ET");
	this.shape_48.setTransform(395,156.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},96).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(29));

	// Line_Hilight_3
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F26200").ss(2,2,1).p("AgaAAIA1AA");
	this.shape_49.setTransform(292.2,118.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F26200").ss(2,2,1).p("AgkAAIBJAA");
	this.shape_50.setTransform(293.1,118.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F26200").ss(2,2,1).p("AguAAIBdAA");
	this.shape_51.setTransform(294.1,118.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F26200").ss(2,2,1).p("Ag3AAIBvAA");
	this.shape_52.setTransform(295.1,118.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F26200").ss(2,2,1).p("AhBAAICDAA");
	this.shape_53.setTransform(296,118.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F26200").ss(2,2,1).p("AhLAAICXAA");
	this.shape_54.setTransform(297,118.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F26200").ss(2,2,1).p("AhVAAICrAA");
	this.shape_55.setTransform(298,118.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F26200").ss(2,2,1).p("AhfAAIC/AA");
	this.shape_56.setTransform(298.9,118.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F26200").ss(2,2,1).p("AhoAAIDRAA");
	this.shape_57.setTransform(299.9,118.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F26200").ss(2,2,1).p("AhyAAIDlAA");
	this.shape_58.setTransform(300.9,118.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F26200").ss(2,2,1).p("Ah8AAID5AA");
	this.shape_59.setTransform(301.8,118.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F26200").ss(2,2,1).p("AiGAAIENAA");
	this.shape_60.setTransform(302.8,118.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F26200").ss(2,2,1).p("AiQAAIEhAA");
	this.shape_61.setTransform(303.8,118.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F26200").ss(2,2,1).p("AiZAAIEzAA");
	this.shape_62.setTransform(304.7,118.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F26200").ss(2,2,1).p("AijAAIFHAA");
	this.shape_63.setTransform(305.7,118.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F26200").ss(2,2,1).p("AitAAIFbAA");
	this.shape_64.setTransform(306.7,118.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F26200").ss(2,2,1).p("Ai3AAIFvAA");
	this.shape_65.setTransform(307.6,119);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F26200").ss(2,2,1).p("AjBAAIGCAA");
	this.shape_66.setTransform(308.6,119);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F26200").ss(2,2,1).p("AjKAAIGWAA");
	this.shape_67.setTransform(309.6,119);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F26200").ss(2,2,1).p("AjUAAIGpAA");
	this.shape_68.setTransform(310.5,119);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F26200").ss(2,2,1).p("AjeAAIG9AA");
	this.shape_69.setTransform(311.5,119);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F26200").ss(2,2,1).p("AjoAAIHRAA");
	this.shape_70.setTransform(312.5,119);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F26200").ss(2,2,1).p("AjyAAIHlAA");
	this.shape_71.setTransform(313.4,119);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#F26200").ss(2,2,1).p("Aj7AAIH4AA");
	this.shape_72.setTransform(314.4,119);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F26200").ss(2,2,1).p("AkFAAIILAA");
	this.shape_73.setTransform(315.4,119);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F26200").ss(2,2,1).p("AkPAAIIfAA");
	this.shape_74.setTransform(316.3,119);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#F26200").ss(2,2,1).p("AkZAAIIzAA");
	this.shape_75.setTransform(317.3,119);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#F26200").ss(2,2,1).p("AkiAAIJFAA");
	this.shape_76.setTransform(318.3,119);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#F26200").ss(2,2,1).p("AksAAIJZAA");
	this.shape_77.setTransform(319.2,119);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F26200").ss(2,2,1).p("Ak2AAIJtAA");
	this.shape_78.setTransform(320.2,119);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#F26200").ss(2,2,1).p("AlAAAIKBAA");
	this.shape_79.setTransform(321.2,119);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#F26200").ss(2,2,1).p("AlKAAIKVAA");
	this.shape_80.setTransform(322.1,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49}]},63).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).wait(55));

	// Line_Hilight_2
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F26200").ss(2,2,1).p("AgagQIA1Ah");
	this.shape_81.setTransform(233.7,95.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F26200").ss(2,2,1).p("AghgUIBDAp");
	this.shape_82.setTransform(234.2,96.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F26200").ss(2,2,1).p("AgngYIBPAx");
	this.shape_83.setTransform(234.6,96.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F26200").ss(2,2,1).p("AgugcIBdA5");
	this.shape_84.setTransform(235.1,96.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F26200").ss(2,2,1).p("Ag1ghIBrBD");
	this.shape_85.setTransform(235.6,97);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#F26200").ss(2,2,1).p("Ag7gkIB3BJ");
	this.shape_86.setTransform(236.1,97.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F26200").ss(2,2,1).p("AhCgpICFBT");
	this.shape_87.setTransform(236.6,97.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F26200").ss(2,2,1).p("AhIgtICRBb");
	this.shape_88.setTransform(237.1,97.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F26200").ss(2,2,1).p("AhPgxICfBj");
	this.shape_89.setTransform(237.6,98.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F26200").ss(2,2,1).p("AhWg1ICsBr");
	this.shape_90.setTransform(238.1,98.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#F26200").ss(2,2,1).p("Ahcg5IC5Bz");
	this.shape_91.setTransform(238.6,98.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#F26200").ss(2,2,1).p("Ahjg+IDHB8");
	this.shape_92.setTransform(239.1,99.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#F26200").ss(2,2,1).p("AhqhCIDUCF");
	this.shape_93.setTransform(239.6,99.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#F26200").ss(2,2,1).p("AhwhGIDhCN");
	this.shape_94.setTransform(240,99.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#F26200").ss(2,2,1).p("Ah3hKIDvCV");
	this.shape_95.setTransform(240.5,100.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#F26200").ss(2,2,1).p("Ah9hOID7Cd");
	this.shape_96.setTransform(241,100.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#F26200").ss(2,2,1).p("AiEhSIEJCl");
	this.shape_97.setTransform(241.5,100.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#F26200").ss(2,2,1).p("AiLhWIEXCt");
	this.shape_98.setTransform(242,101);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#F26200").ss(2,2,1).p("AiRhbIEjC3");
	this.shape_99.setTransform(242.5,101.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F26200").ss(2,2,1).p("AiYhfIExC/");
	this.shape_100.setTransform(243,101.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#F26200").ss(2,2,1).p("AifhjIE/DH");
	this.shape_101.setTransform(243.5,101.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81}]},42).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).wait(87));

	// Line_Hilight_1
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#F26200").ss(2,2,1).p("AgJAEIATgH");
	this.shape_102.setTransform(141.3,110.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#F26200").ss(2,2,1).p("AgUAJIApgR");
	this.shape_103.setTransform(142.4,109.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#F26200").ss(2,2,1).p("AgfAOIA/gb");
	this.shape_104.setTransform(143.5,109.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#F26200").ss(2,2,1).p("AgqASIBVgj");
	this.shape_105.setTransform(144.5,108.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#F26200").ss(2,2,1).p("Ag1AXIBrgt");
	this.shape_106.setTransform(145.6,108.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#F26200").ss(2,2,1).p("AhAAcICBg3");
	this.shape_107.setTransform(146.7,107.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#F26200").ss(2,2,1).p("AhLAgICXhA");
	this.shape_108.setTransform(147.7,107.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#F26200").ss(2,2,1).p("AhWAlICthJ");
	this.shape_109.setTransform(148.8,107);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#F26200").ss(2,2,1).p("AhhAqIDDhT");
	this.shape_110.setTransform(149.9,106.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#F26200").ss(2,2,1).p("AhsAvIDZhd");
	this.shape_111.setTransform(150.9,106.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#F26200").ss(2,2,1).p("Ah3AzIDvhl");
	this.shape_112.setTransform(152,105.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#F26200").ss(2,2,1).p("AiCA4IEFhv");
	this.shape_113.setTransform(153.1,105.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#F26200").ss(2,2,1).p("AiNA9IEch5");
	this.shape_114.setTransform(154.2,104.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#F26200").ss(2,2,1).p("AiYBCIExiC");
	this.shape_115.setTransform(155.2,104.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#F26200").ss(2,2,1).p("AikBGIFJiL");
	this.shape_116.setTransform(156.3,103.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#F26200").ss(2,2,1).p("AiuBLIFdiV");
	this.shape_117.setTransform(157.4,103.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#F26200").ss(2,2,1).p("Ai5BQIF0if");
	this.shape_118.setTransform(158.5,102.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#F26200").ss(2,2,1).p("AjFBUIGLin");
	this.shape_119.setTransform(159.5,102.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#F26200").ss(2,2,1).p("AjQBZIGhix");
	this.shape_120.setTransform(160.6,101.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#F26200").ss(2,2,1).p("AjbBeIG3i7");
	this.shape_121.setTransform(161.7,101.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#F26200").ss(2,2,1).p("AjmBjIHNjF");
	this.shape_122.setTransform(162.7,101);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#F26200").ss(2,2,1).p("AjxBnIHjjN");
	this.shape_123.setTransform(163.8,100.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#F26200").ss(2,2,1).p("Aj8BsIH5jX");
	this.shape_124.setTransform(164.9,100.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#F26200").ss(2,2,1).p("AkHBxIIPjh");
	this.shape_125.setTransform(165.9,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},6).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).wait(120));

	// Lines
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(138.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,0,593.6,264.4);


(lib.Main = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(40,65);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.3,65,593.6,264.4);


// stage content:
(lib.media_1124 = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(367.3,310,593.6,264.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;