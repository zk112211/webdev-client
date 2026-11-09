"use client";
import { useState } from "react";

export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  // With AI §4.2.6
  const [nickName, setNickName] = useState("JD");
  // On your own §4.2.6
  const [lastName, setLastName] = useState("Doe");
  return (
    <div id="wd-string-state-variables">
      <h2>String State Variables</h2>
      {/* On your own §4.2.6 */}
      <p id="wd-full-name">
        {firstName} {lastName}
      </p>
      <p>{firstName}</p>
      <p>{nickName}</p>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        id="wd-first-name"
      />
      {/* On your own §4.2.6 */}
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        id="wd-last-name"
      />
      <input
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
        id="wd-nick-name"
      />
      <hr />
    </div>
  );
}
