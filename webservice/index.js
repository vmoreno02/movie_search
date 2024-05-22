const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3002;

// database access
const db = require("./database.js")

// GET /movies/:title
// Searches database for matching titles and returns the first 10 results (if applicable)
app.get('/movies/:title', async (req, res) => {
    try {
        const movieResult = await db.searchMovies(req.params.title);
        console.log(movieResult.page);
        let movieList = movieResult.results;

        if (movieResult.total_results > 10) {
            movieList = movieList.slice(0, 10);
        }

        const editedList = await editMovieList(movieList);
        
        res.json(editedList);
        res.send();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// helper function to clean up movie list
async function editMovieList(movieList) {
    let editedList = [];

    for (i = 0; i < movieList.length; i++) {
        const popularity = movieList[i].popularity;
        const vote_count = movieList[i].vote_count;

        let listItem = {
            movie_id: movieList[i].id,
            title: movieList[i].title,
            poster_image_url: "https://image.tmdb.org/t/p/original/" + movieList[i].poster_path,
            popularity_summary: popularity + " from " + vote_count + " votes"
        };

        editedList.push(listItem);
    }

    return editedList;
}

// start the app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});