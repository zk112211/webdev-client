export default function ConditionalOutputInline() {
  const loggedIn = false;
  // With AI §3.2.6
  const admin = true;
  // TODO §3.2.6
  const guest = true;
  return (
    <div id="wd-conditional-output-inline">
      {loggedIn && <h2>Welcome Inline</h2>}
      {!loggedIn && <h2>Please login Inline</h2>}
      {/* TODO §3.2.6 */}
      {guest && <h2>Guest Inline</h2>}
      {/* With AI §3.2.6 */}
      {admin && <h2>Admin Inline</h2>}
    </div>
  );
}
