!function(){for(var t,n=function(){},e=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=e.length,i=window.console=window.console||{};o--;)t=e[o],i[t]||(i[t]=n)}(),function(){"use strict";function t(t){this.a=c,this.b=void 0,this.d=[];var n=this;try{t(function(t){o(n,t)},function(t){i(n,t)})}catch(e){i(n,e)}}function n(n){return new t(function(t,e){e(n)})}function e(n){return new t(function(t){t(n)})}function o(t,n){if(t.a===c){if(n===t)throw new TypeError("Promise resolved with itself.");var e=!1;try{var a=n&&n.then;if(null!==n&&"object"==typeof n&&"function"==typeof a)return a.call(n,function(n){e||o(t,n),e=!0},function(n){e||i(t,n),e=!0}),void 0}catch(s){return e||i(t,s),void 0}t.a=0,t.b=n,r(t)}}function i(t,n){if(t.a===c){if(n===t)throw new TypeError("Promise rejected with itself.");t.a=1,t.b=n,r(t)}}function r(t){setTimeout(function(){if(t.a!==c)for(;t.d.length;){var n=t.d.shift(),e=n[0],o=n[1],i=n[2],n=n[3];try{0===t.a?"function"==typeof e?i(e.call(void 0,t.b)):i(t.b):1===t.a&&("function"==typeof o?i(o.call(void 0,t.b)):n(t.b))}catch(r){n(r)}}},0)}function a(n){return new t(function(t,e){function o(e){return function(o){r[e]=o,i+=1,i===n.length&&t(r)}}var i=0,r=[];0===n.length&&t(r);for(var a=0;a<n.length;a+=1)n[a].c(o(a),e)})}function s(n){return new t(function(t,e){for(var o=0;o<n.length;o+=1)n[o].c(t,e)})}var c=2;t.prototype.e=function(t){return this.c(void 0,t)},t.prototype.c=function(n,e){var o=this;return new t(function(t,i){o.d.push([n,e,t,i]),r(o)})},window.Promise||(window.Promise=t,window.Promise.resolve=e,window.Promise.reject=n,window.Promise.race=s,window.Promise.all=a,window.Promise.prototype.then=t.prototype.c,window.Promise.prototype["catch"]=t.prototype.e)}(),function(){"use strict";function t(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.f=document.createElement("span"),this.e=document.createElement("span"),this.d=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.f.style.cssText="display:inline-block;width:200%;height:200%;",this.b.appendChild(this.f),this.c.appendChild(this.e),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(t,n,e){t.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;visibility:hidden;position:absolute;width:auto;margin:0;padding:0;top:0;white-space:nowrap;font-size:100px;font-family:"+n+";"+e}function e(t){var n=t.a.offsetWidth,e=n+100;return t.e.style.width=e+"px",t.c.scrollLeft=e,t.b.scrollLeft=t.b.scrollWidth+100,t.d!==n?(t.d=n,!0):!1}function o(t,n){t.b.addEventListener("scroll",function(){e(t)&&null!==t.a.parentNode&&n(t.d)},!1),t.c.addEventListener("scroll",function(){e(t)&&null!==t.a.parentNode&&n(t.d)},!1),e(t)}function i(t,n){this.family=t,this.style=n.style||"normal",this.variant=n.variant||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"stretch",this.featureSettings=n.featureSettings||"normal"}var r=null;i.prototype.a=function(e){e=e||"BESbswy";var i="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",a=document.createElement("div"),s=new t(e),c=new t(e),l=new t(e),u=-1,d=-1,f=-1,h=-1,p=-1,m=-1,g=this;return n(s,"sans-serif",i),n(c,"serif",i),n(l,"monospace",i),a.appendChild(s.a),a.appendChild(c.a),a.appendChild(l.a),document.body.appendChild(a),h=s.a.offsetWidth,p=c.a.offsetWidth,m=l.a.offsetWidth,new Promise(function(t,e){function w(){null!==a.parentNode&&document.body.removeChild(a)}function v(){if(-1!==u&&-1!==d&&-1!==f&&u===d&&d===f){if(null===r){var n=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);r=!!n&&(536>parseInt(n[1],10)||536===parseInt(n[1],10)&&11>=parseInt(n[2],10))}r?u===h&&d===h&&f===h||u===p&&d===p&&f===p||u===m&&d===m&&f===m||(w(),t(g)):(w(),t(g))}}setTimeout(function(){w(),e(g)},3e3),o(s,function(t){u=t,v()}),n(s,g.family+",sans-serif",i),o(c,function(t){d=t,v()}),n(c,g.family+",serif",i),o(l,function(t){f=t,v()}),n(l,g.family+",monospace",i)})},window.FontFaceObserver=i,window.FontFaceObserver.prototype.check=i.prototype.a}(),function(t,n,e){"use strict";if(!history.pushState)return t.fn.smoothState=function(){return this},t.fn.smoothState.options={},void 0;if(!t.fn.smoothState){var o=t("html, body"),i=n.console||!1,r={anchors:"a",prefetch:!1,blacklist:".no-smoothstate, [target]",development:!1,pageCacheSize:0,alterRequestUrl:function(t){return t},onStart:{duration:0,render:function(){o.scrollTop(0)}},onProgress:{duration:0,render:function(){o.css("cursor","wait"),o.find("a").css("cursor","wait")}},onEnd:{duration:0,render:function(t,n,e){o.css("cursor","auto"),o.find("a").css("cursor","auto"),n.html(e)}},callback:function(){}},a={isExternal:function(t){var e=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==n.location.protocol?!0:"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[n.location.protocol]+")?$"),"")!==n.location.host?!0:!1},isHash:function(t){var e=t.indexOf(n.location.pathname)>0?!0:!1,o=t.indexOf("#")>0?!0:!1;return e&&o?!0:!1},shouldLoad:function(t,n){var e=t.prop("href");return!a.isExternal(e)&&!a.isHash(e)&&!t.is(n)},htmlDoc:function(n){var e,o=t(),i=/<(\/?)(html|head|body|title|base|meta)(\s+[^>]*)?>/gi,r="ss"+Math.round(1e5*Math.random()),a=n.replace(i,function(n,e,i,a){var s={};return e||(t.merge(o,t("<"+i+"/>")),a&&t.each(t("<div"+a+"/>")[0].attributes,function(t,n){s[n.name]=n.value}),o.eq(-1).attr(s)),"<"+e+"div"+(e?"":" id='"+r+(o.length-1)+"'")+">"});return o.length?(e||(e=t("<div/>")),e.html(a),t.each(o,function(t){var n=e.find("#"+r+t).before(o[t]);o.eq(t).html(n.contents()),n.remove()}),e.children().unwrap()):t(n)},clearIfOverCapacity:function(t,n){return Object.keys||(Object.keys=function(t){var n,e=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),Object.keys(t).length>n&&(t={}),t},getContentById:function(n,e){e=e instanceof jQuery?e:a.htmlDoc(e);var o=e.find(n),i=o.length?t.trim(o.html()):e.filter(n).html(),r=i.length?t(i):null;return r},storePageIn:function(t,n,e){return e=e instanceof jQuery?e:a.htmlDoc(e),t[n]={status:"loaded",title:e.find("title").text(),html:e},t},triggerAllAnimationEndEvent:function(n,e){e=" "+e||"";var o=0,i="animationstart webkitAnimationStart oanimationstart MSAnimationStart",r="animationend webkitAnimationEnd oanimationend MSAnimationEnd",s="allanimationend",c=function(e){t(e.delegateTarget).is(n)&&(e.stopPropagation(),o++)},l=function(e){t(e.delegateTarget).is(n)&&(e.stopPropagation(),o--,0===o&&n.trigger(s))};n.on(i,c),n.on(r,l),n.on("allanimationend"+e,function(){o=0,a.redraw(n)})},redraw:function(t){t.height()}},s=function(e){if(null!==e.state){var o=n.location.href,i=t("#"+e.state.id),r=i.data("smoothState");r.href===o||a.isHash(o)||r.load(o,!0)}},c=function(o,r){var s=t(o),c={},l=n.location.href,u=function(t,e){e=e||!1;var o=!1,i=!1,a={loaded:function(){var r=o?"ss.onProgressEnd":"ss.onStartEnd";i&&o?i&&d(t):s.one(r,function(){d(t)}),e||n.history.pushState({id:s.prop("id")},c[t].title,t)},fetching:function(){o||(o=!0,s.one("ss.onStartEnd",function(){r.onProgress.render(t,s,null),setTimeout(function(){s.trigger("ss.onProgressEnd"),i=!0},r.onStart.duration)})),setTimeout(function(){c.hasOwnProperty(t)&&a[c[t].status]()},10)},error:function(){n.location=t}};c.hasOwnProperty(t)||f(t),r.onStart.render(t,s,null),setTimeout(function(){s.trigger("ss.onStartEnd")},r.onStart.duration),a[c[t].status]()},d=function(t){var o="#"+s.prop("id"),l=c[t]?a.getContentById(o,c[t].html):null;l?(e.title=c[t].title,s.data("smoothState").href=t,r.onEnd.render(t,s,l),s.one("ss.onEndEnd",function(){r.callback(t,s,l)}),setTimeout(function(){s.trigger("ss.onEndEnd")},r.onEnd.duration)):!l&&r.development&&i?i.warn("No element with an id of "+o+" in response from "+t+" in "+c):n.location=t},f=function(n){if(!c.hasOwnProperty(n)){c=a.clearIfOverCapacity(c,r.pageCacheSize),c[n]={status:"fetching"};var e=r.alterRequestUrl(n)||n,o=t.ajax(e);o.success(function(t){a.storePageIn(c,n,t),s.data("smoothState").cache=c}),o.error(function(){c[n].status="error"})}},h=function(n){var e=t(n.currentTarget),o=e.prop("href");a.shouldLoad(e,r.blacklist)&&(n.stopPropagation(),f(o))},p=function(n){var e=t(n.currentTarget),o=e.prop("href");n.metaKey||n.ctrlKey||!a.shouldLoad(e,r.blacklist)||(n.stopPropagation(),n.preventDefault(),u(o))},m=function(t){t.on("click",r.anchors,p),r.prefetch&&t.on("mouseover touchstart",r.anchors,h)},g=function(t){var n=s.addClass(t).prop("class");s.removeClass(n),setTimeout(function(){s.addClass(n)},0),s.one("ss.onStartEnd ss.onProgressEnd ss.onEndEnd",function(){s.removeClass(t)})};return r=t.extend({},t.fn.smoothState.options,r),null===n.history.state&&n.history.replaceState({id:s.prop("id")},e.title,l),a.storePageIn(c,l,e.documentElement.outerHTML),a.triggerAllAnimationEndEvent(s,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),m(s),{href:l,cache:c,load:u,fetch:f,toggleAnimationClass:g}},l=function(n){return this.each(function(){this.id&&!t.data(this,"smoothState")?t.data(this,"smoothState",new c(this,n)):!this.id&&i&&i.warn("Every smoothState container needs an id but the following one does not have one:",this)})};n.onpopstate=s,t.smoothStateUtility=a,t.fn.smoothState=l,t.fn.smoothState.options=r}}(jQuery,window,document);var tg=tg||{};tg.common={init:function(){var t=$("#js-smooth-state").smoothState({onStart:{duration:250,development:!0,render:function(){t.toggleAnimationClass("is-exiting")}}}).data("smoothState")}},function(t,n){"use strict";if(!(t.document.documentElement.className.indexOf("fonts-loaded")>-1)){var e=new t.FontFaceObserver("LeagueGothicReg",{});t.Promise.all([e.check()]).then(function(){t.document.documentElement.className+=" fonts-loaded"}),n(function(){tg.common.init()})}}(this,jQuery);