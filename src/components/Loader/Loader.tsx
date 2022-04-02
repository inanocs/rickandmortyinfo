import { CircularProgress } from "@mui/material";
import React from "react";
import Section from "../Section/Section";

const Loader: React.FC = () => {
  return (
    <Section className="section section__text--center">
      <CircularProgress color="primary" />
    </Section>
  );
};
export default Loader;
