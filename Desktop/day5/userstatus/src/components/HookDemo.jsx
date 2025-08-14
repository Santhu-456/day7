import React, { useState, useEffect, useRef } from "react";

export default function HookDemo() {
  const [text, setText] = useState("Hello");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("[Hook Demo] useEffect called after render");
    inputRef.current.focus();
  }, []);

  console.log("[Hook Demo] useState value:", text);
  console.log("[Hook Demo] useRef points to input element", inputRef);

  return (
    <div>
      <h2>Hook Demo</h2>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
