const bcryptjs = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
        nome: 'John Doe',
        email: 'John@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
        },
        {
        nome: 'John Doe1',
        email: 'John1@gmail.com',
        password_hash: await bcryptjs.hash('654321', 8),
        created_at: new Date(),
        updated_at: new Date(),
        },
        {
        nome: 'John Doe2',
        email: 'John2@gmail.com',
        password_hash: await bcryptjs.hash('23456', 8),
        created_at: new Date(),
        updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {}
};
