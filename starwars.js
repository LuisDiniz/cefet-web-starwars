$.ajax({
	url: 'http://swapi.co/api/films/',
	method: 'GET',
	success: function(resposta) {
		let movies = document.querySelector('#movies>ul');
		let animation = document.querySelector('.reading-animation');	

		for (var i = 0; i < resposta.results.length; i++) {
			let episodeNumber = converteNumeroRomano(resposta.results[i].episode_id);
			movies.innerHTML = movies.innerHTML + '<li id=episode' + resposta.results[i].episode_id + ' data-episodeIndex=' + i + '>Episode '+ episodeNumber +'</li>';
		}

		let episodesLinkList = document.querySelectorAll('#movies>ul>li');	

		for (var i = 1; i <= episodesLinkList.length; i++) {
			let episodesLink = document.querySelector('#episode'+i);
			episodesLink.addEventListener('click', function(){
					let episodeIndex = episodesLink.getAttribute('data-episodeIndex');
					animation.innerHTML = '';

					animation.append('Episode ' + converteNumeroRomano(resposta.results[episodeIndex].episode_id) + '\n');
				  	animation.append(resposta.results[episodeIndex].title + '\n\n');	
				  	animation.append(resposta.results[episodeIndex].opening_crawl);		
				});
		}
	}
});

function converteNumeroRomano(numero){
	switch(numero) {
	    case 1:
	        return 'I';
	        break;
	    case 2:
	        return 'II';
	        break;
	    case 3:
	        return 'III';
	        break;
	    case 4:
	        return 'IV';
	        break;
	    case 5:
	        return 'V';
	        break;
	    case 6:
	        return 'VI';
	        break;
	    case 7:
	        return 'VII';
	        break;
	}
}

