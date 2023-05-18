'use strict'
//coding challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgKoalas = calcAverage(65, 54, 49);
let avgDolphins = calcAverage(44, 23, 71);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    } else if (2 * avgDolphins <= avgKoalas) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log("No team wins!");
    }
}

checkWinner(avgDolphins, avgKoalas);

avgKoalas = calcAverage(23, 34, 27);
avgDolphins = calcAverage(85, 54, 41);

checkWinner(avgDolphins, avgKoalas);

//coding challenge 2
const calcTip = (bill) => {
    return bill >=50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;
}

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);