currentYear = new Date().getFullYear();
console.log(currentYear);

const getCurrentAGE = (currentYear, birthYear) => {
  return currentYear - birthYear;
};
const age = getCurrentAGE(currentYear, 2002);

document.querySelector(".age").textContent = `${age} years`;
