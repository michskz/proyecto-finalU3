function getEpisode(done) {

    const results = fetch("https://rickandmortyapi.com/api/episode");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

getEpisode(data => {
    data.results.forEach(Episode => {
        const article = document.createRange().createContextualFragment(/*html*/  `

        <article>
           
            <h2>${Episode.name}</h2>
            <span>${Episode.air_date}</span>
            <p>${Episode.name}</p>
            <span>${Episode.episode}</span>
            
        </article>
       
        ` );

        const main = document.querySelector("main");

        main.append(article);

    });

});