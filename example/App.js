import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import ThemeProvider from 'styled-native-breakpoint-for-web';

const Background = styled.View`
  width: 100%;
  height: 400px;
  background: blue;
  ${({ theme: bp }) =>
    bp.desktop(css`
      background: red;
    `)}
`;

export default function App() {
  return (
    <ThemeProvider
      breakpoints={{
        tablet: 768,
        desktop: 992,
        lgDesktop: 1200,
      }}>
      <Background />;
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
