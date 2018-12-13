export default {
  up: queryInterface => queryInterface.bulkInsert('Meals', [
    {
      userId: 'cbbeb9e3-41ca-40d5-91d2-1d799e05d42f',
      mealId: '4c45b294-a6c5-45e8-b494-8168aee90a06',
      title: 'Vegetable Sharwama and Guava Smoothie',
      description: 'Sharwama contains no animal products, perfect for dieters',
      price: 1200,
      img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      userId: 'cbbeb9e3-41ca-40d5-91d2-1d799e05d42f',
      mealId: 'ea2c4fe8-27f9-4d09-9921-c3be078d3ae3',
      title: 'Semo/Wheat and Egusi Soup',
      description: 'Meal contains 2 pieces of beef and other assorted meat and fish products',
      price: 2000,
      img: 'https://static.pulse.ng/img/incoming/origs7167742/5270485143-w980-h640/Pounded-yam-and-Egusi-soup.jpg',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      userId: 'cbbeb9e3-41ca-40d5-91d2-1d799e05d42f',
      mealId: '54d60028-e92d-40c4-bfcb-37a71a51fba7',
      title: 'Yam and Platain Pottage',
      description: 'Meal come with Fish',
      price: 1200,
      img: 'https://i0.wp.com/www.eatingnigerian.com/wp-content/uploads/2016/08/Yam-and-Plantain-Pottage-21.jpg',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      userId: 'cbbeb9e3-41ca-40d5-91d2-1d799e05d42f',
      mealId: '8f362fef-4b1c-44a6-8e57-2519c597605f',
      title: 'Jollof Spaghetti, Plantain and Turkey',
      description: '',
      price: 1200,
      img: 'https://lagosmums.com/wp-content/uploads/2015/06/Jollof-Spaghetti.jpeg',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    }
  ]),

  down: queryInterface => queryInterface.bulkDelete('Meals', null, {})
};