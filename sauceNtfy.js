(function() {
	
	this.sauceNtfy = function(arg) {
	
		const config = {
			id:				arg.id,
			text:			(!arg.text)		? '' 			: arg.text,
			type: 		(!arg.type) 	? 'error' : arg.type,		// type: loading/error/true/hide
			time:			(!arg.time)		? ''			: arg.time		// ekranda kalacağı sn
		};


		const ntfyID = '#'+config.id;
		const domNtfyID = document.querySelector(ntfyID);

		if (document.querySelectorAll('.sauceNtfy').length > 0){
			document.querySelector(ntfyID).removeChild(document.querySelector('.sauceNtfy'));
		}

		if(config.type != 'hide'){
			domNtfyID.insertAdjacentHTML('afterbegin', '<div class="sauceNtfy '+config.type+'"><div><i class="close"></i><div>'+config.text+'</div></div></div>');
		}


		
		document.querySelector('.close').addEventListener('click', function(){
			document.querySelector('.sauceNtfy').parentNode.removeChild(document.querySelector('.sauceNtfy'));
		});


	}

}());
