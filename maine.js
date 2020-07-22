const products = document.querySelector('#products');
const orders =document.querySelector('#orders');
const package =document.querySelector('#package');
const accounting =document.querySelector('#accounting');
const terminal =document.querySelector('#terminal');
const calc_sumarry =document.querySelector('.calc__summary');
const select_dropdown =document.querySelector('.select__dropdown');
const summary_total =document.querySelector('.summary__total');
const list_item =document.querySelector('.list__item');
const container = document.querySelector('.summary__total');
const price = document.querySelector('.total__price');


function Calculator (form, summary) {
    this.prices = {
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
    this.form = {
        products: products,
        orders: orders,
        package: package,
        accounting: accounting,
        terminal: terminal,
    }
    this.summary = {
        list: calc_sumarry,
        items: list_item,
        total: {
            container: container,
            price: price
        }

    }
    this.addEvents();
};
