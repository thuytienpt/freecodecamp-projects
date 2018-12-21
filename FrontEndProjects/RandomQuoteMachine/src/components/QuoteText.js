import React from "react";

const QuoteText = ({ text, author }) => (
  <div className="pa2 tc">
    <p id="text" className="tc f5 f4-m f3-l lh-copy measure mb0 mt2">
      {text}
    </p>
    <p id="author" className=" f6 f5-m f4-l ma2">
      __ {author} __
    </p>
  </div>
);

export default QuoteText;
