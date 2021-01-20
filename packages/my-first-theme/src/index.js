import React from "react";

const Root = () => {
  return (
    <>
      <h1>Hello Frontity</h1>
    </>
  )
}

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
