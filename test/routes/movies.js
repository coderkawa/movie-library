describe('Movies API', function() {
    before(function(done) {
        request.delete('/movies')
            .end(function(err, res) {
                done(err);
            });
    });

    describe('POST /movies', function() {
        it('Inserts a movie', function(done) {
            request.post('/movies')
                .send({
                    name: 'Captain America',
                    description: 'The first avenger',
                    releaseDate: '2000-01-01',
                    duration: '123',
                    rating: '8.6'
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    describe('POST /movies', function() {
        it('Inserts a movie with genre', function(done) {
            request.post('/genres')
                .send({
                    name: 'Action',
                    description: 'Super MCU Action'
                })
                .end(function(err,res) {
                    request.post('/movies')
                        .send({
                            name: 'Iron Man',
                            description: 'Jarvis, send my suits!',
                            genres: [res.body.genreId],
                            releaseDate: '2001-04-09',
                            duration: '145',
                            rating: '8.8'
                        })
                        .expect(200)
                        .end(function(err, res) {
                            done(err);
                        });
                });
        });
    });

    describe('GET /movies', function() {
        it('returns all movies', function(done) {
            request.get('/movies')
                .expect(200)
                .end(function(err, res) {
                    expect(res.body).to.have.lengthOf(2);
                    done(err);
                });
        });
    });

    describe('GET /movies/:movieId', function() {
        it('returns a movie by movieId', function(done) {
            movie.findOne().then(movies => {
            const movieId = movies.movieId;
            request.get('/movies/'+movieId)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body).to.have.lengthOf(1);
                    const responseMovieId = res.body[0].movieId
                    expect(responseMovieId).to.equal(movieId);
                    done(err);
                });})
        });
    });

    describe('DELETE /movies/:movieId', function() {
        it('deletes a movie by movieId', function(done) {
            movie.findOne().then(movies => {
            const movieId = movies.movieId;
            request.delete('/movies/'+movieId)
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });})
        });
    });

    describe('DELETE /movies/', function() {
        it('deletes all movies', function(done) {
            request.delete('/movies')
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

});