export function add(x, y) {
  return x + y;
}

export const foo = 1;

{
  add: function add(x, y) { },
  foo: 1
}

export default function add(x, y) {
  return x + y;
}

import add from './my_math_module';
