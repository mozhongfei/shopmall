(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f94d0ea8"],{"0b0b":function(t,e,n){},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,a="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,s,l,u){var f=n+t.length,g=s.length,d=c;return void 0!==l&&(l=r(l),d=o),a.call(u,d,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=l[a.slice(1,-1)];break;default:var c=+a;if(0===c)return r;if(c>g){var u=i(c/10);return 0===u?r:u<=g?void 0===s[u-1]?a.charAt(1):s[u-1]+a.charAt(1):r}o=s[c-1]}return void 0===o?"":o}))}},"107c":function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(u||f)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),a=n("94ca"),o=n("7156"),c=n("9112"),s=n("9bf2").f,l=n("241c").f,u=n("44e7"),f=n("ad6d"),g=n("9f7f"),d=n("6eeb"),p=n("d039"),h=n("5135"),v=n("69f3").enforce,b=n("2626"),y=n("b622"),x=n("fce3"),m=n("107c"),C=y("match"),k=i.RegExp,w=k.prototype,$=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,E=/a/g,T=/a/g,S=new k(E)!==E,R=g.UNSUPPORTED_Y,_=r&&(!S||R||x||m||p((function(){return T[C]=!1,k(E)!=E||k(T)==T||"/a/i"!=k(E,"i")}))),I=function(t){for(var e,n=t.length,r=0,i="",a=!1;r<=n;r++)e=t.charAt(r),"\\"!==e?a||"."!==e?("["===e?a=!0:"]"===e&&(a=!1),i+=e):i+="[\\s\\S]":i+=e+t.charAt(++r);return i},O=function(t){for(var e,n=t.length,r=0,i="",a=[],o={},c=!1,s=!1,l=0,u="";r<=n;r++){if(e=t.charAt(r),"\\"===e)e+=t.charAt(++r);else if("]"===e)c=!1;else if(!c)switch(!0){case"["===e:c=!0;break;case"("===e:$.test(t.slice(r+1))&&(r+=2,s=!0),i+=e,l++;continue;case">"===e&&s:if(""===u||h(o,u))throw new SyntaxError("Invalid capture group name");o[u]=!0,a.push([u,l]),s=!1,u="";continue}s?u+=e:i+=e}return[i,a]};if(a("RegExp",_)){for(var D=function(t,e){var n,r,i,a,s,l,g=this instanceof D,d=u(t),p=void 0===e,h=[],b=t;if(!g&&d&&p&&t.constructor===D)return t;if((d||t instanceof D)&&(t=t.source,p&&(e="flags"in b?b.flags:f.call(b))),t=void 0===t?"":String(t),e=void 0===e?"":String(e),b=t,x&&"dotAll"in E&&(r=!!e&&e.indexOf("s")>-1,r&&(e=e.replace(/s/g,""))),n=e,R&&"sticky"in E&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,""))),m&&(a=O(t),t=a[0],h=a[1]),s=o(k(t,e),g?this:w,D),(r||i||h.length)&&(l=v(s),r&&(l.dotAll=!0,l.raw=D(I(t),n)),i&&(l.sticky=!0),h.length&&(l.groups=h)),t!==b)try{c(s,"source",""===b?"(?:)":b)}catch(y){}return s},A=function(t){t in D||s(D,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},L=l(k),j=0;L.length>j;)A(L[j++]);w.constructor=D,D.prototype=w,d(i,"RegExp",D)}b("RegExp")},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("d039"),a=n("825a"),o=n("50c4"),c=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("0cb2"),f=n("14c3"),g=n("b622"),d=g("replace"),p=Math.max,h=Math.min,v=function(t){return void 0===t?t:String(t)},b=function(){return"$0"==="a".replace(/./,"$0")}(),y=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),x=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=y?"$":"$0";return[function(t,n){var r=s(this),i=void 0==t?void 0:t[d];return void 0!==i?i.call(t,r,n):e.call(String(r),t,n)},function(t,i){if("string"===typeof i&&-1===i.indexOf(r)&&-1===i.indexOf("$<")){var s=n(e,this,t,i);if(s.done)return s.value}var g=a(this),d=String(t),b="function"===typeof i;b||(i=String(i));var y=g.global;if(y){var x=g.unicode;g.lastIndex=0}var m=[];while(1){var C=f(g,d);if(null===C)break;if(m.push(C),!y)break;var k=String(C[0]);""===k&&(g.lastIndex=l(d,o(g.lastIndex),x))}for(var w="",$=0,E=0;E<m.length;E++){C=m[E];for(var T=String(C[0]),S=p(h(c(C.index),d.length),0),R=[],_=1;_<C.length;_++)R.push(v(C[_]));var I=C.groups;if(b){var O=[T].concat(R,S,d);void 0!==I&&O.push(I);var D=String(i.apply(void 0,O))}else D=u(T,d,S,R,I,i);S>=$&&(w+=d.slice($,S)+D,$=S+T.length)}return w+d.slice($)}]}),!x||!b||y)},"7a74":function(t,e,n){t.exports=n.p+"img/back.26df9036.svg"},"8a3b":function(t,e,n){"use strict";n("a413")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"90b9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));n("ac1f"),n("5319"),n("4d63"),n("25f0");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=null;return function(){for(var r=this,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){t.apply(r,a)}),e)}}function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(e)){var i=n[r]+"";e=e.replace(RegExp.$1,1==RegExp.$1.length?i:a(i))}return e}function a(t){return("00"+t).substr(t.length)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=n("5692"),o=n("7c73"),c=n("69f3").get,s=n("fce3"),l=n("107c"),u=RegExp.prototype.exec,f=a("native-string-replace",String.prototype.replace),g=u,d=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),p=i.UNSUPPORTED_Y||i.BROKEN_CARET,h=void 0!==/()??/.exec("")[1],v=d||h||p||s||l;v&&(g=function(t){var e,n,i,a,s,l,v,b=this,y=c(b),x=y.raw;if(x)return x.lastIndex=b.lastIndex,e=g.call(x,t),b.lastIndex=x.lastIndex,e;var m=y.groups,C=p&&b.sticky,k=r.call(b),w=b.source,$=0,E=t;if(C&&(k=k.replace("y",""),-1===k.indexOf("g")&&(k+="g"),E=String(t).slice(b.lastIndex),b.lastIndex>0&&(!b.multiline||b.multiline&&"\n"!==t[b.lastIndex-1])&&(w="(?: "+w+")",E=" "+E,$++),n=new RegExp("^(?:"+w+")",k)),h&&(n=new RegExp("^"+w+"$(?!\\s)",k)),d&&(i=b.lastIndex),a=u.call(C?n:b,E),C?a?(a.input=a.input.slice($),a[0]=a[0].slice($),a.index=b.lastIndex,b.lastIndex+=a[0].length):b.lastIndex=0:d&&a&&(b.lastIndex=b.global?a.index+a[0].length:i),h&&a&&a.length>1&&f.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a&&m)for(a.groups=l=o(null),s=0;s<m.length;s++)v=m[s],l[v[0]]=a[v[1]];return a}),t.exports=g},"9bd0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,r){return n("div",{key:r,staticClass:"tab-control-item",class:{active:r===t.currentIndex},on:{click:function(e){return t.itemClick(r)}}},[n("span",[t._v(t._s(e))])])})),0)},i=[],a={name:"TabControl",data:function(){return{currentIndex:0}},props:{titles:{type:Array,default:function(){return[]}}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("tabClick",t)}},components:{}},o=a,c=(n("8a3b"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"03203321",null);e["a"]=s.exports},"9f7f":function(t,e,n){var r=n("d039"),i=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a413:function(t,e,n){},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b145:function(t,e,n){},b95e:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return a}));var r="pop",i="new",a="sell"},bb51:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Category"}},[r("nav-bar",{staticClass:"category-bar"},[r("div",{staticClass:"back-img",attrs:{slot:"left"},on:{click:t.titleBack},slot:"left"},[r("img",{attrs:{src:n("7a74"),alt:""}})]),r("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),r("div",{staticClass:"content"},[r("category-title",{staticClass:"classifyTitle",on:{getCategoryContent:t.getCategoryContent}}),r("category-content",{ref:"content",staticClass:"classifyContent",attrs:{"content-list":t.contentList,categoryDetail:t.categoryDetail}})],1)],1)},i=[],a=n("a7ac"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"CategoryTitle"}},[n("scroll",{staticClass:"content",attrs:{"probe-type":3}},[n("div",{staticClass:"left"},t._l(t.titleLists,(function(e,r){return n("div",{key:e.maitKey,staticClass:"classifyTitle",class:{classifyTitleBefore:r===t.currentIndex},on:{click:function(n){return t.getCategoryContent(e,r)}}},[t._v(t._s(e.title)+" ")])})),0)])],1)},c=[],s=n("1bab");function l(){return Object(s["a"])({url:"/category"})}function u(t){return Object(s["a"])({url:"/subcategory",params:{maitKey:t}})}function f(t,e){return Object(s["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var g=n("be9b"),d={name:"CategoryTitle",data:function(){return{titleLists:[],currentIndex:0}},components:{Scroll:g["a"]},created:function(){this.getCategoryTitle()},methods:{getCategoryTitle:function(){var t=this;l().then((function(e){t.titleLists=e.data.category.list,t.getCategoryContent(t.titleLists[0],0)}))},getCategoryContent:function(t,e){this.currentIndex=e,this.$emit("getCategoryContent",t)}},mounted:function(){}},p=d,h=(n("d255"),n("2877")),v=Object(h["a"])(p,o,c,!1,null,"4ede3dd2",null),b=v.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"CategoryContent"}},[n("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[n("div",{ref:"right",staticClass:"right"},[n("van-grid",{attrs:{"column-num":2}},t._l(t.contentList,(function(e,r){return n("van-grid-item",{key:r,nativeOn:{click:function(n){return t.gotoLink(e.link)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"item.image"}],staticClass:"img-content",on:{load:t.imageLoad}}),n("div",{staticClass:"title-content"},[t._v(t._s(e.title))])])})),1)],1),n("tab-control",{ref:"tabControl2",attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),n("tab-content-detail",{attrs:{categoryDetail:t.showCategoryDetail}})],1),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.Show,expression:"Show"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["综合","新品","销量"]},on:{tabClick:t.tabClick}}),n("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}})],1)},x=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("goods-list",{attrs:{goods:t.categoryDetail}})},C=[],k=n("6d71"),w={name:"TabContentDetail",components:{GoodsList:k["a"]},props:{categoryDetail:{type:Array,default:function(){return[]}}}},$=w,E=Object(h["a"])($,m,C,!1,null,"27f31b08",null),T=E.exports,S=n("9bd0"),R=n("d399"),_=n("90b9"),I=n("eecb"),O=n("b95e"),D={name:"CategoryContent",props:{contentList:{type:Array,default:function(){return[]}},categoryDetail:{type:Object,default:function(){return{}}}},data:function(){return{refresh:"",positoinY:"",Show:!1}},mixins:[I["b"],I["a"]],computed:{showCategoryDetail:function(){return this.categoryDetail[this.currentType]}},methods:{tabClick:function(t){switch(t){case 0:this.currentType=O["b"];break;case 1:this.currentType=O["a"];break;case 2:this.currentType=O["c"];break}this.$refs.tabControl1.currentIndex=t,this.$refs.tabControl2.currentIndex=t},imageLoad:function(){this.refresh()},gotoLink:function(t){setTimeout((function(){window.location.href=t}),2e3),Object(R["a"])("声明：2s之后将会跳转到蘑菇街的页面！！！")},contentScroll:function(t){this.positoinY=-t.y,this.isShow=this.positoinY>1e3,this.Show=this.positoinY>this.$refs.right.offsetHeight},backClick:function(){var t=this.$refs.right.offsetHeight;this.positoinY>t?this.$refs.scroll.scrollTo(0,-t,500):this.$refs.scroll.scrollTo(0,0,500)}},components:{Scroll:g["a"],TabControl:S["a"],TabContentDetail:T},mounted:function(){this.$nextTick((function(){this.$on("backTop",(function(){this.$refs.scroll.scrollTo(0,0,0)}))})),this.refresh=Object(_["a"])(this.$refs.scroll.fetchData,500)}},A=D,L=(n("d311"),Object(h["a"])(A,y,x,!1,null,"22496b43",null)),j=L.exports,N={name:"Category",data:function(){return{contentList:[],miniWall:"",categoryDetail:{pop:[],new:[],sell:[]}}},mixins:[I["b"]],methods:{titleBack:function(){this.$router.back()},getCategoryContent:function(t){var e=this;this.miniWall=t.miniWallkey,u(t.maitKey).then((function(t){e.contentList=t.data.list,e.$refs.content.$emit("backTop")})),this._getCategoryDetail(O["b"]),this._getCategoryDetail(O["c"]),this._getCategoryDetail(O["a"])},_getCategoryDetail:function(t){var e=this,n=this.miniWall;f(n,t).then((function(n){e.categoryDetail[t]=n}))}},components:{NavBar:a["a"],CategoryTitle:b,CategoryContent:j}},Y=N,B=(n("e915"),Object(h["a"])(Y,r,i,!1,null,"1024a575",null));e["default"]=B.exports},d255:function(t,e,n){"use strict";n("f8fb9")},d311:function(t,e,n){"use strict";n("0b0b")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("9263"),a=n("d039"),o=n("b622"),c=n("9112"),s=o("species"),l=RegExp.prototype;t.exports=function(t,e,n,u){var f=o(t),g=!a((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=g&&!a((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!g||!d||n){var p=/./[f],h=e(f,""[t],(function(t,e,n,r,a){var o=e.exec;return o===i||o===l.exec?g&&!a?{done:!0,value:p.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}));r(String.prototype,t,h[0]),r(l,f,h[1])}u&&c(l[f],"sham",!0)}},e915:function(t,e,n){"use strict";n("b145")},eecb:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var r=n("fdd6"),i=n("b95e"),a={components:{BackTop:r["a"]},data:function(){return{isShow:!1}},methods:{backClick:function(){this.$refs.scroll.scrollTo(0,0,500)}}},o={data:function(){return{currentType:i["b"]}},methods:{}}},f8fb9:function(t,e,n){},fce3:function(t,e,n){var r=n("d039");t.exports=r((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);