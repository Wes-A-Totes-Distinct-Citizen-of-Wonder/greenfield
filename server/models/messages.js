module.exports = function (sequelize, Sequelize) {
  const Message = sequelize.define('message', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    sender: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    recepient: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    date: {
      type: Sequelize.DATE,
    },
    message: {
      type: Sequelize.TEXT,
    },
  });
  return Message;
};
