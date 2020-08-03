
const products = document.querySelector('#products');
const orders =document.querySelector('#orders');
const accounting =document.querySelector('#accounting');
const terminal =document.querySelector('#terminal');
const calc_sumarry =document.querySelector('.calc__summary');
const summaryProduct =calc_sumarry.querySelector('[data-id="products"]');
const summaryOrders =calc_sumarry.querySelector('[data-id="orders"]');
const summaryPackage =calc_sumarry.querySelector('[data-id="package"]');

const select_dropdown =document.querySelector('.calc__select');
const basic = select_dropdown.querySelector('[data-value="basic"]');
const professional = select_dropdown.querySelector('[data-value="professional"]');
const premium = select_dropdown.querySelector('[data-value="premium"]');
const summary_total =document.querySelector('.summary__total');
const price = document.querySelector('.total__price');
const select_input = document.querySelector('.select__input');
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
    const show = summary_total.querySelectorAll(".open").length > 0;
    if (show) {
        price.classList.add("open");
    } else {
        price.classList.remove("open");
    }

    if (accounting.checked) {
        accountValue += data.accounting;
    }
    if (terminal.checked) {
        terminalValue += data.terminal;
    }
    if (select_input.value === "Basic") {
        packageValue += data.package.basic;
    }
    if (select_input.value === "Professional") {
        packageValue += data.package.professional;
    }
    if (select_input.value === "Premium") {
        packageValue += data.package.premium;
    }
    total += (products.value * 0.5) + (orders.value * 0.25) + accountValue + terminalValue + packageValue;
    total_Price.innerText = "$ " + total;
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
    const account = calc_sumarry.querySelector('[data-id="accounting"]');
    if(this.checked) {

        account.classList.add('open');
        account.querySelector('.item__price').innerText = "$ " + data.accounting;
    }
    else {
        account.classList.remove('open');
    }
    totalPrice();
});
terminal.addEventListener('click',function () {
    const term = calc_sumarry.querySelector('[data-id="terminal"]');
    if(this.checked) {

        term.classList.add('open');
        term.querySelector('.item__price').innerText = "$ " + data.terminal;
    }
    else {
        term.classList.remove('open');
    }
    totalPrice();
});

select_dropdown.addEventListener('click', function() {
    select_dropdown.classList.toggle('open'); });

basic.addEventListener('click', function(){
    select_input.value = "Basic";
    if(select_input.value === "Basic") {
       summaryPackage.classList.add('open');
        summaryPackage.querySelector('.item__calc').innerText = "Basic";
       summaryPackage.querySelector('.item__price').innerText = '$ ' + data.package.basic ;
        }
    totalPrice();
});
professional.addEventListener('click', function(){
    select_input.value = "Professional";
    if(select_input.value === "Professional") {
        summaryPackage.classList.add('open');
        summaryPackage.querySelector('.item__calc').innerText = "Professional";
        summaryPackage.querySelector('.item__price').innerText = '$ ' + data.package.professional ;
    }
    totalPrice();
});
premium.addEventListener('click', function(){
    select_input.value = "Premium";
    if(select_input.value === "Premium") {
        summaryPackage.classList.add('open');
        summaryPackage.querySelector('.item__calc').innerText = "Premium";
        summaryPackage.querySelector('.item__price').innerText = '$ ' + data.package.premium ;
    }
    totalPrice();
});


