import { simepleNavigator } from './Simple'
import { AdvanceNavigator } from './Advance'

/* Simple Navigation */

let walkingStrategy = new simepleNavigator.WalkingStrategy();

let carStrategy = new simepleNavigator.CarStrategy();

const navigatorContext = new simepleNavigator.NavigatorContext;
navigatorContext.setStrategy(walkingStrategy);
let result = navigatorContext.findRoute('Gas Station', 'National Park');
console.log(result);

navigatorContext.setStrategy(carStrategy);
result = navigatorContext.findRoute('Street 46', 'Mayor building');
console.log(result);

/* Advance Navigation */
const advanceWalkingStrategy = new AdvanceNavigator.WalkingStrategy()

const advanceCarStrategy = new AdvanceNavigator.CarStrategy();

const advanceNavigatorContext = new AdvanceNavigator.NavigatorContext;


const GasStation: AdvanceNavigator.SimpleLocation = {
    latitude: 47.101563,
    longitude: 25.410596
};

const NationalPark: AdvanceNavigator.SimpleLocation = {
    latitude: 47.101504,
    longitude: 25.399015
};

advanceNavigatorContext.setStrategy(advanceWalkingStrategy);
result = advanceNavigatorContext.findRoute(GasStation, NationalPark);
console.log(result);
// You will walk 880 M, Estimated time is  44 minutes

advanceNavigatorContext.setStrategy(advanceCarStrategy);
result = advanceNavigatorContext.findRoute(NationalPark, GasStation);
console.log(result);
// You will Drive 880 M, Estimated time is  9 minutes