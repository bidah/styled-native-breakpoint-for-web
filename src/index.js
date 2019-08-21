import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { View, Dimensions, Platform } from "react-native";

export default function ThemeProvider({ theme = {}, breakpoints: customBreakpoints  = {} children }) {
  let [deviceWidth, setDeviceWidth] = useState(0);

  let [breakpoints, setBreakpoints] = useState(Object.keys(customBreakpoints).length ? customBreakpoints : {
    tablet: 768,
    desktop: 992,
    lgDesktop: 1200
  });

  useEffect(() => {
    setDeviceWidth(Dimensions.get("window").width);
  }, []);

  const handleLayout = event => {
    const { width } = event.nativeEvent.layout;
    setDeviceWidth(width);
  };

  const OnLayout = styled.View.attrs({ onLayout: handleLayout })`
    flex: 1;
  `;

  const breakpointFactory = () => {
    return breakpoints.map((bp, index) => {
      let [, width] = Object.entries(breakpoints)[index];

      return (strings, ...values) => {
        if (Platform.OS === "web" && deviceWidth >= width) {
          return strings.reduce((result, string, i) => {
            return `${result}${string}${values[i] || ""}`;
          }, "");
        }
        return "";
      };
    });
  };

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...{ bp: breakpointFactory() }
      }}
    >
      <OnLayout>{children}</OnLayout>
    </ThemeProvider>
  );
}
