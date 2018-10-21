function f(input) {
    var a = 100;
    if (input) {
        var b = a + 11;
        return b;
    }
    return a;
}
console.log(f(true));
console.log(f(false));
