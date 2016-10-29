$(document).ready( function(){

	var $row = "<div class='rowElement'></div>";
	var $col = "<div class='cellElement'></div>";

	$('button').click( function(){
		testFunction()
	});

	var testFunction = function()
	{
		var newRows = $('input[name="rowNumber"]').val();
		var newCols = $('input[name="colNumber"]').val();

		$( ".rowElement" ).remove();

		for (i = 0; i < newRows; i++)
		{
			$('.newBoard').append($row);
		}
	    for(j = 0; j < newCols; j++)
		{
			$('.rowElement').append($col);
		}

		var newHeight = ($('.newBoard').height() / newRows - 2)
		$('.rowElement').css('height', newHeight);
		$('.cellElement').css('height', newHeight);

		var newWidth = (($('.newBoard').width() / newCols - 2))
		$('.cellElement').css('width', newWidth);
		
		$('.cellElement').hover( function(){
			//$(this).addClass("hovered")
			var color = $('#color').val();
			if(color == 'Random')
			{
				color = GetRandomColor();
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
