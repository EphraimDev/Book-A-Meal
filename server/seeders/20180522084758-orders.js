export default {
  up: queryInterface => queryInterface.bulkInsert('Orders', [
    {
      id: 1,
      orderId: 'c521a2c9-333c-4ee2-bb3d-a89ac70ae73f',
      createdAt: '2018-04-06T00:47:03.687Z',
      updatedAt: '2018-04-06T00:47:03.687Z',
      userId: 'a09a5570-a3b2-4e21-94c3-5cf483dbd1ac',
      deliveryAddress: '4, Church Street, Yaba',
      deliveryPhoneNo: '+2347033771198',
      status: 'canceled'
    },
    {
      id: 2,
      orderId: '783493cc-593c-4f0c-ae19-8a99ecea3854',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z',
      userId: 'e42c7ce0-958e-4368-adcb-e5d97dbbe5b7',
      deliveryAddress: '4, Church Street, Yaba',
      deliveryPhoneNo: '+2347033771198',
      status: 'delivered'
    }
  ]),

  down: queryInterface => queryInterface.bulkDelete('Orders', null, {})
};
