function Coesense(){
	this.$container = $('#coe-main_feed');
	this.init();
}

Coesense.prototype.init = function(){
	var _self = this;

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
		$("#coe-header_back").animate({left: -350}, 300, 'easeInCirc');
		$("#coe-main_single").removeClass("open").animate({left: -350}, 300, 'easeInCirc');
		$("#coe-main_feed").animate({left: 0}, 300, 'easeInCirc');
		return false;
	});
}
//load a single post content in the single panel
Coesense.prototype.loadSingle = function($this){
	var $self = $this;
	//$("#coe-ui_overlay").fadeIn("fast");
	$("#coe-main_single-wrapper").fadeOut("fast", function(){
		$("#coe-main_single-wrapper").empty();
		$.when(
			$("#coe-main_single-wrapper")
				.append($self.find("img").clone())
				.append($self.find("h1").clone())
				.append($self.find(".coe-main_item-infos_source").clone())
				.append($self.find(".coe-main_item-infos_tags").clone())
		).done(function(){
			//$("#coe-ui_overlay").fadeOut("fast");
			$("#coe-header_back").animate({left: 0}, 300, "easeOutCirc");
			$("#coe-main_single").addClass("open").animate({left: 0}, 300, 'easeOutCirc');
			$("#coe-main_feed").animate({left: 350}, 300, 'easeOutCirc');
			$("#coe-main_single-wrapper").fadeIn("fast");
		});
	});
}