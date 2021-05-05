import React from "react";
import { Flex } from "theme-ui";
import NavigationItem from "./NavigationItem/NavigationItem";
const Navigation = () => {
  return (
    <Flex
      pt={4}
      bg="primary"
      sx={{
        justifyContent: "center",
        fontSize: "1.5rem",
        flexWrap: "wrap",
      }}
    >
      <NavigationItem to="/" text="All" />
      <NavigationItem to="/completed" text="Completed" />
      <NavigationItem to="/uncompleted" text="Uncompleted" />
    </Flex>
  );
};

export default Navigation;
