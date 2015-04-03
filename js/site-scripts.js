!function(){for(var t,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],o=n.length,i=window.console=window.console||{};o--;)t=n[o],i[t]||(i[t]=e)}(),function(){"use strict";function t(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.f=document.createElement("span"),this.e=document.createElement("span"),this.d=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.e.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.f.style.cssText="display:inline-block;width:200%;height:200%;",this.b.appendChild(this.f),this.c.appendChild(this.e),this.a.appendChild(this.b),this.a.appendChild(this.c)}function e(t,e,n){t.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+e+";"+n}function n(t){var e=t.a.offsetWidth,n=e+100;return t.e.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.d!==e?(t.d=e,!0):!1}function o(t,e){t.b.addEventListener("scroll",function(){n(t)&&null!==t.a.parentNode&&e(t.d)},!1),t.c.addEventListener("scroll",function(){n(t)&&null!==t.a.parentNode&&e(t.d)},!1),n(t)}function i(t,e){this.family=t,this.style=e.style||"normal",this.variant=e.variant||"normal",this.weight=e.weight||"normal",this.stretch=e.stretch||"stretch",this.featureSettings=e.featureSettings||"normal"}var a=null;i.prototype.a=function(n,i){var r=n||"BESbswy",s=i||3e3,c="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",d=document.createElement("div"),l=new t(r),h=new t(r),u=new t(r),f=-1,p=-1,m=-1,g=-1,v=-1,w=-1,y=this;return e(l,"sans-serif",c),e(h,"serif",c),e(u,"monospace",c),d.appendChild(l.a),d.appendChild(h.a),d.appendChild(u.a),document.body.appendChild(d),g=l.a.offsetWidth,v=h.a.offsetWidth,w=u.a.offsetWidth,new Promise(function(t,n){function i(){null!==d.parentNode&&document.body.removeChild(d)}function r(){if((-1!==f&&-1!==p||-1!==f&&-1!==m||-1!==p&&-1!==m)&&(f===p||f===m||p===m)){if(null===a){var e=/AppleWeb[kK]it\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);a=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}a?f===g&&p===g&&m===g||f===v&&p===v&&m===v||f===w&&p===w&&m===w||(i(),t(y)):(i(),t(y))}}setTimeout(function(){i(),n(y)},s),o(l,function(t){f=t,r()}),e(l,y.family+",sans-serif",c),o(h,function(t){p=t,r()}),e(h,y.family+",serif",c),o(u,function(t){m=t,r()}),e(u,y.family+",monospace",c)})},window.FontFaceObserver=i,window.FontFaceObserver.prototype.check=i.prototype.a}(),/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
function(t){"use strict";t.fn.fitVids=function(e){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>",o.appendChild(a.childNodes[1])}return e&&t.extend(n,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&e.push(n.customSelector);var o=".fitvidsignore";n.ignore&&(o=o+", "+n.ignore);var i=t(this).find(e.join(","));i=i.not("object object"),i=i.not(o),i.each(function(){var e=t(this);if(!(e.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var n="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),i=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),a=n/i;if(!e.attr("id")){var r="fitvid"+Math.floor(999999*Math.random());e.attr("id",r)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*a+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(t,e,n){"use strict";if(!history.pushState)return t.fn.smoothState=function(){return this},t.fn.smoothState.options={},void 0;if(!t.fn.smoothState){var o=t("html, body"),i=e.console||!1,a={anchors:"a",prefetch:!1,blacklist:".no-smoothstate, [target]",development:!1,pageCacheSize:0,alterRequestUrl:function(t){return t},onStart:{duration:0,render:function(){o.scrollTop(0)}},onProgress:{duration:0,render:function(){o.css("cursor","wait"),o.find("a").css("cursor","wait")}},onEnd:{duration:0,render:function(t,e,n){o.css("cursor","auto"),o.find("a").css("cursor","auto"),e.html(n)}},callback:function(){}},r={isExternal:function(t){var n=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof n[1]&&n[1].length>0&&n[1].toLowerCase()!==e.location.protocol?!0:"string"==typeof n[2]&&n[2].length>0&&n[2].replace(new RegExp(":("+{"http:":80,"https:":443}[e.location.protocol]+")?$"),"")!==e.location.host?!0:!1},isHash:function(t){var n=t.indexOf(e.location.pathname)>0?!0:!1,o=t.indexOf("#")>0?!0:!1;return n&&o?!0:!1},shouldLoad:function(t,e){var n=t.prop("href");return!r.isExternal(n)&&!r.isHash(n)&&!t.is(e)},htmlDoc:function(e){var n,o=t(),i=/<(\/?)(html|head|body|title|base|meta)(\s+[^>]*)?>/gi,a="ss"+Math.round(1e5*Math.random()),r=e.replace(i,function(e,n,i,r){var s={};return n||(t.merge(o,t("<"+i+"/>")),r&&t.each(t("<div"+r+"/>")[0].attributes,function(t,e){s[e.name]=e.value}),o.eq(-1).attr(s)),"<"+n+"div"+(n?"":" id='"+a+(o.length-1)+"'")+">"});return o.length?(n||(n=t("<div/>")),n.html(r),t.each(o,function(t){var e=n.find("#"+a+t).before(o[t]);o.eq(t).html(e.contents()),e.remove()}),n.children().unwrap()):t(e)},clearIfOverCapacity:function(t,e){return Object.keys||(Object.keys=function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}),Object.keys(t).length>e&&(t={}),t},getContentById:function(e,n){n=n instanceof jQuery?n:r.htmlDoc(n);var o=n.find(e),i=o.length?t.trim(o.html()):n.filter(e).html(),a=i.length?t(i):null;return a},storePageIn:function(t,e,n){return n=n instanceof jQuery?n:r.htmlDoc(n),t[e]={status:"loaded",title:n.find("title").text(),html:n},t},triggerAllAnimationEndEvent:function(e,n){n=" "+n||"";var o=0,i="animationstart webkitAnimationStart oanimationstart MSAnimationStart",a="animationend webkitAnimationEnd oanimationend MSAnimationEnd",s="allanimationend",c=function(n){t(n.delegateTarget).is(e)&&(n.stopPropagation(),o++)},d=function(n){t(n.delegateTarget).is(e)&&(n.stopPropagation(),o--,0===o&&e.trigger(s))};e.on(i,c),e.on(a,d),e.on("allanimationend"+n,function(){o=0,r.redraw(e)})},redraw:function(t){t.height()}},s=function(n){if(null!==n.state){var o=e.location.href,i=t("#"+n.state.id),a=i.data("smoothState");a.href===o||r.isHash(o)||a.load(o,!0)}},c=function(o,a){var s=t(o),c={},d=e.location.href,l=function(t,n){n=n||!1;var o=!1,i=!1,r={loaded:function(){var a=o?"ss.onProgressEnd":"ss.onStartEnd";i&&o?i&&h(t):s.one(a,function(){h(t)}),n||e.history.pushState({id:s.prop("id")},c[t].title,t)},fetching:function(){o||(o=!0,s.one("ss.onStartEnd",function(){a.onProgress.render(t,s,null),setTimeout(function(){s.trigger("ss.onProgressEnd"),i=!0},a.onStart.duration)})),setTimeout(function(){c.hasOwnProperty(t)&&r[c[t].status]()},10)},error:function(){e.location=t}};c.hasOwnProperty(t)||u(t),a.onStart.render(t,s,null),setTimeout(function(){s.trigger("ss.onStartEnd")},a.onStart.duration),r[c[t].status]()},h=function(t){var o="#"+s.prop("id"),d=c[t]?r.getContentById(o,c[t].html):null;d?(n.title=c[t].title,s.data("smoothState").href=t,a.onEnd.render(t,s,d),s.one("ss.onEndEnd",function(){a.callback(t,s,d)}),setTimeout(function(){s.trigger("ss.onEndEnd")},a.onEnd.duration)):!d&&a.development&&i?i.warn("No element with an id of "+o+" in response from "+t+" in "+c):e.location=t},u=function(e){if(!c.hasOwnProperty(e)){c=r.clearIfOverCapacity(c,a.pageCacheSize),c[e]={status:"fetching"};var n=a.alterRequestUrl(e)||e,o=t.ajax(n);o.success(function(t){r.storePageIn(c,e,t),s.data("smoothState").cache=c}),o.error(function(){c[e].status="error"})}},f=function(e){var n=t(e.currentTarget),o=n.prop("href");r.shouldLoad(n,a.blacklist)&&(e.stopPropagation(),u(o))},p=function(e){var n=t(e.currentTarget),o=n.prop("href");e.metaKey||e.ctrlKey||!r.shouldLoad(n,a.blacklist)||(e.stopPropagation(),e.preventDefault(),l(o))},m=function(t){t.on("click",a.anchors,p),a.prefetch&&t.on("mouseover touchstart",a.anchors,f)},g=function(t){var e=s.addClass(t).prop("class");s.removeClass(e),setTimeout(function(){s.addClass(e)},0),s.one("ss.onStartEnd ss.onProgressEnd ss.onEndEnd",function(){s.removeClass(t)})};return a=t.extend({},t.fn.smoothState.options,a),null===e.history.state&&e.history.replaceState({id:s.prop("id")},n.title,d),r.storePageIn(c,d,n.documentElement.outerHTML),r.triggerAllAnimationEndEvent(s,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),m(s),{href:d,cache:c,load:l,fetch:u,toggleAnimationClass:g}},d=function(e){return this.each(function(){this.id&&!t.data(this,"smoothState")?t.data(this,"smoothState",new c(this,e)):!this.id&&i&&i.warn("Every smoothState container needs an id but the following one does not have one:",this)})};e.onpopstate=s,t.smoothStateUtility=r,t.fn.smoothState=d,t.fn.smoothState.options=a}}(jQuery,window,document);var tg=tg||{};tg.common={init:function(){$(".article__content").fitVids();var t=$("#js-smooth-state").smoothState({onStart:{duration:250,render:function(){t.toggleAnimationClass("is-exiting")}}}).data("smoothState")}},tg.fonts=function(){"use strict";var t=function(){var t=$("html");if(!t.hasClass("fonts-loaded")){var e=new FontFaceObserver("LeagueGothicReg",{});$.when(e.check()).then(function(){t.addClass("fonts-loaded")})}};return{init:t}}(),$(function(){"use strict";tg.common.init(),tg.fonts.init()});