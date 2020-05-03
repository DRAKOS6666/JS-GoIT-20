/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [
    { amount: 25, type: "deposit", id: "e11" },
    { amount: 15, type: "withdraw", id: "2328" },
  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    if (type === Transaction.DEPOSIT) {
      this.balance += amount;
      const action = { amount, type, id: this.getUnicId() };
      this.transactions.push(action);
    } else if (type === Transaction.WITHDRAW) {
      this.balance -= amount;
      const action = { amount, type, id: this.getUnicId() };
      this.transactions.push(action);
    }
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    return this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount < this.balance) {
      return this.createTransaction(amount, Transaction.WITHDRAW);
    } else {
      console.log(
        `Снятие суммы ${amount} невозможно. Недостаточно средств на балансе счета.`
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return account.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions)
      if (item.id === id) {
        return item;
      }
    return "Транзакция не найдена";
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sumForType = 0;
    for (const item of this.transactions)
      if (item.type === type) {
        sumForType += item.amount;
      }
    return sumForType;
  },

  // Генератор id
  getUnicId() {
    const id = Math.floor(Math.random() * 1e4).toString(16);
    if (this.transactions.length > 0) {
      do {
        for (const prop of this.transactions) {
          if (prop.id != id) {
            return id;
          }
          id = Math.floor(Math.random() * 1e4).toString(16);
        }
      } while (true);
    } else {
      return id;
    }
  },
};

account.deposit(28);
account.withdraw(10);

console.log(account.transactions);
console.log("Ваш баланс: ", account.getBalance());
console.log("Поиск по ID: ", account.getTransactionDetails("2328"));
console.log(
  "Сумма по транзакциям пополнения: ",
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "Сумма по транзакциям снятия: ",
  account.getTransactionTotal(Transaction.WITHDRAW)
);
