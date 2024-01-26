enum Coordenadas {
    UP,
    DOWN,
    RIGHT,
    LEFT = 1
}

console.log(Coordenadas.UP);
console.log(Coordenadas.DOWN);
console.log(Coordenadas.RIGHT);
console.log(Coordenadas.LEFT);

enum Transaction {
    DEBIT = "Débito",
    CREDIT = "Crédito"
}

console.log(Transaction.CREDIT);

enum Transacao {
    DEBITO = "Compra efetuada no Débito.",
    CREDITO = "Compra efetuada no Crédito."
}

console.log(Transacao.DEBITO);