var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NavigatorContext = /** @class */ (function () {
    function NavigatorContext() {
    }
    NavigatorContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    NavigatorContext.prototype.findRoute = function (A, B) {
        return this.strategy.findRoute(A, B);
    };
    NavigatorContext.prototype.estimateTime = function (distance) {
        return this.strategy.estimateTime(distance);
    };
    NavigatorContext.prototype.findDistance = function (A, B) {
        var radlat1 = Math.PI * A.latitude / 180;
        var radlat2 = Math.PI * B.latitude / 180;
        var theta = A.longitude - B.longitude;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return parseFloat(dist.toPrecision(2));
    };
    NavigatorContext.prototype.estimatedTimeText = function (estimatedTime) {
        var text = '';
        text += estimatedTime.hours ? " " + estimatedTime.hours + " hours " : "";
        text += estimatedTime.minutes ? " " + estimatedTime.minutes + " minutes " : "";
        return text;
    };
    return NavigatorContext;
}());
var WalkingStrategy = /** @class */ (function (_super) {
    __extends(WalkingStrategy, _super);
    function WalkingStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WalkingStrategy.prototype.findRoute = function (A, B) {
        var distance = this.findDistance(A, B);
        var estimatedTime = this.estimateTime(distance);
        return "You will walk " + distance * 1000 + " M, Estimated time is " + this.estimatedTimeText(estimatedTime);
    };
    WalkingStrategy.prototype.estimateTime = function (distance) {
        var totalMinutes = Math.ceil((distance * 1000) / 20);
        return {
            minutes: totalMinutes % 60,
            hours: Math.floor(totalMinutes / 60)
        };
    };
    return WalkingStrategy;
}(NavigatorContext));
/*
class CarStrategy extends NavigatorContext implements Strategy {
    findRoute(A: SimpleLocation, B: SimpleLocation) {
        const
        let estimatedTime = this.estimateTime()
        return `Driving path from ${A} to ${B}`
    }

}
*/
var walkingStrategy = new WalkingStrategy();
// const carStrategy = new CarStrategy();
var navigatorContext = new NavigatorContext;
navigatorContext.setStrategy(walkingStrategy);
var GasStation = {
    latitude: 47.101563,
    longitude: 25.410596
};
var NationalPark = {
    latitude: 47.101504,
    longitude: 25.399015
};
var result = navigatorContext.findRoute(GasStation, NationalPark);
console.log(result);
/*
navigatorContext.setStrategy(carStrategy);
result = navigatorContext.findRoute('Street 46', 'Mayor building');
console.log(result);
*/
//# sourceMappingURL=Navigator.js.map