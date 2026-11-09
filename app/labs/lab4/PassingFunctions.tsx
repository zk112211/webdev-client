export default function PassingFunctions({
  message,
  theFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  // With AI §4.2.3
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      {/* TODO (On your own §4.2.3): a second function prop that alerts your
          name, and a button here that calls it */}
      {/* With AI §4.2.3 */}
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="rounded bg-teal-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Other Function
      </button>
      <hr />
    </div>
  );
}
