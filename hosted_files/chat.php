<?php
if (isset($_GET['usr'], $_GET['color'], $_GET['text'])){
	$user = htmlentities($_GET['usr']);
	$color = htmlentities($_GET['color']);
	$text = htmlentities($_GET['text']);
	$time = date('g:i:s A');	// displays the current time in hours, minutes, AM / PM
	
	// Read JSON chat log
	$chat_log = "chat.json";
	
	$json = json_decode(file_get_contents($chat_log), true);	
	
	// add message to decoded JSON array				
	$json["messages"][] = array("user" => $user, 
                                         "color" => $color, 
                                         "text" => $text, 
                                         "time" => $time);
	
	file_put_contents($chat_log, json_encode($json));
	
	// Send latest message back.
	$result_array = end($json['messages']); // 'end' sets pointer to last element
	
	echo json_encode($result_array); // Whatever is echoed is the 'result' of the ajax
	
	reset($json['messages']); // 'reset' resets pointer position
		
}
?>