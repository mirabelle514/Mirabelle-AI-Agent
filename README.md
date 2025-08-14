# Mirabelle AI Agent

A React-based AI agent that represents Mirabelle for Lead UX Developer positions, featuring hardcoded responses, professional styling, and a modern chat interface.

## Features

- **AI Chat Interface**: Interactive chat experience with typing animations
- **Hardcoded Responses**: No external API dependencies - completely self-contained
- **Professional Styling**: Custom Tailwind CSS with navy blue theme
- **Reference Letter Download**: Built-in PDF download functionality
- **Responsive Design**: Works on desktop and mobile devices
- **Quick Questions**: Pre-built question buttons for easy interaction

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS with custom configuration
- **Build Tool**: Create React App
- **PostCSS**: For Tailwind processing
- **Deployment Ready**: Optimized for cPanel hosting

## Project Structure

```jsx
mirabelle-ai-agent/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AIThankYouAgent.js    # Main chat component
│   │   └── responses.js           # Hardcoded AI responses
│   ├── App.js                     # Main app component
│   ├── index.js                   # App entry point
│   └── index.css                  # Tailwind + custom styles
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies and scripts
```

## Customization

### Colors

- **Primary**: Custom navy blue (`#1B263B`)
- **Neutral**: Gray scale palette
- **Accents**: Purple and blue gradients

### Fonts

- **Primary**: Helvetica Neue
- **Fallback**: Arial, sans-serif

### Components

- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.card`
- **Inputs**: `.input-field`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone git@github.com:mirabelle514/Mirabelle-AI-Agent.git

# Navigate to project directory
cd Mirabelle-AI-Agent

# Install dependencies
npm install

# Start development server
npm start
```

### Build for Production

```bash
# Create production build
npm run build

# The build folder will contain optimized files for deployment
```

## Deployment

### cPanel Deployment

1. Run `npm run build` to create production files
2. Upload the contents of the `build` folder to your cPanel public_html directory
3. Ensure your domain points to the correct directory
4. The app will be available at your domain

### Alternative Hosting

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the gh-pages branch

## Usage

### For Interviewers

- Ask questions about Mirabelle's experience
- Request the thank you message
- Download the reference letter from her Indeed manager
- Learn about her technical skills and collaboration style

### Quick Questions Available

- "Can you give me the thank you message?"
- "Do you have a reference letter from her manager?"
- "What makes Mirabelle special?"
- "Tell me about her AI experience"
- "How would she improve our UX team?"

## Purpose

This AI agent demonstrates:

- **Technical Skills**: React, Tailwind CSS, modern web development
- **UX Design**: Intuitive chat interface, professional styling
- **Innovation**: AI-powered interaction without external dependencies
- **Professionalism**: Clean, corporate-ready design

## Configuration

### Tailwind Customization

Edit `tailwind.config.js` to modify:

- Color palette
- Font families
- Spacing scales
- Custom animations

### Response Customization

Edit `src/components/responses.js` to modify:

- AI responses
- Question mappings
- Response logic

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal project for Mirabelle's job applications. For questions or feedback, please reach out directly.

## License

Personal project - All rights reserved.

---

**Built with ❤️ by Mirabelle using React + Tailwind CSS**
