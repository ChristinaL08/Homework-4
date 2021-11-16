const Journey = require('../src/journey.js')

describe('Journey', function () {
    let journey1;

    beforeEach(() => {
        journey1 = new Journey ('Glasgow','Edinburgh','Train', 50);
    });

    test('journey has start location', () => {
     expect(journey1.start).toBe('Glasgow')
    });
    test('journey has end location', () => {
        expect(journey1.end).toBe('Edinburgh')
       });
    test('journey has mode of transport', () => {
        expect(journey1.mode).toBe('Train')
       });
    test('journey has distance', () => {
        expect(journey1.distance).toBe(50)
       });
})