(window["webpackJsonp@fseehawer/react-circular-slider"]=window["webpackJsonp@fseehawer/react-circular-slider"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(6),i=a.n(n),l=(a(14),a(1)),c=a(4),s=a(7),d=a(8),u=function(e){var t=e.isDragging,a=e.knobPosition,r=e.knobColor,n=e.knobRadius,i=void 0===n?12:n,c=e.knobSize,s=void 0===c?36:c,d=e.onMouseDown,u=l.a.create({knob:{position:"absolute",left:"-".concat(s/2,"px"),top:"-".concat(s/2,"px"),cursor:"grab",zIndex:3},dragging:{cursor:"grabbing"},pause:{animationPlayState:"paused"},animation:{animationDuration:"1500ms",transformOrigin:"50% 50%",animationIterationCount:"infinite",animationTimingFunction:"ease-out",animationName:[{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.8)"},"100%":{transform:"scale(1)"}}]}});return o.a.createElement("div",{style:{transform:"translate(".concat(a.x,"px, ").concat(a.y,"px)")},className:Object(l.b)(u.knob,t&&u.dragging),onMouseDown:d,onTouchStart:d},o.a.createElement("svg",{width:"".concat(s,"px"),height:"".concat(s,"px"),viewBox:"0 0 ".concat(s," ").concat(s)},o.a.createElement("circle",{className:Object(l.b)(u.animation,t&&u.pause),fill:r,fillOpacity:"0.2",stroke:"none",cx:s/2,cy:s/2,r:s/2}),o.a.createElement("circle",{fill:r,stroke:"none",cx:s/2,cy:s/2,r:i}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"14",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"17",width:"8",height:"1"}),o.a.createElement("rect",{fill:"#FFFFFF",x:"14",y:"20",width:"8",height:"1"})))},b=function(e){var t=e.labelColor,a=e.labelFontSize,r=e.labelValueFontSize,n=e.labelValueAppend,i=e.labelVerticalOffset,c=e.labelHide,s=e.label,d=e.value,u=l.a.create({labels:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:"".concat(t),userSelect:"none",zIndex:1},value:{fontSize:"".concat(r),marginBottom:"calc(".concat(i,")"),position:"relative"},appended:{position:"absolute",right:"0",top:0,transform:"translate(100%, 0)"},hide:{display:"none"}});return o.a.createElement("div",{className:Object(l.b)(u.labels,c&&u.hide)},o.a.createElement("div",{style:{fontSize:a}},s),o.a.createElement("div",{className:Object(l.b)(u.value)},o.a.createElement("code",null,d,o.a.createElement("span",{className:Object(l.b)(u.appended)},n))))},p=function(e){var t=e.width,a=e.label,r=e.direction,n=e.strokeDasharray,i=e.strokeDashoffset,c=e.progressColorFrom,s=e.progressColorTo,d=e.trackColor,u=e.progressSize,b=e.trackSize,p=e.svgFullPath,m=e.radiansOffset,f=e.progressLineCap,g=l.a.create({svg:{position:"relative",zIndex:2},path:{transform:"rotate(".concat(m,"rad) ").concat(-1===r&&"scale(-1, 1)"),transformOrigin:"center center"}});return o.a.createElement("svg",{width:"".concat(t,"px"),height:"".concat(t,"px"),viewBox:"0 0 ".concat(t," ").concat(t),overflow:"visible",className:Object(l.b)(g.svg)},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:a,x1:"100%",x2:"0%"},o.a.createElement("stop",{offset:"0%",stopColor:c}),o.a.createElement("stop",{offset:"100%",stopColor:s}))),o.a.createElement("circle",{strokeWidth:b,fill:"none",stroke:d,cx:t/2,cy:t/2,r:t/2}),o.a.createElement("path",{className:Object(l.b)(g.path),ref:p,strokeDasharray:n,strokeDashoffset:i,strokeWidth:u,strokeLinecap:"round"!==f?"butt":"round",fill:"none",stroke:"url(#".concat(a,")"),d:"\n                        M ".concat(t/2,", ").concat(t/2,"\n                        m 0, -").concat(t/2,"\n                        a ").concat(t/2,",").concat(t/2," 0 0,1 0,").concat(t,"\n                        a -").concat(t/2,",-").concat(t/2," 0 0,1 0,-").concat(t,"\n                    ")}))};function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g="ontouchstart"in window,h={DOWN:g?"touchstart":"mousedown",UP:g?"touchend":"mouseup",MOVE:g?"touchmove":"mousemove"},v=function(e){var t=e.label,a=void 0===t?"ANGLE":t,n=e.width,i=void 0===n?280:n,s=e.direction,m=void 0===s?1:s,g=e.min,v=void 0===g?0:g,O=e.max,k=void 0===O?360:O,C=e.knobColor,E=void 0===C?"#4e63ea":C,w=e.knobZeroPosition,F=void 0===w?"top":w,y=e.labelColor,j=void 0===y?"#272b77":y,S=e.labelFontSize,D=void 0===S?"1rem":S,x=e.labelValueFontSize,z=void 0===x?"4rem":x,P=e.labelValueAppend,M=void 0===P?"":P,N=e.labelVerticalOffset,I=void 0===N?"2rem":N,A=e.labelHide,V=void 0!==A&&A,L=e.progressColorFrom,T=void 0===L?"#80C3F3":L,B=e.progressColorTo,R=void 0===B?"#4990E2":B,H=e.progressSize,U=void 0===H?6:H,W=e.trackColor,X=void 0===W?"#DDDEFB":W,Y=e.trackSize,Z=void 0===Y?6:Y,G=e.data,J=void 0===G?[]:G,K=e.initialDataIndex,Q=void 0===K?0:K,q=e.progressLineCap,$=void 0===q?"round":q,_=e.onChange,ee=void 0===_?function(e){}:_,te=Object(r.useState)({mounted:!1,isDragging:!1,width:i,radius:i/2,label:0,data:[],radians:0,knob:{x:0,y:0},dashFullArray:0,dashFullOffset:0}),ae=Object(d.a)(te,2),re=ae[0],oe=ae[1],ne={top:Math.PI/2,right:0,bottom:-Math.PI/2,left:-Math.PI},ie=Object(r.useRef)(null),le=Object(r.useRef)(null),ce=function(e){return 0===e?1:Math.min(Math.max(e,-1),1)},se=function(e,t){for(var a=[],r=e;r<=t;r++)a.push(r);return a},de=Object(r.useCallback)((function(){var e=ie.current.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,a=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+a,left:e.left+t}}),[]),ue=Object(r.useCallback)((function(e){var t=re.radius,a=e+ne[F],r=(a>0?a:2*Math.PI+a)*(360/(2*Math.PI)),o=r/360*re.dashFullArray;r=-1===ce(m)?360-r:r;var n=re.data.length/361,i=Math.floor(r*n);oe((function(a){return f({},a,{dashFullOffset:-1===ce(m)?o:re.dashFullArray-o,label:re.data[i],knob:{x:t*Math.cos(e)+t,y:t*Math.sin(e)+t}})})),ee(re.data[i])}),[re.dashFullArray,re.radius,re.data,ne,F,m,ee]),be=Object(r.useCallback)((function(e){oe((function(e){return f({},e,{isDragging:!0})}))}),[]),pe=Object(r.useCallback)((function(e){if(e.preventDefault(),re.isDragging){var t;"touchmove"===e.type&&(t=e.changedTouches[0]);var a=("touchmove"===e.type?t.pageX:e.pageX)-(de().left+re.radius),r=("touchmove"===e.type?t.pageY:e.pageY)-(de().top+re.radius),o=Math.atan2(r,a);ue(o)}}),[re.isDragging,re.radius,ue,de]),me=function(e){oe((function(e){return f({},e,{isDragging:!1})}))};Object(r.useEffect)((function(){var e=le.current.getTotalLength();oe((function(t){return f({},t,{mounted:!0,data:J.length?Object(c.a)(J):Object(c.a)(se(v,k)),dashFullArray:e})}))}),[k,v]),Object(r.useEffect)((function(){var e=J.length,t=Q>e-1?e:Q;if(oe((function(e){return f({},e,{radians:Math.PI/2-ne[F]})})),t&&e){var a=Math.ceil(360/e),r=ce(m)*t*a*Math.PI/180-ne[F];return ue(r+.005*ce(m))}return ue(-ne[F]+.005*ce(m))}),[re.dashFullArray,Q,F,.005,m,J.length]),Object(r.useEffect)((function(){if(re.isDragging)return window.addEventListener(h.MOVE,pe,{passive:!1}),window.addEventListener(h.UP,me,{passive:!1}),function(){window.removeEventListener(h.MOVE,pe),window.removeEventListener(h.UP,me)}}),[re.isDragging,pe]);var fe=l.a.create({circularSlider:{position:"relative",display:"inline-block",opacity:0,transition:"opacity 1s ease-in"},mounted:{opacity:1}});return o.a.createElement("div",{className:Object(l.b)(fe.circularSlider,re.mounted&&fe.mounted),ref:ie},o.a.createElement(p,{width:i,label:a,direction:m,strokeDasharray:re.dashFullArray,strokeDashoffset:re.dashFullOffset,progressColorFrom:T,progressColorTo:R,trackColor:X,progressSize:U,trackSize:Z,svgFullPath:le,radiansOffset:re.radians,progressLineCap:$}),o.a.createElement(u,{isDragging:re.isDragging,knobPosition:{x:re.knob.x,y:re.knob.y},knobColor:E,onMouseDown:be}),o.a.createElement(b,{labelColor:j,labelFontSize:D,labelVerticalOffset:I,labelValueFontSize:z,labelValueAppend:M,labelHide:V,label:a,value:"".concat(re.label)}))},O=function(){var e=l.a.create({wrapper:{margin:"2rem"},h3:{margin:"3rem 0 2rem 0"},pre:{fontSize:"0.9rem",borderRadius:"0.3rem",backgroundColor:"#eeeeee",padding:"0.5rem"},slider:{padding:"0 0 0.5rem 0"}});return o.a.createElement("div",{className:Object(l.b)(e.wrapper)},o.a.createElement("h3",{className:Object(l.b)(e.h3)},"Anticlockwise rotation with the knob positioned to the right:"),o.a.createElement("div",{className:Object(l.b)(e.slider)},o.a.createElement(v,{direction:-1,knobZeroPosition:"right",labelValueAppend:"\xb0"})),o.a.createElement("pre",{className:Object(l.b)(e.pre)},'<CircularSlider\n    direction={-1}\n    knobZeroPosition="right"\n    labelValueAppend="\xb0"\n/>'),o.a.createElement("h3",{className:Object(l.b)(e.h3)},"Data array with an initial value:"),o.a.createElement("div",{className:Object(l.b)(e.slider)},o.a.createElement(v,{label:"savings",data:["1\u20ac","2\u20ac","3\u20ac","4\u20ac","5\u20ac","6\u20ac","7\u20ac","8\u20ac","9\u20ac","10\u20ac","20\u20ac","30\u20ac","40\u20ac","50\u20ac","60\u20ac","70\u20ac","80\u20ac","90\u20ac","100\u20ac","200\u20ac","300\u20ac","400\u20ac","500\u20ac","600\u20ac","700\u20ac","800\u20ac","900\u20ac","1000\u20ac","2000\u20ac","3000\u20ac","4000\u20ac","5000\u20ac","6000\u20ac","7000\u20ac","8000\u20ac","9000\u20ac","10000\u20ac"],initialDataIndex:10,labelColor:"#005a58",knobColor:"#005a58",progressColorFrom:"#00bfbd",progressColorTo:"#009c9a",progressSize:24,trackColor:"#eeeeee",trackSize:24})),o.a.createElement("pre",{className:Object(l.b)(e.pre)},'<CircularSlider\n    label="savings"\n    data=["1\u20ac","2\u20ac",...]\n    initialDataIndex={10}\n    labelColor="#005a58"\n    knobColor="#005a58"\n    progressColorFrom="#00bfbd"\n    progressColorTo="#005a58"\n    progressSize={24}\n    trackColor="#eeeeee"\n    trackSize={24}\n/>'),o.a.createElement("h3",{className:Object(l.b)(e.h3)},"Some props with flat line cap:"),o.a.createElement("div",{className:Object(l.b)(e.slider)},o.a.createElement(v,{label:"Alphabet",progressLineCap:"flat",initialDataIndex:1,width:250,labelColor:"#212121",labelValueFontSize:"6rem",knobColor:"#212121",progressColorFrom:"#ff8500",progressColorTo:"#a15400",progressSize:8,trackColor:"#eeeeee",trackSize:4,data:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")})),o.a.createElement("pre",{className:Object(l.b)(e.pre)},'<CircularSlider\n    width={200}\n    progressLineCap="flat"\n    initialDataIndex={1}\n    label="Alphabet"\n    data=["A","B","C",...]\n    labelColor="#212121"\n    labelValueFontSize="6rem"\n    knobColor="#212121"\n    progressColorFrom="#ff8500"\n    progressColorTo="#a15400"\n    progressSize={8}\n    trackColor="#eeeeee"\n    trackSize={4}\n/>'))};i.a.render(o.a.createElement(O,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c50f9f52.chunk.js.map