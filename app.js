function updateProductNumber(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

    // update product price 
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;

    calculateTotalPrice();
}

//phone event handler
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
})


// case event handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
})

// get Price
function inputProductNumber(product) {
    const inputNumber = document.getElementById(product + '-number');
    const inputNumberValue = parseInt(inputNumber.value);
    return inputNumberValue;
}
// subTotal, tax, total price
function calculateTotalPrice() {
    const phoneTotal = inputProductNumber('phone') * 1219;
    const caseTotal = inputProductNumber('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    // update total price
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = total;
}