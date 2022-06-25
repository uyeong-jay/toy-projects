import React from "react";
import Input from "./Input";

export default {
  title: "Design System/Atoms/Input",
  component: Input,
};

export const Small = () => (
  <Input type="text" size="small" placeholder="Small size" />
);
export const Medium = () => (
  <Input type="text" size="medium" placeholder="Medium size" />
);
export const Large = () => (
  <Input type="text" size="large" placeholder="Large size" />
);
