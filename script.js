const makeChange = (c) => {
  let ans = {
    q: 0,
    d: 0,
    n: 0,
    p: 0,
  };

  let denominations = [
    ['q', 25],
    ['d', 10],
    ['n', 5],
    ['p', 1],
  ];

  for (let i = 0; i < denominations.length; i++) {
    let [symbol, value] = denominations[i];
    while (c >= value) {
      c -= value;
      ans[symbol]++;
    }
  }

  return ans;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(Number(c))));
