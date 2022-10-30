// console.log(priceInput).value;
let priceInput = document.querySelector("#priceInput");
let volume = document.querySelector("#volume");
let horsepower = document.querySelector("#horsepower");
let checkbox = document.querySelector("#horsepower");
let newArray = [];
let serviceprice = 0;
let result = document.querySelector(".result");

function onSubmit() {
  serviceprice = 0;
  if (document.getElementById("color").checked) {
    serviceprice += +document.getElementById("color").value;
  }

  if (document.getElementById("wash").checked) {
    serviceprice += +document.getElementById("wash").value;
  }

  if (document.getElementById("diagnose").checked) {
    serviceprice += +document.getElementById("diagnose").value;
  }

  if (document.getElementById("wheel").checked) {
    serviceprice += +document.getElementById("wheel").value;
  }
  if (document.getElementById("purchase").checked) {
    serviceprice += +document.getElementById("purchase").value;
  }
  if (document.getElementById("leasing").checked) {
    serviceprice += +document.getElementById("leasing").value;
  }
  if (document.getElementById("rent").checked) {
    serviceprice += +document.getElementById("rent").value;
  }
  console.log(+priceInput.value + +serviceprice);
  document.querySelector(".result").innerHTML +=
    "Сумма к оплате: " + Number(+priceInput.value + +serviceprice);
}

function chooseAutobrand() {
  switch (document.getElementById("autobrand").value) {
    case "700":
      document.getElementById("service-typeDiv").style.background = "lightgray";
      document.getElementById("age").hidden = "";
      document.getElementById("entity").disabled = "";
      document.getElementById("entity1").style.color = "black";
      document.getElementById("rent").disabled = "";
      document.querySelector("#rent1").style.color = "black";
      document.querySelector("#purchase").disabled = true;
      document.getElementById("purchase1").style.color = "grey";
      document.querySelector("#salon").disabled = true;
      document.getElementById("salon1").style.color = "grey";
      document.querySelector("#color").disabled = "";
      document.getElementById("color1").style.color = "black";
      priceInput.value = 700;

      break;

    case "800":
      document.getElementById("rent").disabled = true;
      document.querySelector("#rent1").style.color = "grey";
      document.getElementById("service-typeDiv").style.background = "PaleGreen";
      document.getElementById("age").hidden = "";
      document.getElementById("entity").disabled = "";
      document.getElementById("entity1").style.color = "black";
      document.querySelector("#purchase").disabled = "";
      document.getElementById("purchase1").style.color = "black";
      document.querySelector("#salon").disabled = "";
      document.getElementById("salon1").style.color = "black";
      document.querySelector("#color").disabled = "";
      document.getElementById("color1").style.color = "black";
      priceInput.value = 800;
      break;

    case "900":
      document.getElementById("entity").disabled = true;
      document.getElementById("entity1").style.color = "grey";
      document.getElementById("service-typeDiv").style.background = "Thistle";
      document.getElementById("age").hidden = "";
      document.getElementById("rent").disabled = "";
      document.querySelector("#rent1").style.color = "black";
      document.querySelector("#purchase").disabled = "";
      document.getElementById("purchase1").style.color = "black";
      document.querySelector("#salon").disabled = "";
      document.getElementById("salon1").style.color = "black";
      document.querySelector("#color").disabled = "";
      document.getElementById("color1").style.color = "black";
      priceInput.value = 900;

      break;

    case "1000":
      document.getElementById("age").hidden = true;
      document.getElementById("service-typeDiv").style.background =
        "PowderBlue";
      document.getElementById("entity").disabled = "";
      document.getElementById("entity1").style.color = "black";
      document.getElementById("rent").disabled = "";
      document.querySelector("#rent1").style.color = "black";
      document.querySelector("#purchase").disabled = "";
      document.getElementById("purchase1").style.color = "black";
      document.querySelector("#salon").disabled = "";
      document.getElementById("salon1").style.color = "black";
      document.querySelector("#color").disabled = true;
      document.getElementById("color1").style.color = "grey";
      document.querySelector("#rent").disabled = true;
      document.getElementById("rent1").style.color = "grey";
      priceInput.value = 1000;
      break;
  }
}

// const form = document.querySelector(".form");
// const auction = document.querySelector(".auction");
// const auditionalPrice = {
//   lamborghini: 80,
//   ferrari: 100,
//   audir8: 50,
//   rolls: 500,
// };

// form.onsubmit = (evt) => {
//   evt.preventDefault();
//   let total;
//   const status = auction.value;
//   console.log(status);
// };
