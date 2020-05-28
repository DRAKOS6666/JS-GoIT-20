import users from "./users.js";

const calculateTotalBalance = (users) => {
  return users.reduce(
    (totalBallance, user) => (totalBallance += user.balance),
    0
  );
};

console.log(calculateTotalBalance(users)); // 20916
