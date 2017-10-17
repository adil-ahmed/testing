const expect = require('expect');

describe('App' , () => {
    it('should spy the code coorectly', () => {
        var spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();  
    });
});