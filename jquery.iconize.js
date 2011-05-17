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
      var base = $(this);  
      
      img.load(function() {
    
        var imageHeight = $(this).height();
        var imageWidth = $(this).width();
        
        base.css({
          'display' : 'block',
          'position' : 'relative',
          'height' : imageHeight
        });

        img.css({
          'position' : 'absolute',
          'z-index' : 1
        });
        
        centerX = parseInt( (imageWidth - o.iconWidth) / 2 );
        centerY = parseInt( (imageHeight - o.iconHeight) / 2 );
        
        switch(o.position) {
          case 'top right':
            posX = 10;
            posY = 10;
            break;
          case 'top center':
            posX = 10;
            posY = centerY;
          default:
            posX = centerX;
            posY = centerY;
        }
        
        $('<span/>')
        .css({
          'position' : 'absolute',
          'z-index' : 2,
          'left' : posX,
          'top' : posY,
          'background' : 'url(' + o.iconSrc + ') no-repeat 0 0',
          'height' : o.iconHeight + 'px',
          'width' : o.iconWidth + 'px'
        })
        .each(function() {
          if ( $.browser.msie && $.browser.version == 6 ) {
            $(this).css({
              'background' : 'transparent',
              'filter' : 'progid:DXImageTransform.Microsoft.AlphaImageLoader' + '(src=\'' + o.iconSrc + '\', sizingMethod=\'scale\')'
                
            });
          }
        })
        .prependTo(base);

      });

    });
  }

  $.fn.iconize.defaults =
    {
    iconSrc : '/images/play.png',
    iconHeight : 32,
    iconWidth : 32,
    position: 'center',
    iconClass: 'play-icon'
  };

})(jQuery);