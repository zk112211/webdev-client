import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      {/* TODO §2.1.1 */}
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph uses the style attribute to set a green background and
        yellow text.
      </p>
      {/* With AI §2.1.1 */}
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph sets a purple background and white text with
        the style attribute.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look
          and feel
        </p>
        {/* TODO §2.1.3 */}
        <p id="wd-id-selector-3">
          This third paragraph has its own ID, so it gets its own look and feel
        </p>
        {/* With AI §2.1.3 */}
        <p id="wd-ai-id-selector">
          This sample paragraph has its own id and its own colors.
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element&apos;s
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        {/* TODO §2.1.4 */}
        <p className="wd-my-class-selector">
          This paragraph uses my own class
        </p>
        <h4 className="wd-my-class-selector">
          This heading shares the same class, so it looks the same
        </h4>
        {/* With AI §2.1.4 */}
        <p className="wd-ai-class-selector">
          This sample paragraph uses a second shared class
        </p>
        <h4 className="wd-ai-class-selector">
          This sample heading shares the same class
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
              <br />
              {/* With AI §2.1.5 */}
              <span className="wd-ai-selector-5">
                This sample span is styled as a descendant of .wd-selector-1
              </span>
              <br />
              {/* TODO §2.1.5 */}
              <span className="wd-selector-6">
                This span is styled as a direct child of .wd-selector-3
              </span>
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-cascade">
        <h3>Selection rule mechanism</h3>
        {/* TODO §2.1.6 */}
        <div id="wd-cascade-demo">
          <p id="wd-cascade" className="wd-cascade">
            Tag, class, and id rules all set this text color. The id rule
            wins, so it is blue.
          </p>
        </div>
        {/* With AI §2.1.6 */}
        <div id="wd-ai-cascade-demo">
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            Tag, class, and id rules all set this background. The id rule
            wins, so it is red.
          </p>
        </div>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
    </div>
  );
}
