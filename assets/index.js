const display = document.getElementById("display");

function appendToDisplay(input){
    const ultimo = display.value.slice(-1);

    if ("+-*/.%^".includes(input) && "+-*/.^%".includes(ultimo)) {
        return;/*verificar se exite operador para não poder adicionar mais um*/
    }

    display.value += input;
}

function limparDisplay(){
    display.value = "";
}

function prioridadeDoSinal(op){/*atribui valor aos operadores, para saber qual executar primeiro*/
    if(op =="+" || op == "-"){
        return 1
    }
    if(op == "*" || op  == "%" || op == "/"){
        return 2
    }
    if(op == "^") return 3
    return 0;
}

function aplicaOperadores(valores, op){

    if (valores.length < 2) throw Error("Invalid expr");/*caso não existam 2 numeros*/
    
    const b = valores.pop();
    const a = valores.pop();
        if (op === "+") valores.push(a + b);
        else if ( op === "-") valores.push(a - b);
        else if ( op === "*") valores.push(a*b);
        else if ( op === "%") valores.push(a *(b / 100));
        else if ( op === "^") valores.push(a ** b)
        else if ( op === "/") {
            if (b === 0) throw Error("Div by zero");
            valores.push(a/b);
        }/*contas*/
        
}

function calcular() {
    try {
        display.value = calcularExpressao(display.value);
    } catch (error) {
        display.value = error.message;
        setTimeout(() => limparDisplay(), 1500);
    }
}
/*validação para usar calcular()*/

function calcularExpressao(expr) {
    const valores = [];
    const ops = [];
    const tokens = expr.match(/\d+(\.\d+)?|[+\-*^/%]/g);/*separa em operadores e numeros*/
    if (!tokens) throw Error("Invalid expr");/*tokens vazios*/
    for (const t of tokens) {

        if (!isNaN(t)) {
            valores.push(Number(t));
            continue;
        }

        while (
            ops.length &&
            prioridadeDoSinal(ops[ops.length-1]) >= prioridadeDoSinal(t)/*trata t como operador*/
        ) {
            aplicaOperadores(valores, ops.pop());/*t -valor da stack*/
        }

        ops.push(t);
    }

    while (ops.length) {
        aplicaOperadores(valores, ops.pop());/*vai na sobra ou não*/
    }

    return valores[0];
    
}

function apagar(){
    display.value = display.value.slice(0, -1);
}
