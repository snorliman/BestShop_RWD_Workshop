
const products = document.querySelector('#products');
const orders =document.querySelector('#orders');
const accounting =document.querySelector('#accounting');
const terminal =document.querySelector('#terminal');
const calcSummary =document.querySelector('.calc__summary');
const summaryProduct =calcSummary.querySelector('[data-id="products"]');
const summaryOrders =calcSummary.querySelector('[data-id="orders"]');
const summaryPackage =calcSummary.querySelector('[data-id="package"]');
const summaryAccount =calcSummary.querySelector('[data-id="accounting"]');
const summaryTerminal =calcSummary.querySelector('[data-id="terminal"]');

const selectDropdown =document.querySelector('.calc__select');
const basic = selectDropdown.querySelector('[data-value="basic"]');
const professional = selectDropdown.querySelector('[data-value="professional"]');
const premium = selectDropdown.querySelector('[data-value="premium"]');
const summaryTotal =document.querySelector('.summary__total');
const selectInput = document.querySelector('.select__input');
const total_Price = document.querySelector('.total__price');

let total = 0;
let accountValue = 0;
let terminalValue = 0;
let packageValue = 0;

const data  = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5
}
function totalPrice () {
    const show = calcSummary.querySelectorAll(".open").length > 0;
    if (show) {
        summaryTotal.classList.add("open");
    } else {
        summaryTotal.classList.remove("open");
    }

    if (accounting.checked) {
        accountValue = data.accounting;
    } else {
        accountValue = 0;
    }
    if (terminal.checked) {
        terminalValue = data.terminal;
    } else {
        terminalValue = 0;
    }
    if (selectInput.value === "Basic") {
        packageValue = data.package.basic;
    } else if (selectInput.value === "Professional") {
        packageValue = data.package.professional;
    }else if (selectInput.value === "Premium") {
        packageValue = data.package.premium;
    } else {
        packageValue = 0;
    }
    total = (products.value * data.products) + (orders.value * data.orders) + accountValue + terminalValue + packageValue;
    total_Price.innerText = "$ " + total;
    return total;
}

function productsInput() {
    if(this.value) {
        summaryProduct.classList.add('open');
        summaryProduct.querySelector('.item__calc').innerText = products.value + ' * ' + data.products;
        summaryProduct.querySelector('.item__price').innerText = '$ ' + products.value * data.products ;
    }
    else {
        summaryProduct.classList.remove('open');
    }
    totalPrice();
}
products.addEventListener('keyup', productsInput);
products.addEventListener('change',productsInput);

function ordersInput() {
    if(orders.value) {
        summaryOrders.classList.add('open');
        summaryOrders.querySelector('.item__calc').innerText = orders.value + ' * ' + data.orders;
        summaryOrders.querySelector('.item__price').innerText = '$ ' + orders.value * data.orders ;
    }
    else {
        summaryOrders.classList.remove('open');
    }
    totalPrice();
}
orders.addEventListener('keyup', ordersInput);
orders.addEventListener('change',ordersInput);

accounting.addEventListener('click',function () {
    if(this.checked) {
        summaryAccount.classList.add('open');
        summaryAccount.querySelector('.item__price').innerText = "$ " + data.accounting;
    }
    else {
        summaryAccount.classList.remove('open');
    }
    totalPrice();
});
terminal.addEventListener('click',function () {
    if(this.checked) {
         summaryTerminal.classList.add('open');
        summaryTerminal.querySelector('.item__price').innerText = "$ " + data.terminal;
    }
    else {
        summaryTerminal.classList.remove('open');
    }
    totalPrice();
});

selectDropdown.addEventListener('click', function() {
    selectDropdown.classList.toggle('open'); });

basic.addEventListener('click', function(){
    selectInput.value = "Basic";
    if(selectInput.value === "Basic") {
       summaryPackage.classList.add('open');
        summaryPackage.querySelector('.item__calc').innerText = "Basic";
       summaryPackage.querySelector('.item__price').innerText = '$ ' + data.package.basic ;
        }
    totalPrice();
});
professional.addEventListener('click', function(){
    selectInput.value = "Professional";
    if(selectInput.value === "Professional") {
        summaryPackage.classList.add('open');
        summaryPackage.querySelector('.item__calc').innerText = "Professional";
        summaryPackage.querySelector('.item__price').innerText = '$ ' + data.package.professional ;
    }
    totalPrice();
});
premium.addEventListener('click', function(){
    selectInput.value = "Premium";
    if(selectInput.value === "Premium") {
        summaryPackage.classList.add('open');
        summaryPackage.querySelector('.item__calc').innerText = "Premium";
        summaryPackage.querySelector('.item__price').innerText = '$ ' + data.package.premium ;
    }
    totalPrice();
});


