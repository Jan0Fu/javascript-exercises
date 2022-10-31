const fibonacci = (n) => {
    let a = 0, b = 1, c = n;
    for (let i = 2; i <= n; i++ ) {
    c = a + b;
    a = b;
    b = c;
  }
    if (n > 0) {
        return parseInt(c);
    }
    return "OOPS"
};

// Do not edit below this line
module.exports = fibonacci;
