// Named Import
import { plus, minus } from "./math.js";
//  Named + 별칭
import { plus as add } from "./math.js";

// Default Import
import Mygop from "./math.js";

// Mixed Import(권장 x)
import MyMath, { plus as dd, minus as tt } from "./math.js";

// Type Import
import { type Member } from "./math.js";

const haru: Member = {
  name: "하루",
  age: 7,
};

plus(1, 2);
minus(2, 3);
Mygop(3, 4);
