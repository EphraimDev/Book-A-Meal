import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);

describe('Tests for orders API endpoints', () => {
    describe('Handles valid endpoints for orders', () => {
        describe('POST api/v1/orders/add', () => {
            it('should add an order', (done) => {
                chai.request(app).
                post('/api/v1/orders/add').
                send({
                    meal: "Rice",
                    units: 3
                }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.order).to.include.keys('id');
                    expect(res.body.order).to.include.keys('meal');
                    expect(res.body.order).to.include.keys('date');
                    expect(res.body.order).to.include.keys('time');
                    expect(res.body.order).to.include.keys('units');
                    expect(res.body.order.meal).to.equal("Rice");
                    expect(res.body.order.units).to.equal(3);
                    expect(res.body.message).to.equal('Order created successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('PUT api/v1/orders/:id/edit', () => {
            it('should update selected order option', (done) => {
                chai.request(app).
                put('/api/v1/orders/1/edit').
                send({
                    meal: "Rice",
                    units: 5
                }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.newOrder).to.include.keys('id');
                    expect(res.body.newOrder).to.include.keys('meal');
                    expect(res.body.newOrder).to.include.keys('date');
                    expect(res.body.newOrder).to.include.keys('units');
                    expect(res.body.newOrder).to.include.keys('time');
                    expect(res.body.newOrder.meal).to.equal("Rice");
                    expect(res.body.newOrder.units).to.equal(5);
                    expect(res.body.message).to.equal('Order changed successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('GET api/v1/orders', () => {
            it('should get all orders', (done) => {
                chai.request(app).
                get('/api/v1/orders').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.include.keys('orders');
                    expect(res.body.message).to.equal('Orders retrieved successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('GET api/v1/orders/1', () => {
            it('should get selected order', (done) => {
                chai.request(app).
                get('/api/v1/orders/1').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.order).to.include.keys('id');
                    expect(res.body.order).to.include.keys('meal');
                    expect(res.body.order).to.include.keys('date');
                    expect(res.body.order).to.include.keys('time');
                    expect(res.body.order).to.include.keys('units');
                    expect(res.body.message).to.equal('Order retrieved successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('DELETE api/v1/orders/:id/delete', () => {
            it('should delete a orders option', (done) => {
                chai.request(app).
                delete('/api/v1/orders/1/delete').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.message).to.equal('Order deleted successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });
    });

    describe('Handles invalid endpoints for orders', () => {
        describe('POST api/v1/orders/add', () => {
            it('should return error for POST with empty body', (done) => {
                chai.request(app).
                post('/api/v1/orders/add').
                send({}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('Select a meal and number of plates');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('POST api/v1/orders/add', () => {
            it('should return error for POST with no meal', (done) => {
                chai.request(app).
                post('/api/v1/orders/add').
                send({units: 1}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Select a meal');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('POST api/v1/orders/add', () => {
            it('should return error for POST with no units selected', (done) => {
                chai.request(app).
                post('/api/v1/orders/add').
                send({meal: "Eba"}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Select number of plates');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        /* describe('PUT api/v1/meals/:id', () => {
            it('should return error if meal id does not exist', (done) => {
                chai.request(app).
                put('/api/v1/meals/50').
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('Meal not found');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });*/

        describe('PUT api/v1/orders/:id/edit', () => {
            it('should return error for order with no meal name and units', (done) => {
                chai.request(app).
                put('/api/v1/orders/1/edit').
                send({}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Select a meal and the number of plates you want');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('PUT api/v1/orders/:id/edit', () => {
            it('should return error for order with no meal name', (done) => {
                chai.request(app).
                put('/api/v1/orders/1/edit').
                send({units: 1}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Meal name is required');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('PUT api/v1/orders/:id/edit', () => {
            it('should return error for order with no units', (done) => {
                chai.request(app).
                put('/api/v1/orders/1/edit').
                send({meal: "Yam"}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Select number of plates');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('DELETE api/v1/orders/:id/delete', () => {
            it('should return error for order id that does not exist', (done) => {
                chai.request(app).
                delete('/api/v1/orders/50/delete').
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('Order not found');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });
    });
});