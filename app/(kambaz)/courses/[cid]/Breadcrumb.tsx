"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/").pop() ?? "";
  // With AI §3.10.6: the People table's last segment is "table"
  const label =
    section === "table"
      ? "People"
      : section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <span>
      {course?.name} &gt; {label}
    </span>
  );
}
