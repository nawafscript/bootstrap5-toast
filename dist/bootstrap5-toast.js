var Bootstrap5Toast;(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",o="hour",s="day",a="week",u="month",c="quarter",d="year",h="date",l="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),o=n-i<0,s=e.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:a,d:s,D:h,h:o,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",b={};b[v]=m;var $=function(t){return t instanceof E},T=function(t,e,n){var r;if(!t)return v;if("string"==typeof t)b[t]&&(r=t),e&&(b[t]=e,r=t);else{var i=t.name;b[i]=t,r=i}return!n&&r&&(v=r),r||!n&&v},w=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new E(n)},S=g;S.l=T,S.i=$,S.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var E=function(){function m(t){this.$L=T(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===l)},y.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return w(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<w(t)},y.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,c=!!S.u(e)||e,l=S.p(t),f=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(s)},p=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,y=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(l){case d:return c?f(1,0):f(31,11);case u:return c?f(1,y):f(0,y+1);case a:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return f(c?g-$:g+(6-$),y);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case r:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var a,c=S.p(t),l="set"+(this.$u?"UTC":""),f=(a={},a[s]=l+"Date",a[h]=l+"Date",a[u]=l+"Month",a[d]=l+"FullYear",a[o]=l+"Hours",a[i]=l+"Minutes",a[r]=l+"Seconds",a[n]=l+"Milliseconds",a)[c],p=c===s?this.$D+(e-this.$W):e;if(c===u||c===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[S.p(t)]()},y.add=function(n,c){var h,l=this;n=Number(n);var f=S.p(c),p=function(t){var e=w(l);return S.w(e.date(e.date()+Math.round(t*n)),l)};if(f===u)return this.set(u,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===s)return p(1);if(f===a)return p(7);var m=(h={},h[i]=t,h[o]=e,h[r]=1e3,h)[f]||1,y=this.$d.getTime()+n*m;return S.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),o=this.$H,s=this.$m,a=this.$M,u=n.weekdays,c=n.months,d=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].substr(0,o)},h=function(t){return S.s(o%12||12,t,"0")},f=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:S.s(a+1,2,"0"),MMM:d(n.monthsShort,a,c,3),MMMM:d(c,a),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,u,2),ddd:d(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:S.s(o,2,"0"),h:h(1),hh:h(2),a:f(o,s,!0),A:f(o,s,!1),m:String(s),mm:S.s(s,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||m[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,l){var f,p=S.p(h),m=w(n),y=(m.utcOffset()-this.utcOffset())*t,g=this-m,v=S.m(this,m);return v=(f={},f[d]=v/12,f[u]=v,f[c]=v/3,f[a]=(g-y)/6048e5,f[s]=(g-y)/864e5,f[o]=g/e,f[i]=g/t,f[r]=g/1e3,f)[p]||g,l?v:S.a(v)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return b[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=T(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),M=E.prototype;return w.prototype=M,[["$ms",n],["$s",r],["$m",i],["$H",o],["$W",s],["$M",u],["$y",d],["$D",h]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,E,w),t.$i=!0),w},w.locale=T,w.isDayjs=$,w.unix=function(t){return w(1e3*t)},w.en=b[v],w.Ls=b,w.p={},w}()},110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,o,s,a){for(var u,c,d,h=o.$locale().relativeTime||i,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=l.length,p=0;p<f;p+=1){var m=l[p];m.d&&(u=s?n(e).diff(o,m.d,!0):o.diff(e,m.d,!0));var y=(t.rounding||Math.round)(Math.abs(u));if(d=u>0,y<=m.r||!m.r){y<=1&&p>0&&(m=l[p-1]);var g=h[m.l];a&&(y=a(""+y)),c="string"==typeof g?g.replace("%d",y):g(y,r,m.l,d);break}}if(r)return c;var v=d?h.future:h.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(t,e){return o(t,e,this,!0)},r.from=function(t,e){return o(t,e,this)};var s=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})();var r={};(()=>{"use strict";n.r(r),n.d(r,{POSITION:()=>t,TYPES:()=>e,initialize:()=>M});var t,e,i="bootstrap5-toast-";function o(t){return i+t}!function(t){t.TOP_START="TOP_START",t.TOP_END="TOP_END",t.BOTTOM_START="BOTTOM_START",t.BOTTOM_END="BOTTOM_END",t.CENTER_START="CENTER_START",t.CENTER_END="CENTER_END",t.CENTER="CENTER"}(t||(t={})),function(t){t.DEFAULT="DEFAULT",t.PRIMARY="PRIMARY",t.INFO="INFO",t.SUCCESS="SUCCESS",t.WARNING="WARNING",t.DANGER="DANGER",t.DARK="DARK",t.SWEET="SWEET"}(e||(e={}));const s={positions:{TOP_START:o("top")+" "+o("start"),TOP_END:o("top")+" "+o("end"),TOP_CENTER:"",MIDDLE_LEFT:"",MIDDLE_RIGHT:"",BOTTOM_START:o("bottom")+" "+o("start"),BOTTOM_END:o("bottom")+" "+o("end")},types:{DEFAULT:["bg-default"],PRIMARY:["bg-primary","text-light"],INFO:["bg-info","text-light"],SUCCESS:["bg-success","text-light"],WARNING:["bg-warning"],DANGER:["bg-danger","text-light"],DARK:["bg-dark","text-light"],SWEET:["bg-sweet","text-light"]}};var a,u=n(484),c=n.n(u),d=new Uint8Array(16);function h(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(d)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,f=function(t){return"string"==typeof t&&l.test(t)};for(var p=[],m=0;m<256;++m)p.push((m+256).toString(16).substr(1));const y=function(t,e,n){var r=(t=t||{}).random||(t.rng||h)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(p[t[e+0]]+p[t[e+1]]+p[t[e+2]]+p[t[e+3]]+"-"+p[t[e+4]]+p[t[e+5]]+"-"+p[t[e+6]]+p[t[e+7]]+"-"+p[t[e+8]]+p[t[e+9]]+"-"+p[t[e+10]]+p[t[e+11]]+p[t[e+12]]+p[t[e+13]]+p[t[e+14]]+p[t[e+15]]).toLowerCase();if(!f(n))throw TypeError("Stringified UUID is invalid");return n}(r)};var g=n(110),v=n.n(g),b=function(t,e){return t.classList.contains(e)};const $=function(){function t(t,e){return this.selector=i+"-notification",this.element=new Audio(t),this.parent=e,this.make(),this}return t.prototype.make=function(){this.element.id=this.selector,this.parent.querySelector("#"+this.selector)||this.parent.appendChild(this.element)},Object.defineProperty(t.prototype,"instance",{get:function(){return this.element},enumerable:!1,configurable:!0}),t}();var T=function(){return T=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},T.apply(this,arguments)};c().extend(v());const w=function(){function e(e){var n=this;this.CloseEvent=function(){n.removeElement(n.item)},this.options=T({dismissible:!0,duration:3,pausable:!0,id:y(),space:5,text:"",title:"",position:t.TOP_END},e),this.options.duration>0&&(this.options.duration=1e3*this.options.duration),this.group=this.options.position,Object.keys(t).includes(this.options.position)?this.options.position=s.positions[this.options.position]:this.options.position=s.positions.TOP_END,this.item=document.createElement("div"),this.spaceBetween=5,this.sound=this.options.soundable&&this.options.soundSource?new $(this.options.soundSource,this.parentElement):void 0}return e.prototype.show=function(){var t=this.parentElement,e=this.build;return t.insertBefore(e,t.firstChild),this.sound&&this.sound.instance.play().catch((function(){console.warn("Sound source given not found or not supported.")})),this.orderize(),this},Object.defineProperty(e.prototype,"build",{get:function(){var t,e,n,r=this,i=(e=this.options,(n=document.createElement("div")).className=(this.options.parent?"position-absolute":"position-fixed")+" "+e.position+"-"+e.space+" "+o("container"),n.style.zIndex="2500",n),a=document.createElement("div");return a.classList.add("toast"),i.setAttribute("data-id",this.options.id),i.setAttribute("data-created-at",this.options.datetime),i.setAttribute("data-group",this.group),Boolean(this.options.noHeader)?(t=a.classList).add.apply(t,s.types[this.options.type]):a.appendChild(function(t){var e,n=t.options,r=document.createElement("div");r.classList.add("toast-header"),n.avatar&&r.appendChild(function(t){var e=document.createElement("img");return e.classList.add("rounded","me-2"),e.src=t.avatar||"",e.width=20,e.height=20,e}(n)),n.type&&(e=r.classList).add.apply(e,s.types[n.type]);var i,o,a,u=document.createElement("strong");if(u.classList.add("me-auto"),u.innerText=n.title,r.appendChild(u),n.datetime){var d=document.createElement("small");d.innerText=(i=n.datetime,c()(i).fromNow()),r.appendChild(d)}return console.log(n.dismissible),function(t){if("boolean"==typeof t)return t;if(!t)return!1;switch(t.toLocaleLowerCase()){case"true":case"1":case"on":case"yes":return!0;default:return!1}}(n.dismissible)&&r.appendChild((o=t.CloseEvent,(a=document.createElement("button")).classList.add("btn-close"),a.setAttribute("type","button"),a.setAttribute("area-label","Close"),a.addEventListener("click",(function(t){t.stopPropagation(),o()})),a)),r}(this)),a.appendChild(function(t){var e=t.options,n=document.createElement("div");return n.classList.add("toast-body"),n.innerHTML=e.text,n}(this)),i.appendChild(a),new ResizeObserver((function(){r.orderize()})).observe(i),this.item=i,i.classList.add("show"),this.options.duration>0&&setTimeout((function(){r.removeElement(i)}),this.options.duration),i},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentElement",{get:function(){if(this.options.parent){var t=document.querySelector(this.options.parent);if(!t)throw"User root element not exists.";return Array.isArray(t)?t[0]:t}return document.body},enumerable:!1,configurable:!0}),e.prototype.removeElement=function(t){t.classList.remove("show"),"function"==typeof this.options.onCloseCallBack&&this.options.onCloseCallBack(),window.setTimeout((function(){var e;null===(e=t.parentNode)||void 0===e||e.removeChild(t)}),400)},e.prototype.orderize=function(){var t=this,e=this.options.space,n={top:Number(e),bottom:Number(e)},r={top:Number(e),bottom:Number(e)},s={top:Number(e),bottom:Number(e)},a="."+o("container")+"[data-group='"+this.group+"']",u=window.innerWidth>0?window.innerWidth:screen.width;u<=360&&(a="."+o("container"));var c,d=document.querySelectorAll(a);d.length>0&&d.forEach((function(e){console.log(e.clientHeight),c=b(e,o("top"))?o("top"):o("bottom");var a=e.offsetHeight;c=c.substr((i+"-").length-1,c.length-1),u<=360?(e.style[c]=s[c]+"px",s[c]+=a+t.spaceBetween):b(e,"start-"+t.options.space)?(e.style[c]=n[c]+"px",n[c]+=a+t.spaceBetween):(e.style[c]=r[c]+"px",r[c]+=a+t.spaceBetween)}))},e}(),S=n.p+"/assets/sound.wav";var E=function(){return E=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},E.apply(this,arguments)};window.bs5toast_type=e;var M=window.bs5toast=function(t){return new w(E({soundSource:S},t))}})(),Bootstrap5Toast=r})();
//# sourceMappingURL=bootstrap5-toast.js.map