document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("btn");
    let txt = document.getElementById("txt");
    let apikey = '51af69a3';
    btn.addEventListener("click", function () {
        fetch("http://www.omdbapi.com/?apikey=" + apikey + "&t=" + txt.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                let movieInfo = document.getElementById("movieInfo");
                let movie = document.getElementById("movie");
                let title = myJson.Title;
                movieInfo.innerHTML = `<strong>Title:</strong> ${title}`;
                movieInfo.innerHTML += '<br>';
                movieInfo.innerHTML += `<strong>Plot:</strong> ${myJson.Plot}`;
                myJson.Actors.split(",").forEach(function (actor) {
                    movieInfo.innerHTML += actor + " | "
                })
                movieInfo.innerHTML += '<br>';
                myJson.Ratings.forEach(function (rating) {
                    movieInfo.innerHTML += rating.Source + ":" + rating.Value + "<br>"

                });
                let link = document.createElement("a");
                link.href = "https://www.imdb.com/title/" + myJson.imdbID;
                let img = document.createElement('img');
                img.src = myJson.Poster;
                img.style.width = "25vw";
                link.appendChild(img);
                movie.appendChild(link);
            })

    })
})