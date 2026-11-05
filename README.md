# Denis Sidorenko — CV

Bilingual (English / Russian) CV site, hosted on GitHub Pages. Plain HTML/CSS/JS, no build step.

## Files

- `cv-data.js` — all CV content, each text field has `en` and `ru` versions. Edit this to update the CV.
- `script.js` — renders the page, handles the language switch.
- `styles.css` — styles (light/dark theme follows the system; print styles power the "Save as PDF" button).

## Language

- Link to a specific language: `?lang=en` or `?lang=ru`.
- Without the parameter, the last chosen language is used, otherwise the browser language.

## Local preview

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.
