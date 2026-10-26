type House = {
  bedrooms: number;
  address?: { street: string; city: string; zip?: string };
  garage?: { cars: number };
};

export default function OptionalChaining() {
  const house: House = {
    bedrooms: 4,
    address: {
      street: "Via Roma",
      city: "Roma",
    },
  };
  const missing = undefined as { prop?: string } | undefined;
  return (
    <div id="wd-optional-chaining">
      <h4>Optional Chaining</h4>
      house.address?.city = {house.address?.city} <br />
      missing?.prop ?? "n/a" = {missing?.prop ?? "n/a"} <br />
      {/* TODO (On your own §3.4.17): a line showing house.garage?.cars ?? 0 */}
      {/* With AI §3.4.17 */}
      house.address?.zip ?? "unknown" = {house.address?.zip ?? "unknown"}
      <hr />
    </div>
  );
}
