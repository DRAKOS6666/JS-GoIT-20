import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  const allUnicSkills = users.reduce((allSkills, user) => {
    const userUnicSkills = user.skills.filter(
      (skill) => !allSkills.includes(skill)
    );
    return [...allSkills, ...userUnicSkills];
  }, []);
  return allUnicSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
