import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

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
                    expect(err).to.be.null;
                    expect(res).to.have.status(201);
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
                end((res) => {
                    expect(res).to.have.status(201);
                    done();
                });
            });
        });

        describe('GET api/v1/meals', () => {
            it('should get all meals', (done) => {
                chai.request(app).
                get('/api/v1/meals').
                end((res) => {
                    expect(res).to.have.status(200);
                    done();
                });
            });
        });

        describe('GET api/v1/meals/1', () => {
            it('should get selected meal', (done) => {
                chai.request(app).
                get('/api/v1/meals/1').
                end((req, res) => {
                    expect(req).to.have.header('content-type', 'application/json');
                    expect(res).to.have.status(200);
                    done();
                });
            });
        });

        describe('DELETE api/v1/meals/:id/delete', () => {
            it('should delete a meal option', (done) => {
                chai.request(app).
                delete('/api/v1/meals/5/delete').
                end((res) => {
                    expect(res).to.have.status(200);
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
                end((res) => {
                    expect(res).to.have.status(400);
                    done();
                });
            });
        });

        describe('POST api/v1/meals/add', () => {
            it('should return error for POST with no meal name', (done) => {
                chai.request(app).
                post('/api/v1/meals/add').
                send({ price: 900 }).
                end((res) => {
                    expect(res).to.have.status(400);
                    done();
                });
            });
        });

        describe('POST api/v1/meals/add', () => {
            it('should return error for POST with no meal price', (done) => {
                chai.request(app).
                post('/api/v1/meals/add').
                send({ name: "Indomie" }).
                end((res) => {
                    expect(res).to.have.status(400);
                    done();
                });
            });
        });

        describe('PUT api/v1/meals/:id/edit', () => {
            it('should return error if meal id does not exist', (done) => {
                chai.request(app).
                put('/api/v1/meals/50/edit').
                end((res) => {
                    expect(res).to.have.status(404);
                    done();
                });
            });
        });

        describe('PUT api/v1/meals/1/edit', () => {
            it('should return error for PUT with no meal price', (done) => {
                chai.request(app).
                post('/api/v1/meals/1/edit').
                send({ name: "Indomie" }).
                end((res) => {
                    expect(res).to.have.status(400);
                    done();
                });
            });
        });

        describe('PUT api/v1/meals/1/edit', () => {
            it('should return error for PUT with no meal name', (done) => {
                chai.request(app).
                post('/api/v1/meals/1/edit').
                send({ price: 800 }).
                end((res) => {
                    expect(res).to.have.status(400);
                    done();
                });
            });
        });

        describe('DELETE api/v1/meals/:id/delete', () => {
            it('should return error for meal id that does not exist', (done) => {
                chai.request(app).
                delete('/api/v1/meals/50/delete').
                end((res) => {
                    expect(res).to.have.status(404);
                    done();
                });
            });
        });
    });
});