(function(){var t;t=!1,document.addEventListener("DOMContentLoaded",function(){try{document.createEvent("TouchEvent"),document.documentElement.className+=" touch",t=!0}catch(t){t,document.documentElement.className+=" no-touch"}return window.hasTouch=function(){return t}}),document.addEventListener("DOMContentLoaded",function(){var t;return t="",window.activeTab=function(e){return t=e,$(".background .image").addClass("tab-active"),$(".front").addClass("tab-active"),$(e).addClass("active")},window.closeTab=function(){return $(".background .image").removeClass("tab-active"),$(t).removeClass("active"),$(".front").removeClass("tab-active")}}),$(window).on("load",function(){var t;return t=function(){return console.log("hello"),$(".start").removeClass("start")},setTimeout(t,0)})}).call(this);