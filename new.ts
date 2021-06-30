import {ShoppingBasket} from "./class/ShoppingBasket";
import {Product} from "./class/Product";
import {Discount} from "./class/Discount";
import {FixedDiscount} from "./class/FixedDiscount";
import {VariableDiscount} from "./class/VariableDiscount";
import {NoDiscount} from "./class/NoDiscount";

type discountType = "variable" | "fixed" | "none";

let cart = new ShoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount( 10)));
//cart.addProduct(new Product('Chair', 25, new DiscountOld("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount()));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});