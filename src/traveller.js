

class Traveller {
    constructor (journeys){
        this.journeys = journeys;
    };


getStartLocations() {
    
return this.journeys.map((journey) => {
    return journey.start;
});
}

getEndLocations() {
    
    return this.journeys.map((journey) => {
        return journey.end;
    });
    }

getJourneysByTransport(mode){
    return this.journeys.filter((journey) => {
      return journey.mode === mode;
    });
}

getJourneysByDistance(minDistance){
    return this.journeys.filter((journey) => {
         return journey.distance > minDistance;
    });
}


}








module.exports = Traveller;