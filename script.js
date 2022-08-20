"use strict";

//Variables
const calcContainer = document.querySelector(".calc-wrapper");
const calcResult = document.querySelector(".calc-result");
const calcBtn = document.querySelector(".calc-btn");

let person = prompt("Please enter your first name");

//Result variables
const resultContainer = document.querySelector(".calc-result");
const bmiResult = document.querySelector(".bmi-value");
const bmiNote = document.querySelector(".bmi-note");

function calcBmi(e) {
  e.preventDefault();
  let weightValue = document.querySelector("#weightValue").value;

  let heightValue = document.querySelector("#heightValue").value;

  let bmiValue = eval(`${weightValue} / (${heightValue} ** 2)`).toFixed(2);

  //If name is not filled
  if (person === null || person === "") {
    return (person = "Guest");
  }

  //Hide calculator container
  calcContainer.style.display = "none";

  //Display result container
  resultContainer.style.display = "block";

  //Display result
  bmiResult.innerHTML = `Hello, ${person}. Your BMI is: <span class="resultValue">${bmiValue}</span>`;

  //Conditional statements

  if (bmiValue < 18.5) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating you are <strong>UNDERWEIGHT</strong>. ${person}, eat more healthy foods, add nutrient-dense snacks and stay active to boost your appetite.`;
  }
  if (bmiValue >= 18.5 || bmiValue <= 24.9) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating your weight is in the NORMAL category of your height. Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.`;
  }
  if (bmiValue >= 25 || bmiValue <= 29.9) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating <strong>YOU ARE OVERWEIGHT</strong>.<br/><br/> ${person}, you need to work on your lifestyle, stay hydrated with water, avoid drinks with added sugar, be physically active and swap out your usual foods for healthier alternatives.`;
  }
  if (bmiValue >= 30) {
    bmiNote.innerHTML = `Your BMI is <strong>${bmiValue}</strong> indicating that <strong>YOU ARE OBESE!</strong> Please see a medical personel as soon as possible.`;
  }
  return;
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
