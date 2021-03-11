function mySingleon (params) {
    var instance  = null;

    function init() {
        var privateVariable = "i'm private";
        var privateRandomNumber = Maht.random();

        function privateMethod() {
            console.log(" i'm private"); 
        }

        return {
            publicMethod: function () {
                console.log("im public")
            },

            publicProperty: "im also public",

            getRandomNumber: function () {
                return privateRandomNumber;
                
            }
        }
        
    };

    return{
       getInstance : function () {
           if(instance == null){
               instance = init();
           }

           return instance;
           
       }
    };
}