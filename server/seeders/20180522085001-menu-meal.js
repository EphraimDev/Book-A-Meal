export default {
  up: queryInterface => queryInterface.bulkInsert('MenuMeals', [
    {
      id: 1,
      mealId: '4c45b294-a6c5-45e8-b494-8168aee90a06',
      menuId: '2a616f00-ad02-4367-bc7e-320f7abd8e80',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 2,
      mealId: 'ea2c4fe8-27f9-4d09-9921-c3be078d3ae3',
      menuId: '24eb62c1-c0ae-48f4-b752-61ce4a55cb1f',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 3,
      mealId: '54d60028-e92d-40c4-bfcb-37a71a51fba7',
      menuId: '00889c02-04fb-46e4-a510-05819589429e',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 4,
      mealId: '8f362fef-4b1c-44a6-8e57-2519c597605f',
      menuId: 'b032060b-33e5-4b1d-bc1e-95d96fa9d9e3',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
  ]),

  down: queryInterface => queryInterface.bulkDelete('MenuMeals', null, {})
};
