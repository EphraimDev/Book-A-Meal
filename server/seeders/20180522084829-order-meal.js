export default {
  up: queryInterface => queryInterface.bulkInsert(
    'Order-meals',
    [
      {
        id: 1,
        mealId: '4c45b294-a6c5-45e8-b494-8168aee90a06',
        orderId: 'c521a2c9-333c-4ee2-bb3d-a89ac70ae73f',
        quantity: 2,
        status: 'canceled',
        createdAt: '2018-04-06T00:47:03.687Z',
        updatedAt: '2018-04-06T00:47:03.687Z'
      },
      {
        id: 2,
        mealId: 'ea2c4fe8-27f9-4d09-9921-c3be078d3ae3',
        orderId: '783493cc-593c-4f0c-ae19-8a99ecea3854',
        quantity: 1,
        status: 'delivered',
        createdAt: '2018-04-06T00:47:03.687Z',
        updatedAt: '2018-04-06T00:47:03.687Z'
      },
    ]
  ),

  down: queryInterface => queryInterface.bulkDelete('Order-meals', null, {})
};
