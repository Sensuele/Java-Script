'use strict'

    // Получить кнопку "Начать расчет" через id
let btn = document.getElementById('start'),

    // Получить все блоки в правой части программы через классы 
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),

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
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');