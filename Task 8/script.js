/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
    
function Calculator(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
    this.sum = function () {
        return n1 + n2;
    };
    this.sub = function () {
        return n1 - n2;
    };
    this.multi = function () {
        return n1 * n2;
    };
    this.div = function () {
        return n1 / n2;
    };
    console.log(this.sum());
    console.log(this.sub());
    console.log(this.multi());
    console.log(this.div());
};

const calc = new Calculator(5, 5);
    