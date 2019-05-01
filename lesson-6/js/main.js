'use strict';

    // Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start'),

    // Получить все блоки в правой части программы через классы 
    budgetValue = document.getElementsByClassName('budget-value') [0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value') [0],
    levelValue = document.getElementsByClassName('level-value') [0],
    expensesValue = document.getElementsByClassName('expenses-value') [0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value') [0],
    incomeValue = document.getElementsByClassName('income-value') [0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value') [0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value') [0],



    // Получить поля(input) c обязательными расходами через класс
    expensesItem = document.querySelectorAll('.expenses-item'),
    

    // Получить кнопки “Утвердить” и “Рассчитать” через Tag
    allBtn = document.getElementsByTagName('button'),
    expensesBtn = document.getElementsByTagName('button') [0],
    optionalExpensesBtn = document.getElementsByTagName('button') [1],
    countBtn = document.getElementsByTagName('button') [2],
    inputs = document.getElementsByTagName('input'),

    // Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    // Получить оставшиеся поля через querySelector
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
let money, time;


startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');
    
    while(isNaN(money) || money == '' || money == null) {
      money = prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});
// Обязательные расходы
expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if ( (typeof(a))=== 'string' && a != null && b != null
         && a != '' && b != '' && a.length < 50)  {
          appData.expenses[a] = b;
          sum += +b;
        } else {
          i--;
        }     
      }
      expensesValue.textContent = sum;
      appData.expensesSum = sum;
});

// Возможные траты
optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let d = optionalExpensesItem[i].value;
          appData.optionalExpenses[i] = d;
          optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
      }
});
// Расчет дневного бюджета
// Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат 
countBtn.addEventListener('click', function() {
    let expenses = appData.expensesSum;
    if (appData.budget != undefined) {
        appData.moneyPerDay = ( (appData.budget - expenses) / 30).toFixed(); 
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

// Дополнительный доход

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});
// Расчет сбережений на депозите
checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;   
        appData.yearIncome = sum/100*percent;   

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});
percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;   
        appData.monthIncome = sum/100*percent;   

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.monthIncome.toFixed(1);
    }
});
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };

// Если программа еще не запущена( не нажали кнопку "Начать расчет")
// или нужное(соответственное) для заполнения поле пустое - сделать кнопки неактивными.  

for (let i = 0; i < allBtn.length - 1; i++) {
    allBtn[i].disabled = true;
    allBtn[i].style.backgroundImage = 'none';
    
}  

startBtn.addEventListener('click', function() {
    for (let i = 0; i < allBtn.length - 1; i++) {
        allBtn[i].disabled = false;
        allBtn[i].style.backgroundImage = '';
      } 
});

// Проверяем на заполнение инпутов


for (let i = 0; i < expensesItem.length; i++) {
    
    expensesItem[i].addEventListener('input', function() {
        if (expensesItem[0].value.length > 0 && expensesItem[1].value.length > 0 && expensesItem[2].value.length > 0 && expensesItem[3].value.length > 0) {
            expensesBtn.disabled = false;
            expensesBtn.style.backgroundImage = '';
        }
    });
}