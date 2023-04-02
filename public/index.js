const BASE_URL = "https://api.themoviedb.org/3/"
const API = "api_key=73c057246bb1dc245057ba1a40440fc1"
const API_URL = BASE_URL + "discover/movie?sort_bypopularity.desc&" + API
const img_URL = "https://image.tmdb.org/t/p/w500"
const searchUrl = BASE_URL + "search/movies?" + API;

const form = document.getElementById("form")
const search = document.getElementById("search")
console.log(API_URL);
fetch(API_URL)
    .then(apidata => {
        return apidata.json()
    })
    .then(apidata => {
        for (let i = 0; i < 20; i++) {


            const card = document.createElement("div")
            const h1 = document.createElement("h2")
            const h2 = document.createElement("h3")
            const img = document.createElement("img")
            const p = document.createElement("p")
            const text = document.createElement("div")


            const vte = apidata.results[i].vote_average


            h1.innerHTML = apidata.results[i].original_title
            h2.innerHTML = apidata.results[i].vote_average
            p.innerHTML = apidata.results[i].overview
            img.setAttribute("src", img_URL + apidata.results[i].backdrop_path)




            img.classList.add("card-img")
            card.classList.add("card")
            text.classList.add("text")
            p.classList.add("overview")

            text.append(h1, h2, p)
            card.append(img, text)

            document.querySelector('.cards').append(card)

            if (vte >= "8") {


                h2.style.color = "green"



            }
            if (vte >= "5" & vte <= "8") {
                h2.style.color = "yellow"
            } else if (vte <= "6") {

                h2.style.color = "red"
            }

        }

    })



function getmovies(url) {

    fetch(url).then(res => res.json())
        .then(data => {
            console.log(data.results);

        })
}





form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchterm = search.value;
    console.log(searchterm);
    if (searchterm) {
        getmovies("https://api.themoviedb.org/3/search/movie?api_key=" + API + "&language=en-US&page=1&include_adult=false")
    }


})