const express = require('express');
const ProducstService = require('../services/products');

const {
  createProductShcema,
  productIdSchema,
  updateProductSchema,
} = require('../utils/schemas/products');

const validationHandler = require('../utils/middleware/validationHandlers');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);

  const productsService = new ProducstService();

  router.get('/', async function (req, res, next) {
    const { search } = req.query;
    try {
      const products = await productsService.getProducts({ search });
      res.status(200).json({
        data: products,
        message: 'Products listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get(
    '/:productId',
    validationHandler({ productId: productIdSchema }, 'params'),
    async function (req, res, next) {
      const { productId } = req.params;
      try {
        const product = await productsService.getProduct({ productId });
        const status = product ? 200 : 404;
        res.status(status).json({
          data: product,
          message: 'Product retrieved',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    validationHandler(createProductShcema),
    async function (req, res, next) {
      const { body: product } = req;
      try {
        const createdProductId = await productsService.createProduct({
          product,
        });
        res.status(201).json({
          data: createdProductId,
          message: 'Product created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:productId',
    validationHandler({ productId: productIdSchema }),
    validationHandler(updateProductSchema),
    async function (req, res, next) {
      const { body: product } = req;
      const { productId } = req.params;
      try {
        const updatedProductId = await productsService.updateProduct({
          productId,
          product,
        });
        res.status(200).json({
          data: updatedProductId,
          message: 'Product updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:productId',
    validationHandler({ productId: productIdSchema }),
    async function (req, res, next) {
      const { productId } = req.params;
      try {
        const deletedProductId = await productsService.deleteProduct({
          productId,
        });
        res.status(200).json({
          data: deletedProductId,
          message: 'Product deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = productsApi;
