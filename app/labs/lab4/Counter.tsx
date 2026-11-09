"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-counter">
      <h2>Counter: {count}</h2>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="me-2 rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Up
      </button>
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="me-2 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Down
      </button>
      {/* TODO (On your own §4.2.4): a Reset button of your own that sets the
          count back to 7 (put it before the sample below) */}
      {/* With AI §4.2.4 */}
      <button
        type="button"
        onClick={() => setCount(7)}
        id="wd-counter-reset-click"
        className="rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Reset
      </button>
      <hr />
    </div>
  );
}
