function math() { 



    function add(num1,num2) {
        let x = num1 + num2;
        return parseInt(x);
    }

    function sub(num1,num2) {
        let x = num1 - num2;
        return parseInt(x);
    }

    function div(num1,num2) {
        let x = Math.round(num1) / Math.floor(num2);
        return parseInt(x.toFixed(1));
    }

    function mult(num1,num2){
        let x = (num1) * (num2);
        return parseFloat(x.toFixed(1));

    }

let x = window.prompt("choose 1 number");
let y = window.prompt("choose 2nd number");
    
console.log(mult(x , y));

}

math();
