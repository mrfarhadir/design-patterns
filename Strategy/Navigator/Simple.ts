export module simepleNavigator {

    interface Strategy {
        findRoute(A: string, B:string)
    }
    
    export class NavigatorContext  {
        strategy: Strategy;
    
        setStrategy(strategy: Strategy) {
            this.strategy = strategy
        }
    
        findRoute(A, B) {
            return this.strategy.findRoute(A, B)
        }
    }
    
    export class WalkingStrategy implements Strategy{
        findRoute(A: string, B: string) {
            return `Walking path from ${A} to ${B}`
        }
    }
    
    export class CarStrategy implements Strategy {
        findRoute(A: string, B: string) {
            return `Driving path from ${A} to ${B}`
        }
    
    }
    


}

