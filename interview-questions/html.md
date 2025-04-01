## HTML vs HTML5

- **Evolution and Standards**
  - HTML (prior to HTML5) was a standard that evolved over time with various versions (HTML 4.01, XHTML 1.0, etc.)
  - HTML5 is the latest version of HTML and is considered a major revision of the language, introducing new features and enhancements.
- **New Features**
  - HTML5 introduced several new elements and APIs that enhance the capabilities of web pages.
  - Some notable additions include `<canvas>` for drawing graphics dynamically, `<video>` and `<audio>` for embedding multimedia content directly into web pages without plugins, `<article>`, `<section>`, `<header>`, `<footer>`, and `<nav>` for better structuring of content, `<input>` types for better form controls (e.g., `<input type="date">`), and `<svg>` for vector graphics support.
- **Compatibility and Support**
  - HTML5 is designed to be backward-compatible with older HTML versions, but some older browsers may not fully support all HTML5 features without polyfills or fallback mechanisms.
- **Syntax**
  - HTML5 relaxed some rules and deprecated certain attributes and elements from earlier versions of HTML.
  - It introduced more semantic elements, making it easier to create structured and accessible web content.
- **Integration with Web Technologies**
  - HTML5 is closely integrated with other web technologies such as CSS3 (for styling) and JavaScript (for dynamic behavior), providing a more cohesive and powerful platform for web development.

## New features of HTML5

- **Semantic Elements**
  - HTML5 introduced semantic elements like `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`, `<aside>`, etc., which provide better structure and semantics to web documents, making it easier for search engines and screen readers to interpret content.
- **Audio and Video**
  - HTML5 includes `<audio>` and `<video>` elements for embedding multimedia content directly into web pages without requiring third-party plugins like Flash.
  - This provides native support for playing audio and video content.
- **Canvas**
  - The `<canvas>` element allows for dynamic, scriptable rendering of 2D shapes and bitmap images.
  - It's widely used for creating interactive graphics, animations, and games directly within the web browser.
- **Form Enhancements**
  - HTML5 introduced new input types such as `<input type="date">`, `<input type="email">`, `<input type="url">`, `<input type="number">`, etc., providing better user experience and validation for form inputs without needing custom JavaScript.
- **LocalStorage and SessionStorage**
  - HTML5 introduced `localStorage` and `sessionStorage` APIs, which allow web applications to store data locally on the user's device.
  - This provides a way to persist data across sessions and improve offline capabilities.
- **Web Storage**
  - Besides `localStorage` and `sessionStorage`, HTML5 introduced the `IndexedDB` API for storing large amounts of structured data in the browser, providing a more powerful alternative to cookies.
- **Geolocation API**
  - HTML5 includes the Geolocation API, which allows web applications to request the user's geographical location information.
  - This enables location-aware web applications and services.
- **Web Workers**
  - HTML5 introduced Web Workers, which are JavaScript scripts that run in the background independently of the main browser thread.
  - They enable concurrent processing and improve performance by offloading complex tasks from the main UI thread.
- **WebSocket**
  - HTML5 introduced the WebSocket API, which provides a full-duplex communication channel over a single TCP connection, allowing for real-time communication between the client and server.
- **Drag and Drop**
  - HTML5 includes native support for drag-and-drop interactions, making it easier to implement intuitive user interfaces for file uploading, content rearrangement, and other interactive features.

## Purpose of Doctype

- **Document Type Definition (DTD)**
  - The `<!DOCTYPE>` declaration informs the web browser about the version of HTML or XHTML that the web page is written in.
  - This helps the browser to render the content correctly according to the specified standards and rules.
- **Quirks Mode vs. Standards Mode**
  - Different versions of HTML have different rendering rules.
  - By specifying the correct `<!DOCTYPE>`, you instruct the browser to render the page in standards mode, which ensures consistent behavior across different browsers.
  - If no `<!DOCTYPE>` is provided or if an incorrect one is used, the browser may render the page in quirks mode, which may lead to inconsistencies in layout and styling.
