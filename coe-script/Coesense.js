function Coesense(){
	this.$container = $("#coe-main_grid");
	this.init();
}

Coesense.prototype.init = function(){
	this.$container.isotope({
		layoutMode : 'fitColumns'
	});
}