### Movie library REST API using Node.js, Express.js, Sequelize and PostgreSQL

*Movies API*
#### Fetch all movies
>##### GET /movies
<br/>

#### Fetch a movie by movieId with its genres
>##### GET /movies/:movieId
<br/>

#### Create a new movie
>##### POST /movies
>##### Request
>{
>	"name": "Captain America",
>	"description":"Super Hero",
>	"genres":[1,2],
>	"releaseDate": "2010-01-02",
>	"duration": 124,
>	"rating": 8.7
>}
<br/>
<br/>

#### Delete a movie by movieId
>##### DELETE /movies/:movieId
<br/>

#### Delete all movies
>##### DELETE /movies
<br/>

*Genres API*
#### Fetch all genres
>##### GET /genres
<br/>

#### Fetch a genre by genreId
>##### GET /genres/:genreId
<br/>

#### Create a new genre
>##### POST /genres
>##### Request
>{
>	"name": "Action",
>	"description":"Super awesome action!"
>}
<br/>
<br/>

#### Delete a genre by genreId
>##### DELETE /genres/:genreId
<br/>

#### Delete all genres
>##### DELETE /genres