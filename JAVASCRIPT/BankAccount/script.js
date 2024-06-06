let data = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 210,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 450,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 1050,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 500,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
]

data.map((ele) => {
    let img = `<img src="${ele.image}">`;
    let title = `<h3>${ele.title}</h3>`;
    let price = `<p>₹${ele.price}</p>`;
    let btn1 = "";
    let btn2 = "<button class=btnb>Buy Now</button>";

    let div = `<div>${img}${title}${price}${btn1}${btn2}</div>`;

    document.getElementById("product").innerHTML += div;
});



const cartBtn = document.querySelector(".cart-btn");

// cartBtn.addEventListener("click",()=>{
//   cartBtn.classList.add("clicked");
// //   alert(`Thanks for buying the ${title}.😀`);
// })

// btnb.addEventListener("click",()=>{
//     alert(`🙏🏻   Thank You For Comming and Buying...   🙏🏻`)
// })


document
.getElementById("check_balance_button")
.addEventListener("click", function () {
  document.getElementById(
    "balance_check"
  ).innerText = `Current balance: ₹${userAccount.getBalance()}`;
});




class BankAccount {
    #accountNo;
    #name;
    #amount;

    constructor(accountNo) {
      this.#accountNo = accountNo;
      this.#name = "";
      this.#amount = 0;
    }

    getAccountNo() {
      return this.#accountNo;
    }

    setAccountNo(accountNo) {
      this.#accountNo = accountNo;
    }

    getName() {
      return this.#name;
    }

    setName(name) {
      this.#name = name;
    }

    deposit(amount) {
      if (amount > 0) {
        this.#amount += amount;
        console.log(`Deposited ₹${amount}`);
      } else {
        console.log("Please enter an amount greater than zero.");
      }
    }

    getBalance() {
      return this.#amount;
    }

    withdraw(reqAmount) {
      if (reqAmount > 0 && reqAmount <= this.#amount) {
        this.#amount -= reqAmount;
        console.log(`Withdrawn ₹${reqAmount}. Please collect your amount.`);
      } else {
        console.log("Insufficient balance or invalid withdrawal amount.");
      }
    }
  }

  let userAccount = new BankAccount();




  function buyProduct(productName, price) {
    if (price <= userAccount.getBalance()) {
      userAccount.withdraw(price);
      console.log(`Purchased ${productName} for ₹${price}.`);
      alert(`Purchased ${productName} for ₹${price}.`);
      document.getElementById(
        "account_balance"
      ).innerText = `Account Balance: ₹${userAccount.getBalance()}`;
    } else {
      console.log("Insufficient balance for the purchase.");
      alert("Insufficient balance for the purchase.");
    }
  }



  document
    .getElementById("submit_data")
    .addEventListener("click", function (e) {
      e.preventDefault();
      let name = document.querySelector("#name").value;
      let number = document.querySelector("#Number").value;
      let acNumber = document.querySelector("#acnumber").value;

      userAccount.setName(name);
      userAccount.setAccountNo(acNumber);

      document.querySelector(
        "account_holder_name"
      ).innerText = `Account Holder Name: ${name}`;
      document.querySelector(
        "account_mobile"
      ).innerText = `Mobile Number: ${number}`;
      document.querySelector(
        "account_number"
      ).innerText = `Account Number: ${acNumber}`;

      document.querySelector("#name").value = "";
      document.querySelector("#Number").value = "";
      document.querySelector("#acnumber").value = "";
    });

  document
    .getElementById("money_submit")
    .addEventListener("click", function (e) {
      e.preventDefault();
      let amount = parseFloat(
        document.querySelector("#deposit_money").value
      );
      userAccount.deposit(amount);

      document.getElementById(
        "account_balance"
      ).innerText = `Account Balance: ₹${userAccount.getBalance()}`;
      document.getElementById("deposit_money").value = "";
    });

  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", function () {
      let productName = this.getAttribute("data-product");
      let price = parseFloat(this.getAttribute("data-price"));
      buyProduct(productName, price);
    });
  });

