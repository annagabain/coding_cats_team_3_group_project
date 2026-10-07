# Kokvrån – Café Website

### Hyper Island FED 2028 · Freelance Test · Coding Cats (Team 3)

<img width="600" alt="Coffee and croissant at a cafe, hero section" src="https://github.com/user-attachments/assets/ae17590e-bf9e-448b-b7be-0dfb3f819c44" />

A responsive website for **Kokvrån**, a small neighbourhood café on Kärrtorp Square in Stockholm. Kokvrån wants to be "a second living room": a place for morning coffee, lunch, an afternoon break or a glass of wine on a Friday. The site shows what the café offers, when it is open and what events are coming up.

**Live site:** [oksana-konopelska.github.io/coding_cats_team_3_group_project](https://oksana-konopelska.github.io/coding_cats_team_3_group_project/)

---

## Pages

| Page     | File           | What's on it                                                                                                  |
| -------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| Home     | `index.html`   | Hero section with call-to-action buttons, an intro to the café, a photo gallery, opening hours and the footer |
| Events   | `events.html`  | Cards for upcoming events: Afterwork, Art and Kärrtorp comedy nights                                          |
| Our Food | `ourfood.html` | Menu page (work in progress)                                                                                  |

## Features

- **Responsive layout** built mobile-first, with a breakpoint at 768px
- **Mobile burger menu** that opens a full-screen navigation overlay, with separate desktop navigation
- **Opening hours anchor link**: "Open Hours" in the menu jumps straight to that section on the home page and closes the mobile menu
- **"To the Top" button** fixed in the corner of the screen
- **Smooth scrolling** between sections
- **Footer contact links** to Google Maps, email and Instagram, with inline SVG icons
- **Local fonts**: DM Sans and Alegreya Sans, loaded with `@font-face`
- **Compressed images** for faster loading

## Tech Stack

- HTML5
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript
- GitHub Pages for hosting

No frameworks, build tools or dependencies are used.

## Project Structure

```
coding_cats_team_3_group_project/
├── index.html      # Home page
├── events.html     # Events page
├── ourfood.html    # Our Food page
├── styles.css      # Shared styles: variables, fonts, navigation, layout
├── hero.css        # Hero section styles (home page only)
├── script.js       # Mobile menu open/close logic
├── fonts/          # DM Sans and Alegreya Sans (.ttf)
├── images/         # Photos and SVG icons
├── LICENSE         # CC0 1.0 Universal
└── README.md
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/oksana-konopelska/coding_cats_team_3_group_project.git
   cd coding_cats_team_3_group_project
   ```
2. Open `index.html` in your browser, or use the **Live Server** extension in VS Code. The project is set to use port `5503`.

## How the Mobile Menu Works

`script.js` uses one shared function, `toggleNav()`, which adds or removes the `open` class on the menu container. The function runs when you tap the burger icon, the close (X) button or the "Open Hours" link.

```js
function toggleNav() {
  mobileNavContainer.classList.toggle("open");
}
```

The menu is hidden by default (`display: none`), and the `.open` class switches it to `display: flex`. It has `z-index: 60` so it appears above the hero section (`z-index: 20`).

> Every page that has the mobile menu must include `<script src="script.js"></script>` just before `</body>`. Without it, the burger icon won't respond.

## Design Tokens

Colours and fonts are stored as CSS custom properties in `:root` in `styles.css`:

| Token                | Value         | Used for                        |
| -------------------- | ------------- | ------------------------------- |
| `--background-green` | `#9cb58a`     | Backgrounds and the mobile menu |
| `--kokvran-red`      | `#830b0b`     | Brand colour, links and buttons |
| `--text`             | `#000000`     | Body text                       |
| `--font-heading`     | Alegreya Sans | Headings and the menu           |
| `--font-header`      | DM Sans       | Header text                     |

## Team Workflow

- Each task is a GitHub issue with its own branch (for example `8-mobile-navbar` or `42-opening-hours-anchor-tag`).
- Work is merged into `main` through pull requests.
- Commit messages are tagged to show how the work was done:
  - `[manual]`: written by a team member
  - `[ai]`: an AI tool helped find or explain the problem, with an explanation in the commit body

## Known Issues / To Do

- [ ] Finish the content on the **Our Food** page
- [ ] Add the mobile navigation and `script.js` to `ourfood.html`
- [ ] Remove the link to `home.css` in `index.html`, because the file doesn't exist
- [ ] On `events.html`, point the mobile "Open Hours" link to `index.html#openinghours-anchor-link`
- [ ] Write descriptive `alt` text for the gallery images
- [ ] Remove the unused `z-index` from `.container` in `styles.css`

## Team

**Coding Cats – Team 3**

- Oksana Konopelska
- Anna Gabain
- Margarita Nikulina

## License

This project is released under the [CC0 1.0 Universal](LICENSE) license.
