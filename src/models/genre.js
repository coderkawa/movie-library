module.exports = (sequelize, type) => {
    return sequelize.define('genre', {
        genreId: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        description: type.TEXT
    })
}