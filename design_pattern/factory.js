function Car(options){
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

function Trunk(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function VehicleFactory() {}

VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.createVehicle = function (options) {

    if(options.vehicleClass == 'car'){
        this.vehicleClass = Car;
    }else{
        this.vehicleClass = Trunk;
    }

    return new this.vehicleClass(options);
    
}