- **Validation**
  - Some HTML editors and validators use the `<!DOCTYPE>` declaration to validate whether the HTML code follows the specified rules and standards of the declared document type.
  - This helps developers ensure their code adheres to best practices and avoids potential rendering issues.

## Nesting of Websites with iFrame

1. **`<iframe>` Element**: The `<iframe>` tag is used to embed another document within the current HTML document.
2. **Attributes**:
   - `src`: Specifies the URL of the website you want to embed. Replace `"https://www.example.com"` with the actual URL of the website you want to embed.
   - `width` and `height`: Specify the dimensions (in pixels) of the iframe.
   - `frameborder`: Set to `"0"` to remove the iframe border. Setting it to `"1"` will display a border around the iframe.
3. **Fallback Content**: Any content that follows the `<iframe>` tag (like the `<p>` tag in the example) will be displayed if the browser does not support iframes or if the iframe fails to load.

### Considerations:

- **Cross-Origin Policy**: If the website you are embedding (`src` URL) has different origin policies, the browser may restrict certain interactions between the parent page and the iframe content due to security reasons.
- **Responsive Design**: Ensure that the dimensions (`width` and `height`) of the iframe are appropriate for your layout. You can use CSS to make the iframe responsive if needed.
- **Scrollbars**: By default, the iframe will display scrollbars if the content within it exceeds the specified dimensions. You can control this behavior using CSS (`overflow: hidden;`) or adjust the iframe dimensions accordingly.
- **SEO Considerations**: Content within iframes may not be indexed by search engines as part of the embedding page's content. Ensure that your SEO strategy aligns with how iframes are used on your site.

## HTML Entities

- HTML entities are special codes or sequences of characters used to represent characters that have a special meaning in HTML, or characters that cannot easily be typed or displayed using standard keyboard input.
- They are primarily used to ensure that these characters are displayed correctly in web pages, even if they have special significance in HTML syntax.

### Purpose of HTML Entities:

- **Display Special Characters**: Entities are used to display characters such as `<`, `>`, `&`, which have special meanings in HTML (e.g., `<` for starting a tag, `>` for ending a tag, `&` for beginning an entity).
- **Unicode Characters**: Entities can represent Unicode characters that are not easily typed on a standard keyboard or may not be supported by all browsers.

### Common HTML Entities:

Here are some commonly used HTML entities:

1. `&lt;` - Represents the less-than sign `<`.
2. `&gt;` - Represents the greater-than sign `>`.
3. `&amp;` - Represents the ampersand `&`.
4. `&quot;` - Represents the double quotation mark `"`.
5. `&apos;` - Represents the apostrophe (single quotation mark) `'`.
6. `&nbsp;` - Represents a non-breaking space.
7. `&copy;` - Represents the copyright symbol ©.
8. `&reg;` - Represents the registered trademark symbol ®.
9. `&mdash;` - Represents an em dash (—).
10. `&ldquo;` - Represents the left double quotation mark (“).
11. `&rdquo;` - Represents the right double quotation mark (”).

## Void Elements

- **Self-closing**:
  - Void elements do not have a separate closing tag.
  - Instead, they are written as a single tag, typically followed by a slash (`/>`), although in HTML5 this is optional.
- **No Content**:
  - Void elements cannot contain any content between an opening and closing tag.
  - They are standalone and do not encapsulate anything.
- **Attributes Only**:
  - Void elements may have attributes that define their behavior or appearance, but they do not have inner content.
- **Examples**:
  - Some common void elements include `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`, `<area>`, `<base>`, `<col>`, `<embed>`, `<keygen>`, `<param>`, `<source>`, `<track>`, and `<wbr>`.

## Multipart Form Data

Multipart form data is a type of encoding used to submit form data that includes files or binary data within an HTTP request. It allows multiple parts of data to be combined into a single body, where each part represents a field or file to be uploaded.

### Key Characteristics of Multipart Form Data:

1. **Structure**:
   - Each part in multipart form data is separated by a boundary defined in the `Content-Type` header.
   - Each part typically includes a `Content-Disposition` header to indicate whether it's a form field (`form-data`) or a file (`attachment`).
