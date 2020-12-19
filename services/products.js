const MongoLib = require('../lib/mongo');

class ProducstService {
  constructor() {
    this.collection = 'products';
    this.mongodb = new MongoLib();
  }
  async getProducts({ search }) {
    const query = search && { name: new RegExp(search) };
    const products = await this.mongodb.getAll(this.collection, query);
    return products || [];
  }

  async getProduct({ productId }) {
    const product = await this.mongodb.get(this.collection, productId);
    return product || {};
  }

  async createProduct({ product }) {
    const createdProductId = await this.mongodb.create(
      this.collection,
      product
    );
    return createdProductId;
  }

  async updateProduct({ productId, product } = {}) {
    const updatedProductId = await this.mongodb.update(
      this.collection,
      productId,
      product
    );
    return updatedProductId;
  }

  async deleteProduct({ productId }) {
    const deletedProductId = await this.mongodb.delete(
      this.collection,
      productId
    );
    return deletedProductId;
  }
}

module.exports = ProducstService;
