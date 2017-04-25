// var getFilmes = new XMLHttpRequest();
// getFilmes.onreadystatechange = callbackGetFilmes;
// getFilmes.open('GET', 'http://swapi.co/api/films/', true);
// getFilmes.send(null);

// function callbackGetFilmes(){
// 	console.log(this.response);
// }


$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',
  success: function(resposta) {
  	//var item = window.$('.reading-animation');
  	console.log(resposta.results);

	let movies = document.querySelector('#movies');
	let animation = document.querySelector('.reading-animation');

	for (var i = 0; i < resposta.results.length; i++) {
		let episodeNumber = converteNumeroRomano(resposta.results[i].episode_id);
		movies.innerHTML = movies.innerHTML + '<li data-episode-url="http://swapi.co/api/films/4/">Episode '+ episodeNumber +'</li>';
	}

	

  	animation.append('Episode' + converteNumeroRomano(resposta.results[0].episode_id));
  	animation.append(resposta.results[0].title);
  	animation.append(resposta.results[0].opening_crawl);

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
	    case 4:
	        return 'IV';
	    case 5:
	        return 'V';
	    case 6:
	        return 'VI';
	    case 7:
	        return 'VII';
	}
}