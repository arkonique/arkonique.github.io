/*!
 * jQuery Simple Gallery Slideshow
 * Original author: @gaiaayan
 * Licensed under the MIT license
 */
;(function ( $, window, document, undefined ) {

    function Slideshow(element, options) {
        //Variables declaration
        this.element = element;
        this.intervalID = null;
        this.current = 0;
        this.items = $(this.element).children();
        this.navBar;
        this.navPrev;
        this.navNext;
        this.trigger;
        this.defaults = {
          interval: 2000,
          width: 500,
          height: 350
        }
        //Merge configured options to defaults
        this.config = $.extend(this.defaults, options);
        //Initialize Slideshow
        this.init();
    }

    Slideshow.prototype = {

        init: function() {
          //Set controls & config
          this.setup();
          //Set event handler
          this.handleEvent();
          //Start animation
          this.start();
        },
        setup: function() {
          //Append controls
          this.navBar = $('<ul>').addClass('gallery-navbar').appendTo(this.element);
          this.items.each(function(index){
            $('<li>').addClass(index === 0 ? 'active' : '').attr('data-nav','select').attr('data-index',index).appendTo(this.navBar);
          }.bind(this));

          this.navPrev = $('<div>').addClass('gallery-control fade prev').attr('data-nav','prev').appendTo(this.element);
          this.navNext = $('<div>').addClass('gallery-control fade next').attr('data-nav','next').appendTo(this.element);

          this.trigger = $('<div>').addClass('gallery-control trigger fade pause').attr('data-nav','trigger').appendTo(this.element);

          //Hide controls
          $(this.element).find('.fade').hide();

          //Modify defaults
          $(this.element).css('width', this.config.width).css('height', this.config.height);
        },
        handleEvent: function() {
          //Click event
          //Detect what item is clicked inside the gallery
          $(this.element).on('click', function(event) {

            var dataNav = $(event.target).attr('data-nav');
            var dataIndex = $(event.target).attr('data-index');

            if(dataNav){

              //Call functions depending on item clicked
              if(dataNav === 'trigger'){
                if(this.intervalID){
                  this.stop();
                }else{
                  this.start();
                }
              }else{
                this.showItem(dataNav, dataIndex);
                this.stop();
              }

              //Style item
              this.setTrigger();
            }

          }.bind(this));

          //Mouseover/mouseout event
          $(this.element).on('mouseover', function() {
            $(this.element).find('.fade').fadeIn();
          }.bind(this));

          $(this.element).on('mouseleave', function() {
            $(this.element).find('.fade').fadeOut();
          }.bind(this));


        },
        setTrigger: function() {
          if(this.intervalID){
            this.trigger.removeClass('play').addClass('pause');
          }else{
            this.trigger.removeClass('pause').addClass('play');
          }
        },
        start: function() {
          this.intervalID = setInterval(this.showItem.bind(this), this.config.interval);
        },
        stop: function() {
          clearInterval(this.intervalID);
          this.intervalID = null;
        },
        setCurrent(nav,index) {
          switch(nav) {
            case 'select':
              this.current = index;
              break;
            case 'prev':
              this.current === 0 ? this.current = this.items.length-1 : this.current-- ;
              break;
            case 'next':
            default:
              this.current === this.items.length-1 ? this.current = 0 : this.current++ ;
            break;
          }
        },
        showItem: function(nav,index) {
          this.setCurrent(nav,index);
          this.items.hide().eq(this.current).fadeIn();
          this.navBar.children().removeClass('active').eq(this.current).addClass('active');
        }
    };

    //Prevent  multiple instantiations
    $.fn.slideshow = function ( options ) {
      return this.each(function () {
        var instance = "plugin_jQuerySimpleGallerySlideshow";
        if (!$.data(this, instance)) {
            $.data(this, instance, new Slideshow( this, options ));
        }
      });
    };

})( jQuery, window, document );
