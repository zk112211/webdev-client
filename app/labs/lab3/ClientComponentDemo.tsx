"use client";
import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname();
  return (
    <div id="wd-client-component-demo">
      <h1>Client Component Demo</h1>
      <p>Current pathname: {pathname}</p>
      {/* TODO (On your own §3.7.1): <p>Pathname length: ...</p> */}
      {/* With AI §3.7.1 */}
      <p>Last segment: {pathname.split("/").pop()}</p>
    </div>
  );
}
