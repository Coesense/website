(function() {

window.Article = Backbone.Model.extend({

	'urlRoot': '/',

	'defaults': {
		'img' 			: 'coe-content/devrocket.jpg',
		'title' 		: 'Title',
		'source' 		: 'Source',
		'description' 	: 'Description',
		'tags' 			: ['tag1', 'tag2']
	},

	'initialize': function Article() {

        console.log('Article Constructor');

        //this.url = "coe-library/model.php"+"?id="+this.id,

        this.bind("error", function(model, error){
            console.log( error );
        });

    }
});

var article = new Article({id: 1});
article.fetch();

})(window);

/*window.Coesense = function(){
	this.$container = $('#coe-main_feed');
	this.init();
}

Coesense.prototype.init = function(){
	var _self = this;

	var article = Backbone.Model.extend({});

	//feed setup
	this.$container.isotope({
		itemSelector: '.coe-main_feed-item',
		getSortData : {
			id : function ( $elem ) {
				return parseInt( $elem.attr('data-id') );
			}
		},
		sortBy: 'id'
	});

	$("#coe-main").tinyscrollbar();
	$(window).smartresize(function(){
		$("#coe-main").tinyscrollbar_update();
	});

	//hover behaviour on articles
	$("article").hover(function(){
		$(this).css({cursor: "pointer"});
		$("article").not($(this)).animate({opacity: .5}, 50, 'easeOutExpo');
	}, function(){
		$("article").not($(this)).animate({opacity: 1}, 50, 'easeInExpo');
	});

	//click behaviour on an article
	$("article").click(function(){
		$("article").not($(this)).removeClass("selected");
		if(!$(this).hasClass("selected")){
			$(this).addClass("selected");
			_self.loadSingle($(this));
		}else {
			return false;
		}
	});

	//click behaviour on closing the single panel
	$("#coe-header_back .coe-header_back-link").click(function(){
		$(".selected").removeClass("selected");
		$("#coe-header_back").animate({left: -363}, 300, 'easeInCirc');
		$("#coe-main_single").removeClass("open").animate({left: -363}, 300, 'easeInCirc');
		$("#coe-main_feed").animate({left: 0}, 300, 'easeInCirc');
		return false;
	});
}
//load a single post content in the single panel
Coesense.prototype.loadSingle = function($this){
	var $self = $this;
	//$("#coe-ui_overlay").fadeIn("fast");
	$("#coe-main_single-wrapper").fadeOut("fast", function(){
		$("#coe-main_single-wrapper .coe-main_item-top").empty();
		if($(".coe-main_item-infos_source")[0]){
			$("#coe-main_single-wrapper .coe-main_item-infos_source").remove();
		}
		$("#coe-main_single-wrapper .coe-main_item-infos_tags").remove();
		$.when(
			$("#coe-main_single-wrapper")
				.find(".coe-main_item-top").append($self.find(".coe-main_item-title").clone())
				.append($self.find(".coe-main_item-image").clone())
				.parents("#coe-main_single-wrapper").find(".coe-main_item-infos").prepend($self.find(".coe-main_item-infos_source").clone())
				.parents("#coe-main_single-wrapper").append($self.find(".coe-main_item-infos_tags").clone())
		).done(function(){
			//$("#coe-ui_overlay").fadeOut("fast");
			$("#coe-header_back").animate({left: 0}, 300, "easeOutCirc");
			$("#coe-main_single").addClass("open").animate({left: 0}, 300, 'easeOutCirc');
			$("#coe-main_feed").animate({left: 363}, 300, 'easeOutCirc');
			$("#coe-main_single-wrapper").fadeIn("fast");
		});
	});
}*/

