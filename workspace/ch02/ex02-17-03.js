var count = 0;
const myObj = {
  count: 0,
  visit: function () {
    //this = myObj
    this.count++;
    var visit2 = () => {
      this.count++; // this = myObj
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
myObj.visit();
myObj.visit();
myObj.visit();
console.log("방문자수" + myObj.count);
