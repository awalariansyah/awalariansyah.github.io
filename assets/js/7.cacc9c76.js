(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{331:function(t,a,s){},362:function(t,a,s){"use strict";s(331)},372:function(t,a,s){"use strict";s.r(a);s(98),s(99);var i={data:function(){return{halaman:[]}},mounted:function(){var t=this;this.$site.pages.forEach((function(a){return"Artikel"==a.frontmatter.type?t.halaman.push(a):""}))}},e=(s(362),s(49)),n=Object(e.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-container"},t._l(t.halaman,(function(a){return s("router-link",{key:a.title,attrs:{to:a.path}},[s("div",{staticClass:"post-card"},[s("img",{staticClass:"article-image",attrs:{src:""}}),t._v(" "),s("div",{staticClass:"page-detail"},[s("div",{staticClass:"page-title"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"page-description"},[t._v(t._s(a.frontmatter.description))]),t._v(" "),t._l(a.frontmatter.tags,(function(a){return s("div",{key:a,staticClass:"page-tags"},[t._v(t._s(a))])})),t._v(" "),s("div",{staticClass:"page-author"},[t._v("Penulis: "+t._s(a.frontmatter.author))])],2)])])})),1)}),[],!1,null,"696fe10e",null);a.default=n.exports}}]);