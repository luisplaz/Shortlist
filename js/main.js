$(document).ready(function() {
	
	var counter = 0;
	var questions = ["Hello?","Yeah?","Ok?"];
	var text = "Hello my name is Gary, I will be your interviewer.\n Press start to ";
	
	$('#inputQ').attr("value",text);

	$("#start_button").click(function(e){
		e.preventDefault();
		counter = (counter + 1) % questions.length;
		$('#inputQ').attr("value",questions[counter]);
		$("#start_button").text("Submit")
	});
});
