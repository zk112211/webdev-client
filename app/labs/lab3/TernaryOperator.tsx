export default function TernaryOperator() {
  let loggedIn = true;
  // With AI §3.2.5
  const premium = false;
  // TODO §3.2.5
  const hour = 9;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {/* TODO §3.2.5 */}
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      {/* With AI §3.2.5 */}
      {premium ? <p>Premium</p> : <p>Free</p>}
      <hr />
    </div>
  );
}
