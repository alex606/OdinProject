$(document).ready( function(){

	var $row = "<div class='rowElement'></div>";
	var $col = "<div class='cellElement'></div>";

	$('button').click( function(){
		BuildGrid()
	});

	var BuildGrid = function()
	{
		// For use with Trail option - Black background for opacity
		$('.newBoard').css('background-color', '#000');

		// Grabs values for new rows and columns
		var newRows = $('input[name="rowNumber"]').val();
		var newCols = $('input[name="colNumber"]').val();

		// Clears current board
		$( ".rowElement" ).remove();

		// For loops provide construction of new grid
		for (i = 0; i < newRows; i++)
		{
			$('.newBoard').append($row);
		}
	    for(j = 0; j < newCols; j++)
		{
			$('.rowElement').append($col);
		}

		// Resize cells elements as necessary and accounts for cell borders
		var newHeight = ($('.newBoard').height() / newRows - 2)
		$('.rowElement').css('height', newHeight);
		$('.cellElement').css('height', newHeight);
		var newWidth = (($('.newBoard').width() / newCols - 2))
		$('.cellElement').css('width', newWidth);

		// Where dropping the effects occur		
		$('.cellElement').mouseenter( function(){
			var color = $('#color').val();
			if(color === 'Random')
			{
				color = GetRandomColor();
			}
			else if(color === 'trail')
			{
				$(this).css('opacity',0);
				$(this).fadeTo('slow', 1);
			}
			else if(color === 'darken')
			{
				var newOpacity = $(this).css("opacity") * 0.75;
				$(this).css("opacity", newOpacity);
			}
			$(this).css('background', color);
		});
	}

	var GetRandomColor = function()
	{
	    var letters = '0123456789ABCDEF';
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) 
	    {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}
});
