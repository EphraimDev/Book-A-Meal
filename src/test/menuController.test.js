import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.use(chaiHttp);

describe('Tests for menu API endpoints', () => {
    describe('Handles valid endpoints for menus', () => {
        describe('POST api/v1/menus/add', () => {
            it('should add a menu option', (done) => {
                chai.request(app).
                post('/api/v1/menus/add').
                send({
                    meals: ["Rice",
                        "Beans"]
                }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.menu).to.include.keys('id');
                    expect(res.body.menu).to.include.keys('meals');
                    expect(res.body.menu.meals).to.deep.equal(["Rice",
                        "Beans"]);
                    expect(res.body.message).to.equal('Menu created successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('PUT api/v1/menus/:id/edit', () => {
            it('should update selected menu option', (done) => {
                chai.request(app).
                put('/api/v1/menus/1/edit').
                send({
                    meals: ["Rice",
                        "Beans"]
                }).
                end((err, res) => {
                    expect(res.statusCode).to.equal(201);
                    expect(res.body.newMenu).to.include.keys('id');
                    expect(res.body.newMenu).to.include.keys('meals');
                    expect(res.body.newMenu.meals).to.deep.equal(["Rice",
                        "Beans"]);
                    expect(res.body.message).to.equal('menu updated successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('GET api/v1/menus', () => {
            it('should get all menus', (done) => {
                chai.request(app).
                get('/api/v1/menus').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.include.keys('menus');
                    expect(res.body.message).to.equal('Menu retrieved successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('GET api/v1/menus/1', () => {
            it('should get selected menu', (done) => {
                chai.request(app).
                get('/api/v1/menus/1').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.menu).to.include.keys('id');
                    expect(res.body.menu).to.include.keys('meals');
                    expect(res.body.message).to.equal('menu retrieved successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('DELETE api/v1/menus/:id/delete', () => {
            it('should delete a menu option', (done) => {
                chai.request(app).
                delete('/api/v1/menus/1/delete').
                end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.body.message).to.equal('Menu deleted successfully');
                    expect(res.body.success).to.equal('true');
                    if (err) return done(err);
                    done();
                });
            });
        });
    });

    describe('Handles invalid endpoints for menus', () => {
        describe('POST api/v1/menus/add', () => {
            it('should return error for POST with empty body', (done) => {
                chai.request(app).
                post('/api/v1/menus/add').
                send({}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Select a meal');
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

        describe('PUT api/v1/menus/:id/edit', () => {
            it('should return error for menu with no meal name', (done) => {
                chai.request(app).
                put('/api/v1/menus/1/edit').
                send({}).
                end((err, res) => {
                    expect(res.statusCode).to.equal(400);
                    expect(res.body.message).to.equal('Meal name is required');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });

        describe('DELETE api/v1/menus/:id/delete', () => {
            it('should return error for menu id that does not exist', (done) => {
                chai.request(app).
                delete('/api/v1/menus/50/delete').
                end((err, res) => {
                    expect(res.statusCode).to.equal(404);
                    expect(res.body.message).to.equal('Menu not found');
                    expect(res.body.success).to.equal('false');
                    if (err) return done(err);
                    done();
                });
            });
        });
    });
});