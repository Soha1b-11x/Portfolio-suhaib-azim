# Suhaib Azim - Portfolio Website

A modern, professional personal portfolio website built with React.js, showcasing my skills, projects, and experience as a MERN Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0f/10b981?text=Portfolio+Screenshot)

## 🚀 Features

- **Modern Dark Theme**: Sleek dark design with emerald green accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive Navbar**: Sticky navigation with active section highlighting
- **Animated Hero Section**: Dynamic role typing effect
- **Skills Showcase**: Categorized skill cards with icons
- **Featured Projects**: Detailed project presentation with tech stack and features
- **Education Timeline**: Academic journey visualization
- **Contact Form**: Frontend contact form (no backend integration yet)
- **Social Integration**: Links to LinkedIn, GitHub, LeetCode, and Codeforces

## 🛠️ Tech Stack

- **Frontend Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd suhaib-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🏗️ Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
suhaib-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Social Links**: Update placeholder `#` URLs in:
   - `src/sections/Hero.jsx`
   - `src/sections/Contact.jsx`
   - `src/components/Footer.jsx`

2. **Projects**: Modify project details in:
   - `src/sections/Projects.jsx`

3. **Resume**: Add your resume PDF to:
   - `public/resume.pdf`

4. **Colors**: Customize the color scheme in:
   - `tailwind.config.js` (change `primary` color)

### Theme Colors

Current theme uses emerald green (`#10b981`) as the primary accent. To change:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#10b981', // Change this to your preferred color
    },
  },
}
```

## 📱 Sections

1. **Home**: Hero section with animated role titles
2. **About**: Introduction and background information
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured project showcase
5. **Education**: Academic timeline with results
6. **Resume**: Downloadable resume section
7. **Contact**: Contact information and form

## 🌐 Deployment

This project can be deployed on various platforms:

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder using Vercel CLI or dashboard
```

### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## 📝 To-Do

- [ ] Add your actual resume PDF to `/public/resume.pdf`
- [ ] Update social media URLs (LinkedIn, GitHub, LeetCode, Codeforces)
- [ ] Update project GitHub and Live Demo links
- [ ] Add more projects as you build them
- [ ] Integrate backend for contact form functionality
- [ ] Add blog section (optional)
- [ ] Add testimonials section (optional)

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize it for your own use!

## 📄 License

MIT License - feel free to use this project for your own portfolio.

## 👨‍💻 Developer

**Suhaib Azim**
- MERN Stack Developer
- BCA Student at Aggarwal College, Ballabgarh (MDU)
- Email: suhaibazim96@gmail.com
- Phone: +91 88519 28370

---

**Note**: This is a frontend-only portfolio. The contact form does not currently send emails. You'll need to integrate a backend service (like EmailJS, Formspree, or your own API) to handle form submissions.

Made with ❤️ using React.js and Tailwind CSS
