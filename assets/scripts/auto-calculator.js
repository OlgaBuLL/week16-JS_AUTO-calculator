let priceInput = document.querySelector("#priceInput");
let volume = document.querySelector("#volume");
let horsepower = document.querySelector("#horsepower");

let autobrand = document.getElementById("autobrand");

let newArray = [];
let serviceprice = 0;
let terms = 0;
let age = 0;
let reciever = 0;
let totalPrice;

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
    terms += +document.getElementById("purchase").value;
  }
  if (document.getElementById("leasing").checked) {
    terms += +document.getElementById("leasing").value;
  }
  if (document.getElementById("rent").checked) {
    terms += +document.getElementById("rent").value;
  }
  if (document.getElementById("salon").checked) {
    age += +document.getElementById("salon").value;
  }
  if (document.getElementById("used").checked) {
    age += +document.getElementById("used").value;
  }
  if (document.getElementById("individual").checked) {
    reciever += +document.getElementById("individual").value;
  }
  if (document.getElementById("entity").checked) {
    reciever += +document.getElementById("entity").value;
  }
  totalPrice =
    +priceInput.value +
    +serviceprice +
    +terms +
    +volume.value +
    +horsepower.value +
    +age +
    +reciever;
  console.log(
    +priceInput.value,
    +serviceprice,
    +terms,
    +volume.value,
    +horsepower.value,
    +age,
    +reciever
  );
  console.log(totalPrice);
  document.querySelector(".selectedServices").innerHTML += `Автомобиль: ${
    autobrand.options[autobrand.selectedIndex].text
  } <br>
  Цена: ${priceInput.value}  <br>
  Тип услуги: ${serviceprice} <br>
  Способ приобретения: ${terms} <br>
  Объем двигателя: ${volume.value} <br>
  Мощность: ${horsepower.value}<br>
  Возраст автомобиля: ${age}<br>
  Получатель: ${reciever} <br>`;
  document.querySelector(".result").innerHTML +=
    "Сумма к оплате: " + Number(totalPrice);
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

///////---------------------ЗАДАНИЕ 3-------------------/////////

//---- 1 ---//

let testArray_1 = ["js", "css", "html"];

console.log(testArray_1[0]); //js

//---- 2 ---//

const testArray_2 = [0, 1, false, 2, undefined, "", 3, null];
const filteredTestArray_2 = testArray_2.filter(Boolean);

// console.log(testArray_2);
console.log(filteredTestArray_2); //[1, 2, 3]

//---- 3 ---//

let testArray_3 = [
  [1, 2],
  [1, 2, 3],
  [1, 2, 3, 4],
];

for (let i = 0; i < testArray_3.length; i++) {
  if (testArray_3[i].length > 3) console.log(i);
  // let innerarray = testArray_3[i];
  // for (let y = 0; y < innerarray.length; y++) {
  //   console.log(innerarray[y]);
  // }
}
