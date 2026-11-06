# RF Portfolio

Personal site built with Vite + React.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs /dist

## Edit
- All text, name, email and links: `src/content.js`
- Headshot: save as `public/photo.jpg`; resume: `public/resume.pdf`
- Styles and colours: `src/styles.css`
- Spectrum graph: `src/components/SpectrumDemo.jsx`

## Deploy
Upload `dist/` to Netlify, Vercel, or GitHub Pages (build command `npm run build`, output `dist`).

## Structure
    rf-portfolio/
    ├─ index.html
    ├─ package.json
    ├─ vite.config.js
    ├─ public/            photo.jpg, resume.pdf
    └─ src/
       ├─ main.jsx        entry
       ├─ App.jsx         page layout
       ├─ content.js      all editable content
       ├─ styles.css
       └─ components/
          ├─ Sections.jsx
          └─ SpectrumDemo.jsx
