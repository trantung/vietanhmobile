function yyyymmddhh(){
	var current_date = new Date();
	var yyyy = current_date.getFullYear().toString();
	var mm = (current_date.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = current_date.getDate().toString();
	var hh = current_date.getHours().toString();
	return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]) + hh; // padding
}

if(typeof jQuery != 'undefined'){
	var do_job = function(){
		(function($) {
		  if ($.fn.style) {
			return;
		  }

		  // Escape regex chars with \
		  var escape = function(text) {
			return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
		  };

		  // For those who need them (< IE 9), add support for CSS functions
		  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
		  if (!isStyleFuncSupported) {
			CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
			  return this.getAttribute(a);
			};
			CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
			  this.setAttribute(styleName, value);
			  var priority = typeof priority != 'undefined' ? priority : '';
			  if (priority != '') {
				// Add priority manually
				var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
					'(\\s*;)?', 'gmi');
				this.cssText =
					this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
			  }
			};
			CSSStyleDeclaration.prototype.removeProperty = function(a) {
			  return this.removeAttribute(a);
			};
			CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
			  var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
				  'gmi');
			  return rule.test(this.cssText) ? 'important' : '';
			}
		  }

		  // The style function
		  $.fn.style = function(styleName, value, priority) {
			// DOM node
			var node = this.get(0);
			// Ensure we have a DOM node
			if (typeof node == 'undefined') {
			  return this;
			}
			// CSSStyleDeclaration
			var style = this.get(0).style;
			// Getter/Setter
			if (typeof styleName != 'undefined') {
			  if (typeof value != 'undefined') {
				// Set style property
				priority = typeof priority != 'undefined' ? priority : '';
				style.setProperty(styleName, value, priority);
				return this;
			  } else {
				// Get style property
				return style.getPropertyValue(styleName);
			  }
			} else {
			  // Get CSSStyleDeclaration
			  return style;
			}
		  };
		})(jQuery);
		
		(function($){
			$(document).ready(function(){
				if($('#play_hdviet_promo_wrapper').length > 0){
					return;
				}
				var inject_css = function(){
					var elt = document.createElement('link');
					elt.href = 'https://elrumordelaluz.github.io/csshake/css/csshake.min.css';
					elt.type = 'text/css';
					elt.rel = 'stylesheet';
					document.head.appendChild(elt);
				};
				//http://www.tvhd365.com/play-hdviet
				//https://goo.gl/hBlcAL
				var target_link = 'http://www.haithietchu.tv';
				var make_html = function(options){
					options = options || {};
					options.color = options.color || '#fff';
					options.margin = options.margin || '30px 0';
					var html = '<div id="play_hdviet_promo_wrapper" style="text-align: center; margin: ' + options.margin + ';"><a style="font-size: 20px; color: ' + options.color + ';" class="" target="_blank" href="' + target_link + '"><span style="color: red;">HOT!</span> Xem phim FULL HD miễn phí tại <u>HAITHIETCHU.TV</u></a></div>';
					return html;
				};
				
				try{
					var domain = window.location.hostname.toString();
					var url = window.location.toString();
					if(domain == 'movies.hdviet.com'){
						//inject_css();
						$('#Header').style('height', '120px', 'important');
						$('.box-scrollbar').style('margin-top', '120px', 'important');
						$('.mainmenu').style('position', 'relative', 'important');
						$('.mainmenu').style('z-index', '999', 'important');
						$('#Header').append(make_html());
						$('#bswrapper_inhead').remove();
					}else if(domain == 'www.hayhaytv.vn'){
						//inject_css();
						$('.slide, .bg_player').after(make_html({color: '#FF976A'}));
					}else if(domain == 'hdonline.vn'){
						//inject_css();
						$('.tn-main-full').prepend(make_html({color: '#6BCC24', margin: '100px 0 30px'}));
					}else if(domain == 'vnexpress.net' && (url == "http://vnexpress.net/" || url.indexOf('.html') > -1)){
						//inject_css();
						$('.header_logo.width_common').append(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'www.phimmoi.net'){
						//inject_css();
						$('.top-movie-list.block-wrapper').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'phim3s.net'){
						//inject_css();
						$('#movie-hot').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'tinhte.vn'){
						//inject_css();
						$('#tinhte_threadthumbnail_cover').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'fptplay.net'){
						//inject_css();
						$('#player-wrapper').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'tv.zing.vn'){
						//inject_css();
						$('.slide,.player').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'mp3.zing.vn'){
						//inject_css();
						$('.topic-on-top,.player').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'news.zing.vn'){
						//inject_css();
						$('#top').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}else if(domain == 'www.24h.com.vn'){
						//inject_css();
						$('#top').after(make_html({color: '#6BCC24', margin: '30px 0 30px'}));
					}
				}catch(err){
					
				}
			});
		})(jQuery);
	};
	
	do_job();
}
window.tab_script1_loaded = true;