# Thilina Sandaruwan – Portfolio

Personal portfolio website built with React + Vite.

## Run

```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Updating the content

All text lives in **`src/data/profile.js`**: contact details, intro, stats, experience, projects, skills,
education, awards and leadership. Edit it and the site updates.

| What | Where |
|---|---|
| Profile photo | `public/images/thilina.webp` (`thilina.jpg` is used for link previews) |
| Project screenshots | `public/images/` – set `image: '/images/file.webp'` on a project |
| Project links | add `link: 'https://…'` to a project to show a "View project" link |
| Download CV button | put the PDF in `public/` and set `cv: '/your-cv.pdf'` in `profile` |
| Colours and layout | `src/styles.css` (dark and light theme variables at the top) |

## Features

- Single page with sticky navigation that highlights the current section
- Dark / light theme, remembered between visits
- Animated hero, counters and scroll reveals (reduced for users who prefer less motion)
- Architecture diagram for the Evoluer.lk platform
- Contact form that opens the visitor's email app with the message filled in, plus copy buttons
- Responsive down to small phones

## Deploying

The build output in `dist/` is a static site. It can be hosted for free on GitHub Pages, Netlify or Vercel.
