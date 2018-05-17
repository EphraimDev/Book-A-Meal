import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

describe('Tests for meals API endpoints', () => {
    describe('Handles valid endpoints for meals', () => {
        describe('POST api/v1/meals/add', () => {
            it('should add a meal option', (done) => {
                chai.request(app).
                post('/api/v1/meals/add').
                send({
                    name: 'Spaghetti and fried egg',
                    price: 500
                }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.meal).to.include.keys('id');
                    expect(res.body.meal.name).to.equal('Spaghetti and fried egg');
                    expect(res.body.meal.price).to.equal(500);
                    expect(res.body.message).to.equal('Meal added successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('PUT api/v1/meals/:id', () => {
            it('should update selected meal option', (done) => {
                chai.request(app).
                put('/api/v1/meals/1').
                send({
                    name: 'Semo and egusi',
                    price: 1000
                }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.newMeal).to.include.keys('id');
                    expect(res.body.newMeal.name).to.equal('Semo and egusi');
                    expect(res.body.newMeal.price).to.equal(1000);
                    expect(res.body.message).to.equal('meal updated successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('GET api/v1/meals', () => {
            it('should get all meals', (done) => {
                chai.request(app).
                get('/api/v1/meals').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.include.keys('meals');
                    expect(res.body.message).to.equal('meals retrieved successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('GET api/v1/meals/1', () => {
            it('should get selected meal', (done) => {
                chai.request(app).
                get('/api/v1/meals/1').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.meal).to.include.keys('id');
                    expect(res.body.meal).to.include.keys('name');
                    expect(res.body.meal).to.include.keys('price');
                    expect(res.body.message).to.equal('meal retrieved successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('DELETE api/v1/meals/:id', () => {
            it('should delete a meal option', (done) => {
                chai.request(app).
                delete('/api/v1/meals/1').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.message).to.equal('Meal deleted successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });
    });

    describe('Handles invalid endpoints for meals', () => {
        describe('POST api/v1/meals/add', () => {
            it('should return error for POST with empty body', (done) => {
                chai.request(app).
                post('/api/v1/meals/add').
                send({}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Meal name and price is required');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('POST api/v1/meals/add', () => {
            it('should return error for POST with no meal name', (done) => {
                chai.request(app).
                post('/api/v1/meals/add').
                send({ price: 900 }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Meal name is required');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('POST api/v1/meals/add', () => {
            it('should return error for POST with no meal price', (done) => {
                chai.request(app).
                post('/api/v1/meals/add').
                send({ name: "Indomie" }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('price is required');
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

        describe('PUT api/v1/meals/1', () => {
            it('should return error for PUT with no meal price', (done) => {
                chai.request(app).
                put('/api/v1/meals/1').
                send({ name: "Indomie" }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('price is required');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('PUT api/v1/meals/1/', () => {
            it('should return error for PUT with no meal name', (done) => {
                chai.request(app).
                put('/api/v1/meals/1/').
                send({ price: 800 }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('Meal name is required');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('DELETE api/v1/meals/:id/', () => {
            it('should return error for meal id that does not exist', (done) => {
                chai.request(app).
                delete('/api/v1/meals/50/').
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('meal not found');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });
    });
});