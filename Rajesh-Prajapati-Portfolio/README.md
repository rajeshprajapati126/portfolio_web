# Rajesh Prajapati — Data Engineering Portfolio

A complete, responsive portfolio based on Rajesh's supplied résumé. Forest green, warm off-white, and lime; custom isometric SVG illustrations; animated data flow; three project case studies; accessible expertise tabs; dark mode; mobile navigation; and a downloadable résumé.

**Plain HTML, CSS, and JavaScript. No installation, framework, API keys, database, or paid service required.**

## See it locally

Open **index.html** in a browser. All graphics, styles, scripts, and the résumé are included locally. The website works without an internet connection.

For a local server, if Python is installed:

    python3 -m http.server 8000

Then visit http://localhost:8000.

## Free hosting on GitHub Pages

1. Create a public GitHub repository, for example **portfolio**. GitHub Pages is available for public repositories on GitHub Free.
2. Upload the **contents** of this folder to the repository's main branch. Ensure **index.html**, **styles.css**, **script.js**, and the **assets** folder appear at the repository's top level, rather than inside an extra folder. Upload the extracted files, not the ZIP itself.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/(root)**, then **Save**.
5. GitHub will display the published website URL on the Pages settings screen when deployment completes. It usually follows the pattern https://YOUR-USERNAME.github.io/portfolio/.

For a root-level personal URL, name the repository YOUR-USERNAME.github.io. You do not need a custom domain.

Keep the included **.nojekyll** file when uploading through Git or a client that includes hidden files. The site is plain HTML and does not require Jekyll. All asset references are relative, so both personal and project Pages URLs work.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Other static hosting

The same folder can be published on any static web host. Upload this folder as the publish directory; no build command is required. If a host requests an output directory, the optional command **npm run build** or **node tools/build.mjs** creates a clean **dist/** folder using only Node's built-in modules.

## Customize

| Change | File |
| --- | --- |
| Name, introduction, job history, contact links, certifications | index.html |
| Project details and expertise tab content | script.js |
| Colors, spacing, typography, responsive layout | styles.css |
| Downloadable résumé | assets/Rajesh-Prajapati-Resume.pdf |
| Browser icon | assets/favicon.svg |
| Social share artwork | assets/social-preview.svg |

Replace the résumé PDF with an updated file of the same name to preserve the download links. Use the contact email and LinkedIn link already provided, or update their occurrences in index.html and script.js.

## Accessibility and behavior

- Keyboard navigation, visible focus indicators, skip link, and mobile navigation.
- Arrow-key navigation for tabs; native modal dialogs support Escape and return focus to their trigger.
- Respects the device's reduced-motion preference; pipeline animations also have a pause control.
- Theme preference is saved in the visitor's browser when local storage is available.
- Contact opens the visitor's email app; the copy button copies the address with a readable fallback.
- No analytics or cookies are added. Career content remains readable if JavaScript is unavailable.

All work examples describe professional résumé contributions, with simplified illustrative graphics. No company source code or confidential datasets are included.

## Social sharing

The included SVG artwork is editable. Some social networks require PNG or JPEG for link previews; export that artwork to a 1200 × 630 PNG and update the og:image tag to an absolute URL on your final host if a social preview is needed.

## Project files

    index.html                 Page content and graphics
    styles.css                 Responsive styles and themes
    script.js                  Browser interactions and case study data
    assets/                    Résumé and SVG artwork
    tools/build.mjs            Optional dependency-free static packaging
    package.json               Optional build command
    .nojekyll                  Static GitHub Pages support

No GitHub account is connected by this download. Upload the files to your own repository to publish your public portfolio.
