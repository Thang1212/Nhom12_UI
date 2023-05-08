$(document).ready(function () {
    const SHOPPINGCARTS_STORAGE_KEYS = 'SHOPPINGCARTS';
    const TOTALMONEY_STORAGE_KEYS = 'TOTALMONEY';

    function getShoppingCarts() {
        return JSON.parse(localStorage.getItem(SHOPPINGCARTS_STORAGE_KEYS)) || [];
    }

    function setShoppingCarts(shoppingCarts) {
        localStorage.setItem(SHOPPINGCARTS_STORAGE_KEYS, JSON.stringify(shoppingCarts));
    }

    function getTotalMoney() {
        return JSON.parse(localStorage.getItem(TOTALMONEY_STORAGE_KEYS)) || { 
            discountPrice: 0, 
            initPrice: 0, 
            payment: 0,
            discountPriceTag: '0',
            priceTag: '0' 
        };
    }

    function setTotalMoney(totalMoney) {
        localStorage.setItem(TOTALMONEY_STORAGE_KEYS, JSON.stringify(totalMoney));
    }

    let MoneyFormat = new Intl.NumberFormat().format;

    let shoppingCarts = getShoppingCarts();
    let totalMoney = getTotalMoney();
    jQuery.getJSON('../js/db.json').done(function (db) {
        $('.product__cart').click(function () {
            console.log('haha');
            let productBrand = $(this).attr('data-productbrand');
            let productIndex = parseInt($(this).attr('data-productindex'));

            let currentProductPrice = db[productBrand][productIndex].price;

            totalMoney.initPrice += currentProductPrice;
            totalMoney.discountPrice = 0;
            totalMoney.discountPriceTag = MoneyFormat(0);
            totalMoney.payment = totalMoney.initPrice;
            totalMoney.priceTag = MoneyFormat(totalMoney.payment);
            setTotalMoney(totalMoney);

            $('.cart__amount').text(shoppingCarts.length + 1);
            $('.toast__increasecart').toast('show');

            if (shoppingCarts.length) {
                for (let x of shoppingCarts) {
                    if (x.productBrand === productBrand && x.productIndex === productIndex) {
                        x.amount += 1;
                        x.price += currentProductPrice;
                        x.priceTag = MoneyFormat(x.price);

                        setShoppingCarts(shoppingCarts)
                        return;
                    }
                }
            } 

            shoppingCarts.push({ 
                amount: 1, productBrand, productIndex, 
                price: currentProductPrice,
                priceTag: MoneyFormat(currentProductPrice)
            })

            setShoppingCarts(shoppingCarts)
        });
    })

})