"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const params = useParams();
  const cid = typeof params.cid === "string" ? params.cid : "";
  const aid = typeof params.aid === "string" ? params.aid : "";
  const router = useRouter();
  // TODO §3.10.8.1
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === aid),
  );
  // TODO §4.10.6
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const [assignment, setAssignment] = useState(
    existing ?? { ...emptyAssignment, course: cid },
  );
  const save = () => {
    if (existing) {
      updateAssignment(assignment);
    } else {
      addAssignment({ ...assignment, course: cid });
    }
    router.push(`/courses/${cid}/assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2" />
      {/* With AI §3.10.8.1 */}
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <textarea
        id="wd-description"
        rows={6}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="mb-4 font-sans w-full rounded border border-neutral-300 px-3 py-2"
      />
      <div className="mb-4 flex gap-4">
        <label htmlFor="wd-points" className="w-40 shrink-0 pt-2 text-right text-sm">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
          }
          className="w-full rounded border border-neutral-300 px-3 py-2" />
      </div>
      <div className="mb-4 flex gap-4">
        <label htmlFor="wd-group" className="w-40 shrink-0 pt-2 text-right text-sm">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className="w-full rounded border border-neutral-300 px-3 py-2 bg-white">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4 flex gap-4">
        <label htmlFor="wd-display-grade-as" className="w-40 shrink-0 pt-2 text-right text-sm">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 px-3 py-2 bg-white"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>
      <div className="mb-4 flex gap-4">
        <label htmlFor="wd-submission-type" className="w-40 shrink-0 pt-2 text-right text-sm">
          Submission Type
        </label>
        <div className="w-full rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 bg-white"
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-3 font-semibold">Online Entry Options</div>
          <div className="flex flex-col gap-3 text-sm">
            <label htmlFor="wd-text-entry" className="flex items-center gap-2">
              <input type="checkbox" id="wd-text-entry" /> Text Entry
            </label>
            <label htmlFor="wd-website-url" className="flex items-center gap-2">
              <input type="checkbox" id="wd-website-url" defaultChecked /> Website
              URL
            </label>
            <label htmlFor="wd-media-recordings" className="flex items-center gap-2">
              <input type="checkbox" id="wd-media-recordings" /> Media Recordings
            </label>
            <label
              htmlFor="wd-student-annotation"
              className="flex items-center gap-2"
            >
              <input type="checkbox" id="wd-student-annotation" /> Student
              Annotation
            </label>
            <label htmlFor="wd-file-upload" className="flex items-center gap-2">
              <input type="checkbox" id="wd-file-upload" /> File Uploads
            </label>
          </div>
        </div>
      </div>
      <div className="mb-4 flex gap-4">
        <span className="w-40 shrink-0 pt-2 text-right text-sm">Assign</span>
        <div className="w-full rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input id="wd-assign-to" defaultValue="Everyone" className="mb-4 w-full rounded border border-neutral-300 px-3 py-2" />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="flex gap-2">
            <div className="flex-1">
              <label htmlFor="wd-available-from" className="mb-1 block font-semibold">
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="wd-available-until" className="mb-1 block font-semibold">
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* With AI §2.4.8 */}
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
        Sample notes
      </label>
      <textarea id="wd-ai-editor-notes" rows={3} className="mb-4 font-sans w-full rounded border border-neutral-300 px-3 py-2" />
      <hr className="mb-3 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
