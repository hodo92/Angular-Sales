const Sequelize = require('sequelize');
const dataAccess = require('./data-access');

const Comments = dataAccess.connection.define('comments', {
    comment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    customer_id: {
        type: Sequelize.INTEGER,
    },
    comment_text: {
        type: Sequelize.STRING(50)
    },
    post_date: {
        type: Sequelize.DATE
    }
});

module.exports = Comments;