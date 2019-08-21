# styled-native-breakpoint-for-web

Add breakpoints to your Styled Components to use for the web in your Universal Expo Web project.

## Introduction

When creating a [Expo](https://expo.io/) universal app using [Styled Components](https://github.com/styled-components/styled-components) you need desktop breakpoints to deliver a good experience for the web. Your mobile layout is just meant for the mobile web, you are missing the desktop view.

Styled Components media queries are meant to work just for the web so they are of no use when creating styled components that need breakpoints to work with [React Native For Web](https://github.com/necolas/react-native-web) which is what Expo is using to create your web build.

NOTE: Same as web media queries, by using the library, if you resize your browser window and you hit a breakpoint, layout will change accordingly.

## Instalation

```
npm install -s styled-native-breakpoint-for-web
```

## Styled Components Usage

Add `ThemeProvider` as a wrapper to `App.js`. If you are already using the `ThemeProvider` component provided by `styled-components/native` replace it with this one.

You can add your theme in the `theme` prop or don't use it at all if you are not using a theme right now.

```javascript
//App.js
import styled from "styled-components/native";
import ThemeProvider from "styled-native-breakpoint-for-web";

<ThemeProvider>// ...your App.js content here</ThemeProvider>;
```

Setup with a current theme:

```javascript
//App.js
import styled from "styled-components/native";
import ThemeProvider from "styled-native-breakpoint-for-web";
import myTheme from "my-theme-path";

<ThemeProvider theme={myTheme}>// ...your App.js content here</ThemeProvider>;
```

```javascript
import styled from "styled-components/native";

const MyComponent = styled.View`
  flex: 1;
  background: orangered;
  ${({ theme: { mq } }) =>
    mq.desktop(css`
      background: deepskyblue;
    `)}
`;
```

## Custom breakpoints

By default you get to use 3 breakpoints from `mq` that have the following values.

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
    xlDesktop: 1336
  }}
>
  // ...your App.js content here
</ThemeProvider>
```

```javascript
import styled from "styled-components/native";

const MyComponent = styled.View`
  flex: 1;
  background: orangered;
  ${({ theme: { mq } }) =>
    mq.ipadPro(css`
      background: deepskyblue;
    `)}
  ${({ theme: { mq } }) =>
    mq.xlDesktop(css`
      background: lime;
    `)}
`;
```

## Demo

Expo snack
