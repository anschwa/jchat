$(document).ready(function(){
	
	// AJAX REQUESTS
	//$.ajaxSetup({cache:false}); //ensures no ajax request gets cached
	// AJAX for retriving the latest message
	// loads the latest message after you enter a username
	function getMessages(){	
		request =
			$.ajax({
				url: "path/or/url/to/jchat/chat.json",
				type: "GET",
				dataType: "json",
				cache: false,
				timeout: 5000 // Timeout request after 5 seconds
			}).done(function(result){
				console.log("AJAX Update Success");
				var chitchat = result.messages.pop() // get the latest message
				var user = chitchat.user;
				var color = chitchat.color; 
				var text = chitchat.text;
				var time = chitchat.time;
				
				var old = $('#messages:last-child .chat_msg:last-child .stamp').text();
				// Check if there is new message via time stamp
				if (time != old){
					var new_msg = '<p class="chat_msg"><span class="username" style="color:'+ 
                                  color + '">' + user + ':</span><span class="text">' + 
                                  text + '</span><span class="stamp">' + time + '</span></p>';
					$('#messages').append(new_msg);
					// Auto Scroll Messages
					$("#messages").scrollTop($("#messages")[0].scrollHeight);
					// Determine size and theme
					var theme = $('.chat_msg').css('color');
					var msg_size = $('.chat_msg').css('font-size');
					var stamp_size = $('.stamp').css('font-size');
					$('.chat_msg').css('font-size', msg_size);
					$('.stamp').css('font-size', stamp_size);
					$('#msg_wrap, #messages').css('color', theme);
					
				}else{request.abort();} // May or may not do anything}
			}).fail(function(){
				console.log("AJAX Update Failure");
			});
	}
	
	// updating messages ajax
	//$('#msg_wrap').click(getMessages); // Update chat everytime you click the box
	setInterval(getMessages, 3000); // Update chat every x seconds
	
	// Send Message | AJAX
	$('#chat_form').submit(function(){
		var user = $('#usr').val();
		var color = $('#usr').css('color');
		var text = $('#msg').val();
		var data = 'usr=' + escape(user) + '&color=' + escape(color) + '&text=' + escape(text);
		
		$.ajax({
			url: "path/or/url/to/jchat/chat.php",
			type: "GET",
			data: data,
			dataType: 'json',
			cache: false
		}).done(function(){
			console.log("AJAX Success");
			$('#msg').val(''); // Clear input box after message is sent.
			getMessages(); // Calls update message ajax when new message is sent
		}).fail(function(){
			console.log("AJAX Failure");
		});	
		return false; // ensures page is not refreshed.
	});
	
});
