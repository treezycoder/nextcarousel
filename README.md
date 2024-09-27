# Carousel Component for Next.js - README

## Overview

This is a fully functional image carousel component built using React and Next.js. The carousel features dynamic image transitions, infinite looping, and customizable animation controls. It utilizes a global context to manage the carousel state, making it easy to integrate into any Next.js application.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [State Management](#state-management)
- [Customization](#customization)
- [Credits](#credits)

## Getting Started

This guide will walk you through setting up and using the carousel in your Next.js project.

## Installation

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd your-repo-name
   ```

3. **Install Dependencies**

   Make sure you have all necessary dependencies installed by running:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Run the Development Server**

   Start the Next.js development server to see the component in action:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. **Access the Development Server**

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Usage

To use the carousel component in your project, follow these steps:

1. **Import and Wrap with Provider**

   Make sure to wrap your component with the `CarouselProvider` at the top level where you want the carousel to be rendered. This will provide access to the carousel context throughout the component tree.

   ```jsx
   import React from "react";
   import { CarouselProvider } from "./src/app/ui/projects/carouselContext";
   import Carousel from "./src/app/ui/projects/Carousel";

   const App = () => (
     <CarouselProvider>
       <div>
         <h1>My Carousel App</h1>
         <Carousel />
       </div>
     </CarouselProvider>
   );

   export default App;
   ```

2. **Structure the Component**

   The carousel will automatically load the predefined images and handle the transitions. The main carousel component is located at:

   ```
   src/app/ui/projects/Carousel
   ```

3. **Customize with Props**

   You can pass props to the `<Carousel />` component if additional customization is needed (refer to the [Props](#props) section).

## Props

Currently, the carousel component does not require any external props for its basic usage. However, you can extend its functionality by adding new props based on your requirements.

For example, you can control the following properties via the `CarouselProvider`:

- **Transition Duration**: The time it takes for slides to move.
- **Image Width**: The image width to be translated vertically.
- **Auto-play**: Start and stop automatic transitions between slides.

## State Management

The carousel uses a context-based state management system. The `CarouselProvider` component wraps the entire carousel application and provides a global state. This state can be accessed using the `useCarousel` hook.

### Example State and Functions

- **State Variables**:

  - `images`: The array of images to be displayed.
  - `currentIndex`: The index of the currently visible image.
  - `isTranslating`: Boolean indicating if a transition is in progress.
  - `isPlaying`: Boolean indicating if auto-play is enabled.

- **Functions**:
  - `handleNext()`: Move to the next image.
  - `handlePrev()`: Move to the previous image.
  - `handleStepClick(stepIndex)`: Jump to a specific image.

### Accessing State

To access and use the carousel state and functions, use the `useCarousel` hook as shown below:

```jsx
import React from "react";
import { useCarousel } from "./src/app/ui/projects/carouselContext";

const CarouselController = () => {
  const { handleNext, handlePrev, isPlaying, setIsPlaying } = useCarousel();

  return (
    <div>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
```

## Customization

The carousel is designed to be easily customized:

1. **Change Images**: Replace the images in the `modelSources` array within the carousel context (`carouselContext.js`) to display different images.

   ```javascript
   const modelSources = [
     "/path/to/your/image1.jpg",
     "/path/to/your/image2.jpg",
     // Add more images here...
   ];
   ```

2. **Update Styles**: The carousel is styled using CSS-in-JS (e.g., Tailwind CSS or standard CSS). Modify the styles in the `Carousel` component to achieve your desired look and feel.

3. **Modify Transitions**: Adjust the transition duration or easing function inside the context file to alter the speed and smoothness of image transitions.

## Credits

This carousel component was built with love using Next.js and React. If you encounter any issues or have suggestions for improvements, feel free to contribute or raise an issue on the GitHub repository.

**Author**: Ngahame  
**GitHub**: [treezycoder](https://github.com/treezycoder)  
**Repository**: [nextcarousel](https://github.com/treezycoder/nextcarousel)
