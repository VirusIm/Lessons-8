let rez;
let calculator = {
  oneNum: 0,
  twoNum: 0,
  read()  //Содержит в себе 2-а числа которые ввёл пользователь
  {
    this.oneNum = prompt("Введите первое число: ");
    this.twoNum = prompt("Введите втрое число: ");
  },
  sum()   //Считает сумму 2-х чисел
  {
    rez = +this.oneNum + +this.twoNum
    alert("Сумма: " + rez);
  },
  mult()    //Перемножает 2-а числа
  {
    rez = this.oneNum * this.twoNum
    alert("Умножение: " + rez);
  }
}
calculator.read();
calculator.sum();
calculator.mult();