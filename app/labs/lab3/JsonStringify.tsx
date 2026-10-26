export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      {/* TODO §3.4.10 */}
      me = {JSON.stringify({ name: "Kai", course: "CS5610", lab: 3 })} <br />
      {/* With AI §3.4.10 */}
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })}
      <hr />
    </div>
  );
}
