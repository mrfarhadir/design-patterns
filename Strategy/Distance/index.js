/*
interface Strategy {
    findRoute(A: string, B:string)
}

class NavigatorContext  {
    strategy: Strategy;

    setStrategy(strategy: Strategy) {
        this.strategy = strategy
    }

    findRoute(A, B) {
        return this.strategy.findRoute(A, B)
    }
}

class WalkingStrategy implements Strategy{
    findRoute(A: string, B: string) {
        return `Walking path from ${A} to ${B}`
    }
}

class CarStrategy implements Strategy {
    findRoute(A: string, B: string) {
        return `Driving path from ${A} to ${B}`
    }

}

let walkingStrategy = new WalkingStrategy();

let carStrategy = new CarStrategy();

const navigatorContext = new NavigatorContext;
navigatorContext.setStrategy(walkingStrategy);
let result = navigatorContext.findRoute('Gas Station', 'National Park');
console.log(result);

navigatorContext.setStrategy(carStrategy);
result = navigatorContext.findRoute('Street 46', 'Mayor building');
console.log(result);


*/
//# sourceMappingURL=index.js.map