$(document).ready(function() {
	var counter = 0;
	var questions = [
	"I can see you are a web developer. What type of language do you typically use?",
	"You answered Ruby and Javascript, the can you please answer the next question:"+ "\n" +" What type of search method would you use for....",
	"How would you implement a stack using ruby? [You can pseudocode]"];
	var text = "Hello my name is Olivia, I will be your interviewer.\n Press start to begin!";
	$('#answer-form').hide();

	text.split("").forEach(function(elem, index){
		setTimeout(function(){
			$("#inputQ").val($("#inputQ").val()+elem);
		}, index* 55); 
		$("#inputQ").focus();
	}); 

	$("#start_button").click(function(e){
		e.preventDefault();
		$('#answer-form').show();
		$('#inputP').val("");
		if(counter!=(questions.length)){
			debugger;
			$('#inputQ').val(questions[counter]);
			$("#start_button").text("Submit")
			counter = counter + 1;
		}else{
			$('.jumbotron').hide();
			$('.text-center').append("<br><br><h4>Thank you for your time</h4>");
		}
	});
});