(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{394:function(t,e,i){var n=i(19),s=Date.prototype,a=s.toString,r=s.getTime;new Date(NaN)+""!="Invalid Date"&&n(s,"toString",(function(){var t=r.call(this);return t==t?a.call(this):"Invalid Date"}))},409:function(t,e,i){"use strict";i.r(e);i(83),i(394);var n={name:"vue-disqus",props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted:function(){window.DISQUS?this.reset(window.DISQUS):this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){e.setBaseConfig(this)}})},init:function(){var t=this,e=this;window.disqus_config=function(){e.setBaseConfig(this)},setTimeout((function(){var e=document,i=e.createElement("script");i.setAttribute("id","embed-disqus"),i.setAttribute("data-timestamp",+new Date),i.type="text/javascript",i.async=!0,i.src="//".concat(t.shortname,".disqus.com/embed.js"),(e.head||e.body).appendChild(i)}),0)},setBaseConfig:function(t){var e=this;t.page.identifier=this.identifier||this.$route.path||window.location.pathname,t.page.url=this.url||this.$el.baseURI,this.title&&(t.page.title=this.title),this.remote_auth_s3&&(t.page.remote_auth_s3=this.remote_auth_s3),this.api_key&&(t.page.api_key=this.api_key),this.sso_config&&(t.sso=this.sso_config),this.language&&(t.language=this.language),t.callbacks.onReady=[function(){e.$emit("ready")}],t.callbacks.onNewComment=[function(t){e.$emit("new-comment",t)}]}}},s=i(15),a=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"disqus_thread"}})}),[],!1,null,null,null);e.default=a.exports}}]);