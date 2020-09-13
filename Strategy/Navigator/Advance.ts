export module AdvanceNavigator {
    export interface SimpleLocation {
        latitude: number
        longitude: number
    }
    
    interface EstimatedTime {
        minutes: number,
        hours: number
    }
    
    interface Strategy {
        findRoute(A: SimpleLocation, B:SimpleLocation)
        estimateTime(distance: number): EstimatedTime
    }
    
    export class NavigatorContext  {
        strategy: Strategy;
    
        setStrategy(strategy: Strategy) {
            this.strategy = strategy
        }
    
        findRoute(A: SimpleLocation, B: SimpleLocation) {
            return this.strategy.findRoute(A, B)
        }
    
        estimateTime(distance: number) {
            return this.strategy.estimateTime(distance)
        }
    
        findDistance(A: SimpleLocation, B: SimpleLocation) {
            let radlat1 = Math.PI * A.latitude/180;
            let radlat2 = Math.PI * B.latitude/180;
            let theta = A.longitude - B.longitude;
            let radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344
            return parseFloat(dist.toPrecision(2));
        }
    
        estimatedTimeText(estimatedTime: EstimatedTime): string {
            let text = '';
            text += estimatedTime.hours ? ` ${estimatedTime.hours} hours ` : ``
            text += estimatedTime.minutes ? ` ${estimatedTime.minutes} minutes ` : ``
            return text
        }
    }
    
    export class WalkingStrategy extends NavigatorContext implements Strategy {
        findRoute(A: SimpleLocation, B: SimpleLocation) {
            const distance = this.findDistance(A, B);
            const estimatedTime = this.estimateTime(distance)
            return `You will walk ${distance * 1000} M, Estimated time is ${this.estimatedTimeText(estimatedTime)}`
        }
    
        estimateTime(distance: number): EstimatedTime {
            const totalMinutes = Math.ceil((distance * 1000) / 20) ;
            return {
                minutes: totalMinutes % 60,
                hours: Math.floor(totalMinutes / 60)
            }
        }
    
    }
    
    
    export class CarStrategy extends NavigatorContext implements Strategy {
        findRoute(A: SimpleLocation, B: SimpleLocation) {
            const distance = this.findDistance(A, B);
            let estimatedTime = this.estimateTime(distance)
            return `You will Drive ${distance * 1000} M, Estimated time is ${this.estimatedTimeText(estimatedTime)}`
        }

        estimateTime(distance: number): EstimatedTime {
            const totalMinutes = Math.ceil((distance * 1000) / 105) ;
            return {
                minutes: totalMinutes % 60,
                hours: Math.floor(totalMinutes / 60)
            }
        }
    
    }
   
    
    
    
    
   
    
    
}