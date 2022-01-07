//한율정보 객체 만들기
let currencyRatio = {
    USD : {
        USD : 1,
        KRW : 1190.91,
        VND : 22920.00,
        unit : "달러"
    },
    KRW : {
        USD : 0.00084,
        KRW : 1,
        VND : 19.23,
        unit : "원"
    },
    VND : {
        USD : 0.000044,
        KRW : 0.052,
        VND : 1,
        unit : "동"
    }
}
let fromCurrency = "USD";
let toCurrency = "USD";
document.querySelectorAll("#from-text-content a")
.forEach(menu => menu.addEventListener("click",function(){
    document.getElementById("from-button").textContent= this.textContent;
    fromCurrency = this.textContent;
    convert();
}));
document.querySelectorAll("#to-text-content a")
.forEach(menu => menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent= this.textContent;
    toCurrency = this.textContent;
    convert();
}));

function convert(){
    let amount = document.getElementById('from-input').value;
    let currencyVal = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById('to-input').value = currencyVal;

}
