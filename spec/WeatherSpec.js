'use strict' ;

describe('Weather', function(){
    var weather;

    beforeEach(function(){
        weather = new Weather();
    });

    // it('can be stormy', function() {
    //     spyOn(weather).andCallFake(weather.stormy() { return true; })
    // });
    it('can be stormy', function(){
        spyOn(Math, 'random').and.returnValue(1);
        expect(weather.stormy()).toBeTruthy();
    });
    it('can be clear', function() {
        spyOn(Math, 'random').and.returnValue(0);
        expect(weather.stormy()).toBeFalsy();
    })
});