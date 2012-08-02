function Coesense(){
	this.$container = $('#coe-main_feed');
	this.init();
}

Coesense.prototype.init = function(){
	this.$container.isotope({
		itemSelector: '.coe-main_feed-item'
	});
}