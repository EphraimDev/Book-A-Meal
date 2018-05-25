export default {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    {
      id: 1,
      userId: '8356954a-9a42-4616-8079-887a73455a7f',
      firstname: 'Ephraim',
      lastname: 'Aigbefo',
      email: 'ephraim@book.com',
      password: '$2b$10$ckZlQ80IJTrVo8xnZgkh9OjeyahZu2S72Ny50Dz2co1yLhnK36d6u',
      phoneNo: '+2347033771198',
      address: '4, Church Street, Yaba',
      createdAt: '2018-05-06T00:47:03.687Z',
      updatedAt: '2018-05-06T00:47:03.687Z',
      role: 'caterer'
    },/*
    {
      id: 2,
      userId: '22e8156d-753d-4dbe-b4e6-f3236b716ca7',
      firstname: 'Ephraim',
      lastname: 'Aigbefo',
      email: 'ephraim@book.com',
      password: '$2b$10$ckZlQ80IJTrVo8xnZgkh9Ojrr36Zu2S72Ny50Dz2co1yLhnK36d6u',
      phoneNo: '+2347033771198',
      address: '4, Church Street, Yaba',
      createdAt: '2018-05-06T00:47:03.687Z',
      updatedAt: '2018-05-06T00:47:03.687Z',
      role: 'admin'
    },*/
    {
      id: 2,
      userId: '616fbf3a-f3cf-4d20-83c1-0912130b52d8',
      firstname: 'Ade',
      lastname: 'Ola',
      email: 'adeola@yahoo.com',
      password: '$2b$10$ckZlQ87/w4TrVo8xnZgkh9Ojrr36Zu2S72Ny50Dz2co1yLhnK36d6u',
      phoneNo: '+2347033771198',
      address: '4, Church Street, Yaba',
      createdAt: '2018-05-06T00:47:03.687Z',
      updatedAt: '2018-05-06T00:47:03.687Z',
      role: 'customer'
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
