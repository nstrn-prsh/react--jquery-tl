import React, { useRef, useEffect } from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";

const AnimatedText = ({ children }) => {
  const text = useRef(null);
  useEffect(() => {
    $(findDOMNode(text.current)).animate({ height: "200px" }, "slow");
  }, []);
  return <div ref={text}>{children}</div>;
};

export default AnimatedText;
