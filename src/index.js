import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider as ThemeProviderStyled } from 'styled-components/native';
import { View, Dimensions, Platform, Text } from 'react-native';

function ThemeProvider({ theme = {}, breakpoints: customBreakpoints = {}, children }) {
  let [deviceWidth, setDeviceWidth] = useState(0);

  let [breakpoints, setBreakpoints] = useState(
    Object.keys(customBreakpoints).length
      ? customBreakpoints
      : {
          tablet: 768,
          desktop: 992,
          lgDesktop: 1200,
        }
  );

  useEffect(() => {
    setDeviceWidth(Dimensions.get('window').width);
  }, []);

  const handleLayout = event => {
    const { width } = event.nativeEvent.layout;
    setDeviceWidth(width);
  };

  const OnLayout = styled.View`
    flex: 1;
  `;

  const breakpointFactory = () => {
    return Object.entries(breakpoints).reduce((bp, current, index) => {
      let [name, width] = current;

      return {
        ...bp,
        [name]: (strings, ...values) => {
          if (Platform.OS !== 'web') return '';

          if (Platform.OS === 'web' && deviceWidth >= width) {
            if (typeof strings === 'string') return strings;

            return strings.reduce((result, string, i) => {
              return `${result}${string}${values[i] || ''}`;
            }, '');
          }
          return '';
        },
      };
    }, {});
  };

  return (
    <ThemeProviderStyled
      theme={{
        ...theme,
        ...{ bp: breakpointFactory() },
      }}>
      <OnLayout onLayout={handleLayout}>{children}</OnLayout>
    </ThemeProviderStyled>
  );
}

export default ThemeProvider;
export { ThemeProvider };
