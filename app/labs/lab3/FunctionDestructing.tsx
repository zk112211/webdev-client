export default function FunctionDestructing() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });
  // TODO §3.4.15
  const multiply = ({ a, b }: { a: number; b: number }) => a * b;
  const product = multiply({ a: 3, b: 5 });
  const greet = ({ name = "Ada" }: { name?: string }) => `Hello, ${name}!`;
  // With AI §3.4.15
  const divide = ({ a, b }: { a: number; b: number }) => a / b;
  const quotient = divide({ a: 10, b: 2 });
  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      const add = (a, b) =&gt; a + b; <br />
      const sum = add(1, 2);          <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b; <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;); <br />
      sum = {sum}                     <br />
      difference = {difference}       <br />
      quotient = {quotient}           <br />
      product = {product}             <br />
      greet(&#123;&#125;) = {greet({})} <br />
      greet(&#123; name: &quot;Kai&quot; &#125;) = {greet({ name: "Kai" })}
      <hr />
    </div>
  );
}
