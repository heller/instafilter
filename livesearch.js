(function ($) { 
  var defaults = {
    listSelector:     '.instafilter_list',
    itemSelector:     '.instafilter_item',
    contentSelector:  '.instafilter_content'
  };

  $.fn.liveUpdate = function(options){
  
    var settings = $.extend({}, defaults, options);
    
    list = $(settings.listSelector);
    rows = list.children(settings.itemSelector);
    
    cache = rows.map(function(){
      return $(settings.contentSelector, this).get(0).firstChild.nodeValue.toLowerCase();
    });

		this
      .bind('keyup.instafilter', filter)
      .keyup()
			.parents('form').submit(function(){
				return false;
			});

    return this;
  };

  function filter(){
    var term = $.trim( $(this).val().toLowerCase() ), scores = [];
    
    if ( !term ) {
      rows.show();
    } else {
      rows.hide();

      cache.each(function(i){
        var score = this.score(term);
        if (score > 0) { scores.push([score, i]); }
      });

      $.each(scores.sort(function(a, b){return b[0] - a[0];}), function(){
        $(rows[ this[1] ]).show();
      });
    }
  }

})(jQuery);
