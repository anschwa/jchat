$(document).ready(function(){
    
    // Create 5 rows
    for (var i=1;i<6;i++){
        $('#color_picker').append('<div class="picker"></div');
    }
    // Create 6 columns
    for (var i=1;i<6;i++){
        $('.picker').append('<div class="square"></div>');
    }
    // Add IDs
    $('.square').attr('id', function(i){
        return 'pixel'+(i+1);
    });
    // Change color
    $('.square').click(function(){
		var name = $('#usr').val();
        var pixel_color = $(this).css('background-color');
        $('.username:contains("'+ name +'"), #usr').css('color', pixel_color);
    });
    
	// Set Username
	set_name = 'Guest' + Math.floor(Math.random()*101);
	$('#usr').val(set_name);
	$('#usr').click(function(){this.select();});
	// Ensures there is a username
	$('#usr').blur(function(){
		var name = $('#usr');
		if (name.val() == ''){
			name.val(set_name);	
		}
	});
	
	// Need way to Select Mesage text	
	
    // Controls | Font Size:
    // Increase Size
    $('#plus').click(function(){
        var current_size = $('.chat_msg').css('font-size');
        var new_size = parseFloat(current_size, 10) + 1;
        if (new_size < 22){
            $('.chat_msg, .username, .stamp').css('font-size', new_size);   
        }
    });
    // Decrease Size
    $('#minus').click(function(){
        var current_size = $('.chat_msg').css('font-size');
        var new_size = parseFloat(current_size, 10) - 1;
        if (new_size > 10){
            $('.chat_msg, .username, .stamp').css('font-size', new_size);   
        }
    });
    // Controls | Theme
    $('#light').click(function(){
        $('#msg_wrap, #messages').css('background-color', '#fff');
        $('.chat_msg').css('color', '#000');
    });
    $('#dark').click(function(){
        $('#msg_wrap, #messages').css('background-color', '#2f2f2f');
        $('.chat_msg').css('color', '#eae7dc');
    });
    // Controls | Clear Chat
    $('#clear').click(function(){
        $('#messages').empty();
        // Tell sever to fetch latest message and display as first
    });
    
});