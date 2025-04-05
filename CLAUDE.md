# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run test -- --testNamePattern="test name"` - Run a specific test
- `npm run deploy` - Deploy to GitHub Pages

## Code Style
- **Imports**: Group imports by type (React, third-party, local)
- **Components**: Use functional components with hooks
- **Styling**: Use styled-components with component definitions at the end of files
- **State Management**: Use React useState for local state, Recoil for global state
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Language**: Support dual language (English/Chinese) with conditional rendering
- **File Structure**: Group related components in directories by feature
- **Error Handling**: Use conditional rendering and reasonable defaults
- **Responsiveness**: Use Media queries for responsive design
- **Formatting**: Two space indentation, single quotes for strings