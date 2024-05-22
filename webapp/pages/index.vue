<template>
    <div id="app">
        <h1>Movie Search</h1>
        <input type="text" v-model="title" placeholder="Enter movie title" class="searchbar">
        <button @click="searchMovies" class="button">Search</button>

        <hr/>
    
        <div id="results">
            <div v-if="error" class="error">{{ error }}</div>
            <div v-else-if="movies.length === 0">No movies found</div>
            <div v-else>
                <div v-for="movie in movies" :key="movie.id" class="movie">
                    <div class="image-container">
                        <img :src="movie.poster_image_url" :alt="movie.title" class="movie-image">
                    </div>

                    <div class="text-container">
                        <h3>{{ movie.title }}</h3>
                        <p> Popularity summary: {{ movie.popularity_summary }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
    export default {
        data() {
        return {
            title: '',
            movies: [],
            error: null
        };
        },
        methods: {
            async searchMovies() {
                if (!this.title) {
                    this.error = 'Please enter a movie title';
                    return;
                }
                this.error = null;

                // FIX LATER:
                // 1. since the frontend and backend are running on different localhost ports,
                // ran into some CORS issues. Installed "allow cors" chrome extension and
                // added header below.
                // 2. if being deployed, have to change the URL below
                try {
                    var opts = {
                        headers: {
                            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    }
                    const response = await fetch(`http://localhost:3002/movies/${this.title}`, opts);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    this.movies = await response.json();
                } catch (error) {
                    console.error('Error fetching movies:', error);
                    this.error = 'Failed to fetch movies';
                }
            }
        }
    };
</script>
  
<style>
    #app {
        font-family: Helvetica, sans-serif;
        padding: 20px;
    }
    #results {
        margin-top: 20px;
    }
    .movie {
        display: flex;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        padding: 10px;
        background-color: rgb(206, 246, 228);
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .searchbar {
        margin-bottom: 15px;
        padding: 8px 15px;
        border-radius: 4px;
    }
    .button {
        display: inline-block;
        padding: 8px 16px;
        font-size: 16px;
        text-align: center;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
    }
    .button:hover {
        background-color: #0056b3;
    }
    .error {
        color: red;
    }
    .movie-image {
        max-width: 200px; 
        max-height: 300px; 
        width: auto; 
        height: auto;
    }
    .image-container {
        margin-right: 10px;
    }
    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
</style>