# React Social Media App

This is a simple social media app built with React, where users can create posts, view existing posts, and delete posts.

## Components

### `CreatePost`

Component responsible for creating new posts. It includes a form with fields for userId, post title, post content, number of views, and tags. Upon submission, it sends a POST request to `https://dummyjson.com/posts/add` to add the post to the backend.

### `PostListProvider`

Context provider component that manages the state of `postList`, which stores all posts fetched from the backend. It also manages the `fetching` state to indicate when posts are being loaded. The provider uses `useReducer` to handle actions like adding a post, deleting a post, and initializing posts.

### `PostList`

Component that renders a list of posts fetched from the `PostListProvider` context. It displays a loading indicator while posts are being fetched (`fetching` is true) and a welcome message when no posts are available. Each post is rendered using the `Post` component.

### `Post`

Component that renders an individual post with its title, content, tags, and number of views. It includes a delete button (`MdDelete` icon) to delete the post. Uses the `deletePost` function from the `PostList` context to delete posts.

## Usage

To run this application locally:

1. Clone the repository:
   ```
   git clone https://github.com/rishibharadwajsai/social-media-app.git
   cd social-media-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the app.

## Dependencies

- React: Used for building the UI components.
- react-icons (specifically `MdDelete`): Provides icons for delete functionality.
- Bootstrap (assumed from classes like `form-control`, `btn`, etc.): For styling UI components.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
