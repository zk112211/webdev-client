export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        {/* With AI §2.1.12 */}
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box has a long sentence but keeps its declared 120 by 60
          size, so the text overflows the box.
        </div>
        {/* TODO §2.1.12 */}
        <div className="wd-dimension-tall wd-bg-color-green wd-fg-color-white">
          Tall
        </div>
      </div>
    </div>
  );
}
