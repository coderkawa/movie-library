describe('Genres API', function() {
    before(function(done) {
        request.delete('/genres')
            .end(function(err, res) {
                done(err);
            });
    });

    describe('POST /genres', function() {
        it('Inserts a genre', function(done) {
            request.post('/genres')
                .send({
                    name: 'Action',
                    description: 'Super Action'
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    describe('POST /genres', function() {
        it('Inserts another genre', function(done) {
            request.post('/genres')
                .send({
                    name: 'Comedy',
                    description: 'Funny comedy'
                })
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

    describe('GET /genres', function() {
        it('returns all genres', function(done) {
            request.get('/genres')
                .expect(200)
                .end(function(err, res) {
                    expect(res.body).to.have.lengthOf(2);
                    done(err);
                });
        });
    });

    describe('GET /genres/:genreId', function() {
        it('returns a genre by genreId', function(done) {
            genre.findOne().then(genres => {
            const genreId = genres.genreId;
            request.get('/genres/'+genreId)
                .expect(200)
                .end(function(err, res) {
                    expect(res.body).to.have.lengthOf(1);
                    const responseGenreId = res.body[0].genreId
                    expect(responseGenreId).to.equal(genreId);
                    done(err);
                });})
        });
    });

    describe('DELETE /genres/:genreId', function() {
        it('deletes a genre by genreId', function(done) {
            genre.findOne().then(genres => {
            const genreId = genres.genreId;
            request.delete('/genres/'+genreId)
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });})
        });
    });

    describe('DELETE /genres/', function() {
        it('deletes all genres', function(done) {
            request.delete('/genres')
                .expect(200)
                .end(function(err, res) {
                    done(err);
                });
        });
    });

});