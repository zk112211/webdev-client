export default function TernaryOperator() {
  let loggedIn = true;
  // With AI §3.2.5
  const premium = false;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {/* TODO (On your own §3.2.5): const hour = 9 and a ternary showing
          Good morning / Good afternoon */}
      {/* With AI §3.2.5 */}
      {premium ? <p>Premium</p> : <p>Free</p>}
      <hr />
    </div>
  );
}
