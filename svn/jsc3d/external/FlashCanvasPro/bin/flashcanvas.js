/*
 * FlashCanvas Pro
 *
 * Copyright (c) 2009      Tim Cameron Ryan
 * Copyright (c) 2009-2010 Shinya Muramatsu
 */
window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(i,l){function G(a,b,c){if(!c){c=[];for(var d=0,e=a*b*4;d<e;++d)c[d]=0}this.width=a;this.height=b;this.data=c}function X(a){this.width=a}function H(a){this.id=a.G++}function w(a){this.L=a;this.id=a.G++}function A(a,b){this.canvas=a;this.z=b;this.h=a.uniqueID;this.H();this.G=0;this.j=this.F="";this.c=0}function I(){if(l.readyState==="complete"){l.detachEvent(J,I);for(var a=l.getElementsByTagName(o),b=0,c=a.length;b<c;++b)B.initElement(a[b])}}
function K(){var a=event.srcElement,b=a.parentNode;a.blur();b.focus()}function C(){event.button&2&&event.srcElement.parentNode.setCapture()}function D(){event.button&2&&event.srcElement.parentNode.releaseCapture()}function L(){var a=event.propertyName;if(a==="width"||a==="height"){var b=event.srcElement,c=b.getContext("2d"),d=parseInt(b[a]);if(isNaN(d)||d<0)d=a==="width"?300:150;else if(d===0)d=1;b.style[a]=d+"px";c.M(b.clientWidth,b.clientHeight)}}function M(){i.detachEvent(N,M);for(var a in n){var b=
n[a],c=b.firstChild,d;for(d in c)if(typeof c[d]==="function")c[d]=j;for(d in b)if(typeof b[d]==="function")b[d]=j;c.detachEvent(O,K);c.detachEvent(E,C);b.detachEvent(F,D);b.detachEvent(P,L)}i[Q]=j;i[R]=j;i[S]=j;i[T]=j;i[U]=j}var j=null,o="canvas",Q="CanvasRenderingContext2D",R="CanvasGradient",S="CanvasPattern",T="FlashCanvas",U="G_vmlCanvasManager",O="onfocus",E="onmousedown",F="onmouseup",P="onpropertychange",J="onreadystatechange",N="onunload",p;try{p=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g,
".")}catch(Y){p=0}var V=function(){var a=l.getElementsByTagName("script");a=a[a.length-1];return l.documentMode>=8?a.src:a.getAttribute("src",4)}().replace(/[^\/]+$/,""),v;v=parseInt(p)>9?V+"flash10canvas.swf":V+"flash9canvas.swf";var x={},t={},u={},W={},n={},y={},k={g:1,C:0,K:0};if(p==="10.1.53.64"){k.g=0;k.C=30}A.prototype={save:function(){this.e(15);this.J.push([this.m,this.n,this.w,this.l,this.q,this.o,this.p,this.r,this.u,this.v,this.s,this.t,this.j,this.A,this.B]);this.a.push("B")},restore:function(){var a=
this.J;if(a.length){a=a.pop();this.globalAlpha=a[0];this.globalCompositeOperation=a[1];this.strokeStyle=a[2];this.fillStyle=a[3];this.lineWidth=a[4];this.lineCap=a[5];this.lineJoin=a[6];this.miterLimit=a[7];this.shadowOffsetX=a[8];this.shadowOffsetY=a[9];this.shadowBlur=a[10];this.shadowColor=a[11];this.font=a[12];this.textAlign=a[13];this.textBaseline=a[14]}this.a.push("C")},scale:function(a,b){this.a.push("D",a,b)},rotate:function(a){this.a.push("E",a)},translate:function(a,b){this.a.push("F",a,
b)},transform:function(a,b,c,d,e,f){this.a.push("G",a,b,c,d,e,f)},setTransform:function(a,b,c,d,e,f){this.a.push("H",a,b,c,d,e,f)},createLinearGradient:function(a,b,c,d){this.a.push("M",a,b,c,d);return new w(this)},createRadialGradient:function(a,b,c,d,e,f){this.a.push("N",a,b,c,d,e,f);return new w(this)},createPattern:function(a,b){var c=a.tagName.toLowerCase(),d,e=this.h;if(c==="img")d=a.getAttribute("src",2);else if(c===o)d=this.D(a);else return;this.a.push("O",d,b);if(!t[e][d]&&x[e]){this.f();
++u[e];if(c==="img")t[e][d]=1}return new H(this)},clearRect:function(a,b,c,d){this.a.push("X",a,b,c,d);this.b||this.d();this.c=0},fillRect:function(a,b,c,d){this.e(1);this.a.push("Y",a,b,c,d);this.b||this.d();this.c=0},strokeRect:function(a,b,c,d){this.e(6);this.a.push("Z",a,b,c,d);this.b||this.d();this.c=0},beginPath:function(){this.a.push("a")},closePath:function(){this.a.push("b")},moveTo:function(a,b){this.a.push("c",a,b)},lineTo:function(a,b){this.a.push("d",a,b)},quadraticCurveTo:function(a,
b,c,d){this.a.push("e",a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.a.push("f",a,b,c,d,e,f)},arcTo:function(a,b,c,d,e){this.a.push("g",a,b,c,d,e)},rect:function(a,b,c,d){this.a.push("h",a,b,c,d)},arc:function(a,b,c,d,e,f){this.a.push("i",a,b,c,d,e,f?1:0)},fill:function(){this.e(1);this.a.push("j");this.b||this.d();this.c=0},stroke:function(){this.e(6);this.a.push("k");this.b||this.d();this.c=0},clip:function(){this.a.push("l")},isPointInPath:function(a,b){this.a.push("m",a,b);return this.f()===
"true"},fillText:function(a,b,c,d){this.e(9);this.k.push(this.a.length+1);this.a.push("r",a,b,c,d===void 0?Infinity:d);this.b||this.d();this.c=0},strokeText:function(a,b,c,d){this.e(10);this.k.push(this.a.length+1);this.a.push("s",a,b,c,d===void 0?Infinity:d);this.b||this.d();this.c=0},measureText:function(a){var b=y[this.h];try{b.style.font=this.font}catch(c){}b.innerText=a.replace(/[ \n\f\r]/g,"\t");return new X(b.offsetWidth)},drawImage:function(a,b,c,d,e,f,h,g,q){var m=arguments.length,r=a.tagName.toLowerCase(),
s,z=this.h;if(r==="img")s=a.getAttribute("src",2);else if(r===o)s=this.D(a);else return;this.e(0);if(m===3)this.a.push("u",m,s,b,c);else if(m===5)this.a.push("u",m,s,b,c,d,e);else if(m===9)this.a.push("u",m,s,b,c,d,e,f,h,g,q);else return;if(!t[z][s]&&x[z]){this.f();++u[z];if(r==="img")t[z][s]=1}else this.b||this.d();this.c=0},createImageData:function(){var a=arguments,b;if(a.length===2){b=a[0];a=a[1]}else{b=a[0].width;a=a[0].height}return new G(b,a)},getImageData:function(a,b,c,d){this.a.push("w",
a,b,c,d);a=this.f();c=typeof JSON==="object"?JSON.parse(a):l.documentMode?eval(a):a.slice(1,-1).split(",");a=c.shift();b=c.shift();return new G(a,b,c)},putImageData:function(a,b,c,d,e,f,h){if(a){var g=arguments.length,q=a.width,m=a.height,r=a.data;if(!(!q||!m||!r)){if(g===3)this.a.push("x",g,q,m,r.toString(),b,c);else g===7&&this.a.push("x",g,q,m,r.toString(),b,c,d,e,f,h);this.b||this.d();this.c=0}}},H:function(){this.globalAlpha=this.m=1;this.globalCompositeOperation=this.n="source-over";this.fillStyle=
this.l=this.strokeStyle=this.w="#000000";this.lineWidth=this.q=1;this.lineCap=this.o="butt";this.lineJoin=this.p="miter";this.miterLimit=this.r=10;this.shadowBlur=this.s=this.shadowOffsetY=this.v=this.shadowOffsetX=this.u=0;this.shadowColor=this.t="rgba(0,0,0,0)";this.font=this.j="10px sans-serif";this.textAlign=this.A="start";this.textBaseline=this.B="alphabetic";this.a=[];this.J=[];this.i=[];this.k=[];this.b=j;this.I=1},e:function(a){var b=this.a,c;if(this.m!==this.globalAlpha)b.push("I",this.m=
this.globalAlpha);if(this.n!==this.globalCompositeOperation)b.push("J",this.n=this.globalCompositeOperation);if(this.u!==this.shadowOffsetX)b.push("T",this.u=this.shadowOffsetX);if(this.v!==this.shadowOffsetY)b.push("U",this.v=this.shadowOffsetY);if(this.s!==this.shadowBlur)b.push("V",this.s=this.shadowBlur);if(this.t!==this.shadowColor){c=this.t=this.shadowColor;(""+c).indexOf("%")>0&&k.g&&this.i.push(b.length+1);b.push("W",c)}if(a&1)if(this.l!==this.fillStyle){c=this.l=this.fillStyle;if(typeof c===
"object")c=c.id;else(""+c).indexOf("%")>0&&k.g&&this.i.push(b.length+1);b.push("L",c)}if(a&2)if(this.w!==this.strokeStyle){c=this.w=this.strokeStyle;if(typeof c==="object")c=c.id;else(""+c).indexOf("%")>0&&k.g&&this.i.push(b.length+1);b.push("K",c)}if(a&4){if(this.q!==this.lineWidth)b.push("P",this.q=this.lineWidth);if(this.o!==this.lineCap)b.push("Q",this.o=this.lineCap);if(this.p!==this.lineJoin)b.push("R",this.p=this.lineJoin);if(this.r!==this.miterLimit)b.push("S",this.r=this.miterLimit)}if(a&
8){if(this.j!==this.font)b.push("o",y[this.h].offsetHeight,this.j=this.font);if(this.A!==this.textAlign)b.push("p",this.A=this.textAlign);if(this.B!==this.textBaseline)b.push("q",this.B=this.textBaseline);if(this.F!==this.canvas.currentStyle.direction)b.push("1",this.F=this.canvas.currentStyle.direction)}},d:function(){var a=this;a.b=setTimeout(function(){if(u[a.h])a.d();else{a.b=j;a.f(k.g)}},k.C)},N:function(){clearTimeout(this.b);this.b=j},f:function(a){var b,c,d,e=this.i,f=this.k,h=this.a,g=this.z;
if(h.length){this.b&&this.N();if(a){b=0;for(c=e.length;b<c;++b){d=e[b];h[d]=encodeURI(h[d])}b=0;for(c=f.length;b<c;++b){d=f[b];h[d]=encodeURIComponent(h[d])}}else{b=0;for(c=f.length;b<c;++b){d=f[b];h[d]=(""+h[d]).replace(/&/g,"&amp;").replace(/</g,"&lt;")}}b=h.join("\u0001");this.a=[];this.i=[];this.k=[];if(a){g.flashvars="c="+b;g.width=g.clientWidth+this.I;this.I^=-2}else return g.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+b+"</string></arguments></invoke>")}},
M:function(a,b){this.f();this.H();this.z.width=a;this.z.height=b;this.a.push("2",a,b);this.b||this.d();this.c=0},D:function(a){var b=a.uniqueID,c=o+":"+b;if(b!==this.h){a=n[b].getContext("2d");if(!a.c){b=++W[b];c+=":"+b;a.a.push("3",b);a.b||a.d();a.c=1}}return c}};w.prototype={addColorStop:function(a,b){var c=this.L,d=this.id;(""+b).indexOf("%")>0&&k.g&&c.i.push(c.a.length+3);c.a.push("y",d,a,b)}};var B={initElement:function(a){if(a.getContext)return a;var b=a.uniqueID,c="external"+b;x[b]=0;t[b]=
{};u[b]=1;W[b]=0;t[b][o+":"+b]=1;a.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+c+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+c+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>';
n[b]=a;var d=a.firstChild;y[b]=a.lastChild;var e=l.body.contains;if(e(a))d.movie=v;else var f=setInterval(function(){if(e(a)){clearInterval(f);d.movie=v}},0);if(l.compatMode==="BackCompat"||!i.XMLHttpRequest)y[b].style.overflow="hidden";var h=new A(a,d);a.getContext=function(g){return g==="2d"?h:j};a.toDataURL=function(g,q){g=g?g.toLowerCase():"image/png";g==="image/jpeg"?h.a.push("A",g,q||0.5):h.a.push("A",g);return h.f().slice(1,-1)};d.attachEvent(O,K);if(k.K){d.attachEvent(E,C);a.attachEvent(F,
D)}return a},saveImage:function(a){a.firstChild.saveImage()},setOptions:function(a){for(var b in a){var c=a[b];switch(b){case "turbo":k.g=c;break;case "delay":k.C=c;break;case "disableContextMenu":c=k.K=c;var d=void 0;for(d in n){var e=n[d],f=c?"attachEvent":"detachEvent";e.firstChild[f](E,C);e[f](F,D)}}}},trigger:function(a,b){n[a].fireEvent("on"+b)},unlock:function(a,b){u[a]&&--u[a];if(b){var c=n[a],d=c.firstChild,e=parseInt(c.width),f=parseInt(c.height);if(isNaN(e)||e<0)e=300;if(isNaN(f)||f<0)f=
150;c.style.width=e+"px";c.style.height=f+"px";d.width=c.width=e;d.height=c.height=f;d.resize(e,f);c.attachEvent(P,L);x[a]=1}}};l.createElement(o);l.createStyleSheet().cssText=o+"{display:inline-block;overflow:hidden;width:300px;height:150px}";l.attachEvent(J,I);i.attachEvent(N,M);if(v.indexOf(location.protocol+"//"+location.host+"/")===0){p=new ActiveXObject("Microsoft.XMLHTTP");p.open("GET",v,false);p.send(j)}i[Q]=A;i[R]=w;i[S]=H;i[T]=B;i[U]={init:function(){},init_:function(){},initElement:B.initElement}}(window,
document);
