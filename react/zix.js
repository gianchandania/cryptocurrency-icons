import * as React from "react";
const SvgZix = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "123px", height: "123px", viewBox: "0 0 123 123", enableBackground: "new 0 0 123 123", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 123, height: 123, x: 0, y: 0, href: "data:image/png;base64,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 AABJRU5ErkJggg==" }));
export default SvgZix;