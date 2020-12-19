const productsMock = [
  {
    id: '5fde4ea232fa6738200a83de',
    name: 'Lighter - Bbq',
    description:
      'eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis',
    category: 'Crime|Thriller',
    price: 46.71,
    quantity: 86,
  },
  {
    id: 2,
    name: 'Puree - Pear',
    description:
      'primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse',
    category: 'Drama',
    price: 6.15,
    quantity: 64,
  },
  {
    id: 3,
    name: 'V8 Splash Strawberry Kiwi',
    description:
      'faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam',
    category: 'Action|Adventure|Animation',
    price: 61.82,
    quantity: 54,
  },
  {
    id: 4,
    name: 'Wine - Marlbourough Sauv Blanc',
    description: 'eleifend donec ut dolor morbi vel lectus in quam fringilla',
    category: 'Action|Crime|Thriller',
    price: 89.83,
    quantity: 30,
  },
  {
    id: 5,
    name: 'Coffee - Egg Nog Capuccino',
    description:
      'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus',
    category: 'Comedy',
    price: 7.9,
    quantity: 27,
  },
  {
    id: 6,
    name: 'Pumpkin',
    description:
      'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat',
    category: 'Horror|Thriller',
    price: 50.81,
    quantity: 38,
  },
  {
    id: 7,
    name: 'Blouse / Shirt / Sweater',
    description:
      'eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus',
    category: 'Drama',
    price: 55.57,
    quantity: 82,
  },
  {
    id: 8,
    name: 'Flower - Carnations',
    description:
      'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in',
    category: 'Crime|Mystery',
    price: 15.37,
    quantity: 51,
  },
  {
    id: 9,
    name: 'Island Oasis - Ice Cream Mix',
    description:
      'amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus',
    category: 'Comedy|Romance',
    price: 58.8,
    quantity: 71,
  },
  {
    id: 10,
    name: 'Wine - Redchard Merritt',
    description:
      'ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc',
    category: 'Comedy|Crime|Drama|Thriller',
    price: 97.32,
    quantity: 29,
  },
  {
    id: 11,
    name: 'Coffee - Flavoured',
    description:
      'adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur',
    category: 'Comedy|Mystery',
    price: 56.44,
    quantity: 5,
  },
  {
    id: 12,
    name: 'Squash - Sunburst',
    description:
      'lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id',
    category: 'Comedy|Drama',
    price: 96.89,
    quantity: 7,
  },
  {
    id: 13,
    name: 'Cranberries - Dry',
    description:
      'pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et',
    category: 'Drama|Thriller',
    price: 40.82,
    quantity: 52,
  },
  {
    id: 14,
    name: 'Squash - Acorn',
    description:
      'felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui',
    category: 'Action|Comedy|Drama',
    price: 38.37,
    quantity: 47,
  },
  {
    id: 15,
    name: 'Soup - Campbellschix Stew',
    description:
      'tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod',
    category: 'Comedy|Drama',
    price: 30.45,
    quantity: 80,
  },
  {
    id: 16,
    name: 'Lentils - Green Le Puy',
    description:
      'adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula',
    category: 'Drama|Mystery',
    price: 20.91,
    quantity: 80,
  },
  {
    id: 17,
    name: 'Longos - Grilled Veg Sandwiches',
    description:
      'nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula',
    category: 'Action|Drama|War',
    price: 4.06,
    quantity: 80,
  },
  {
    id: 18,
    name: 'Butter Balls Salted',
    description:
      'proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante',
    category: 'Drama|Romance',
    price: 7.97,
    quantity: 7,
  },
  {
    id: 19,
    name: 'Spice - Peppercorn Melange',
    description:
      'non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non',
    category: 'Drama',
    price: 75.46,
    quantity: 47,
  },
  {
    id: 20,
    name: 'Venison - Ground',
    description:
      'elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
    category: 'Thriller',
    price: 73.88,
    quantity: 93,
  },
];

class ProductServiceMock {
  async getProducts() {
    return Promise.resolve(productsMock);
  }

  async getProduct({ productId }) {
    const product = Promise.resolve(productsMock.find(p => p.id == productId));
    return product || {};
  }

  async createProduct() {
    return Promise.resolve(productsMock[0].id);
  }


  async updateProduct({ productId } = {}) {
    const updatedProductId = await Promise.resolve(productId);
    return updatedProductId;
  }

  async deleteProduct({ productId }) {
    const deletedProductId = await Promise.resolve(productId);
    return deletedProductId;
  }
}

module.exports = {
  productsMock,
  ProductServiceMock,
};
