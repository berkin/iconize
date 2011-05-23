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
      
      img.imagesLoaded(function() {
        console.log('test');
        var imageHeight = $(this).height();
        var imageWidth = $(this).width();
        
        base.css({
          'position' : 'relative',
          'height' : imageHeight
        });

        /*img.css({
          'position' : 'absolute',
          'z-index' : 1
        });*/
        
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

/**
 * https://gist.github.com/268257
 * $('img.photo',this).imagesLoaded(myFunction)
 * execute a callback when all images have loaded.
 * needed because .load() doesn't work on cached images

 * mit license. paul irish. 2010.
 * webkit fix from Oren Solomianik. thx!

 * callback function is passed the last image to load
 *   as an argument, and the collection as `this`
 */
(function($) {
  $.fn.imagesLoaded = function(callback){
    var elems = this.filter('img'),
    len   = elems.length,
    blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      
    elems.bind('load',function(){
      if (--len <= 0 && this.src !== blank){
        callback.call(elems,this);
      }
    }).each(function(){
      // cached images don't fire load sometimes, so we reset src.
      if (this.complete || this.complete === undefined){
        var src = this.src;
        // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
        // data uri bypasses webkit log warning (thx doug jones)
        this.src = blank;
        this.src = src;
      }  
    }); 

    return this;
  };
})(jQuery);