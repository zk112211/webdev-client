export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  // With AI §3.2.2
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  // TODO §3.2.2
  const myName = "Kai Zhu";
  const myYear = 2026;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      sampleCount = {sampleCount}                 <br />
      typeof sampleCount = {typeof sampleCount}   <br />
      sampleLabel = {sampleLabel}                 <br />
      typeof sampleLabel = {typeof sampleLabel}   <br />
      myName = {myName}                           <br />
      typeof myName = {typeof myName}             <br />
      myYear = {myYear}                           <br />
      typeof myYear = {typeof myYear}
      <hr />
    </div>
  );
}
