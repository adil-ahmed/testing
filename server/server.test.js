const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toMatchObject({
                    error : 'Page not found'
                });
            })
            .end(done)
            // .expect({
            //     error : 'Page not found'
            // })
            // .end(done);
        });
    });
    describe('GET /user', () => {
        it('should retuen object', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toMatchObject({
                    name : 'Adil'
                });
            })
            .end(done)
        });
    });
});


