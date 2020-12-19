const assert = require('assert');
const proxyquire = require('proxyquire');
// const { requests } = require('sinon');

const {productsMock, ProductServiceMock} = require('../utils/mocks/products');
const testServer = require('../utils/testServer');

describe('routes - products', function(){
    const route = proxyquire('../routes/products',{
        '../services/products': ProductServiceMock
    });

    const request = testServer(route);

    describe('GET-PUT-POST-DELETE /products', function() {
        it('should respond with status 200 product list', function (done) {
            request.get('/api/products').expect(200, done)
        });

        it('should respond with the list', function (done) {
            request.get('/api/products').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: productsMock,
                    message: 'Products listed'
                });
                done();
            });
        });

        it('should respond with status 200 product retrieve', function (done) {
            request.get('/api/products/5fde4ea232fa6738200a83de').expect(200, done);
        });

        it('should respond with the product', function (done){
            request.get('/api/products/'+ productsMock[0].id).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: productsMock[0],
                    message: 'Product retrieved'
                });
                done();
            });
        });

        it('should respond with status 201 product created', function (done) {
            request.post('/api/products/').send(productsMock[0]).expect(201, done);
        });

        it('should respond with the created product id', function (done){
            request.post('/api/products/').send(productsMock[0]).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: productsMock[0].id,
                    message: 'Product created'
                });
                done();
            });
        });

        it('should respond with status 200 product updated', function (done) {
            request.put('/api/products/'+ productsMock[0].id).send(productsMock[0]).expect(200, done);
        });

        it('should respond with the updated product id', function (done) {
            request.put('/api/products/'+ productsMock[0].id).send(productsMock[0]).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: productsMock[0].id,
                    message: 'Product updated'
                });
                done();
            });
        });

        it('should respond with status 200 product deleted', function (done) {
            request.delete('/api/products/'+ productsMock[0].id).send(productsMock[0]).expect(200, done);
        });

        it('should respond with the deleted product id', function (done) {
            request.delete('/api/products/'+ productsMock[0].id).send(productsMock[0]).end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    data: productsMock[0].id,
                    message: 'Product deleted'
                });
                done();
            });
        });

    });
});
