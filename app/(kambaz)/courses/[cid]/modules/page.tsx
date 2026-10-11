import Lesson from "./Lesson";
import Module from "./Module";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2, Lecture 2 - Building User Interfaces with HTML">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Learn how to create user interfaces with HTML
            </li>
            <li className="wd-content-item">
              Prototype the Kambaz screens with Next.js
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - HTML
            </li>
          </Lesson>
        </Module>
        <Module title="Week 3, Lecture 3 - Styling with CSS and Tailwind">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">CSS Styling</li>
            <li className="wd-content-item">Responsive design with Tailwind</li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">The CSS box model</li>
          </Lesson>
        </Module>
        {/* TODO §2.4.4 */}
        <Module title="Week 4, Lecture 4 - JavaScript and React">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Learn JavaScript fundamentals</li>
            <li className="wd-content-item">Build components with React</li>
          </Lesson>
        </Module>
        {/* With AI §2.4.4 */}
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)" />
        </Module>
      </ul>
    </div>
  );
}