2. **Usage**:
   - **File Uploads**: When a form includes `<input type="file">`, the selected file(s) are encoded as part of the multipart form data.
   - **Binary Data**: Allows encoding of non-textual or binary data, such as images, documents, etc., alongside regular form fields.
3. **Content-Disposition**:
   - For form fields: `Content-Disposition: form-data; name="fieldName"`
   - For file uploads: `Content-Disposition: form-data; name="fieldName"; filename="filename"`
4. **Content-Type**:
   - The `Content-Type` of the entire request is `multipart/form-data`, specifying the boundary used to separate parts.

### Example

### HTML Form

```tsx
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="text" name="username" value="John Doe">
  <input type="file" name="avatar">
  <button type="submit">Upload</button>
</form>
```

### Request Body

```tsx
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryABC123

------WebKitFormBoundaryABC123
Content-Disposition: form-data; name="username"

John Doe
------WebKitFormBoundaryABC123
Content-Disposition: form-data; name="avatar"; filename="avatar.jpg"
Content-Type: image/jpeg

(Binary data of the avatar.jpg file...)
------WebKitFormBoundaryABC123--
```

## Asset Optimization

### 1. **Image Optimization:**

- **Compression:** Use tools like ImageMagick, JPEGoptim, or PNGOUT to compress images without noticeable loss in quality.
- **Formats:** Choose appropriate image formats (JPEG for photos, PNG for graphics with transparency, SVG for vector graphics) to minimize file size.
- **Responsive Images:** Serve different sizes of images based on the device's screen size using `srcset` and `sizes` attributes.

### 2. **CSS and JavaScript Optimization:**

- **Minification:** Remove unnecessary whitespace, comments, and code from CSS and JavaScript files using tools like UglifyJS or cssnano.
- **Concatenation:** Combine multiple CSS or JavaScript files into a single file to reduce the number of HTTP requests.
- **Load Asynchronously:** Use `async` or `defer` attributes for JavaScript files to prevent blocking page rendering.

### 3. **Caching and CDN:**

- **Cache Control:** Set appropriate caching headers (`Cache-Control`, `Expires`) to allow browsers to cache assets locally, reducing server load and improving load times for returning visitors.
- **Content Delivery Network (CDN):** Use a CDN to serve static assets from servers closer to the user, reducing latency and improving download speeds globally.

### 4. **Gzip Compression:**

- **Server Configuration:** Enable Gzip compression on your web server to reduce the size of text-based assets (CSS, JavaScript, HTML) before transmission over the network.

### 5. **Lazy Loading:**

- **Images and Videos:** Implement lazy loading for images and videos so that they are only loaded when they enter the viewport, reducing initial page load times.

### 6. **Preloading and Prefetching:**

- **Preload Critical Resources:** Use `<link rel="preload">` to instruct the browser to load important resources (like fonts or large CSS/JS files) earlier in the page loading process.
- **Prefetch Resources:** Use `<link rel="prefetch">` to fetch resources that might be needed in the future, improving subsequent page navigation speeds.

### 7. **Optimize Fonts:**

- **Subset Fonts:** Use tools like Font Squirrel or Google Fonts to subset fonts to include only the characters needed on your website, reducing file size.
- **Use System Fonts:** Consider using system fonts or web-safe fonts to avoid the need for additional font downloads.

### 8. **Audit and Monitoring:**

- **Performance Testing:** Regularly audit your website's performance using tools like Google PageSpeed Insights, GTmetrix, or WebPageTest to identify areas for improvement.
- **Monitoring:** Monitor server response times, asset loading times, and overall performance metrics to detect and address performance bottlenecks.

## Preload vs Prefetching

- Preloading and prefetching are techniques used in web development to improve page load performance by fetching resources in advance.
- Although they serve similar purposes, they are used in slightly different contexts and have distinct behaviors:

### Preload:

- **Purpose:** Preloading is used to request critical resources that are necessary for the current navigation or page load.
  - **HTML Tag:** `<link rel="preload">` is used to specify resources that should be fetched early in the loading process, before they are needed.
  - This can include fonts, CSS files, JavaScript files, or other important assets.
