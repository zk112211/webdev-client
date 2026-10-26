export default function ForLoops() {
  let stringArray1 = ["string1", "string3"];
  let stringArray2: string[] = [];
  // With AI §3.4.3
  const stringLengths: number[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
    stringLengths.push(string1.length);
  }
  // TODO (On your own §3.4.3): a third array of lowercased copies
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2} <br />
      stringLengths = {stringLengths}
      <hr />
    </div>
  );
}
