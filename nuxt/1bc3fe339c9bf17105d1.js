(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{463:function(t,e,n){var content=n(467);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("7cc328c5",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d}));n(29),n(30),n(12);var r=n(21),o=(n(140),n(142));function c(content){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,text=Object(o.a)(content,!0,!0);return text.length>t?text.slice(0,t)+"...":text}function l(t,content){var e,n=t.startsWith("og:")?"property":"name";return e={hid:t},Object(r.a)(e,n,t),Object(r.a)(e,"content",content),e}function d(e){var title=e.title,n=e.description,r=e.coverUrl;function o(t){return"string"==typeof t?t:"function"==typeof t?t.call(this):t.toString()}return function(){var e=t.env.SITE_BASE,c=o.bind(this),head={meta:[]};if(title){var d="".concat(c(title)).concat(" / g0v Summit 2020 台灣零時政府雙年會");head.title=d,head.meta.push(l("og:title",d)),head.meta.push(l("twitter:title",d))}if(n){var m=c(n);head.meta.push(l("description",m)),head.meta.push(l("og:description",m)),head.meta.push(l("twitter:description",m))}if(r){var f=c(r);f.startsWith("/")&&(f="".concat(e).concat(r)),head.meta.push(l("og:image",f)),head.meta.push(l("twitter:image",f)),head.meta.push(l("twitter:card","summary_large_image"))}if(this&&(title||n||r)){var h="".concat(e).concat(this.$route.path);head.meta.push(l("og:url",h))}return head}}}).call(this,n(141))},466:function(t,e,n){"use strict";var r=n(463);n.n(r).a},467:function(t,e,n){(e=n(22)(!1)).push([t.i,'.timeline[data-v-19701650]{position:relative;background-color:#50bc83;color:#fff;line-height:1.5;margin:2rem 0}.timeline[data-v-19701650]:before{content:"";display:block;position:absolute;background-color:#555}@media (max-width:800px){.timeline[data-v-19701650]{padding:2rem}.timeline[data-v-19701650]:before{top:0;left:2.75rem;width:.5rem;height:100%}}@media (min-width:801px){.timeline[data-v-19701650]{padding:8rem 4rem}.timeline[data-v-19701650]:before{top:calc(50% - .25rem);left:0;width:100%;height:.5rem}}.timeline-container[data-v-19701650]{max-width:60rem;margin:0 auto;position:relative;display:flex;justify-content:center}@media (max-width:800px){.timeline-container[data-v-19701650]{flex-direction:column}}.timeline-container>.point>.label>.date[data-v-19701650]{font-size:1.125rem}.timeline-container>.point>.label>.title[data-v-19701650]{font-size:1.25rem;line-height:1.375}.timeline-container>.point>.label>.description[data-v-19701650]{font-size:.875rem;line-height:1.25}.timeline-container>.point.small>.circle[data-v-19701650]{width:1.2rem;height:1.2rem;transform:translate(.4rem,.4rem)}@media (max-width:800px){.timeline-container>.point[data-v-19701650]{position:relative;margin:.5rem 0}.timeline-container>.point>.circle[data-v-19701650]{position:absolute;top:0;left:0;width:2rem;height:2rem;border-radius:50%;background-color:#fff}.timeline-container>.point>.label[data-v-19701650]{margin-left:2.5rem}}@media (min-width:801px){.timeline-container>.point[data-v-19701650]{position:relative;flex-grow:1}.timeline-container>.point.large[data-v-19701650]{flex-grow:2}.timeline-container>.point>.circle[data-v-19701650]{width:2rem;height:2rem;border-radius:50%;background-color:#fff}.timeline-container>.point>.label[data-v-19701650]{position:absolute;left:0}.timeline-container>.point:nth-child(odd)>.label[data-v-19701650]{bottom:2.5rem}.timeline-container>.point:nth-child(2n)>.label[data-v-19701650]{top:2.5rem}}',""]),t.exports=e},468:function(t,e,n){var content=n(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("06a834e0",content,!0,{sourceMap:!1})},469:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"// ref":"https://nuxt-community.github.io/nuxt-i18n/vue-i18n-loader.html","en":{"title":"Call for Proposals","CFPButtonText":"Submit Now"},"zh":{"title":"議程招募","CFPButtonText":"馬上投稿"}}'),delete t.options._Ctor}},475:function(t,e,n){"use strict";var r={props:{points:{type:Array,default:function(){return[]}}}},o=(n(466),n(16)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timeline"},[n("div",{staticClass:"timeline-container"},t._l(t.points,(function(e,r){return n("div",{key:r,staticClass:"point",class:e.class},[n("div",{staticClass:"circle"}),t._v(" "),n("div",{staticClass:"label"},[e.date?n("div",{staticClass:"date"},[t._v("\n          "+t._s(e.date)+"\n        ")]):t._e(),t._v(" "),n("div",{staticClass:"title"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),e.description?n("div",{staticClass:"description"},[t._v("\n          "+t._s(e.description)+"\n        ")]):t._e()])])})),0)])}),[],!1,null,"19701650",null);e.a=component.exports},477:function(t,e,n){"use strict";var r=n(468);n.n(r).a},478:function(t,e,n){(e=n(22)(!1)).push([t.i,".agenda>.banner-container[data-v-b70340d0]{max-width:800px;padding:2rem 1rem;margin:auto}.agenda>.banner-container>.banner[data-v-b70340d0]{text-align:center}.agenda>.banner-container>.banner>h1[data-v-b70340d0]{font-size:4rem;line-height:1.125;margin:2rem 0}.agenda>.banner-container>.banner>a.agenda-cta[data-v-b70340d0]{bottom:0;right:0;left:0;margin:auto;width:15rem;height:4rem;padding:0 .5rem;font-size:1.5rem;font-weight:400;background:#fff;border:2px solid #50bc83;border-radius:2rem;color:#555;transition:.5s;box-shadow:inset 0 0 0 0 #50bc83}@media (min-width:800px){.agenda>.banner-container>.banner>a.agenda-cta[data-v-b70340d0]{left:36%;right:auto}}.agenda>.banner-container>.banner>a.agenda-cta[data-v-b70340d0]:hover{color:#fff;box-shadow:inset 800px 0 200px -200px #50bc83}.agenda.en-css>.text-container[data-v-b70340d0]{max-width:60rem}",""]),t.exports=e},479:function(t,e,n){"use strict";var r=n(469),o=n.n(r);e.default=o.a},502:function(t,e,n){"use strict";n.r(e);var r=n(464),o={components:{Timeline:n(475).a},data:function(){return{cfpTimeline:[{date:"6/8",title:this.$t("cfp")},{date:"7/15",title:this.$t("cfpClosed"),description:this.$t("cfpClosedDescription")},{date:"8/2",title:this.$t("cfpFinalized")},{date:this.$t("eoAugust"),title:this.$t("programAnnouncement")},{date:"2020/12/3-6",title:"summit 2020"}]}},computed:{isUseENCSS:function(){return"en"===this.$i18n.locale}},head:Object(r.a)({title:function(){return this.$t("title")},description:function(){return Object(r.b)(this.$t("article/summitIntro"))}})},c=(n(477),n(16)),l=n(479),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agenda",class:{"en-css":t.isUseENCSS}},[n("div",{staticClass:"banner-container"},[n("div",{staticClass:"banner"},[n("h1",[t._v(t._s(t.$t("title")))]),t._v(" "),n("a",{staticClass:"agenda-cta flex items-center justify-center",attrs:{href:"https://propose.summit2020.g0v.tw/",target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(t.$t("CFPButtonText"))+"\n      ")])])]),t._v(" "),n("timeline",{attrs:{points:t.cfpTimeline}}),t._v(" "),n("div",{staticClass:"text-container with-bubbles"},[n("div",{staticClass:"group"},[n("summit-markdown",{attrs:{content:t.$t("article/summitAbout")}}),t._v(" "),n("summit-markdown",{attrs:{content:t.$t("article/summitContent")}})],1),t._v(" "),n("div",{staticClass:"group"},[n("summit-markdown",{attrs:{content:t.$t("article/summitIntro")}}),t._v(" "),n("summit-markdown",{attrs:{content:t.$t("article/communityIntro")}})],1)])],1)}),[],!1,null,"b70340d0",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports}}]);