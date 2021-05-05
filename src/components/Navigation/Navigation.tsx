import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text } from "theme-ui";
const Navigation = () => {
  return (
    <Flex
      pt={4}
      bg="primary"
      sx={{
        justifyContent: "center",
        fontSize: "1.5rem",
        flexWrap: "wrap",
        height: "100px",
      }}
    >
      <Link style={{ textDecoration: "none" }} to="/" replace>
        <Text
          m={2}
          sx={{
            color: "black",
            border: "1px solid black",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
          }}
        >
          All
        </Text>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/completed" replace>
        <Text
          m={2}
          sx={{
            color: "black",
            border: "1px solid black",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
          }}
        >
          Completed
        </Text>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/uncompleted">
        <Text
          m={2}
          sx={{
            color: "black",
            border: "1px solid black",
            padding: "0.5rem 1rem",
            borderRadius: "1rem",
          }}
        >
          Uncompleted
        </Text>
      </Link>
    </Flex>
  );
};

export default Navigation;
