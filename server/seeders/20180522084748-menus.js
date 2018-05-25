import moment from 'moment';

const currentDay = moment().format('YYYY-MM-DD');

export default {
  up: queryInterface => queryInterface.bulkInsert('Menus', [
    {
      id: 1,
      userId: '8f362fef-4b1c-44a6-8e57-2519c597605f',
      menuId: '2a616f00-ad02-4367-bc7e-320f7abd8e80',
      date: '2018-05-01',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 2,
      userId: '8f362fef-4b1c-44a6-8e57-2519c597605f',
      menuId: '24eb62c1-c0ae-48f4-b752-61ce4a55cb1f',
      date: '2018-04-06',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 3,
      userId: '8f362fef-4b1c-44a6-8e57-2519c597605f',
      menuId: '00889c02-04fb-46e4-a510-05819589429e',
      date: '2018-04-27',
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    },
    {
      id: 4,
      userId: '8f362fef-4b1c-44a6-8e57-2519c597605f',
      menuId: 'b032060b-33e5-4b1d-bc1e-95d96fa9d9e3',
      date: currentDay,
      createdAt: '2018-05-01T00:47:03.687Z',
      updatedAt: '2018-05-01T00:47:03.687Z'
    }
  ]),

  down: queryInterface => queryInterface.bulkDelete('Menus', null, {})
};
