
Demo link: https://draggable-list-one.vercel.app/


1. Data Initialization: I have initialize an array called `initialData` containing objects representing locations. Each location object has properties like `id`, `name`, `location`, and `image`. This data represents the locations and their details.

2. State Management: I have used React's `useState` hook to manage the state of the locations. Initially, we set the state to `initialData`.

3. Drag and Drop Handlers: I have define two event handlers: `handleDragStart` and `handleDrop`. 
   - `handleDragStart`: This function is triggered when a draggable element starts being dragged. It sets the data of the dragged location's `id` to the `dataTransfer` object.
   - `handleDrop`: This function is triggered when a draggable element is dropped. It finds the indices of the dragged and dropped locations, updates the `locations` array by rearranging the elements accordingly, and sets the new state.

4. Rendering: I have render the list of locations using the `locations` state. For each location, we create a list item (`<li>`) element with draggable attributes. We also set event handlers for drag and drop events. Each location is displayed with its name, location text, and an image placeholder.

5. Image Display: We display an image placeholder for each location using the `image` property of the location object. The `img` tag's `src` attribute is set to the URL provided in the `initialData`. This can be replaced with actual image URLs to display real images.

6. Styling: applied basic styling using Tailwind CSS classes to style the list items, including background color, padding, margin, and flex layout to display the image and location details side by side.
