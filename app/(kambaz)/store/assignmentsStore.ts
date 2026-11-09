"use client";
import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

// TODO §4.10.6
export type Assignment = (typeof assignmentsJson)[number] & { until?: string };

const emptyAssignment: Assignment = {
  _id: "new",
  title: "New Assignment",
  course: "",
  description: "New Description",
  points: 100,
  due: "2024-05-13",
  available: "2024-05-06",
  until: "2024-05-20",
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  updateAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson,
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
}));

export { emptyAssignment };
