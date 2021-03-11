var AbstractFactory = (function () {
    var types = {};

    return {
        getVehicle : function (type, customizations) {
            var Vehicle = types[type];
            
            return (Vehicle ? new Vehicle(customizations) : null);
        },

        registerVehicle : function (type, Vehicle) {
            var proto = Vehicle.proto;

            if( proto.drive && proto.breakDown){
                types[type] = Vehicle;
            }

            return AbstractFactory;
            
        }

    };
})();