export default function Destructing() {
  // With AI §3.4.14: city
  const person = { name: "John", age: 25, city: "Boston" };
  const { name, age, city } = person;
  // TODO (On your own §3.4.14): destructure a fourth array item (add "four")
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125; <br /> <br />
      name = {name}     <br />
      age = {age}       <br />
      city = {city}
      <h3>Array Destructing</h3>
      const [first, second, third] = ["one","two","three"] <br /> <br />
      first = {first}   <br />
      second = {second} <br />
      third = {third}
      <hr />
    </div>
  );
}
