(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(t,i,n){},251:function(t,i,n){"use strict";var o={props:{allowFollowText:{default:!1},includeFor:{default:null},asIcons:{default:!1},asPlain:{default:!1}},data:()=>({socials:[{id:"discord",customIcon:"/assets/custom_icons/discord.svg",link:"https://discord.com/invite/xENF5Uh",include:["topnav","footer"],followText:"Discord"},{id:"git",icon:"mdi-github",link:"https://github.com/FyroxEngine/Fyrox",include:["topnav","footer"],followText:"GitHub"},{id:"twitter",icon:"mdi-twitter",link:"https://twitter.com/DmitryNStepanov",include:["footer"],followText:"Follow on Twitter"},{id:"patreon",icon:"mdi-patreon",link:"/sponsor.html",include:["topnav","footer"],followText:"Sponsor"}]})},e=(n(254),n(15)),s=Object(e.a)(o,(function(){var t=this,i=t._self._c;return i("div",[t._l(t.socials,(function({icon:n,link:o,include:e,followText:s,id:a,customIcon:l}){return[-1!==e.indexOf(t.includeFor)||"any"===t.includeFor?i("v-btn",{key:a,staticClass:"me-4 white--text",attrs:{href:o,icon:t.asIcons,plain:t.asPlain}},[n?i("v-icon",{attrs:{size:"24px"}},[t._v("\n                "+t._s(n)+"\n            ")]):l?i("span",{staticClass:"d-flex"},[i("img",{staticClass:"custom-icon",attrs:{src:l}})]):t._e(),t._v(" "),t.allowFollowText?i("span",[t._v(" "+t._s(s)+" ")]):t._e()],1):t._e()]}))],2)}),[],!1,null,"62fd6f16",null);i.a=s.exports},252:function(t,i,n){"use strict";var o=n(251),e={props:{includeFor:{default:null}},data:()=>({socials:[{icon:"mdi-discord",link:"https://discord.com/invite/xENF5Uh",include:["topnav","footer"],followText:"Join Discord"},{icon:"mdi-github",link:"https://github.com/FyroxEngine/Fyrox",include:["topnav","footer"],followText:"GitHub"},{icon:"mdi-twitter",link:"https://twitter.com/DmitryNStepanov",include:["footer"],followText:"Follow on Twitter"},{icon:"mdi-patreon",link:"/sponsor.html",include:["topnav","footer"],followText:"Patrons"}]})},s=n(15),a=Object(s.a)(e,(function(){var t=this,i=t._self._c;return i("div",[i("v-divider"),t._v(" "),t._l(t.socials,(function({icon:n,link:o,include:e,followText:s},a){return[-1!==e.indexOf(t.includeFor)||"any"===t.includeFor?i("v-list-item",{key:a,attrs:{href:o}},[i("v-icon",{staticClass:"me-4",attrs:{size:"24px"}},[t._v("\n                "+t._s(n)+"\n            ")]),t._v(" "),i("span",[t._v(" "+t._s(s)+" ")])],1):t._e()]}))],2)}),[],!1,null,null,null).exports,l={components:{SocialButtonsList:o.a,SocialButtonsVerticalNav:a},data:()=>({drawer:!1,topNavLinks:[]}),methods:{isExternal:t=>t.indexOf("http")>-1},created(){this.topNavLinks=this.$site.themeConfig.nav}},r=Object(s.a)(l,(function(){var t=this,i=t._self._c;return i("div",[i("v-app-bar",{attrs:{app:"",flat:"",dark:""}},[i("router-link",{staticClass:"v-toolbar__title",attrs:{to:"/"}},[i("v-img",{staticClass:"me-3 px-3",attrs:{src:"/assets/logos/logo.png",width:"40px","max-width":"40",height:"40px"}})],1),t._v(" "),i("v-toolbar-title",[i("router-link",{staticClass:"text-decoration-none white--text",attrs:{to:"/"}},[t._v("\n                Fyrox Game Engine\n            ")])],1),t._v(" "),i("v-spacer"),t._v(" "),t.$vuetify.breakpoint.mobile?i("v-app-bar-nav-icon",{on:{click:function(i){t.drawer=!t.drawer}}}):t._e(),t._v(" "),t.$vuetify.breakpoint.mobile?t._e():i("v-toolbar",{attrs:{elevation:"0","jsutify-end":""}},[i("v-spacer"),t._v(" "),t._l(t.topNavLinks,(function({text:n,link:o,key:e}){return i("v-btn",{key:e,staticClass:"mr-3",attrs:{plain:"",to:t.isExternal(o)?void 0:o,href:t.isExternal(o)?o:void 0,target:t.isExternal(o)?"_blank":void 0}},[t._v(t._s(n))])})),t._v(" "),i("v-divider",{attrs:{inset:"",vertical:""}}),t._v(" "),i("social-buttons-list",{attrs:{"allow-follow-text":!0,"as-plain":"","include-for":"topnav"}})],2)],1),t._v(" "),t.$vuetify.breakpoint.mobile?i("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[i("v-list",{staticClass:"w-100",attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-col",{staticClass:"px-0 pt-0 d-flex justify-end"},[i("v-app-bar-nav-icon",{staticClass:"text-h2 ms-auto",on:{click:function(i){t.drawer=!t.drawer}}})],1),t._v(" "),i("v-divider"),t._v(" "),t._l(t.topNavLinks,(function({text:n,link:o,key:e}){return i("v-list-item",{key:e,attrs:{to:t.isExternal(o)?"":o,href:t.isExternal(o)?o:"",target:t.isExternal(o)?"_blank":""}},[t._v(t._s(n))])})),t._v(" "),i("social-buttons-vertical-nav",{attrs:{"include-for":"any"}})],2)],1)],1):t._e()],1)}),[],!1,null,null,null);i.a=r.exports},253:function(t,i,n){"use strict";var o={components:{SocialButtonsList:n(251).a}},e=n(15),s=Object(e.a)(o,(function(){var t=this._self._c;return t("v-footer",{attrs:{dark:"",padless:""}},[t("v-card",{staticClass:"grey darken-4 white--text text-center",attrs:{flat:"",tile:"",width:"100%"}},[t("v-divider"),this._v(" "),t("v-card-text",[t("social-buttons-list",{attrs:{"include-for":"footer","as-icons":""}})],1),this._v(" "),t("v-divider"),this._v(" "),t("v-card-text",{staticClass:"white--text"},[this._v("\n            Fyrox Engine 2019 - "+this._s((new Date).getFullYear())+"\n        ")])],1)],1)}),[],!1,null,null,null);i.a=s.exports},254:function(t,i,n){"use strict";n(250)},260:function(t,i,n){},272:function(t,i,n){"use strict";n(260)},285:function(t,i,n){"use strict";n.r(i);var o=n(253),e=n(252),s={components:{AppFooter:o.a,TopNav:e.a}},a=(n(272),n(15)),l=Object(a.a)(s,(function(){var t=this._self._c;return t("v-app",[t("ClientOnly",[t("top-nav")],1),this._v(" "),t("v-main",[t("v-fade-transition",{attrs:{appear:"","hide-on-leave":""}},[t("v-container",{staticClass:"pb-16 blog-post"},[t("h1",{staticClass:"text-center mt-16 mb-10"},[this._v(this._s(this.$frontmatter.title))]),this._v(" "),t("Content")],1)],1)],1),this._v(" "),t("app-footer")],1)}),[],!1,null,null,null);i.default=l.exports}}]);