# Vesper Cine website

Static site for Vesper Cine. No build step: plain HTML, CSS and JS, served by GitHub Pages.

- `index.html`: home page (hero, pipeline, features, Log/graded slider, devices, pricing, FAQ)
- `privacy.html`: privacy policy (Google Play)
- `changelog.html`: release notes, generated from `lib/ui/changelog.dart` in vesper-cine

## Replacing placeholders
Search for `PLACEHOLDER` in the HTML files. To find them:
- Images live in `assets/img/`. Replace `screen-placeholder.svg`, `log-placeholder.svg` and `graded-placeholder.svg` (keep 16:9 for the comparison images), then update the `src` attributes. Add `og-image.jpg` (1200×630) for link previews.
- For fast loading, export images as WebP/AVIF, about 1600 px wide, for example: `cwebp -q 82 in.jpg -o log.webp`.
- Play Store URL: replace the `href="#pricing"` on the Google Play buttons.
- Support email: in the footer and in `privacy.html`.

## Custom domain
Add the DNS record `CNAME  vesper  →  dwaipayanray95.github.io`, then add a `CNAME` file containing `vesper.theawesomeray.com` and enable "Enforce HTTPS" in Settings → Pages.
