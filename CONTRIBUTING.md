# Contributing to Portfolio Website

Thank you for considering contributing to this portfolio project! This document provides guidelines for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/My-Portfolio-.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes thoroughly
6. Commit your changes: `git commit -m "Description of changes"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## Development Guidelines

### Code Style

- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add JSDoc comments for functions and components
- Keep functions small and focused on a single responsibility

### React Best Practices

- Use functional components with hooks
- Extract reusable logic into custom hooks when appropriate
- Keep components small and focused
- Use PropTypes for type validation
- Avoid inline styles; use Tailwind CSS classes

### File Organization

- Place new components in `src/components/`
- Place data files in `src/data/`
- Place utility functions in `src/utils/`
- Place constants in `src/constants/`

### Naming Conventions

- Components: PascalCase (e.g., `MyComponent.jsx`)
- Files: camelCase for data/utils (e.g., `myHelper.js`)
- Variables/Functions: camelCase (e.g., `myFunction`)
- Constants: UPPER_SNAKE_CASE (e.g., `MY_CONSTANT`)

### Testing

Before submitting a PR:

1. Run linting: `npm run lint`
2. Build the project: `npm run build`
3. Test in development mode: `npm run dev`
4. Test the production build: `npm run preview`

### Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in present tense (e.g., "Add", "Fix", "Update")
- Keep the first line under 50 characters
- Add detailed description if needed

Example:
```
Add contact form validation

- Implement email validation
- Add error messages
- Update UI feedback
```

## What to Contribute

### Bug Fixes

- Check the Issues page for bugs
- Verify the bug exists
- Fix it and test thoroughly
- Submit a PR with a clear description

### New Features

- Discuss major features in an issue first
- Keep features focused and well-scoped
- Update documentation if needed
- Add appropriate error handling

### Documentation

- Improve README or other docs
- Add JSDoc comments
- Update examples
- Fix typos

### Code Quality

- Refactor complex code
- Improve performance
- Enhance accessibility
- Add better error handling

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Ensure all tests pass and linting is clean
3. Update documentation if you've changed APIs
4. Your PR will be reviewed by maintainers
5. Address any feedback
6. Once approved, it will be merged

## Questions?

Feel free to open an issue for questions or discussions!

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the project
- Welcome newcomers and help them contribute

Thank you for contributing! 🎉
