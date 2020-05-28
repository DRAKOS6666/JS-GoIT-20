import users from "./users.js";
const getUsersWithGender = (users, gender) =>
  users.reduce((namesArr, user) => {
    if (user.gender === gender) {
      namesArr.push(user.name);
    }
    return namesArr;
  }, []);
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
