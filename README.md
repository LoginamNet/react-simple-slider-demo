# Simple Slider

<p>
  <a href="https://github.com/LoginamNet/react-simple-slider/blob/main/LICENCE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@loginamnet/simple-slider">
    <img src="https://img.shields.io/npm/v/@loginamnet/simple-slider.svg" alt="version" />
  </a>
  <a href="https://prettier.io">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?color=%23c1a8e2">
  </a>
  <a href="https://bundlephobia.com/result?p=@loginamnet/simple-slider">
    <img src="https://img.shields.io/bundlephobia/minzip/@loginamnet/simple-slider?color=%238ab4f8&label=gzip%20size">
  </a>
</p>

<p>
  A <strong>Simple Slider</strong> on React with multiple scrolling modes and the ability to add custom buttons.
</p>

## Navigation

## Navigation

- [How to use](#usage)
- [Properties](#props)
  - [Controls options](#controls-options)
  - [Controls options example](#controls-options-example)
  - [Dots options](#dots-options)
  - [Dots options example](#dots-options-example)
  - [Dots options](#dots-options)
  - [Controls options](#custom-buttons)
- [Archived properties](#archived-props)

## Demonstration

![FSimple Slider Demo GIF](slider-demo.gif)

A friendly [DEMO](https://simple-slider-demo.netlify.app/), where you can try all kinds of settings and copy the resulting code!

## Features

- Several directions of movement and types of slide changes :last_quarter_moon:
- Responsive design :computer:
- Easy to add custom rendered slides :pushpin:
- The ability to add your own control buttons and "dots" :arrow_forward:
- Dependency free :seedling:
- Lightweight :balloon:

## Usage<a id='1.1'></a>

**Instalation**

```bash
npm i @loginamnet/simple-slider
```

**Import**

```javascript
import SimpleSlider from "@loginamnet/simple-slider";
```

**Basic Example**

```javascript
import SimpleSlider from "@loginamnet/simple-slider";

import MySlide2 from "./components";
import MySlide3 from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider>
        {/* first slide created directly inside the slider */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            padding: "20px",
          }}
        >
          <h1>First Slide</h1>
        </div>

        {/* second slide imported from components folder */}
        <MySlide2 text="Second Slide" />

        {/* third slide imported from components folder */}
        <MySlide3>Third Slide</MySlide3>
      </SimpleSlider>
    </div>
  );
}
```

**What can I place inside**

Simple Slider accepts ReactNode as "children" — this is a type that includes everything that can be returned by the [render()](https://react.dev/reference/react/Component#render) method of React components.

**Width, Height and Background**

A Simple Slider occupies 100% of the width and height of the parent element, and each "child" component is wrapped in a Slide that occupies 100% of the size of the slider itself. Resize the parent container to resize the slider. At the same time, your "child" component may have a different size from the Slide, which can sometimes be useful.

In the example above, each slide will have a size of 600x400px.

Both the Simple Slider and the Slide have a transparent background. Add styles to the parent element and to each created "child" component, respectively (for example, to create a preloader).

## Props

| Prop                     | Type              | Values                                | Default   | Description                                                                                                                |
| ------------------------ | ----------------- | ------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `controls?`              | boolean, string   | true, false , "manual"                | false     | аctivates the slider control buttons and disables automatic sliding if the value is set to "manual"                        |
| `controlsOptions?`       | undefined, object | **explanations and an example below** | undefined | various options for setting slider controls when the "controls" option is enabled                                          |
| `dots?`                  | boolean           | true, false                           | false     | аctivates the slider dots component                                                                                        |
| `dotsOptions?`           | undefined, object | **explanations and an example below** | undefined | various options for setting slider dots component when the "dots" option is enabled                                        |
| `startWithSlide?`        | number            | number (MIN: 1)                       | 1         | the number of the slide to start scrolling from                                                                            |
| `slidingType?`           | string            | "sequence", "underlay", "overlay"     | "overlay" | the type of slide offset relative to each other                                                                            |
| `slidingDirection?`      | string            | "left", "top", "right", "bottom"      | "left"    | the direction of movement of the slides                                                                                    |
| `slidingDuration?`       | number            | number (MIN: 1)                       | 2000      | the time of one slide movement cycle (ms)                                                                                  |
| `slidingDelay?`          | number            | number (MIN: 50)                      | 1000      | delay before the start of the next slide movement for auto sliding or the "controls" option with the value "on-hover" (ms) |
| `slidingTimingFunction?` | string            | string                                | "ease"    | [transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)                  |
| `stopOnHover?`           | boolean           | true, false                           | false     | stopping auto sliding with hover on slider (not relevant when the "controls" option is set to "on-hover")                  |
| `customPrevButtonFN?`    | function          | **explanations and an example below** |           | a function for rendering a custom button to move to the previous slide                                                     |
| `customNextButtonFN?`    | function          | **explanations and an example below** |           | a function for rendering a custom button to move to the next slide                                                         |
| `customDotFn?`           | function          | **explanations and an example below** |           | a function for rendering a custom dot for slider dots component                                                            |

**Controls Options**

controlsOptions will be applied only if the **controls** option is enabled. If they are not specified, the buttons will have a standard design and position inside the slider.

| Prop            | Type               | Values                                    | Default   | Description                                                                                                                    |
| --------------- | ------------------ | ----------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `notInfinite?`  | undefined, boolean | undefined, true                           | undefined | disables endless sliding and stops on the first and last slides                                                                |
| `showOnHover?`  | undefined, boolean | undefined, true                           | undefined | displays buttons only when hovering over the slider                                                                            |
| `position?`     | string             | "edge", "start", "center", "end"          | "edge"    | defines the position of the buttons parallel to the axis of motion (at the edges, at the beginning, at the end, in the center) |
| `alinging?`     | string             | "start", "center", "end"                  | "center"  | defines the position of the buttons perpendicular to the axis of motion (at the beginning, at the end, in the center)          |
| `reverse?`      | undefined, boolean | undefined, true                           | undefined | swaps the control buttons                                                                                                      |
| `gap?`          | number             | number (MIN: 0)                           | 20        | the distance between the button (px)                                                                                           |
| `buttonShape?`  | string             | "square", "circle", "transparent"         | "square"  | the shape of the standard slider buttons                                                                                       |
| `buttonSize?`   | string, number     | "small", "medium", "big", number (MIN: 1) | "medium"  | the size of the standard slider buttons (px)                                                                                   |
| `buttonMargin?` | string, number     | string, number (MIN: 0)                   | 30        | the margin of the standard slider buttons (px). using a string, you can achieve different values vertically and horizontally   |
| `arrowColor?`   | string             | string                                    | "#000000" | [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) of the standard slider buttons arrows                          |

**Controls Options Example**

```javascript
import SimpleSlider from "@loginamnet/simple-slider";

import MySlide1 from "./components";
import MySlide2 from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider
        controls="on-hover"
        controlsOptions={{
          notInfinite: true,
          position: "center",
          alinging: "end",
          reverse: true,
          gap: 100,
          buttonShape: "transparent",
          buttonSize: "big",
          buttonMargin: "0 30px",
          arrowColor: "blue",
        }}
      >
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}
```

**Dots Options**

dotsOptions will be applied only if the **dots** option is enabled. If they are not specified, the dots will have a standard design and position inside the slider.

| Prop              | Type               | Values                                    | Default      | Description                                                                                                                           |
| ----------------- | ------------------ | ----------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `showOnHover?`    | undefined, boolean | undefined, true                           | undefined    | displays dots component only when hovering over the slider                                                                            |
| `direction?`      | string             | "horizontal", "vertical";                 | "horizontal" | defines the vertical or horizontal position of the dots inside dots component                                                         |
| `position?`       | string             | "start", "center", "end"                  | "center"     | defines the position of the dots component parallel to the axis of motion (at the edges, at the beginning, at the end, in the center) |
| `alinging?`       | string             | "start", "center", "end";                 | "end"        | defines the position of the dots component perpendicular to the axis of motion (at the beginning, at the end, in the center)          |
| `reverse?`        | undefined, boolean | undefined, true                           | undefined    | changes the direction of dots inside dots component                                                                                   |
| `gap?`            | number             | number (MIN: 0)                           | 10           | the distance between the dots inside dots component (px)                                                                              |
| `margin?`         | string, number     | string, number (MIN: 0)                   | 30           | the margin of the standard slider dots component (px). using a string, you can achieve different values vertically and horizontally   |
| `dotShape?`       | string             | "square", "circle"                        | "square"     | the shape of the standard slider dots                                                                                                 |
| `dotSize?`        | string, number     | "small", "medium", "big", number (MIN: 1) | "medium"     | the size of the standard slider dot (px)                                                                                              |
| `dotColor?`       | string             | string                                    | "#787878"    | [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) of the standard slider dot for non-active slide                       |
| `activeDotColor?` | string             | string                                    | "#000000"    | [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) of the standard slider dot for active slide                           |

**Dots Options Example**

```javascript
import SimpleSlider from "@loginamnet/simple-slider";

import MySlide1 from "./components";
import MySlide2 from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider
        dots
        dotsOptions={{
          showOnHover: true,
          direction: "vertical",
          position: "end",
          alinging: "end",
          reverse: true,
          gap: 5,
          margin: "100px 10px",
          dotShape: "circle",
          dotSize: 22,
          dotColor: "green",
          activeDotColor: "blue",
        }}
      >
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}
```

## Archived Props

<details>
  <summary>Version 1.0.11 & Erlier</summary>

### Changed

Slider properties have been changed, in the form of a "from/to" comparison.

Props

from (Version 1.0.11 & Erlier):

| Prop        | Type            | Values                   | Default | Description                                                                                        |
| ----------- | --------------- | ------------------------ | ------- | -------------------------------------------------------------------------------------------------- |
| `controls?` | boolean, string | true, false , "on-hover" | false   | direct control of the slider using the buttons without automatic scrolling or with a stop at hover |

to (Actual version):

| Prop        | Type            | Values                 | Default | Description                                                                                         |
| ----------- | --------------- | ---------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `controls?` | boolean, string | true, false , "manual" | false   | аctivates the slider control buttons and disables automatic sliding if the value is set to "manual" |

### Not Exist

This version of the slider does not support the following properties:

Props

| Prop           | Type              | Values                                | Default   | Description                                                                         |
| -------------- | ----------------- | ------------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| `dots?`        | boolean, string   | true, false , "on-hover"              | false     | direct control of the slider using the dots component                               |
| `dotsOptions?` | undefined, object | **explanations and an example below** | undefined | various options for setting slider dots component when the "dots" option is enabled |
| `customDotFn?` | function          | **explanations and an example below** |           | a function for rendering a custom dot for slider dots component                     |

Controls Options

| Prop       | Type    | Values      | Default | Description               |
| ---------- | ------- | ----------- | ------- | ------------------------- |
| `reverse?` | boolean | true, false | false   | swaps the control buttons |

</details>

## Custom Components

**Custom Buttons**

You can replace the standard slider buttons (or just one of them) with custom ones!

To do this, you need to create a custom component of the button in a special way and transfer it to the slider as a function. For the "previous" and "next" buttons, these components will be slightly different.

**Previous Button Component**

```javascript
export default function CustomPrevButton(
  prevSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();

        prevSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      Custom Previous Button!
    </button>
  );
}
```

**Next Button Component**

```javascript
export default function CustomNextButton(
  nextSlide: () => void,
  sliding?: boolean,
  atFirstSlide?: boolean
) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();

        nextSlide();
      }}
      disabled={sliding || atFirstSlide}
    >
      Custom Next Button!
    </button>
  );
}
```

For the correct behavior of the slider, **it is important to use the [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) tag!** But its contents and styles depend entirely on your imagination.

The **sliding** property determines the behavior of the button during the slide movement cycle.

The **atFirstSlide** and **atLastSlide** properties determine the behavior of the button when the first and last slide are reached, respectively. These properties will only work if the **notInfinite** property in the **controlsOptions** object is set to **true**.

In the above examples of custom buttons, all these properties are used to disable the buttons, but you can apply them as you want.

**Slider With Custom Buttons Example**

```javascript
import SimpleSlider from "@loginamnet/simple-slider";

import MySlide1 from "./components";
import MySlide2 from "./components";
import CustomPrevButton from "./components";
import CustomNextButton from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider
        controls="on-hover"
        customPrevButtonFN={CustomPrevButton}
        customNextButtonFN={CustomNextButton}
      >
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}
```

**Custom Dots**

You can replace the standard slider dots with custom ones!

To do this, you need to create a custom component of the dot in a special way and transfer it to the slider as a function.

**NOTE**: If you use custom dot, **dotShape**, **dotSize**, **dotColor** and **activeDotColor** properties will not be applied. The styling will depend on the styles within your component and your creativity.

**Dot Component**

```javascript
export default function CustomDot(
  index: number,
  switchToSlideFN: (selectedSlideIndex: number) => void,
  nextSlideIndex?: number,
  sliding?: boolean,
  slidingDuration?: number
) {
  return (
    <button
      key={index}
      style={{
        backgroundColor: `${index === nextSlideIndex ? "red" : "white"}`,
        transition: `background-color ${slidingDuration}ms`,
      }}
      disabled={sliding}
      onClick={(event) => {
        event.stopPropagation();

        switchToSlideFN(index);
      }}
    >
      {index + 1}
    </button>
  );
}
```

For the correct behavior of the slider, **it is important to use the [button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) tag!** But its contents and styles depend entirely on your imagination.

The **nextSlideIndex** property defines the index of the next slide and in combination with **index** property can be useful for stabilizing the state of active and inactive dot (you can see the example above)

The **sliding** property determines the behavior of the dot during the slide movement cycle.

The **slidingDuration** property defines the time of one cycle of movement, which can be useful for timing the change of styles.

In the above examples of custom dots componet, these properties are used to disable the dot-button and styling the colors of active/inactive dots, but you can apply them as you want.

**Slider With Custom Dots Example**

```javascript
import SimpleSlider from "@loginamnet/simple-slider";

import MySlide1 from "./components";
import MySlide2 from "./components";
import CustomDot from "./components";

export default function MySliderComponent() {
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
      }}
    >
      <SimpleSlider dots customDotsFn={CustomDot}>
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}
```

## Preloader

The slider and its elements use a client-side rendering, which, when there are a large number of slides, may cause them to appear briefly on the screen before they are fully loaded. If you are not using a global preloader, you should consider adding this element directly to the container where the slider is located.

Note that for the slider and preloader container, the **overflow** property should be set to **"hidden"**. The preloader itself should occupy 100% of the width and height of the container.

Once all the elements have loaded inside the container, remove the preloader. For React, the simplest way is to use a combination of **useState** and **useEffect**.

```javascript
import { useEffect, useState } from "react";

import SimpleSlider from "@loginamnet/simple-slider";

import Preloader from "./components";
import MySlide1 from "./components";
import MySlide2 from "./components";

export default function MySliderComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        overflow: "hidden",
      }}
    >
      {loading && <Preloader />}
      <SimpleSlider>
        <MySlide1 text="First Slide" />
        <MySlide2>Second Slide</MySlide2>
      </SimpleSlider>
    </div>
  );
}
```

There are many different ideas for the styling of the preloader available online, so it has been decided not to include this element directly within the slider in order to allow for greater creative freedom.

## Special Case

During normal operation of the slider outside the slide change cycle, only the current slide remains visible - even if the size of the component itself is smaller than the size of the slider.

However, with certain settings, it is possible to overlay one slide on top of another to create a complete picture.

To achieve this effect, you need to set the **controls** to **true** (not **on-hover**), the **notInfinite** property in the **controlsOptions** object is set to **true**, the **dots** property to **false** (this value is set by default) and **slidingType** is set to **overlay** (this value is set by default).

```javascript
controls
controlsOptions={{
    notInfinite: true,
}}
```

If it is necessary that the slides be removed from the already laid out stack - set the option **startWithSlide** equal to the number of slides (you may have to change **slidingDirection** option to the opposite too).

```javascript
controls
controlsOptions={{
    notInfinite: true,
}}
{/* in this example, it is assumed that we have added five slides */}
startWithSlide={5}
```

## Plans

- Make it possible to import slider control functions and some internal states to create external control components

## Licence

[MIT](https://github.com/LoginamNet/react-simple-slider/blob/main/LICENCE)

It can be used **for free** in any personal or commercial project :gift:
