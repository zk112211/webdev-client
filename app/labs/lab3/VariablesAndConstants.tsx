export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  // With AI §3.2.1
  const sampleSum = functionScoped + blockScoped;
  // TODO §3.2.1
  let courseNumber = 5610;
  const courseName = "Web Development";
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      sampleSum = {sampleSum}           <br />
      courseNumber = {courseNumber}     <br />
      courseName = {courseName}
      <hr />
    </div>
  );
}
