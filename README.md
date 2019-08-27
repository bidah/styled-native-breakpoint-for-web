# styled-native-breakpoint-for-web

Add breakpoints to your Styled Components to use for the web in your React Native [Universal Expo Web](https://docs.expo.io/versions/v34.0.0/introduction/running-in-the-browser/) project.

## Introduction

When creating a [Expo](https://expo.io/) universal app using [Styled Components](https://github.com/styled-components/styled-components) you need desktop breakpoints to deliver a good experience for the web. Your mobile layout is just meant for the mobile web, you are missing our old pal the desktop view.

Styled Components media queries are meant to work just for the web so they are of no use when creating styled components that need breakpoints to work with [React Native For Web](https://github.com/necolas/react-native-web) which is what Expo is using to create your web build.

NOTE: Same as web media queries, by using the library, if you resize your browser window and you hit a breakpoint, layout will change accordingly.

## Installation

```
npm install -s styled-native-breakpoint-for-web
```

## Usage

Add `ThemeProvider` as a wrapper to `App.js`. If you are already using the `ThemeProvider` component provided by `styled-components/native` replace it with this one.

You can add your theme in the `theme` prop or don't use it at all if you are not using a theme right now.

**Setup without theme:**

```javascript
//App.js
import ThemeProvider from 'styled-native-breakpoint-for-web';

<ThemeProvider>...your App.js content here</ThemeProvider>;
```

**Setup with theme:**

```javascript
//App.js
import ThemeProvider from 'styled-native-breakpoint-for-web';
import myTheme from 'my-theme-path';

<ThemeProvider theme={myTheme}>...your App.js content here</ThemeProvider>;
```

```javascript
import styled from 'styled-components/native';

const MyComponent = styled.View`
  flex: 1;
  background: orangered;
  ${({ theme: { bp } }) =>
    bp.desktop(css`
      background: deepskyblue;
    `)}
`;
```

## Custom breakpoints

By default you get to use 3 breakpoints from `bp` that have the following values.

```javascript
{
  tablet: 768,
  desktop: 992,
  lgDesktop: 1200
}
```

To setup new breakpoints pass the `breakpoints` prop to `ThemeProvider` with an object with the key as the name of the breakpoint and the value as number representing the minimum width. Take note that previous defaults will be overwritten.

```javascript
<ThemeProvider
  breakpoints={{
    ipadPro: 1024,
    lgDesktop: 1280,
    xlDesktop: 1336,
  }}>
  // ...your App.js content here
</ThemeProvider>
```

```javascript
import styled, { css } from 'styled-components/native';

const MyComponent = styled.View`
  flex: 1;
  background: orangered;
  ${({ theme: { bp } }) =>
    bp.ipadPro(css`
      background: deepskyblue;
    `)}
  ${({ theme: { bp } }) =>
    bp.xlDesktop(css`
      background: lime;
    `)}
`;
```

## Usage with `css` prop

import `withTheme` from `styled-components/native` and export your component using the HOC.

```javascript
import { withTheme } from 'styled-components/native';
//...rest of MyComponent code
export default withTheme(MyComponent);
```

Then when using the css tag literal in the css prop simply add an interpolation with `theme.bp.lgDesktop()`

```javascript
<View>
  css=
  {css`
    align-self: center;
    ${theme.bp.lgDesktop(css`
      align-self: flex-start;
    `)}
  `}
</View>
```

## Demo

<https://snack.expo.io/@bidah/styled-native-bp-for-web>

## TODO

- Add functionality to setup custom breakpoints in theme.
- Example folder running but only in Simulator. Got stuck running Expo web.
- Add compatibility for Emotion
- Add tests
