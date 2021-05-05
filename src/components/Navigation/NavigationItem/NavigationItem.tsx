import React from "react";
import { Link } from "react-router-dom";
import { Text } from "theme-ui";

const NavigationItem = ({ to, text }) => {
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={to} replace>
        <Text
          m={2}
          sx={{
            color: "black",
            border: "1px solid black",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
            display: "flex",
          }}
        >
          {text}
        </Text>
      </Link>
    </>
  );
};

export default NavigationItem;