- **Attributes:**
  - `as`: Specifies the type of resource being preloaded (`script`, `style`, `font`, `image`, etc.).
  - `href`, `src`, or `as` attribute: Specifies the URL of the resource to preload.
- **Behavior:** The browser initiates fetching these resources as soon as possible, even before parsing the HTML document fully.
  - This can help to reduce critical rendering path delays and improve perceived performance.
- **Example:**
  ```html
  htmlCopy code
  <link rel="preload" href="styles.css" as="style" />
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" />
  ```

### Prefetching:

- **Purpose:** Prefetching is used to fetch resources that might be needed for future navigations or user interactions, but are not required for the current page load.
- **HTML Tag:** `<link rel="prefetch">` is used to specify resources that can be fetched in the background, without delaying the current page load.
- **Attributes:**
  - `as`: Specifies the type of resource (`document`, `script`, `style`, `image`, etc.).
  - `href`: Specifies the URL of the resource to prefetch.
- **Behavior:** The browser fetches these resources opportunistically, during idle time, after the current page has finished loading.
  - Prefetching helps to improve performance for subsequent navigations or interactions by reducing latency.
- **Example:**
  ```html
  htmlCopy code
  <link rel="prefetch" href="next-page.html" />
  <link rel="prefetch" href="image-to-be-used-later.jpg" as="image" />
  ```

### Key Differences:

- **Timing:** Preload requests resources that are essential for the current page load, whereas prefetch fetches resources that may be needed in the future.
- **Priority:** Preload has higher priority and is initiated earlier in the loading process, potentially affecting the critical rendering path.
  - Prefetch has lower priority and fetches resources opportunistically.
