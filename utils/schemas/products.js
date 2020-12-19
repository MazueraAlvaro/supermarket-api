const joi = require('@hapi/joi');

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productNameSchema = joi.string().max(80);
const productCategorySchema = joi.string().max(80);
const productDescriptionSchema = joi.string().min(10);
const productPriceSchema = joi.number().min(0);
const productQuantitySchema = joi.number().min(0);

const createProductShcema = {
  name: productNameSchema.required(),
  category: productCategorySchema.required(),
  description: productDescriptionSchema.required(),
  price: productPriceSchema.required(),
  quantity: productQuantitySchema.required(),
};

const updateProductSchema = {
  name: productNameSchema,
  category: productCategorySchema,
  description: productDescriptionSchema,
  price: productPriceSchema,
  quantity: productQuantitySchema,
};

module.exports = {
  productIdSchema,
  createProductShcema,
  updateProductSchema,
};
