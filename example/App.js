import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import ThemeProvider from 'styled-native-breakpoint-for-web';

export default function App() {
  return (
    <ThemeProvider>
      <Background />
    </ThemeProvider>
  );
}

const Background = styled.View`
  width: 100%;
  height: 400px;
  background: blue;
  ${props =>
    props.theme.bp.desktop(css`
      background: red;
    `)}
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
