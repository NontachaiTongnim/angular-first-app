module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("employee", {
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    num: {
      type: Sequelize.STRING
    }
  });

  return Book;
};
