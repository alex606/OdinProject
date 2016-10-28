$(document).ready( function(){

	var $row = "<div class='rowElement'></div>";
	var $col = "<div class='cellElement'></div>";

	$('button').click( function(){
		testFunction()
	});

	var testFunction = function()
	{
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

		var scaleFactor = 1;
		var newHeight = ($('.newBoard').height() / newRows - 2)// - newRows*scaleFactor ;
		$('.rowElement').css('height', newHeight);
		$('.cellElement').css('height', newHeight);

		var newWidth = (($('.newBoard').width() / newCols - 2))// - newCols*scaleFactor ;
		$('.cellElement').css('width', newWidth);
		
		$('.cellElement').css('border', '1px solid #000');

		$('.cellElement').hover( function(){
			$(this).addClass("hovered")
		});
	}
});
