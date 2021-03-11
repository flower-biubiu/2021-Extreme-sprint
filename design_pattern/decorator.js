function MacBook() {
    this.cost = function () {
        return 997;
    }

    this.screenSize = function () {
        return 11.6;   
    }
    
}

function Memory(macbook) {

    var v = macbook.cost();
    macbook.cost = function () {
        return v+75;   
    }    
}

function Engraving(macbook) {
    var v = macbook.cost();
    macbook.cost = function () {
        return v+100;
        
    }
    
}