/**
 * jQuery Iconize
 * 
 *
 */


(function( $ ) {
  $.fn.iconize = function(options)
  {
     return this.each(function()
     {
       var o = $.extend({}, $.fn.iconize.defaults, options);
	   var img = $(this).find('img');
	   var imageHeight = img.attr('height');
	   var imageWidth = img.attr('width');

	   // change container css
	   $(this).css({
		   'display' : 'block',
		   'position' : 'relative',
		   'height' : imageHeight
	   });

	   $(this).find('img').css({
		  'position' : 'absolute',
		  'z-index' : 1
	   });

	   posX = parseInt( (imageWidth - o.iconWidth) / 2 );
	   posY = parseInt( (imageHeight - o.iconHeight) / 2 );

	   $(this).prepend('<span class="' + o.iconClass + '" style="position: absolute; z-index: 2; left: ' + posX + 'px ; top: ' + posY + 'px; background: url(' + o.iconSrc + ') no-repeat 0 0; height: ' + o.iconHeight + 'px; width: '+ o.iconWidth + 'px;"></span>');
	   
	   if ( o.ie6Friendly && $.browser.msie && $.browser.version == 6 )
	   {
			DD_belatedPNG.fix('.' + o.iconClass);
	   }

    });
  }

  $.fn.iconize.defaults =
  {
       iconSrc : '/images/play.png',
	   iconHeight : 32,
	   iconWidth : 32,
	   position: 'center',
	   iconClass: 'play-icon',
	   ie6Friendly: true
  };

})(jQuery);