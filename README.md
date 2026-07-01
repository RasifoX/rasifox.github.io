# rasifox.github.io

My personal site and portfolio. Static, with no build step: plain HTML, CSS, and a
small script that pulls my public repositories from the GitHub API and renders them.

## Local preview

Open `index.html` directly, or serve the folder:

    python3 -m http.server 8000

Then visit http://localhost:8000.

## Structure

- `index.html` page content
- `styles.css` styling
- `main.js` fetches and renders the featured repositories
