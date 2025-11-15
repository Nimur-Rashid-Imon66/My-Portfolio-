# Portfolio Website - Nimur Rashid Imon

A modern, responsive personal portfolio website showcasing projects, skills, competitive programming achievements, and professional experience. Built with React, Vite, and Tailwind CSS.

## 🚀 Live Demo

Check out the live portfolio: [https://nimur-rashid.is-a.dev/](https://nimur-rashid.is-a.dev/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Competitive Programming Stats**: Display achievements from Codeforces, LeetCode, CodeChef, and AtCoder
- **Project Showcase**: Portfolio of web development projects
- **Skills Section**: Organized display of technical skills by category
- **Experience Timeline**: Professional work history
- **Contact Form**: Integrated contact form using Getform
- **Error Boundary**: Graceful error handling for better user experience
- **SEO Optimized**: Meta tags for better search engine visibility
- **Type Safety**: Well-structured data models and JSDoc comments

## 🛠️ Tech Stack

- **Frontend**: React 18.2
- **Build Tool**: Vite 4.4
- **Styling**: Tailwind CSS 3.3
- **Smooth Scrolling**: react-scroll
- **Icons**: react-icons
- **Typewriter Effect**: react-simple-typewriter
- **Code Quality**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm (v8 or higher)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nimur-Rashid-Imon66/My-Portfolio-.git
   cd My-Portfolio-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

## 🚀 Getting Started

### Development Mode

Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

To make it accessible on your local network:
```bash
npm run host
```

### Production Build

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally
- `npm run host` - Start development server accessible on local network

## 🏗️ Project Structure

```
My-Portfolio-/
├── public/                 # Static assets
│   ├── *.svg              # Icons and logos
│   ├── *.jpg              # Images
│   └── *.pdf              # Resume
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── CompetitiveProgramming.jsx
│   │   ├── Contact.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   └── Skill.jsx
│   ├── constants/         # Application constants
│   │   └── index.js
│   ├── data/              # Data files
│   │   ├── competitiveProgramming.js
│   │   ├── experiences.js
│   │   ├── navigationLinks.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML template
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/constants/index.js`:
```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  initials: 'YN',
  // ... other fields
};
```

### Data Files

All content is organized in separate data files under `src/data/`:
- `competitiveProgramming.js` - Competitive programming platform stats
- `experiences.js` - Professional experience
- `navigationLinks.js` - Navigation menu items
- `projects.js` - Portfolio projects
- `skills.js` - Technical skills
- `socialLinks.js` - Social media links

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors and theme in `tailwind.config.js`
- Global styles in `src/index.css`

## 🔍 Code Quality

The project uses ESLint for code quality. Run the linter:
```bash
npm run lint
```

## 📦 Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-icons` - Icon library
- `react-scroll` - Smooth scrolling
- `react-simple-typewriter` - Typewriter effect

### Dev Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `eslint` - Code linting
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS transformations

## 🐛 Known Issues

See the [Issues](https://github.com/Nimur-Rashid-Imon66/My-Portfolio-/issues) page for known issues and feature requests.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Nimur-Rashid-Imon66/My-Portfolio-/issues).

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Nimur Rashid Imon**
- Website: [nimur-rashid.is-a.dev](https://nimur-rashid.is-a.dev/)
- GitHub: [@Nimur-Rashid-Imon66](https://github.com/Nimur-Rashid-Imon66)
- LinkedIn: [Nimur Rashid Imon](https://www.linkedin.com/in/nimur-rashid-imon-03492a1b9/)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- Vite team for the blazing fast build tool

---

⭐ If you found this project helpful, please give it a star!