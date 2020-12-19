const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  MongoLibMock,
  getAllStub,
  getStub,
  createStub,
  updateStub,
  deleteStub,
} = require('../utils/mocks/mongoLib');

const { productsMock } = require('../utils/mocks/products');

describe('services - products', function () {
  const ProductsService = proxyquire('../services/products', {
    '../lib/mongo': MongoLibMock,
  });

  const productsService = new ProductsService();

  describe('when getProducts is called', async () => {
    it('should call the getall MongoLib method', async function () {
      await productsService.getProducts({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of products', async function () {
      const result = await productsService.getProducts({});
      assert.deepStrictEqual(result, productsMock);
    });

    it('should return an array of products with queried name', async function () {
      const result = await productsService.getProducts({
        search: productsMock[0].name,
      });
      assert.deepStrictEqual(result, [productsMock[0]]);
    });

    it('should call the get MongoLib method', async function () {
      await productsService.getProduct({ productId: productsMock[0].id });
      assert.strictEqual(getStub.called, true);
    });

    it('should return a product', async function () {
      const result = await productsService.getProduct({
        productId: productsMock[0].id,
      });
      assert.deepStrictEqual(result, productsMock[0]);
    });

    it('should call the create MongoLib method', async function () {
      await productsService.createProduct({ product: productsMock[0] });
      assert.strictEqual(createStub.called, true);
    });

    it('should return the created product id', async function () {
      const result = await productsService.createProduct({
        product: productsMock[0],
      });
      assert.strictEqual(result, productsMock[0].id);
    });

    it('should call the update MongoLib method', async function () {
      await productsService.updateProduct({
        product: productsMock[0],
        productId: productsMock[0].id,
      });
      assert.strictEqual(updateStub.called, true);
    });

    it('should return the updated product id', async function () {
      const result = await productsService.updateProduct({
        product: productsMock[0],
        productId: productsMock[0].id,
      });
      assert.strictEqual(result, productsMock[0].id);
    });

    it('should call the delete MongoLib method', async function () {
      await productsService.deleteProduct({ productId: productsMock[0].id });
      assert.strictEqual(deleteStub.called, true);
    });

    it('should return the deleted product id', async function () {
        const result = await productsService.deleteProduct({
          product: productsMock[0],
        });
        assert.strictEqual(result, productsMock[0].id);
      });
  });
});
