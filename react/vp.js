import * as React from "react";
const SvgVp = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "65px", height: "65px", viewBox: "0 0 65 65", enableBackground: "new 0 0 65 65", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 65, height: 65, x: 0, y: 0, href: "data:image/png;base64,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 NDg6MDgrMDA6MDD50BqRAAAAAElFTkSuQmCC" }));
export default SvgVp;