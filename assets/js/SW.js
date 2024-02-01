document.addEventListener('DOMContentLoaded',function(){
  const listajson= [
	
		{
			"name": "Luke Skywalker",
      "img":"https://img.europapress.es/fotoweb/fotonoticia_20150620132813_640.jpg",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/14/",
				"https://swapi.dev/api/vehicles/30/"
			],
			"starships": [
				"https://swapi.dev/api/starships/12/",
				"https://swapi.dev/api/starships/22/"
			],
			"created": "2014-12-09T13:50:51.644000Z",
			"edited": "2014-12-20T21:17:56.891000Z",
			"url": "https://swapi.dev/api/people/1/"
		},
		{
			"name": "C-3PO",
      "img":"https://elcomercio.pe/resizer/eSLGH8VE7NAsAuWrbd_4702TeqM=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Y64HWIJC6JE5DEUFNHBQV7HKIY.jpg",
      "height": "167",
			"mass": "75",
			"hair_color": "n/a",
			"skin_color": "gold",
			"eye_color": "yellow",
			"birth_year": "112BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [
				"https://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:10:51.357000Z",
			"edited": "2014-12-20T21:17:50.309000Z",
			"url": "https://swapi.dev/api/people/2/"
		},
		{
			"name": "R2-D2",
      "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcevzZqEmCZ7Z3ea8lyySpXkea6PoABti2A&usqp=CAU",
			"height": "96",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, blue",
			"eye_color": "red",
			"birth_year": "33BBY",
			"gender": "n/a",
			"homeworld": "https://swapi.dev/api/planets/8/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [
				"https://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:11:50.376000Z",
			"edited": "2014-12-20T21:17:50.311000Z",
			"url": "https://swapi.dev/api/people/3/"
		},
		{
			"name": "Darth Vader",
      "img": "https://i.pinimg.com/originals/51/e3/7c/51e37c2b688170cdc07888eba287bfd1.jpg",
			"height": "202",
			"mass": "136",
			"hair_color": "none",
			"skin_color": "white",
			"eye_color": "yellow",
			"birth_year": "41.9BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [],
			"starships": [
				"https://swapi.dev/api/starships/13/"
			],
			"created": "2014-12-10T15:18:20.704000Z",
			"edited": "2014-12-20T21:17:50.313000Z",
			"url": "https://swapi.dev/api/people/4/"
		},
		{
			"name": "Leia Organa",
      "img":"https://i0.wp.com/beverlyhillsfilmfestival.com/wp-content/uploads/gun.jpeg?fit=672%2C1000&ssl=1",
			"height": "150",
			"mass": "49",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "19BBY",
			"gender": "female",
			"homeworld": "https://swapi.dev/api/planets/2/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/30/"
			],
			"starships": [],
			"created": "2014-12-10T15:20:09.791000Z",
			"edited": "2014-12-20T21:17:50.315000Z",
			"url": "https://swapi.dev/api/people/5/"
		},
		{
			"name": "Owen Lars",
      "img":"https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=8%2C0%2C774%2C774",
			"height": "178",
			"mass": "120",
			"hair_color": "brown, grey",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "52BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:52:14.024000Z",
			"edited": "2014-12-20T21:17:50.317000Z",
			"url": "https://swapi.dev/api/people/6/"
		},
		{
			"name": "Beru Whitesun lars",
      "img":"https://i.pinimg.com/originals/cd/55/1a/cd551a080b436e9b2a6c618321224de8.jpg",
			"height": "165",
			"mass": "75",
			"hair_color": "brown",
			"skin_color": "light",
			"eye_color": "blue",
			"birth_year": "47BBY",
			"gender": "female",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:53:41.121000Z",
			"edited": "2014-12-20T21:17:50.319000Z",
			"url": "https://swapi.dev/api/people/7/"
		},
		{
			"name": "R5-D4",
      "img":"https://p.turbosquid.com/ts-thumb/R5/3pEuP5/PmTDbTYb/product1/jpg/1604712681/600x600/fit_q87/2743523bb909a8a9051ff602f21076980d7dd4f8/product1.jpg",
			"height": "97",
			"mass": "32",
			"hair_color": "n/a",
			"skin_color": "white, red",
			"eye_color": "red",
			"birth_year": "unknown",
			"gender": "n/a",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/"
			],
			"species": [
				"https://swapi.dev/api/species/2/"
			],
			"vehicles": [],
			"starships": [],
			"created": "2014-12-10T15:57:50.959000Z",
			"edited": "2014-12-20T21:17:50.321000Z",
			"url": "https://swapi.dev/api/people/8/"
		},
		{
			"name": "Biggs Darklighter",
      "img":"https://i.pinimg.com/originals/33/81/e5/3381e50f4b54339203c97b28c08ccbb8.jpg",
			"height": "183",
			"mass": "84",
			"hair_color": "black",
			"skin_color": "light",
			"eye_color": "brown",
			"birth_year": "24BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/"
			],
			"species": [],
			"vehicles": [],
			"starships": [
				"https://swapi.dev/api/starships/12/"
			],
			"created": "2014-12-10T15:59:50.509000Z",
			"edited": "2014-12-20T21:17:50.323000Z",
			"url": "https://swapi.dev/api/people/9/"
		},
		{
			"name": "Obi-Wan Kenobi",
      "img":"https://media.entertainmentearth.com/assets/images/3b91c1524bf644b0b449e892a14b26c4xl.jpg",
			"height": "182",
			"mass": "77",
			"hair_color": "auburn, white",
			"skin_color": "fair",
			"eye_color": "blue-gray",
			"birth_year": "57BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/20/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/4/",
				"https://swapi.dev/api/films/5/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/38/"
			],
			"starships": [
				"https://swapi.dev/api/starships/48/",
				"https://swapi.dev/api/starships/59/",
				"https://swapi.dev/api/starships/64/",
				"https://swapi.dev/api/starships/65/",
				"https://swapi.dev/api/starships/74/"
			],
			"created": "2014-12-10T16:16:29.192000Z",
			"edited": "2014-12-20T21:17:50.325000Z",
			"url": "https://swapi.dev/api/people/10/"
		}
	]
  mostrarLista(listajson);
});
function mostrarLista(lista) {
  lista.forEach(nombre_lista => {
  const personajes = document.createRange().createContextualFragment(
      `
      <div id="tarjeta">
          <img src="${nombre_lista.img}" alt="">
          <p>${nombre_lista.name}</p>
          <p>${nombre_lista.gender}</p>
          <p>${nombre_lista.eye_color}</p>
          <p>${nombre_lista.hair_color}</p>
          
      </div>
   `
  );
  const main = document.querySelector("main");
  main.append(personajes)
  });
}