export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  // With AI §3.2.1
  const sampleSum = functionScoped + blockScoped;
  // TODO (On your own §3.2.1): one more let and one more const, shown below
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
