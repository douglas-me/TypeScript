class SweetSweetBasil{
    color: string;
    constructor(name:string, color:string){
        console.log('Hello ' + name);
        this.color = color;
    }

    getColor(){
        console.log(this.color);
    }
}

let basil = new SweetSweetBasil('Douglas', 'Green');
basil.getColor();

console.log(basil.color);

class Basil extends SweetSweetBasil{
    constructor(name:string, color:string){
        super(name, color);
    }

    setNewColor(color:string){
        this.color = color;
    }
}

let Basil_2 = new Basil('Ortega', 'Azul');
Basil_2.getColor();
Basil_2.setNewColor('red');
Basil_2.getColor();