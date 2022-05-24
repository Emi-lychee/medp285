var quiz = { "Genshin" : [
	{
		"id" : 1,
		"question" : "How many nations are in Teyvat?",
		"options" : [
			{"a": "3 nations", 
			 "b": "5 nations", 
			 "c": "7 nations", 
			 "d": "10 nations"}
			],
		"answer": "7 nations",
		"score": 0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Who is the Archon of Mondstadt?",
		"options" : [
			{"a": "Venti", 
			 "b": "Zhongli", 
			 "c": "Raiden Shogun"}
			],
		"answer": "Venti",
		"score": 0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "Who is the Archon of Liyue?",
		"options" : [
			{"a": "Venti", 
			 "b": "Zhongli", 
			 "c": "Raiden Shogun"}
			],
		"answer": "Zhongli",
		"score": 0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Who is the Archon of Inazuma?",
		"options" : [
			{"a": "Venti", 
			 "b": "Zhongli", 
			 "c": "Raiden Shogun"}
			],
		"answer": "Raiden Shogun",
		"score": 0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "How many characters can you have on your team at a time in single player mode?",
		"options" : [
			{"a": "1 character", 
			 "b": "2 characters",
			 "c": "3 characters",
			 "d": "4 characters",
			}
			],
		"answer": "4 characters",
		"score": 0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "Who is Paimon?",
		"options" : [
			{"a": "My teammate", 
			 "b": "Best traveling companion",
			 "c": "Emergency food",
			 "d": "Best Pokemon",
			}
			],
		"answer": "Emergency food",
		"score": 0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "What is the maximum amount of players you can co-op with?",
		"options" : [
			{"a": "1 player", 
			 "b": "2 players",
			 "c": "3 players",
			}
			],
		"answer": "3 players",
		"score": 0,
		"status": ""
	},
	]
}

var quizApp = function() {

	this.score = 0;
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.Genshin.length;
	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.Genshin[this.currentque].id + '.');

			$("#question").html(quiz.Genshin[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.Genshin[this.currentque].options[0]) {
			  if (quiz.Genshin[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.Genshin[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.Genshin[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.Genshin[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.Genshin[j].score == 0) {
					res = '<span class="wrong">' + quiz.Genshin[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.Genshin[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.Genshin[j].id + '</span> &nbsp;' + quiz.Genshin[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.Genshin[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.Genshin[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.Genshin[this.currentque].answer) {
			if(quiz.Genshin[this.currentque].score == "") {
				quiz.Genshin[this.currentque].score = 1;
				quiz.Genshin[this.currentque].status = "correct";
		}
		} else {
			quiz.Genshin[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}

var Genshinq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			Genshinq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});		 

	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				Genshinq.checkAnswer(selectedopt);
			}
			Genshinq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			Genshinq.checkAnswer(selectedopt);
		}
			Genshinq.changeQuestion(-1);
	});
});
