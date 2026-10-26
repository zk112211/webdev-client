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
    // TODO (On your own §3.4.11): a yearBuilt property, shown under bathrooms
    // With AI §3.4.11
    garage: { cars: 2 },
  };
  console.log(house);
  // TODO (On your own §3.4.12): console.log(house.owners)
  // With AI §3.4.12
  console.log(house.address.city);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      {/* TODO (On your own §3.4.12): an <h5>owners</h5> heading followed by
          the owners joined with ", " */}
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
