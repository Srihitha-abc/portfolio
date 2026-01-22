# Srihitha's Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript (vanilla, no frameworks).

## 📁 Folder Structure

```
portfolio/
├── index.html           # Main HTML file with all sections
├── style.css           # Complete styling with dark theme
├── script.js           # JavaScript for animations and interactivity
├── assets/             # Folder for images and documents
│   └── Resume.pdf      # Your resume (place here)
└── README.md           # This file
```

## 🎨 Features

### Design & Layout
- **Dark Theme**: Modern dark color scheme with indigo/purple accents
- **Responsive Design**: Mobile-first approach, works on all devices
- **Professional Layout**: Clean and organized sections
- **Consistent Typography**: Google Fonts (Poppins & Roboto)

### Sections Included
1. **Navigation Bar** - Sticky navbar with smooth scrolling
2. **Hero Section** - Eye-catching introduction with typing animation
3. **About Me** - Personal introduction and background
4. **Education** - Educational qualifications with details
5. **Skills** - Technical skills organized by category
6. **Projects** - Showcase of projects with descriptions
7. **Achievements** - Recognition and accomplishments
8. **Resume** - Downloadable resume button
9. **Contact** - Contact form and contact information
10. **Footer** - Copyright and credits

### Animations & Effects
- ✨ **Typing Animation** - Hero section with rotating text
- 🎯 **Fade-in on Scroll** - Sections animate when they come into view
- 🎪 **Hover Effects** - Interactive hover effects on cards and buttons
- 🔄 **Smooth Scrolling** - Smooth navigation between sections
- ⬆️ **Bounce Animation** - Scroll indicator in hero section
- 🎨 **Gradient Effects** - Modern gradient buttons and text

### Functionality
- **Mobile Menu** - Hamburger menu for mobile devices
- **Smooth Scrolling** - All navbar links scroll smoothly
- **Contact Form** - Frontend contact form with validation
- **Social Links** - Links to LinkedIn, GitHub, and Email
- **Keyboard Navigation** - Fully accessible with keyboard
- **Print Friendly** - Optimized layout for printing

## 🚀 Getting Started

### 1. Add Your Resume
- Place your resume PDF file in the `assets/` folder
- Name it `Resume.pdf` (or update the filename in index.html and the download link)

### 2. Customize Content
Open `index.html` and update the following sections with your information:

**In the Hero Section:**
- Name is already set to "Srihitha Chittampally"
- Hero description is customized

**In About Section:**
- Your about me description is included

**In Education Section:**
- All your education details are included

**In Skills Section:**
- All your technical skills are organized by category

**In Projects Section:**
- Your 2 main projects are showcased

**In Achievements Section:**
- All your achievements are listed

**In Contact Section:**
- Your email, phone, LinkedIn, and GitHub are included

### 3. Customize Colors (Optional)
Edit the CSS variables in `style.css` to change the theme:

```css
:root {
    --primary-color: #6366f1;      /* Main color (indigo) */
    --secondary-color: #a78bfa;    /* Secondary color (light purple) */
    --accent-color: #ec4899;       /* Accent color (pink) */
    /* ... other colors ... */
}
```

### 4. Run Locally
Simply open `index.html` in your web browser:
- Double-click `index.html` file, or
- Open with VS Code Live Server extension, or
- Use any local server (Python: `python -m http.server`)

## 🔧 Customization Guide

### Add a New Project
In `index.html`, duplicate a project card in the Projects section:

```html
<div class="project-card fade-in">
    <div class="project-header">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Project Title</h3>
    <p class="project-date"><strong>Year:</strong> 2025</p>
    <p class="project-description">Project description here...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
    </div>
    <a href="#" class="btn btn-small">Learn More</a>
</div>
```

### Change Color Theme
Edit the color variables in `style.css`:
- `--primary-color`: Main color
- `--secondary-color`: Secondary gradient color
- `--accent-color`: Highlight color
- `--bg-primary`: Dark background
- `--bg-secondary`: Medium background
- `--text-primary`: Main text color

### Add More Sections
1. Add a new `<section>` in `index.html`
2. Add a navbar link pointing to it
3. Style it in `style.css`
4. Add animations in `script.js` if needed

## 🎯 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## 📦 External Resources
- **Google Fonts**: Poppins & Roboto fonts
- **Font Awesome 6.4**: Icons for the website
- No other dependencies required!

## 🎓 Code Structure

### HTML (`index.html`)
- Clean semantic HTML5 structure
- Well-organized sections
- Commented key areas
- Easy to customize

### CSS (`style.css`)
- 18+ organized sections
- CSS variables for easy customization
- Mobile-first responsive design
- Smooth transitions and animations
- Print-friendly styles

### JavaScript (`script.js`)
- 20+ functional modules
- No external dependencies
- Well-commented code
- Modular and maintainable

## ✨ Best Practices Used
- Semantic HTML5
- BEM naming conventions in CSS
- Smooth animations and transitions
- Accessibility features
- Mobile-first approach
- Performance optimized
- Well-commented code

## 📋 Placeholder Content

The portfolio includes content based on your information:
- **Name**: Srihitha Chittampally
- **About**: Your about me description
- **Education**: VNR Vignana Jyothi Institute, Sri Chaitanya colleges
- **Skills**: Python, C, Java, HTML, CSS, JavaScript, MySQL, Data Science
- **Projects**: Customer Segmentation & Sign Language Recognition
- **Contact**: Your email, phone, LinkedIn, GitHub

## 🐛 Troubleshooting

### Resume PDF not downloading?
- Ensure `Resume.pdf` is placed in the `assets/` folder
- Check the file path in the download link

### Navbar links not working?
- Make sure the section IDs match the href values
- Example: `href="#about"` should match `<section id="about">`

### Styling not loading?
- Clear browser cache (Ctrl+Shift+Del)
- Ensure `style.css` and `script.js` are in the same folder

### Animations not working?
- Check browser compatibility
- Ensure JavaScript is enabled
- Clear cache and refresh

## 📝 Notes for Future Updates

### Areas to Personalize:
1. Profile picture (add image to assets folder and update HTML)
2. Project links (update "Learn More" buttons with actual project links)
3. Resume download link (update the href if filename differs)
4. Social media links (already customized with your profiles)
5. Contact email (already set to your email)

### Enhancement Ideas:
- Add a blog section
- Implement a testimonials carousel
- Add a theme toggle (dark/light mode)
- Include a working contact form backend
- Add project image galleries
- Implement scroll-triggered counters
- Add a timeline for experience

## 📄 License

This portfolio template is provided as-is for personal use.

## 🤝 Support

If you have any questions about the code or need customization help, refer to:
- HTML comments in index.html
- CSS section headers in style.css
- JavaScript function headers in script.js

---

**Happy Coding! 🎉**

Built with passion using vanilla HTML, CSS & JavaScript
