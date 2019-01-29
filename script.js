let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		
	}
}
start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {
	1: "",
	2: "",
	3: ""
	},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
			
		if ((typeof[a])=== 'string' && (typeof[a]) != null && (typeof[b]) != null && 
				a != '' && b != '' && a.length < 50) {
			console.log('Done!');
			appData.expenses[a] = b;
		}
		else {
			console.log('Not Defined');
		}
	
	}
}
chooseExpenses();


/*let i = 0;
while (i < 2) {
	i++;
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		
	if ((typeof[a])=== 'string' && (typeof[a]) != null && (typeof[b]) != null && 
	        a != '' && b != '' && a.length < 50) {
		console.log('Done!');
		appData.expenses[a] = b;
	}
	else {
		console.log('Not Defined');
	}
}*/




/*let i = 0;
do {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
		
	if ((typeof[a])=== 'string' && (typeof[a]) != null && (typeof[b]) != null && 
	        a != '' && b != '' && a.length < 50) {
		console.log('Done!');
		appData.expenses[a] = b;
	}
	else {
		console.log('Not Defined');
	}
	i++;

} while (i <2);*/



appData.moneyPerDay = (appData.budget / 30).toFixed();


function detectDayBudget() {
	alert('Ежедневый бюджет - ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
	console.log("Низкий уровень достатка");
}
	else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
}
	else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
}
	else {
	console.log('Непредвиденная ошибка подсчёта');
}

}
detectLevel();



function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?");
		let percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита - " + appData.monthIncome);
	}
}
checkSavings();



function chooseOptExpenses() {
	let ig = prompt("Статья необязательных расходов?");
	appData.optionalExpenses[1] = ig
	let ir = prompt("Статья необязательных расходов?");
	appData.optionalExpenses[2] = ir
	let im = prompt("Статья необязательных расходов?");
	appData.optionalExpenses[3] = im
}
chooseOptExpenses();

