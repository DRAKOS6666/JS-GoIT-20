var man = Object.create(null);
defineProperty(man, "sex", "male");

var yehuda = Object.create(man);
defineProperty(yehuda, "firstName", "Yehuda");
defineProperty(yehuda, "lastName", "Katz");

yehuda.sex; // "male"
yehuda.firstName; // "Yehuda"
yehuda.lastName; // "Katz"

Object.getPrototypeOf(yehuda); // returns the man object
