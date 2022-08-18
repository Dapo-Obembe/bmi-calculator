"use strict";

//Variables
const calcContainer = document.querySelector(".calc-wrapper");
const calcResult = document.querySelector(".calc-result");
const calcBtn = document.querySelector(".calc-btn");

let person = prompt("Please enter your name");

//Result variables
const resultContainer = document.querySelector(".calc-result");
const bmiResult = document.querySelector(".bmi-value");
const bmiNote = document.querySelector(".bmi-note");

function calcBmi(e) {
  e.preventDefault();
  let weightValue = document.querySelector("#weightValue").value;

  let heightValue = document.querySelector("#heightValue").value;

  let bmiValue = eval(`${weightValue} / ${heightValue} ** 2`).toFixed(2);

  //If name is not filled
  if (person === null) {
    person = "Guest";
  }

  //Hide calculator container
  calcContainer.style.display = "none";

  //Display result container
  resultContainer.style.display = "block";

  //Display result
  bmiResult.innerHTML = `Hello, ${person}. Your BMI is: <span class="resultValue">${bmiValue}</span>`;

  //Conditional statements
  if (bmiValue < 18.5) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating you are UNDERWEIGHT. ${person}, eat more healthy foods, add nutrient-dense snacks and stay active to boost your appetite.`;
  } else if (bmiValue > 18.5) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating your weight is in the NORMAL category of your height. Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.`;
  } else if (bmiValue > 25) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating YOU ARE OVERWEIGHT. ${person}, you need to work on your lifestyle, stay hydrated with water, avoid drinks with added sugar, be physically active and swap out your usual foods for healthier alternatives.`;
  } else {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating that YOU ARE OBESE! Please see a medical personel as soon as possible.`;
  }

  return bmiValue;
}

calcBtn.addEventListener("click", calcBmi);

//Reseting the Calculator container
const resetBtn = document.querySelector(".recalc-Btn");

function resetCalc(e) {
  e.preventDefault();

  //Set Weight and Height back to default
  let heightValue = (document.querySelector("#heightValue").value =
    "Enter your height");
  let weightValue = (document.querySelector("#weightValue").value =
    "Enter your weight");

  //Display calculator container
  calcContainer.style.display = "block";

  //Hide result container
  resultContainer.style.display = "none";
}

resetBtn.addEventListener("click", resetCalc);
