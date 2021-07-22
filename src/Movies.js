import React from 'react'
import './movies.css'

const Movies = ({movies, img_api}) => {

    const setVote =(vote) => {
        if(vote >= 8){
            return 'green'
        } else if (vote >= 6){
            return 'orange'
        } else{
            return 'red';
        }
    }


    return (
        <div className="movies">
            {movies.map((movie) => (
                <div className="movie-container" key={movie.id}>
                    <img src={movie.poster_path ? img_api + movie.poster_path: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80'} alt="images" />
                    <div className="movie-info">
                    <p>{movie.title}</p>
                    <span className={`tag ${setVote(movie.vote_average)}`}>{movie.vote_average}</span>
                    </div>
                    <div className="movie-overview">
                        <h2>Overview:</h2>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movies

