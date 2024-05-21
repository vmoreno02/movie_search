// Accesses the Movie Database 
// If more functionality and different API calls were added in the future, they could be placed here

const fetch = require('node-fetch');

// authorization
// fix later (env variables?)
const API_KEY = "eyJhbGciOiJIUzI1NiJ9"
const API_READ_ACCESS_TOKEN = "eyJhdWQiOiIzMmNkYTA5NzA5NDZhY2FkNDljZjkzMTVhOWQ4ZDA2OSIsInN1YiI6IjY2NGQwOTk4YzliZWU0MzY1YTAxYTQ1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.at73PEzjL_3-6Kocv0BogTIGWU8pMpGqgFrTRvp2y4k"

async function searchMovies(query) {
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + query + '&include_adult=false&language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY + '.' + API_READ_ACCESS_TOKEN
    }
    };

    const res = await fetch(url, options)
    .then(res => res.json())
    .catch(err => console.error('error:' + err));

    return res;
}

module.exports = {
    searchMovies
};

// async function test() {
//     const res = await searchMovies("Gli invincibili tre");
//     console.log(res);
//     console.log(res.total_pages);
//     console.log(res.results);
// }

// test();