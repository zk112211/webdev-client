export default function ReduceFunction() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((total, n) => total + n, 0);
  // TODO (On your own §3.4.9): reduce to a product (start at 1)
  // With AI §3.4.9
  const joined = numbers.reduce((text, n) => text + n, "");
  return (
    <div id="wd-reduce-function">
      <h4>Reduce Function</h4>
      sum = {sum} <br />
      joined = {joined}
      <hr />
    </div>
  );
}
