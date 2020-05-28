import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((haveThisFriend, user) => {
    if (user.friends.includes(friendName)) {
      haveThisFriend.push(user.name);
      return haveThisFriend;
    }
    return haveThisFriend;
  }, []);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
