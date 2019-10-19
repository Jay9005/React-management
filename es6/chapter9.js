const SYM = Symbol();
const o = {a:1, b:2, c:3, [SYM]:4};

for(let prop in o){
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

Object.keys(o).forEach(prop=>console.log(`${prop}:${o[prop]}`));

class Car {
    constructor(make, model){
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }

    shift(gear){
        if(this.userGears.indexOf(gear)<0){
            console.log(this.userGear.indexOf(gear));
            throw new Error(`Invalid gear: ${gear}`);
        }
        this.userGear = gear;
    }
}

const car1 = new Car("Tesla", "Model S");
console.log(car1.userGear);
const car2 = new Car("Mazda", "3i");

car1.shift('D');
//car1.shift('X');
car2.shift('R');

console.log(car1.userGear);
console.log(car2.userGear);

//car1.userGear ='X';
//console.log(car1.userGear);


const CarEx = (function(){
    const carProps = new WeakMap();

    class CarEx {
        constructor(make, model){
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            carProps.set(this, {userGear: this._userGears[0] });
        }
    get userGear(){
        return carProps.get(this).userGear;
    }

    set userGear(value){
        if(this._userGears.indexOf(value)<0){
            throw new Error(`Invalid gear : ${value}`);
        }
        carProps.get(this).userGear =value;
    }
        shift(gear){this.userGear = gear;}
    }

    return CarEx;
})();

const car1Ex = new CarEx("Tesla", "Model S");
const car2Ex = new CarEx("Mazda", "3i");
car1Ex.shift('D');
car2Ex.shift('R');

console.log(car1Ex.userGear);
console.log(car2Ex.userGear);

//car1Ex._userGear('X');
console.log(car1Ex.userGear);

class CarEx2{
    static getNextVin(){
        return CarEx2.nextVin++;
    }

    constructor(make, model){
        this.make =make;
        this.model=model;
        this.vin=CarEx2.getNextVin();
    }

    static areSimilar(car1, car2){
        return car1.make === car2.make &&car1.model === car2.model;
    }

    static areSame(car1, car2){
        return car1.vin === car2.vin;
    }   
}
CarEx2.nextVin=0;

const car4 = new CarEx2("Tesla", "S");
const car5 = new CarEx2("Maxda","3");
const car6 = new CarEx2("Maxda","3");

console.log(car4.vin);
console.log(car5.vin);
console.log(car6.vin);

console.log(CarEx2.areSimilar(car4, car5));
console.log(CarEx2.areSimilar(car5, car6));
console.log(CarEx2.areSame(car4, car5));
console.log(CarEx2.areSame(car5, car5));

class Vehicle{
    constructor(){
        this.passengers=[];
        console.log("Vehicle created");
    }

    addPassenger(p){
        this.passengers.push(p);
    }
}

class CarEx3 extends Vehicle{
    constructor(){
        super();
        console.log("Car created");
    }

    deployAirbags(){
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
console.log(v.passengers);

const c = new CarEx3();
c.addPassenger("Alice");
c.addPassenger("Jay");
console.log(c.passengers);

console.log(v.deployAirbags);
console.log(c.deployAirbags);