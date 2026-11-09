"use client";

const hello = () => {
  alert("Hello World!");
};
// With AI §4.2.1
const goodbye = () => {
  alert("Goodbye World!");
};
// On your own §4.2.1
const greetMe = () => {
  alert("Hello, my name is Kai Zhu!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      {/* On your own §4.2.1 */}
      <button
        type="button"
        onClick={greetMe}
        id="wd-onclick-greet-me"
        className="me-2 rounded px-3 py-1.5 text-sm font-medium text-white bg-blue-600"
      >
        Greet Kai
      </button>
      {/* With AI §4.2.1 */}
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
