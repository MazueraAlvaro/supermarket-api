const sinon = require('sinon');

const { productsMock } = require('./products');

const getAllStub = sinon.stub();

const query = { name: new RegExp(productsMock[0].name) };
getAllStub
  .withArgs('products', query)
  .resolves([productsMock[0]]);
getAllStub.withArgs('products').resolves(productsMock);

const createStub = sinon.stub().resolves(productsMock[0].id);
const getStub = sinon.stub().resolves(productsMock[0]);
const updateStub = sinon.stub().resolves(productsMock[0].id);
const deleteStub = sinon.stub().resolves(productsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  get(collection, id){
      return getStub(collection, id);
  }

  create(collection, data) {
    return createStub(collection, data);
  }

  update(collection, id, data){
    return updateStub(collection, id, data);
  }

  delete(collection, id){
      return deleteStub(collection, id);
  }

//   get(collection, id) {
//     return this.connect().then((db) => {
//       return db.collection(collection).findOne({ _id: ObjectId(id) });
//     });
//   }

//   update(collection, id, data) {
//     return this.connect()
//       .then((db) => {
//         return db
//           .collection(collection)
//           .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
//       })
//       .then((result) => result.insertedId || id);
//   }

//   delete(collection, id) {
//     return this.connect()
//       .then((db) => {
//         return db.collection(collection).deleteOne({ _id: ObjectId(id) });
//       })
//       .then(() => id);
//   }
}

module.exports = {
  getAllStub,
  getStub,
  createStub,
  updateStub,
  deleteStub,
  MongoLibMock,
};
