const Journey = require('../src/journey.js')
const Traveller = require('../src/traveller.js')

describe ('Traveller', function () {
  let journey1; 
  let journey2;
  let journey3;
  let journey4;
  let journey5;
  let journeys;
  let traveller;

beforeEach(() => {
    journey1 = new Journey ('Glasgow', 'Edinburgh', 'Train', 50);
    journey2 = new Journey ('London', 'Paris', 'Plane',300);
    journey3 = new Journey ('Aberdeen', 'Edinburgh','Train', 130);
    journey4 = new Journey ('Wales','Manchester','Car', 220);
    journey5 = new Journey ('Edinburgh', 'Japan', 'Plane', 6000)
    journeys = [journey1, journey2, journey3, journey4, journey5];
    traveller = new Traveller (journeys);
});

test('has a collection of journeys', () => {
 expect(traveller.journeys).toEqual(journeys);
});

test('gets start locations', () => {
    const expected = [
        journey1.start,
        journey2.start,
        journey3.start,
        journey4.start,
        journey5.start
    ];

    expect(traveller.getStartLocations()).toEqual(expected);

});

test('gets end locations', () => {
    const expected = [
        journey1.end,
        journey2.end,
        journey3.end,
        journey4.end,
        journey5.end
    ];

    expect(traveller.getEndLocations()).toEqual(expected);
});

test('gets journey by method of transport', () =>{
    const expected = [
        journey1,
        journey3
        
    ];
    expect(traveller.getJourneysByTransport('Train')).toEqual(expected);
});

test('get journeys over a certain distance', () => {
    const expected = [
        journey2,
        journey4,
        journey5
        
    ];
    expect(traveller.getJourneysByDistance(150)).toEqual(expected);


});




});