const utils = require('./utils');
const expect = require('expect');
describe('Utils', () => {
    it('should add two numbers', () => {
        var result = utils.add(33,17);
        //throw new Error('value not correct');
        // if(result !== 50)
        // {
        //     throw new Error(`Expected 44,but got ${result}`);
            
        // }
        expect(result).toBe(50);
        //expect(result).toBeInstanceOf('number');
        expect(typeof result).toBe('number');
    }); 
    
    it('should square a number', () => {
        let result = utils.square(5);
        expect(result).toBe(25);
        expect(typeof result).toBe('number');
    
    });
    it('should add two async numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            expect(typeof sum).toBe('number');
            done();
        });
    });
    
    it('should square a number' , (done) => {
        utils.asyncSquare(7, (square) => {
            expect(square).toBe(49);
            done();
        });
    });
});


it('working perfect', () => {
    expect(15).not.toBe(10);
    expect({name : 'Adil'}).toEqual({name : 'Adil'});
    expect({name : 'Akil'}).not.toEqual({name : 'Adil'});
    expect([2,3,4]).toContain(4);


});

//verify first and last name are set
it('spliting name', () => {
    var user = {location : 'sylhet',age : 23};
    var res = utils.setName(user, 'Adil Chowdhury');
    expect(res).not.toMatchObject({
        firstName : 'Ashik',
        age : 24
    }); // for multiple object
    expect(res).toMatchObject({
        firstName : 'Adil',
        age : 23
    }); 
    
    expect({
        name : 'Adil',
        age : 23
    }.age).toBe(23);

    expect({
        name : 'Adil',
        age : 23
    }).toHaveProperty('age', 23); // for single object

});

