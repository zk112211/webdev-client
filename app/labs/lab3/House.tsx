export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
    // TODO §3.4.11
    yearBuilt: 1998,
    // With AI §3.4.11
    garage: { cars: 2 },
  };
  console.log(house);
  // TODO §3.4.12
  console.log(house.owners);
  // With AI §3.4.12
  console.log(house.address.city);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      {/* TODO §3.4.11 */}
      <h5>yearBuilt</h5>
      {house.yearBuilt}
      {/* TODO §3.4.12 */}
      <h5>owners</h5>
      {house.owners.join(", ")}
      {/* With AI §3.4.11 */}
      <h5>garage cars</h5>
      {house.garage.cars}
      <h5>Number of properties</h5>
      {Object.keys(house).length}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
