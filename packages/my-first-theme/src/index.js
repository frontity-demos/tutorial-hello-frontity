import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/my-first-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "my-first-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
