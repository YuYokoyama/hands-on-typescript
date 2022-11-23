interface Barkable {
    readonly voice: string;
    bark(): void;
}

interface Eatable {
    readonly food: string;
    eat(): void;
}

class Cat implements Barkable, Eatable {
    constructor(public readonly voice: string, public readonly food: string){}

    bark(): void {
        console.log(this.voice);
    }

    eat(): void {
        console.log(this.food);
    }
}

const barkingCat: Barkable = new Cat('nyan', 'pakupaku');
barkingCat.bark();

const eatingCat: Eatable = new Cat('nyan', 'pakupaku');
eatingCat.eat();