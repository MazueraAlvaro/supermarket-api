const { productsMock } = require("../utils/mocks/products");

class ProducstService {

    async getProducts() {
        const products = await Promise.resolve(productsMock);
        return products || [];
    }

    async getProduct() {
        const product = await Promise.resolve(productsMock[0]);
        return product || {};
    }

    async createProduct() {
        const createdProductId = await Promise.resolve(productsMock[0].id);
        return createdProductId;
    }

    async updateProduct() {
        const updatedProductId = await Promise.resolve(productsMock[0]);
        return updatedProductId;
    }

    async deleteProduct() {
        const deletedProductId = await Promise.resolve(productsMock[0].id);
        return deletedProductId;
    }
}

module.exports = ProducstService;