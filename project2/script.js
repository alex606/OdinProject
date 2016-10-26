$(document).ready( function(){

	var $row = "<div class='rowElement'></div>";
	var $col = "<div class='cellElement'></div>";

	$('.newBoard').append($row).append($row).append($row).append($row);
	$('.rowElement').append($col).append($col).append($col).append($col);

	$('.cellElement').hover( function(){
		$(this).addClass("hovered")
	});
});