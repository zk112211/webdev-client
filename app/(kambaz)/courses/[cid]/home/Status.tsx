import { BiImport } from "react-icons/bi";
import {
  FaBell,
  FaBullhorn,
  FaChartBar,
  FaCheckCircle,
  FaHome,
  FaStar,
  FaStream,
} from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <BiImport className="me-2 text-lg" /> Import Existing Content
      </button>
      {/* TODO §2.4.5 */}
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <LiaFileImportSolid className="me-2 text-lg" /> Import from Commons
      </button>
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaHome className="me-2 text-lg" /> Choose Home Page
      </button>
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaStream className="me-2 text-lg" /> View Course Stream
      </button>
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaBullhorn className="me-2 text-lg" /> New Announcement
      </button>
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaChartBar className="me-2 text-lg" /> New Analytics
      </button>
      <button type="button" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaBell className="me-2 text-lg" /> View Course Notifications
      </button>
      {/* With AI §2.4.5 */}
      <button type="button" id="wd-ai-status" className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm">
        <FaStar className="me-2 text-lg" /> Sample action
      </button>
    </div>
  );
}
