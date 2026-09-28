export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A sample image from NASA:
      <br />
      <img
        id="wd-ai-image"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/pillars_of_creation.jpg"
        width="200px"
        alt="Pillars of Creation in the Eagle Nebula"
      />
      <br />
      An image I like:
      <br />
      <img
        id="wd-your-image"
        src="https://cdn.shopify.com/s/files/1/0594/9276/1678/files/6867b59e84e5524393d65eb1_AD_4nXcKfW2IWFk--LRm5ZIW_MUhq9q7QPhpYZUKoaUYr38Z6ihA6Gu0C1Ui8BBTzKr0-_gqZ9wtnpmIk7gdocnqR-z46YkPII28PcRIO2QvJ0L6nsOVfbWMTEdvMPCGD2V7zw1EimQ2Xw.png"
        width="300px"
        alt="Darth Vader in the hallway scene from Rogue One"
      />
    </div>
  );
}
