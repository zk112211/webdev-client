import Link from "next/link";

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h2>Path Parameters</h2>
      <Link href="/labs/lab3/add/1/2">1 + 2</Link> <br />
      <Link href="/labs/lab3/add/3/4">3 + 4</Link> <br />
      {/* TODO §3.8.3 */}
      <Link href="/labs/lab3/add/10/32">10 + 32</Link> <br />
      {/* With AI §3.8.3 */}
      <Link href="/labs/lab3/add/5/6">5 + 6</Link>
    </div>
  );
}
