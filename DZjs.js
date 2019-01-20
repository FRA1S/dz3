var money, time;
money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        g1: g2,
        g3: g4
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
}

var g1 = prompt('Введите обязательную статью расходов в этом месяце'),
g2 = prompt('Во сколько обойдется?'),
g3 = prompt('Введите обязательную статью расходов в этом месяце'),
g4 = prompt('Во сколько обойдется?');

alert("бюджет на 1 день " + money / 30);
