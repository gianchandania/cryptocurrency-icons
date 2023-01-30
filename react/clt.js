import * as React from "react";
const SvgClt = (props) => /* @__PURE__ */ React.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "123px", height: "123px", viewBox: "0 0 123 123", enableBackground: "new 0 0 123 123", xmlSpace: "preserve", ...props }, /* @__PURE__ */ React.createElement("image", { id: "image0", width: 123, height: 123, x: 0, y: 0, href: "data:image/png;base64,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 YmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=" }));
export default SvgClt;