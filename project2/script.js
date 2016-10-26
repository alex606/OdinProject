$(document).ready( function(){

	var $row = "<div class='rowElement'></div>";
	var $col = "<div class='cellElement'></div>";

	// Creates 4 x 4 board on start
	$('.newBoard').append($row).append($row).append($row).append($row);
	$('.rowElement').append($col).append($col).append($col).append($col);

	$('.cellElement').hover( function(){
		$(this).addClass("hovered")
	});

	$('button').click( function(){
		var newRows = prompt("Enter number of rows");
		var newCols = prompt("Enter number of columns");
		$( ".rowElement" ).remove();

		for (i = 0; i < newRows; i++)
		{
			$('.newBoard').append($row);
		}
	    for(j = 0; j < newCols; j++)
		{
			$('.rowElement').append($col);
		}
	});
});