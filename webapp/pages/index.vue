<template>
    <div id="app">
        <h1>Movie Search</h1>
        <input type="text" v-model="title" placeholder="Enter movie title">
        <button @click="searchMovies">Search</button>
    
        <div id="results">
            <div v-if="error" class="error">{{ error }}</div>
            <div v-else-if="movies.length === 0">No movies found</div>
            <div v-else>
                <div v-for="movie in movies" :key="movie.id" class="movie">
                    <h3>{{ movie.title }}</h3>
                    <p>{{ movie.description }}</p>
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
        font-family: Arial, sans-serif;
        padding: 20px;
    }
    #results {
        margin-top: 20px;
    }
    .movie {
        margin-bottom: 15px;
    }
    .error {
        color: red;
    }
</style>