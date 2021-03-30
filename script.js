$(document).ready(function(){
	// send message button function
	
	$('#msg-send-btn').click(function(){
		ques_text = $('#msg-text').val()
		ques_text = ques_text.trim()
		// print Question on chat window
		if(ques_text != ''){
			ques_html = "<div class='client-side-msg'>" + ques_text + "</div><div style='clear:both'></div>"
			$('.messenger-body').append(ques_html)
			$('#msg-text').val("")
			
			// get response and print on chat window
			getResponse('hello I am your system')
			$(".messenger-body").scrollTop(9000)
		}
	});
	
	// Sample questions span
	$('.sample-ques').click(function(){
		span_ques = $(this).html()
		
		ques_html = "<div class='client-side-msg'>" + span_ques + "</div><div style='clear:both'></div>"
		$('.messenger-body').append(ques_html)
		
		// get response and print on chat window
		getResponse('hello I am your system')
		$(".messenger-body").scrollTop(9000)
	})
	
	
	function getResponse(ques_text){
		answer = "Automatic prolongation function is included in the contract; Either party (lessee and lessor) has the right to terminate the lease with no more than an insignificant penalty"
		
		answer_para = "An <mark>automatic prolongation function is included in the contract; Either party (lessee and lessor) has the right to terminate the lease with no more than an insignificant penalty</mark>; The enforceable lease term is in the beginning a$? 12 months (i.e. ashort-terma); Prolongation period and notice period in the contract will lead at a later point of time to a anew leasea, not meeting the definition of a short-term lease any longer (i.e. enforceable lease term is > 12 months). Leases for which the underlying asset is of low value (low-value asset leases) An underlying asset can be of low value (alow-value assets) only if:"
		
		ans_text = "<div class='bot-response'><div class='ans expand'><span class='caret'><i class='fas fa-caret-down'></i></span>&nbsp;&nbsp;" + answer + "</div><div class='ans-para'> " + answer_para + "</div></div>"
		ans_html = "<div class='bot-side-msg'>" + ans_text + "</div>"
		$('.messenger-body').append(ans_html)
	}
	
	$(document).on('click', '.caret', function() {
		if($(this).parent('.ans').hasClass('expand')){
			$(this).html("<i class='fas fa-caret-right'></i>")
			$(this).parent('.ans').next('.ans-para').slideUp()
			$(this).parent('.ans').addClass('hidden')
			$(this).parent('.ans').removeClass('expand')
		}
		else {
			$(this).html("<i class='fas fa-caret-down'></i>")
			$(this).parent('.ans').next('.ans-para').slideDown()
			$(this).parent('.ans').addClass('expand')
			$(this).parent('.ans').removeClass('hidden')
		}
	})
	
	$('#refresh-btn').click(function(){
		$('.messenger-body').html('')
	})
})