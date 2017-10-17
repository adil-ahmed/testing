const chai      = require('chai');
const sinon     = require('sinon');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');
const expect    = chai.expect;
var app = rewire('./app');
chai.use(sinonChai);

// Create the spy, using Sinon.


describe('App' , () => {
    var db = {
        saveUser : sinon.spy()
    };
    app.__set__('db',db);
    it('should spy the code coorectly', () => {
        let spy = sinon.spy();
        spy('Adil');
        //expect(spy).to.have.been.called;//when spy called with no argument
        expect(spy).to.have.been.calledWith('Adil');
        //expect(spy).not.to.have.been.calledWith('Adil',23); //spy called with argument
    });
    it('should call saveUser with user object', () => {
        var email = 'adil.aj95@gmail.com';
        var password = 123456;
        app.handleSignup(email,password);
        expect(db.saveUser).to.have.been.calledWith({email,password});
    });
});