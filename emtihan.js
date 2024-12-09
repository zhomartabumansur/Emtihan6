const Shop = [
    {name: drinkShop},
    {phoneNumber: 77078097071},
    {products: 
        {
            productName: "Cola",
            category: "fe",
            price: 550,
            stock: 1000,
        },
        {
            productName: "Fanta",
            category: "fr",
            price: 500,
            stock: 259,
        },
        {
            productName: "Sprite",
            category: "fq",
            price: 459,
            stock: 74,
        },
        {
            productName: "Fusetea",
            category: "ft",
            price: 350,
            stock: 421,
        },
        {
            productName: "Mirinda",
            category: "fw",
            price: 420,
        }
    }
]

function changeShopName() {
    prompt("Жаңа атауды жазыңыз")
}

changeShopName()

function changePhoneNumber() {
    prompt("Жаңа телефон нөмірін жазыңыз")
}

changePhoneNumber()


function listProductNames() {
    return alert(Shop)
}

listProductNames()

function addProduct() {
    prompt("өнімнің атауын, бағасын, санын және категориясын жазыңыз")
}

function menu() {
    while (true) {
        prompt("1. Дүкен атауын өзгерту" + '\n' + "2. Телефон нөмірін өзгерту" + '\n' + "3. Өнімдердің атауын шығару" + '\n' + "4. Жаңа өнім қосу" + '\n' + "5. Категорияға жеңілдік жасау" + '\n' + "6. Категорияға жеңілдік жасау")

        if (1) {
            changeShopName()
        } else if (2) {
            changePhoneNumber()
        } else if (3) {
            listProductNames()
        } else if (4) {
            addProduct(Shop)
        } else if (5) {
            applyDiscountToCategory()
        } else if (6) {
            alert("Sau bolynyz")
        }
    }
}