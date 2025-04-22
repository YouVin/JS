var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    //this = myObj
    this.count++;
    var visit2 = function () {
      this.count++; // this = myObj
    };
    visit2.call(this); // this = myObj
  },
};

myObj.visit();
myObj.visit();
myObj.visit();
myObj.visit();
myObj.visit();
console.log("방문자수" + myObj.count);
