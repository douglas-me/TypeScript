function f(input:boolean){
    let a = 100;
    if(input){
        let b = a + 11;
        return b;
    }
    return a;
}

console.log(f(true));
console.log(f(false));