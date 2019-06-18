module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        movieId: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name:type.STRING,
        description:type.TEXT,
        releaseDate: type.DATEONLY,
        duration: type.INTEGER,
        rating: type.DECIMAL(2,1)
    })
}