// Корзина товаров

const cart = {
  items = [{name: 'apple', price: 50, quantity: 1}],
  geItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      console.log(item);

      if (item.name === product.name) {
        console.log('Такой продукт уже есть, увеличиваем кол-во');
        item.quantity += 1;
        return;        
      }
    }
    console.log('Новый продукт, добавляем в корзину');
    product.quantity = 1;
    this.items.push(product);    
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        console.log('Нашли, удаляем!!!');
        console.log('Индекс для удаления:', i);
        
        this.items.splice(i, 1);
      }
    }
  },
  clear () {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;

    for (const item of this.items) {
      tota += item.price * item.quantity;
    }

    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.quantity - 1 === 0) {
        this.remove(productName);
        return;
      }
    }
  },
};

console.tabl(cart.geItems());

cart.add({name: 'apple', price: 50});
cart.add({name: 'lemon', price: 60});
cart.add({name: 'lemon', price: 60});
console.table(cart.geItems());

cart.remove('apple');
console.table(cart.geItems());

cart.clear();
console.table(cart.geItems());

cart.increaseQuantity('apple');
console.table(cart.geItems());

cart.decreaseQuantity('lemon');
cart.decreaseQuantity('lemon');
console.table(cart.geItems());

console.log('Total: ', cart.countTotalPrice());



