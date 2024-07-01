(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


// symbols:
(lib.media_1115 = function() {
	this.initialize(img.media_1115);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.orangeTextMc = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"90",expand:"down",class:"orangeCallOut",align:"left",size:"9"});


	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);


(lib.highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAB37D").s().p("Af9hRMg/5AAAIAACjMA/5AAAIAAij").cp();
	this.shape.setTransform(204.5,8.2);
	
	if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6)
	{
		this.shape.setTransform(205,7);
	}
	else if (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)

	{
		this.shape.setTransform(204,-3);
	}
	else if(navigator.appName == "Microsoft Internet Explorer")
	{
		this.shape.setTransform(205,-10);
	}
	else
	{
		this.shape.setTransform(205,8);

	}
	

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,409,16.4);


(lib.gradient = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#077A77","rgba(255,255,255,0)"],[0,1],129,55,129,-49.1).s().p("AFWjrMglLAIQQftASf+gOIy8oPQjyiPjyCKIAAAA").cp();
	this.shape_1.setTransform(22,30.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-181.7,0,407.7,60.8);


(lib.callOutMc = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"84",expand:"down",class:"orangeCallOut",align:"left",size:"9"});

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.8,14.3);


(lib.outputBox_1 = function() {
	this.initialize();

	// Layer 2
	//this.text_2 = new cjs.Text("router output_1", "10px Courier New");
		this.text_2 = new RouterComp({width:365,height:195,textId:"ID_s1_txt01",x:-10,y:-19});

	this.addChild(this.text_2);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.7,14.3);


(lib.outputBox = function() {
	this.initialize();

	// Layer 2
 	this.text_3 = new RouterComp({width:365,height:195,textId:"ID_s2_txt01",x:30,y:-19});

	this.addChild(this.text_3);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.7,25.5);


(lib.questionMark_red = function() {
	this.initialize();

	// details
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("AAjgJQANALABAUQAAABAAABIAAAAQgKgYgLgHQgLgIgRgBQgPAAgKAHQgKAIgNAZIAAAAQAAgBAAgBQABgUANgLQAPgOATAAQAVAAAOAOIAAAA").cp();
	this.shape_2.setTransform(-0.4,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.502)").s().p("ABsi6QAEAHAAAOQAAAGgBABIgCAGIAAAAQAAAAAAgGQAAgcgUgTQgGgEgGgFQgHgFgXgEQgOgDgXADQgTADgQAOQgPAMgPAuQgMAoghAAQgKAAgNgJQALAEALAAQAgAAALgoQAMglARgTQATgVAjAAQARAAAIACQAYAFAVATQAKAIADAKIAAAAABhgLQgLAKgHAGQgHAJgDAGQgEAHgCAHQgBAGgEARQgGAkghAAQgSAAgJgMQgJgIgCgNQAEALAGAEQAJAMARAAQAgAAAGgjQAEgUABgDQADgHADgGQACgFAIgJQAIgIAJgIQAGgGAZgRQgMAMgPAOIAAAAAAwDXQAKgGANgZQgBAVgNAMQgPAOgUAAQgTAAgNgOQgOgLgBgWQANAaALAGQAJAGAOAAQAOAAAMgHIAAAA").cp();
	this.shape_3.setTransform(-2.7,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.251)").s().p("ACRhfIgKgNQgTgWgcgNQgNgHgNgDIgQgEQgVgEgWAAQgWAAgYAFQgYAGgSAKQgnAWgUAgQgEAGgEAIQgMAZAAAZQAAAKAHAKQgMgMAAgLIAAgDQAAgZAMgZQAEgJAEgHQAVghAogXQAogWAzAAQAjAAAeAKQAMAEALAFQAfAOATAYIAJAMQAHAKAFAOQAIAUAAAYIAAADQgBAdgKASQgKASgKALIgGAHIgCACIgEAEIALgNQAKgNAGgLQALgUAAgcQAAgUgGgTQgGgPgIgNIAAAAAA4APQAKgKAKgPQALgSgDALQgDAKgNARQgOASgXAUQgXATgMAOQgOAOgIANQgIANgHAhQgHAhAAgXQABgYAJgVQAJgVAPgQQAOgQAYgWQAWgTAKgKIAAAA").cp();
	this.shape_4.setTransform(0,-8);

	// shading
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.7,18.3,28.7,-9.2).s().p("AAEh6QglAAgSATQgSAUgNAmQgMAnghAAQgUAAgNgNQgOgOAAgQQAAgiAVgiQAWgiApgXQApgWA1AAQAzAAAnATQAnASAVAhQAVAgAAAmQAAAegLAWQgNAVgQAQQgRAQgrAnQgMALgHAIQgIAJgDAHQgEAHgCAHQgCAGgEASQgGAkghAAQgTAAgMgMQgNgMAAgXQAAgeAJgWQAKgVAPgQQAPgRAYgXQAWgTAKgIQAKgKAHgNQAHgMAAgOQAAgdgVgTQgVgTghAAIAAAA").cp();
	this.shape_5.setTransform(0,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.3,-9.8,29.2,-37.4).s().p("AgzAAQAAAAAAAAQAAgWAOgOQAQgPAVAAQAWAAAPAPQAPAOAAAWQAAAAAAAAQAAABAAAAQAAAYgPANQgQAOgVAAQgTAAgQgOQgQgNAAgYQAAAAAAgBIAAAA").cp();
	this.shape_6.setTransform(-0.4,22);

	// mask
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E31C23").s().p("AAEi/QglAAgSAUQgSATgNAmQgMAoghAAQgUAAgNgOQgOgOAAgQQAAghAVgiQAWgjApgWQApgXA1AAQAzAAAnATQAnATAVAgQAVAgAAAmQAAAegLAXQgNAWgQARQgRAQgrAlQgMAKgHAJQgIAJgDAHQgEAGgCAHQgCAHgEARQgGAlghAAQgTAAgMgMQgNgMAAgYQAAgeAJgVQAKgWAPgOQAPgRAYgWQAWgUAKgKQAKgKAHgMQAHgNAAgOQAAgcgVgTQgVgUghAAIAAAAAgpCwQAQgPAWAAQAVAAAPAPQAPAPAAAWQAAAYgQAPQgQAOgTAAQgVAAgQgOQgQgOAAgZQAAgWAPgPIAAAA").cp();
	this.shape_7.setTransform(0,0.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-25.9,35.2,53.2);


(lib.exclamation_red = function() {
	this.initialize();

	// details
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.502)","rgba(255,255,255,0.302)"],[0,1],-0.3,19.7,-0.3,-20.6).s().p("AgcDBIAAgBIgBgEIACAAIAnAAIAMl6IAAgCIAGAAIgMGBIguAA").cp();
	this.shape_8.setTransform(1.5,-5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.502)","rgba(255,255,255,0.302)"],[0,1],0.4,21.2,0.1,-22.2).s().p("AgTC/IgCAAIABAFIAAAAIgFAAIgNmHIAhAAQAGAAAIAAQAHAAAIAAIAPAAIgBAGIgGAAIAAACIg+AAIALF6").cp();
	this.shape_9.setTransform(0.7,-5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.4)").s().p("AAxAYQgKgYgLgHQgLgIgRAAQgPgBgKAIQgLAHgMAZIAAAAQAAgBAAgBQABgUANgLQAPgOATAAQAUAAAPAOQANALABAUQAAABAAABIAAAA").cp();
	this.shape_10.setTransform(0.6,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.502)").s().p("AAAAOQANAAAMgHQALgGANgXQgCAVgNALQgPANgTAAQgSAAgPgNQgOgKgBgWQANAYALAGQALAGANAAIAAAA").cp();
	this.shape_11.setTransform(0.6,24.6);

	// shading
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0.353)","rgba(214,214,214,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.122)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],2.1,26.5,42.9,-23.2).s().p("AAcDDIg3AAIgMmIIBPAAIgMGIIAAADIg3AAIAAgDIA3AA").cp();
	this.shape_12.setTransform(0.6,-5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.3,-9.8,29.2,-37.4).s().p("AglgkQAQgPAVAAQAWAAAPAPQAPAOAAAWQAAAAAAAAQAAABAAAAQAAAYgPANQgQAOgVAAQgTAAgQgOQgQgNAAgYQAAAAAAgBQAAAAAAAAQAAgWAOgOIAAAA").cp();
	this.shape_13.setTransform(0.6,22);

	// mask
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E31C23").s().p("AgkCtQAPgPAVAAQAWAAAPAPQAPAPAAAXQAAAYgPAOQgQAOgVAAQgTAAgQgNQgQgOAAgZQAAgXAPgPIAAAAAAcCDIg3AAIgMmJIBPAAIgMGJIAAACIg3AAIAAgCIA3AA").cp();
	this.shape_14.setTransform(0.6,0.9);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.6,-25.4,10.6,52.7);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9A003").s().p("ACWAAQAhgSAjgZQABgBABgBICUD0QAAAAAAAAQASAZAJAcIAFAAIAAgRQgHgSgRgYIiTjzQA/guBGhEIAAABQAZgYAKhAIgKAAQgKA7gWAVIAAAAQhIBGhAAtQgDADgEACQgiAZghARIAAAAQhPAphAABQgCAAAAAAQhBgBhPgqIAAABQghgSgjgZQgDgDgEgCQg/gthHhFIAAAAQgWgVgJg7IgLAAQAKBAAZAYIAAgBQBGBDA+AuIiUD0QgPAUgIAUIAAgHIAAAaIAEAAQAIgbATgaQAAAAAAAAICUj1QABABABABQAkAZAhASIAAAAQBSArBDABQAAAAACAAQBCgBBSgqIAAAA").cp();
	this.shape_15.setTransform(1.4,0.1);

	// outer lines
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AGDj7IAKAAQgKBAgZAYIAAgBQhGBEg/AuICTDzQARAYAHASIAAARIgFAAQgJgcgSgZQAAAAAAAAIiUj0QgBABgBABQgjAZghASIAAAAQhSAqhCABQgCAAAAAAQhDgBhSgrIAAAAQghgSgkgZQgBgBgBgBIiUD1QAAAAAAAAQgTAagIAbIgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKhAIALAAQAJA7AWAVIAAAAQBHBFA/AtQAEACADADQAjAZAhASIAAgBQBPAqBBABQAAAAACAAQBAgBBPgpIAAAAQAhgRAigZQAEgCADgDQBAgtBIhGIAAAAQAWgVAKg7IAAAA").cp();
	this.shape_16.setTransform(1.4,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000002").s().p("AmLD8IMWAAIAFAAIAAgQIAAnmIgDAAIgLAAIsDAAIgKAAIgEAAIAAH2IAEAAAGIkEQAAgBABABIAMAAQACAAACABQABABAAADIAAIAQAAACgBABQgCABgCABIspAAQgCgBgCgBQgBgBAAgCIAAoAQAAgDABgBQACgBACAAIANAAQAAgBAAABIMPAA").cp();
	this.shape_17.setTransform(1.5,0);

	// color
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23,0.4,5.6).s().p("AGVj/IAAH/IspAAIAAn/IMpAA").cp();
	this.shape_18.setTransform(1.5,0.1);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F68026").s().p("AgxAhIAighIgiggIBjAgIhjAh").cp();
	this.shape_19.setTransform(5,0);

	this.addChild(this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.arrowlong = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Arrow();
	this.instance.setTransform(8.3,5.5,1.65,1.65,0,0,180,5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F68026").ss(2,2,1).p("AnOAAIOdAA");
	this.shape_20.setTransform(51.9,5.5);

	this.addChild(this.shape_20,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98.2,11);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// lazytext
	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"50",expand:"up+down",align:"left"});

	this.text_4.setTransform(340,118);

	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"90",expand:"up+down",align:"left"});

	this.text_5.setTransform(371.1,144.2);

	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"200",expand:"up+down",align:"left"});

	this.text_6.setTransform(195.1,82.2);

	 this.text_7 = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"90",expand:"up+down",align:"left"});

	this.text_7.setTransform(64,118);

	 this.text_8 = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"100",expand:"up+down",align:"left"});

	this.text_8.setTransform(24.1,145.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4}]}).wait(531));

	// orange textbox 2
	this.instance_1 = new lib.orangeTextMc();
	this.instance_1.setTransform(53,187.2,1,1,0,0,0,50.4,5.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(364).to({alpha:1},0).wait(97).to({alpha:0},0).wait(70));

	// exclamation 2
	this.instance_2 = new lib.exclamation_red();
	this.instance_2.setTransform(267,113.9,0.5,0.5,0,0,0,0.6,0.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(372).to({alpha:1},0).to({alpha:0},7).to({alpha:1},20).to({alpha:0},22).to({alpha:1},22).to({alpha:0},17).wait(71));

	// question mark 2
	this.instance_3 = new lib.questionMark_red();
	this.instance_3.setTransform(267,112.9,0.5,0.5,0,0,0,0,-1.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(315).to({alpha:1},7).to({alpha:0},12).to({alpha:1},14).to({alpha:0},14).wait(169));

	// highlight 2
	this.instance_4 = new lib.highlight();
	if (navigator.userAgent.indexOf('Chrome') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Chrome') + 7).split(' ')[0]) >= 15)

	{
		this.instance_4.setTransform(258,325,0.85,0.648,0,0,0,170.5,10);

	}
	else
	{
	
		this.instance_4.setTransform(258,318,0.85,0.648,0,0,0,170.5,10);
	}
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(382).to({alpha:1},16).wait(31).to({alpha:0},10).wait(92));

	// output box 2
	this.instance_5 = new lib.outputBox();
	this.instance_5.setTransform(289.6,259,0.823,1.198,0,0,0,215,79.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(355).to({scaleX:1,scaleY:1},0).to({alpha:1},9).wait(97).to({scaleX:0.82,scaleY:1.2,alpha:0},0).wait(70));

	// gradient 2
	this.instance_6 = new lib.gradient("synched",0);
	this.instance_6.setTransform(269.8,128.7,0.168,0.214,0,0,0,71.9,-2.3);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(347).to({startPosition:0},0).to({regX:71.6,regY:-2.1,scaleX:0.63,scaleY:0.65,x:273,y:128.2,alpha:1},17,cjs.Ease.get(1)).wait(97).to({regX:71.9,regY:-2.2,scaleX:0.17,scaleY:0.21,x:269.8,y:128.7,alpha:0,mode:"synched",startPosition:0},0).wait(70));

	// orange textbox 1
	this.instance_7 = new lib.callOutMc();
	this.instance_7.setTransform(435.5,188,1,1,0,0,0,54.1,5.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({alpha:1},0).wait(187).to({alpha:0},0).wait(247));

	// arrow
	this.instance_8 = new lib.arrowlong();
	this.instance_8.setTransform(387.1,188,1,1,0,0,0,48.1,4.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(97).to({alpha:1},0).wait(187).to({alpha:0},0).wait(247));

	// exclamation 1
	this.instance_9 = new lib.exclamation_red();
	this.instance_9.setTransform(184.6,113.8,0.5,0.5,0,0,0,0.5,0.9);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(106).to({alpha:1},0).to({alpha:0},13).to({alpha:1},16).to({alpha:0},18).to({alpha:1},17).to({alpha:0},16).to({alpha:1},18).to({alpha:0},18).to({alpha:1},18).to({alpha:0},19).to({alpha:1},18).to({alpha:0},6).wait(248));

	// question mark 1
	this.instance_10 = new lib.questionMark_red();
	this.instance_10.setTransform(184.7,112.9,0.5,0.5,0,0,0,0.1,-1.2);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({alpha:1},7).to({alpha:0},12).to({alpha:1},12).to({alpha:0},11).wait(434));

	// highlight 1
	this.instance_11 = new lib.highlight();
	this.instance_11.setTransform(158,314.8,0.8,0.648,0,0,0,170.5,10);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(127).to({alpha:1},16).wait(14).to({y:327.8},14).wait(13).to({y:338.2},14).wait(16).to({alpha:0},9).to({alpha:1},9).to({alpha:0},9).to({alpha:1},8).to({alpha:0},9).to({alpha:1},9).to({alpha:0},1).wait(263));

	// output box 1
	this.instance_12 = new lib.outputBox_1();
	this.instance_12.setTransform(178.6,259,0.823,1.198,0,0,0,215,79.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(88).to({scaleX:1,scaleY:1,x:238.6},0).to({alpha:1},9,cjs.Ease.get(1)).wait(187).to({scaleX:0.82,scaleY:1.2,x:178.6,alpha:0},0).wait(247));

	// gradient 1
	this.instance_13 = new lib.gradient();
	this.instance_13.setTransform(175,127.8,0.168,0.214,0,0,0,71.9,-2.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(79).to({regX:71.7,regY:-2.1,scaleX:0.65,scaleY:0.65,x:178.3,y:126.9,alpha:1},18,cjs.Ease.get(1)).wait(187).to({alpha:0},0).wait(247));

	// envelope
	this.instance_14 = new lib.envelopeclosedstatic();
	this.instance_14.setTransform(29.1,104.9,0.25,0.25,0,0,0,1.4,0.2);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({alpha:1},10,cjs.Ease.get(1)).to({regX:1.2,regY:0,x:75,y:87.1},15).to({regX:1.4,regY:0.2,x:184.6,y:137.1},30).wait(229).to({regY:0,x:267,y:137},25).wait(152).to({x:266.1,y:136.9},0).to({regY:0.2,x:378.1,y:87.1},33).to({regX:1.6,regY:0,x:421.6,y:67.8},21).to({alpha:0},12,cjs.Ease.get(1)).wait(4));

	// bg
	this.instance_15 = new lib.media_1115();
	this.instance_15.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(531));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
 

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;