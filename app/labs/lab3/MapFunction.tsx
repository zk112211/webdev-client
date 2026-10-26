export default function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  // With AI §3.4.4: "Email the TA"
  // TODO §3.4.4: "Submit A3"
  const todos = ["Buy milk", "Feed the pets", "Email the TA", "Submit A3"];
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares} <br />
      cubes = {cubes}     <br />
      {/* With AI §3.4.4 */}
      doubles = {numberArray1.map((a) => a * 2)} <br />
      Todos:
      <ol>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
