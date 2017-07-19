$.fn.sauceNtfy = function(config){

	var config = $.extend({
		id: this[0].id, 				// Id'si
		text: '',						// text
		type: 'error',					// type: loading/error/true/hide
		time: ''						// ekranda kalacağı sn
	}, config);


	$(".sauceNtfy").remove();

	if (config.type !== 'hide'){
		$("#"+config.id).before('<div class="sauceNtfy '+config.type+'" style="display:none"></div>');
		$("#"+config.id).prev(".sauceNtfy").html('<div><i class="close"></i><div>'+config.text+'</div></div>');
		$(".sauceNtfy").slideDown();
	}

	if (config.time !== ''){
		setTimeout(
			function(){
				$(".sauceNtfy").slideUp('normal', function(){$(".sauceNtfy").remove()});
			},(1000*config.time)
		);
	}

}


$(document).on("click",".close",function(){
	$(this).parents(".sauceNtfy").slideUp('normal', function(){$(".sauceNtfy").remove()});
});