export default {
  up: queryInterface => queryInterface.bulkInsert('Notifications', [
    {
      id: 1,
      notifId: '3dc9cc9b-179b-4f0d-ac60-7ca6f4659d79',
      userId: '8b3b0644-ac8f-43da-baa6-29b92fb38681',
      menuId: '15421f7a-0f82-4802-b215-e0e8efb6bfb3',
      mealId: null,
      orderId: null,
      message: 'Jollof Spaghetti, Plantain and Turkey was just added to the menu',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 2,
      notifId: '87a311b7-898b-4a6b-81c2-619417c96432',
      userId: '8356954a-9a42-4616-8079-887a73455a7f',
      menuId: null,
      mealId: null,
      orderId: '15421f7a-0f82-4802-b215-e0e8efb6bfb3',
      message: 'Your meal was just ordered',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 3,
      notifId: '38eb0942-38b7-4a16-91e9-8b1662175d75',
      userId: 'b6eb90d4-2a50-4109-be67-f649782ce939',
      mealId: '15421f7a-0f82-4802-b215-e0e8efb6bfb3',
      menuId: null,
      orderId: null,
      message: 'Jollof Spaghetti, Plantain and Turkey meal option was just created',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('Notifications', null, {})
};
