"use client";
import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props
        through the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      {/* TODO (On your own §4.4.2): todosContext.ts and ReactContextTodoList.tsx
          (add, edit titles, delete), wrapped in its provider here */}
      <hr />
    </div>
  );
}
