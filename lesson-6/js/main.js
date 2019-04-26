'use strict'

    // Получить кнопку "Начать расчет" через id
let startBtn = document.getElementById('start'),

    // Получить все блоки в правой части программы через классы 
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),

    // Получить поля(input) c обязательными расходами через класс
    expensesItem = document.getElementsByClassName('expenses-item'),

    // Получить кнопки “Утвердить” и “Рассчитать” через Tag
    button = document.getElementsByTagName('button'),
    button0 = button[0],
    button1 = button[1],
    button2 = button[2],

    // Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),

    // Получить оставшиеся поля через querySelector
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while(isNaN(money) || money == "" || money == null) {
      money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});
// Обязательные расходы
button.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце',''),
            b = prompt('Во сколько обойдется?', '');
        
        if ( (typeof(a))=== 'string' && a != null && b != null
         && a != '' && b != '' && a.length < 50)  {
          appData.expenses[a] = b;
        } else {
          i--;
        }     
      }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {                            // Обязательные расходы
      
    },
    detectDayBudget: function() {                            // Расчет дневного бюджета          
      appData.moneyPerDay = (appData.budget / 30).toFixed(); 
      alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function() {                                // Расчет уровня достатка
      if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
      } else {
        console.log("Произошла ошибка");
      }
    },
    checkSavings: function() {                               // Расчет сбережений на депозите
      if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);  
      }
    },
    chooseOptExpenses: function() {                          // Необязательные расходы
      for (let i = 0; i < 3; i++) {
        let d = prompt( ' Статья необязательных расходов? ', '');
        if ( (typeof(d)) === 'string' && d != null 
          && d != '' && d.length < 50)  {
          appData.optionalExpenses[i] = d;
        } 
      }
    },
    chooseIncome: function() {                              // Дополнительный доход
      for (let i = 0; i < 1; i++) {
        let items = prompt('Что принесет дополнительный доход (Перечислите через запятую)', '');
        if ( (typeof(items))=== 'string' && items != null && items != '') {
          appData.income = items.split(', ');
          appData.income.push(prompt('Может что-то еще?'));
          appData.income.sort();
          appData.income.forEach(function(item, i, income) {
            let n = i + 1;
            alert(n + '.' + "Способ доп. заработка:" + item);
          });
        } else {
          i--;
        }
      }
    }
  
  };
  
  appData.chooseIncome();
  // console.log(appData);
  
  for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + appData);
  }