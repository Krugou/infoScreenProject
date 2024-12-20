# copilot-instructions

## Component Structure

Keep components small and focused on a single responsibility.
Use Svelte's built-in stores for state management.
Prefer composition over inheritance for component reuse.

## Reactivity

Utilize Svelte's reactivity features like $: reactive statements and stores.
Avoid unnecessary reactivity to improve performance.

## Styling

Use tailwindcss for styling
Use scoped styles to avoid CSS conflicts if tailwind is can't do it.
Leverage Svelte's built-in support for CSS variables and animations.

## Error Handling

Implement comprehensive error handling with custom error types.
Validate inputs and use TypeScript for type safety.
Performance Optimization:

Minimize component re-renders by using reactive statements wisely.
Use Svelte's built-in optimizations like the bind:this directive for DOM elements.

## Lifecycle Management

Use onMount and onDestroy for managing side effects and cleanup.
Ensure proper cleanup of resources to prevent memory leaks.

## Async Operations

Use async/await for handling asynchronous operations.
Include proper error handling for async operations.

## Security

Sanitize inputs to prevent XSS attacks.
Follow security best practices for authentication and authorization.

## Testing

Write unit tests for components and stores.
Consider edge cases and error scenarios in tests.

## Documentation

Document components, props, and events clearly.
Include usage examples and edge cases in documentation.
