const radius = [1, 2, 3, 4];
const diameter = function (r) {
  return 2 * r;
};

const areaOfCircle = function (r) {
  return Math.PI * r ** 2;
};
function calculate(arr, logic) {
  ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(logic(radius[i]));
  }
  return ans;
}

console.log(calculate(radius, diameter));
console.log(calculate(radius, areaOfCircle));
