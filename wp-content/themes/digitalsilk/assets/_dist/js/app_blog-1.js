!function(){"use strict";var e={311:function(e){e.exports=jQuery}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}!function(){var e=o(311);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function n(e,t,o){e.forEach((function(e,n){var a=o[n];if(e.top-300<t){a.classList.add("ez-toc-viewed");var r=a.parentNode.querySelector("ul");r&&r.classList.add("ez-list-open")}else{a.classList.remove("ez-toc-viewed");var s=a.parentNode.querySelector("ul");s&&s.classList.remove("ez-list-open")}}))}var a=o(311);var r=o(311);function s(){function e(){r(".m-rel-float").removeClass("open"),r(".m-rel-tabs").removeClass("open").height(0),r(".c-rel-head__title").removeClass("open"),r(window).width()<1112&&r(".ez-toc-counter").addClass("rel-closed")}r("body.single-post").length&&(r(document).on("click",".c-rel-head__title",(function(){var t;r(".m-rel-float").hasClass("open")?e():(t=r(".m-rel-tabs .js-tabs-wrapper").outerHeight(),r(".m-rel-tabs").addClass("open").height(t),r(".m-rel-float").addClass("open"),r(".c-rel-head__title").addClass("open"),r(window).width()<1112&&r(".ez-toc-counter").removeClass("rel-closed"))})),r(window).width()>1111?setTimeout((function(){r(".ez-toc-toggle")[0].click()}),1e3):(e(),r(document).on("click",".toc_close",(function(){e()})),r(document).on("click",".c-rel-head__title",(function(){r(".toc_close .ez-toc-toggle").trigger("click")}))))}var l=o(311);document.addEventListener("DOMContentLoaded",(function(){var o,r,i,d;"on"===localStorage.getItem("dark-mode")&&(e(".dark-mode").addClass("on"),e("body").addClass("dark-on"),e(".dark-mode").attr("aria-pressed",!0)),e(".dark-mode").click((function(){e(this).hasClass("on")?(e(this).removeClass("on"),e("body").removeClass("dark-on"),e(this).attr("aria-pressed",!1),localStorage.setItem("dark-mode","off")):(e(this).addClass("on"),e("body").addClass("dark-on"),e(this).attr("aria-pressed",!0),localStorage.setItem("dark-mode","on"))})),document.querySelector(".ez-toc-toggle")&&((o=document.getElementById("ez-toc-container")).querySelectorAll("li[class*=ez-toc-heading]"),r=o.querySelectorAll(".ez-toc-list a"),n(i=(d=r,function(e){if(Array.isArray(e))return t(e)}(d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(d)||function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(d)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t,o=document.getElementById(e.getAttribute("href").substring(1));return{item:o,top:(t=o,t.getBoundingClientRect().top+window.scrollY-100),seen:!1}})),window.pageYOffset,r),window.onscroll=function(){var e=this.pageYOffset;n(i,e,r)}),document.querySelector(".js-ajax-block")&&function(e){e(".js-ajax-block").each((function(t){var o,n;o=e(".js-ajax-block")[t],n={module:null,action:null,form:"",moreBtn:e(),results:null,doing_ajax:null,timeout:null,query:{post_type:null,per_page:9,page:1},component_styles:{},ajax_url:ds.ajax_url,preloader:'<div class="filter-loader loader"><div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><div class="loader-bg"></div></div>',init:function(t){var o=e(t);o&&(n.module=o,n.action=o.data("action"),n.query.post_type=o.data("post-type"),n.query.posts_per_page=o.data("per-page"),n.initElementsActions())},initElementsActions:function(){var e=n.module.find('div[data-container="ajax-result"]');if(e){n.results=e;var t=n.module.find(".ajax-load-more");t&&(n.moreBtn=t,n.morePosts());var o=n.module.find('form[data-form="ajax"]');o&&(n.form=o,n.changeForm())}var a=n.module.data("class");a&&(n.component_styles.class=a);var r=n.module.data("styles");r&&(n.component_styles.styles=r);var s=n.module.data("image");s&&(n.component_styles.image=s)},morePosts:function(){n.moreBtn.on("click",(function(e){e.preventDefault(),n.sendAjax(n.query.page)}))},changeForm:function(){var e=n.form.find('input[type="text"], textarea');e.unbind("keyup"),e.not('[data-ajax="false"]').keyup((function(){null!=n.timeout&&clearTimeout(n.timeout),n.timeout=setTimeout((function(){n.timeout=null,n.sendAjax(),t.parent().addClass("is-filter-active")}),500)}));var t=n.form.find('button[type="submit"]');t.unbind("click"),t.not('[data-ajax="false"]').click((function(e){e.preventDefault(),n.sendAjax(),t.parent().addClass("is-filter-active")}));var o=n.form.find("select");o.unbind("change"),o.not('[data-ajax="false"]').change((function(){n.sendAjax()})),n.form.unbind("keydown"),n.form.on("keydown",(function(e){13==e.keyCode&&(e.preventDefault(),n.sendAjax())}))},sendAjax:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;null!=n.doing_ajax&&(n.doing_ajax.abort(),n.doing_ajax=null,n.module.find(".loader").remove());var o={action:n.action,query:{post_type:n.query.post_type,posts_per_page:n.query.posts_per_page,paged:t},component:n.component_styles,device:e(window).width()<=768?"mobile":"desktop"};n.form.length>0&&(o.form=n.form.serialize()),n.doing_ajax=e.ajax({url:n.ajax_url,type:"POST",data:o,beforeSend:function(e){n.module.append(n.preloader)},success:function(e){e?(1===e.page&&n.results.html(""),n.results.append(e.posts),e.max_pages===e.page?n.moreBtn.hide():n.moreBtn.show(),0==e.total_posts_showing?n.module.find(".js-blog-counter-wrapper").hide():n.module.find(".js-blog-counter-wrapper").show(),e.total_posts_showing&&n.module.find(".js-blog-counter-showing").text(e.total_posts_showing),e.total_posts&&n.module.find(".js-blog-counter-total").text(e.total_posts),n.query.page=e.page,n.module.find(".loader").remove()):n.moreBtn.hide(),n.doing_ajax=null}})}},n.init(o)}))}(a),function(){if(l(".dt-subscribe")){var e=!1;localStorage.getItem("subsSlide")&&(e=!0),l(window).on("scroll",(function(){l(window).scrollTop()>=3e3&&!e?l(".dt-subscribe").addClass("active"):e||l(".dt-subscribe").removeClass("active")})),l(".dt-subscribe-close").on("click",(function(){l(".dt-subscribe").removeClass("active"),e=!0}))}}(),s()}))}()}();