- **Usage:** Use preload for resources required immediately (e.g., critical CSS, fonts for initial rendering).
  - Use prefetch for resources that can improve future navigation or interaction performance (e.g., next page's HTML, images not currently visible).

## Audio and video files supported by HTML5 Player

### Audio Formats:

1. **MP3 (MPEG-1 Audio Layer 3)**:
   - Widely supported across all major browsers.
2. **AAC (Advanced Audio Coding)**:
   - Supported in most modern browsers, including Safari, Microsoft Edge, and Chrome.
3. **Ogg Vorbis**:
   - Supported by Firefox, Chrome, and Opera.

### Video Formats:

1. **MP4 (H.264, MPEG-4 Part 14)**:
   - The most universally supported video format across all browsers.
   - Recommended for compatibility across different platforms and devices.
2. **WebM (VP8, VP9)**:
   - Supported by Firefox, Chrome, and Opera.
   - Provides a royalty-free alternative to H.264.
3. **Ogg Theora**:
   - Supported by Firefox, Chrome, and Opera.
   - Less commonly used compared to MP4 and WebM.

## Microdata in HTML5

- Microdata in HTML5 is a semantic markup format used to annotate HTML elements with specific attributes that provide additional meaning or context to the content.
- It allows web developers to embed machine-readable data into HTML documents, making it easier for search engines and other applications to understand and interpret the content.

### Key Concepts of Microdata:

1. **Semantic Annotations**: Microdata provides a way to semantically annotate HTML elements with metadata about the content they contain.
   - This metadata describes properties, relationships, and types of items represented on the webpage.
2. **Structured Data**: By adding microdata attributes to HTML elements, web developers can define structured data that identifies entities and their properties.
   - This structured data can include information about products, events, organizations, people, recipes, reviews, and more.
3. **Attributes**:
   - **`itemscope`**: Specifies that the element represents the scope of the item (entity) being described.
   - **`itemtype`**: Defines the type of the item using a URL that identifies a schema or vocabulary (e.g., `http://schema.org/Person`).
   - **`itemprop`**: Specifies properties (attributes) of the item, such as name, description, date published, etc.

## WebComponents and ShadowDOM

- Web Components and Shadow DOM are two related technologies in web development that enable developers to create reusable, encapsulated components with encapsulated styling and behavior.
- Here’s an overview of each:

### Web Components:

- Web Components are a set of web platform APIs that allow you to create new HTML tags, encapsulate their functionality, and style them using custom CSS.
- They consist of several key technologies:

1. **Custom Elements**:
   - Custom Elements allow developers to define new HTML elements (custom tags) with their own behavior and lifecycle callbacks.
   - Example:Now, `<my-component></my-component>` can be used like any other HTML element in your document.
     ```jsx
     class MyComponent extends HTMLElement {
       connectedCallback() {
         this.innerHTML = `<p>Hello, World!</p>`;
       }
     }
     customElements.define("my-component", MyComponent);
     ```
2. **Shadow DOM**:
   - The Shadow DOM provides encapsulation for a component's markup, styles, and behavior.
   - It allows you to attach a hidden DOM subtree to an element, separate from the main document DOM.
   - This helps in preventing CSS styles from leaking out and external styles from affecting the component's internal structure.
   - Example:Here, the `<style>` and `<p>` elements are encapsulated within the Shadow DOM of `this` element.
     ```jsx
     const shadow = this.attachShadow({ mode: "open" });
     shadow.innerHTML = `<style>
       p { color: blue; }
     </style>
     <p>Hello from Shadow DOM!</p>`;
     ```
3. **HTML Templates**:
   - HTML Templates allow you to declare fragments of markup that are not rendered when the page loads but can be instantiated later using JavaScript.
   - This is useful for defining the structure of a custom element's Shadow DOM.
   - Example:
     ```html
     <template id="my-template">
       <style>
         p {
           color: red;
         }
       </style>
       <p>Hello from Template!</p>
     </template>
     ```

### Shadow DOM:

- Shadow DOM is a crucial part of Web Components that provides encapsulation by hiding DOM subtrees under a shadow root, separate from the main document DOM.
- Key features include:
  - **Encapsulation**: Styles and scripts inside the Shadow DOM are scoped to the component and do not affect or get affected by styles outside the Shadow DOM.
  - **Isolation**: The encapsulated DOM subtree can include its own elements, styles, and scripts, shielding them from the rest of the document.
  - **Composition**: Components can use slots (`<slot>`) to allow insertion of external content into specific points within the Shadow DOM structure, enabling flexible composition.

### Benefits of Web Components and Shadow DOM:

- **Reusability**: Create encapsulated, reusable components that can be used across different projects without conflicts.
- **Maintainability**: Encapsulation helps in managing complexity by keeping markup, styles, and behavior localized and organized.
- **Interoperability**: Web Components work across modern browsers and frameworks, providing a standardized way to build and share UI components.

## Template Tag

- The `<template>` tag in HTML is used to declare fragments of markup (HTML content) that are not rendered when the page loads but can be instantiated later using JavaScript.
- This allows developers to define reusable content that can be cloned, modified, and inserted into the document dynamically.

## Data Attributes

- Data attributes, also known as `data-*` attributes, are custom attributes that can be added to HTML elements to store extra information or data that is not directly represented by other attributes or content.
- These attributes are prefixed with `data-`, followed by any name you choose (e.g., `data-name`, `data-id`, `data-toggle`, etc.).
- They are intended to store information that is specific to your application's needs and are not used by browsers for any specific functionality or styling by default.
  - **Custom Data Storage**: They provide a way to store arbitrary data within an HTML element without affecting its rendering or behavior by default.
  - **JavaScript Access**: JavaScript can access these attributes using the `dataset` property of the element. For example, `element.dataset.name` would retrieve the value of `data-name`.
  - **Styling and Scripting**: They can be used to influence styling and scripting decisions within your application.
  - **Naming Convention**: Names should follow the pattern `data-*`, where `` is replaced with a meaningful name describing the data being stored.

## Aria Attributes

- ARIA (Accessible Rich Internet Applications) attributes are a set of attributes defined by the W3C to enhance the accessibility of web content and applications, particularly for users with disabilities.
- ARIA attributes can be added to HTML elements to provide additional semantics and improve accessibility by conveying roles, states, properties, and relationships that are not otherwise conveyed through the native HTML semantics.
  - **Accessibility Enhancement**: They provide accessibility metadata to assistive technologies (such as screen readers) in understanding and interacting with web content.
  - **Roles and States**: ARIA attributes define roles (`role`), states (`aria-*`), and properties (`aria-*`) to describe the behavior and structure of interactive elements.
  - **Usage**: ARIA attributes are typically used on interactive HTML elements (like form controls, buttons, navigation elements) to ensure they are correctly interpreted by assistive technologies.
  - **Semantic Meaning**: They do not affect how elements are styled or behave visually in browsers; their primary purpose is to enhance accessibility.

## SVG

- SVG (Scalable Vector Graphics) is an XML-based file format used for describing two-dimensional vector graphics.
- Unlike raster graphics (e.g., JPEG, PNG), which are made up of pixels and can lose quality when scaled, SVGs are resolution-independent and can be scaled to any size without losing quality.
- They are widely used for creating graphics that need to be scalable, interactive, and accessible on the web.

## Canvas

- The Canvas API in HTML5 provides a way to dynamically generate and manipulate graphics and animations on a web page using JavaScript.
- It allows you to draw graphics, shapes, images, and text directly onto a web page's `<canvas>` element.
- The `<canvas>` element itself acts as a drawing surface where you can programmatically create and modify graphical content.

## Local vs Session Storage vs Cookies

- **Cookies** are useful for managing user sessions, storing user preferences, and tracking user behavior across different visits to a website. However, they have size limitations and are sent with every HTTP request, impacting performance.
- **Local Storage** is suitable for applications needing persistent storage of larger amounts of data across browser sessions, such as offline web apps or cached data that should persist.
- **Session Storage** is ideal for storing temporary data that needs to be cleared when the user closes the tab or window, ensuring data isolation between multiple tabs or windows of the same origin.

## DOM vs BOM

### DOM (Document Object Model):

- **Definition**: The DOM is a programming interface for web documents. It represents the structure of HTML or XML documents as a tree-like model where each node represents a part of the document (e.g., elements, attributes, text).
- **Usage**: Developers use the DOM to manipulate the content, structure, and style of web documents dynamically using languages like JavaScript.
- **Scope**: The DOM is specific to the structure and content of the document itself (HTML or XML) and provides methods and properties to interact with these elements programmatically.

### BOM (Browser Object Model):

- **Definition**: The BOM represents the objects exposed by the web browser other than the document. It includes objects such as `window`, `navigator`, `screen`, `history`, and `location`.
- **Usage**: BOM objects provide methods and properties to interact with the browser environment, manage the browser's history, control navigation, manipulate the browser window (size, position), handle cookies, and detect client-side capabilities.
- **Scope**: BOM objects are not standardized by W3C like the DOM. They are implemented differently across browsers, leading to inconsistencies in behavior and support.

## Window vs Global Object

- **Environment**:
  - **Window**: Used in web browsers.
  - **Global**: Used in Node.js runtime.
- **Global Variable Scope**:
  - **Window**: Variables declared with `var` become properties of the `window` object.
  - **Global**: Variables declared with `var` do not become properties of the `global` object.
- **Methods and Properties**:
  - **Window**: Provides methods and properties related to the browser window and the DOM, such as `alert()`, `document`, `location`, and `navigator`.
  - **Global**: Provides properties and methods specific to the Node.js environment, such as `process`, `Buffer`, and `__dirname`.
- **Context**:
  - **Window**: Represents the browser window, enabling interaction with the user interface and the web document.
  - **Global**: Represents the Node.js runtime, providing access to the system environment and Node.js-specific features.

## Text formatting tags

```tsx
<b>This text is bold.</b>
<strong>This text is important.</strong>
<i>This text is italic.</i>
<em>This text is emphasized.</em>
<u>This text is underlined.</u>
<mark>This text is highlighted.</mark>
<small>This text is small.</small>
<del>This text is deleted.</del>
<ins>This text is inserted.</ins>
H<sub>2</sub>O
x<sup>2</sup>
<code>console.log('Hello, world!');</code>
<pre>
This text
is preformatted.
</pre>
<blockquote>
  This is a long quotation from a famous person.
</blockquote>
<q>This is an inline quotation.</q>
<abbr title="HyperText Markup Language">HTML</abbr>
<cite>Shakespeare</cite>
<dfn>HTML</dfn> stands for HyperText Markup Language.
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.
<samp>Error: Cannot find the file.</samp>
The value of <var>x</var> is unknown.
The event starts at <time>19:00</time>.
```

## Form and input tags

```tsx
<form action="/submit" method="post">
	{/* Text */}
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required><br><br>

	{/* Password */}
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required><br><br>

	{/* Email */}
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required><br><br>

	{/* Date */}
  <label for="dob">Date of Birth:</label>
  <input type="date" id="dob" name="dob"><br><br>

	{/* Color Picker */}
  <label for="color">Favorite Color:</label>
  <input type="color" id="color" name="color"><br><br>

	{/* Radio */}
  <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br><br>

	{/* Checkboxes */}
  <label for="hobbies">Hobbies:</label>
  <input type="checkbox" id="reading" name="hobbies" value="reading">
  <label for="reading">Reading</label>
  <input type="checkbox" id="traveling" name="hobbies" value="traveling">
  <label for="traveling">Traveling</label><br><br>

	{/* Attach File */}
  <label for="file">Upload File:</label>
  <input type="file" id="file" name="file"><br><br>

	{/* Submit Form */}
  <input type="submit" value="Submit">

	{/* Clear Form */}
  <input type="reset" value="Reset">
</form>

```

## Lists and Tables

### Ordered

```tsx
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

### Unordered

```tsx
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Definition

```tsx
<dl>
  <dt>Term 1</dt>
  <dd>Description for Term 1</dd>
  <dt>Term 2</dt>
  <dd>Description for Term 2</dd>
</dl>
```

## Accessibility

- Use semantic tags
- Provide alternative text whenever possible
- Ensure keyboard accessibility
- Sufficient Color Contrast between text and background
- Provide Accessible Forms (Labels, Fieldsets & Legends, Validation Messages)
- Provide Descriptive Link Text
- Use Captions and Audio Descriptions for multimedia
- Accessible navigation and breadcrumbs
- Responsive Design

## Image Srcsets

- The `srcset` attribute in the `<img>` tag allows you to define multiple image sources and let the browser decide which one to use based on the screen's resolution, size, and other factors.
- This is useful for serving responsive images that look good on all devices while optimizing load times and bandwidth usage.

```tsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Images Example</title>
</head>
<body>
  <h1>Responsive Images with srcset</h1>
  <img
    src="image-300.jpg"
    srcset="
      image-300.jpg 300w,
      image-300@2x.jpg 300w 2x,
      image-600.jpg 600w,
      image-600@2x.jpg 600w 2x,
      image-1200.jpg 1200w,
      image-1200@2x.jpg 1200w 2x"
    sizes="(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px"
    alt="A descriptive text about the image">
</body>
</html>
```

## Dragging and Dropping Elements

1. **Draggable Element (`draggable="true"`)**:
   - The element with `draggable="true"` attribute (`dragElement` in this case) indicates that it can be dragged.
2. **Drag Events**:
   - `dragstart` event: Fired when the drag operation starts.
   - Here, `event.dataTransfer.setData()` sets the data that will be dragged (`dragElement.id` in this case).
3. **Droppable Area** (`dropArea`):
   - `dragover` event: Fired when an element or text selection is being dragged over a valid drop target (`dropArea` in this case).
   - You must call `event.preventDefault()` to allow the drop.
   - `drop` event: Fired when the dragged element is dropped onto a valid drop target.
   - `event.preventDefault()` prevents the default action (opening the dragged data as a link).
4. **Handling Drop**:
   - `event.dataTransfer.getData('text')` retrieves the data (`dragElement.id`) that was set during `dragstart`.
   - `dropArea.appendChild(draggedElement)` appends the dragged element to the drop area (`dropArea`).
