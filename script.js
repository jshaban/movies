/* function movieSection(movieTitle, movieYear, isOlder) {

    return `
    <section class="movie">
         <h2>${movieTitle}</h2>
         <h3>${movieYear}</h3>
         <h3>${isOlder}</h3>
         
    </section>
    `;
} */

function movieSection(movieTitle, movieYear) {
    
    let isNewer = "This film is older than 2000:"; //amit else-be tennék kerül ide, az az alapállapot itt!!!

    if (movieYear >= 2000) {    //itt az if "egyébként", hiszen az alapállapot már fent definiálva van!
        
        isNewer = "This film is newer than 2000:"

    } 

    return `
    <section class="movie">
         <h2>${movieTitle}</h2>
         <h3>${movieYear}</h3>
         <h3>${isNewer}</h3>
         
    </section>
    `;
}

function logMovieTitle (movieTitle) {
    console.log(movieTitle);
}

function loadEvent () {


    const rootElement = document.getElementById("root");

    let a = 5;

    /* console.log(movies[0].title);       // első elemet így kapjuk meg
    console.log(movies[1].title);       // második elemet így kapjuk meg
    console.log(movies[movies.length-1].title);  //utolsó elemet kapjuk meg ezzel
    console.log(movies[a].title);       // hatodik filmet adja ki (a=5); indexelés nullától kezdődik */

    for (const movie of movies) {
        //console.log(movie);
        //console.log(movies);
        //console.log(movie.title);

        /* if (movie.year >= 2000) {
            
            console.log(movie.title);
            rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year, "This movie is newer than 2000:"))
        
        } else {
            rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year, "This movie is older than 2000:"))

        }
 */
        logMovieTitle(movie.title);

        rootElement.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year))
    }

    /* for (let index = 0; index < movies.length; index++) {
        
        let movie = movies[index];
        console.log(index);
        console.log(movie.title);
        
    } */

}





window.addEventListener("load", loadEvent);  //betölti az oldalt a load, loadEvent meghívja a fenti függvényt