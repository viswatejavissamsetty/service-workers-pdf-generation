const memo = new Map([
  [0, 0],
  [1, 1],
]);

function fib(n: number): number {
  if (memo.has(n)) return memo.get(n)!;
  return memo.set(n, fib(n - 1) + fib(n - 2)), memo.get(n)!;
}

module.exports = (n: number) => {
  console.log('Triggered Fibonacci');
  return fib(n);
};
