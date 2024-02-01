function getLocation(done) {

    const results = fetch("https://rickandmortyapi.com/api/location");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}

getLocation(data => {
    data.results.forEach(location => {
        const article = document.createRange().createContextualFragment(/*html*/  `

        <article>

            <h2>${location.name}</h2>
            <span>${location.type}</span>
            <p>${location.dimension}</p>
                      
            
        </article>
       
        ` );

        const main = document.querySelector("main");

        main.append(article);

    });

});