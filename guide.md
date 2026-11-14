# Site guide

How to edit, publish and monitor the site. Written for the version with four menu entries: Home, Research, Resources, Contacts.

Placeholders in `CAPITALS` or `<angle brackets>` are values you replace. The GitHub username used in examples is `ceschi`, taken from your existing links; change it if wrong.

---

## Before you publish: checklist

1. `linkedin:` in `site-data.js` still holds a placeholder (`YOUR-PROFILE`). Put your real LinkedIn address there. It feeds the home page link and the Contacts page.
2. The footer date `Updated ...` is set automatically at every deployment (section 9.3). Only set `updated:` by hand if you do not use the workflow.
3. Analytics (section 8): paste your Measurement ID in `analyticsId`. It is `G-XXXXXXXXXX` now, so the cookie notice shows but nothing is sent to Google. Or set it to `''` to remove tracking and the notice.
4. Privacy notice (section 8.6): in `site-data.js`, block `privacy`, replace every `[BRACKET]` (name, address, date, supervisory authority) and have the text checked. Add a legal notice (Impressum) if you need one.
5. Replace `papers/cv.pdf` with your CV (same name), replace links to papers with relative `papers/...` links and add the PDFs (sections 9.2 and 9.4). Add chart images if you have them (section 9.1).
6. Check that no email address appears in plain text in `site-data.js` (section 3.7).

---

## 1. What the files are

```
site/
  index.html        layout and styles (was site-v3.dc.html)
  site-data.js      ALL content: papers, links, texts, analytics ID. Edit this most.
  support.js        runtime. Do not edit.
  assets/           the 5 pictures
  fonts/            the Inter font files and its licence (do not delete the licence)
  vendor/           React, the library the page runs on
  papers/           your PDFs and slides (add them here); cv.pdf is your CV
  charts/           chart images for the research entries; placeholder.svg is the grey default
  build-info.js     filled in automatically at deployment (section 9.3). Do not edit.
  .github/workflows/pages.yml   the automatic deployment (section 9.3)
  CLAUDE.md         notes for Claude Code (not published)
  guide.md          this guide (not published)
  .nojekyll         tells GitHub Pages to serve the files as they are
```

The site is self-contained: the font and React are served from its own folders, so visitors' browsers contact no other company's server to display it. (Google Analytics, if you switch it on, is the only exception, and only after a visitor accepts.)

## 2. Preview on your computer

1. Open a terminal in the `site/` folder.
2. Run `python3 -m http.server 8000`.
3. Open `http://localhost:8000` in a browser.
4. Edit a file, save, refresh the browser.

Opening `index.html` by double-click does not work reliably. Use the local server.

## 3. Edit content in `site-data.js`

Everything is plain text between quotes. Keep the quotes, commas and brackets as they are. If the page goes blank after an edit, a quote or comma is broken: undo the last edit.

An apostrophe inside single quotes must be written as the curly character ’ (as in the existing text) or escaped as `\'`.

### 3.1 General texts

Block `text: { ... }` near the top. Each line is one piece of text:

| Key | Where it appears |
|---|---|
| `showEmail` | Text of the button that reveals an email address on Contacts |
| `cookieTitle`, `cookieText`, `cookieMoreLabel`, `cookieAccept`, `cookieDecline` | Texts of the cookie notice. The link goes to the privacy notice |
| `cookieSettings`, `privacyLink` | Footer links: reopen the cookie notice, open the privacy notice |
| `homeRole` | Line under your name on the home header |
| `homeTagline` | Large sentence next to the portrait |
| `homeBio` | Paragraph under the tagline |
| `homeDisclaimer` | Italic paragraph under the bio |
| `dataIntro` | Short text under "Data sources" |
| `dataNoteBefore`, `dataNoteLinkLabel`, `dataNoteLinkUrl`, `dataNoteAfter` | Note at the bottom of Data sources. The sentence is `before` + link + `after`; the link is the label with its URL. |
| `codesIntro` | Short text under "Code & datasets" |
| `blogsIntro` | Short text under "Blogs & reading" |

The `updated:` line at the top sets the "Updated" date in the footer. Change it by hand when you publish an update.

### 3.2 Research entries

Entries live in `research:`, in five groups: `pub` (Publications), `policy` (Policy work), `wip` (In progress), `long` (Longer-term), `other` (Other). One entry per line:

```js
{year:'2022', topics:['Inflation'], title:'Paper title', url:'papers/paper.pdf',
 venue:'Journal name', with:'A. Coauthor and B. Coauthor',
 abstract:'Full abstract, shown under the entry; the "Hide abstract" button collapses it.',
 links:[{label:'Slides', url:'papers/slides.pdf'}]},
```

All fields except `title` are optional. Leave a field out and it does not appear.

- Edit the description of an entry: change `abstract`.
- Add an entry: copy a whole line inside the right group, paste it under another entry of that group, change the text.
- Years: `year:''` shows a dash.
- Topics: the filter buttons come from the `topics:[...]` list near the top. To add a topic, add it there and then use the same spelling in each entry's `topics`.
- The "In progress" and "Longer-term" groups are shown together under one heading "Work in progress", with a small sub-header each.

### 3.3 Resources and Contacts entries

| List | Fields per line |
|---|---|
| `data` (Data sources) | `name`, `desc`, `url` |
| `codes` (Code & datasets) | `tag`, `name`, `desc`, `url` |
| `blogs` (Blogs & reading) | `name`, `note`, `url` |
| `contacts` | Website or profile: `label`, `value`, and either `url` or `ref`, plus `target` (`'_blank'`). Email: `label` and `email64` (see 3.7) |

`desc` and `note` are the descriptions shown under each entry: edit them freely.

### 3.4 Add, hide, comment out, delete

**Add**: copy one full line of the list, paste it in the list, change the text and the link.

**Hide** an entry but keep it: add `hidden:true,` right after the opening brace.

```js
{hidden:true, name:"FRED", desc:"...", url:"..."},
```

Remove `hidden:true,` to show it again. Works for research entries, data, codes, blogs and contacts.

**Comment out** an entry: put `//` at the start of its line.

```js
// {name:"FRED", desc:"...", url:"..."},
```

This is safe in `data`, `codes`, `blogs` and `contacts`: each entry is one line ending with a comma. Do not use it on the last entry of a research group (the line ends with `]},`, which also closes the group): use `hidden:true` there.

**Delete**: remove the whole line.

**Hide a whole section** of the Resources page: in the `show:` line, set `data`, `codes` or `blogs` to `false`.

```js
show: {data:true, codes:false, blogs:true},
```

### 3.5 Link to papers and other files

- Put the file in `site/papers/`, then link it with a relative path: `url:'papers/inflationpers.pdf'`. It opens directly on your own site.
- Your current links use `github.com/.../blob/...` (opens GitHub's viewer) or `raw.githubusercontent.com/...` (often forces a download). Relative paths replace both. Use lowercase names without spaces.
- External pages (journal, working paper, dataset) are just full URLs starting with `https://`.
- Before replacing a link, open it once and check it still works. Several of the current links are old.

### 3.6 Links under the bio on the home page

The block `homeLinks: [ ... ]` in `site-data.js` lists them: IDEAS RePEc, CV, X / Twitter and LinkedIn. The CV link opens the CV page of the site (section 9.2) and the other links open in a new tab. Each line has a `label` (the text shown) and `ref`, the name of an address defined at the top of the file (`repec`, `cv`, `twitter`, `linkedin`). The same addresses feed the Contacts page, so you change each one in one place. A line can also have its own `url` instead of `ref`. Add, hide (`hidden:true`), comment out or delete lines as in 3.4.

The LinkedIn address (`linkedin:` near the top) is a placeholder until you replace it.

### 3.7 Email addresses on the Contacts page

Addresses are not stored as readable text. Each contact line holds `email64`, the address encoded in base64. The page decodes it only when a visitor clicks "Show email address", so the address is not in the page or the file as plain text. This stops scrapers that read files without clicking. It does not stop a visitor, or a scraper driving a full browser, that clicks the button.

To add or change an address, encode it:

- Mac or Linux terminal: `printf '%s' 'name@example.com' | base64`
- Windows PowerShell: `[Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes('name@example.com'))`
- Any browser: open the developer console (F12) and run `btoa('name@example.com')`

Then paste the result:

```js
{label:"Work", email64:"bmFtZUBleGFtcGxlLmNvbQ=="},
```

Never paste the plain address into `site-data.js`, `index.html` or this guide if you publish them. Remember that the encoded text is only an obfuscation, not encryption: anyone who finds `email64` can decode it. If an address was ever published in plain text (old site, GitHub history), copies may already exist.

### 3.8 Privacy notice text

The block `privacy: { ... }` in `site-data.js` is the page opened by the "Privacy" footer link and by the link in the cookie notice. It has a `title`, an `updated` line and a list of `sections`, each with a heading `h` and a list of paragraphs `paras`. Edit the text between the quotes, add a section by copying one, delete one by removing its block. Replace every `[BRACKET]`: your name, postal address, the date and the data protection authority. It is a template, not legal advice: have it checked. If you add or remove tools that process visitor data, change this text too.

## 4. How the Resources page behaves

- Pages in the menu: Home, Research, Resources, Contacts. The old Parerga page is merged into Resources; an old `#parerga` link opens Resources.
- Data sources, Code & datasets and Blogs & reading are three independent sections.
- On a wide screen (1000 px and up) they are three equal columns side by side. If you hide one with the `show:` line, the other two share the width.
- On a narrower screen (phone, tablet) the three sections stack one above the other and start collapsed. Tapping a title opens or closes it.
- The breakpoint is the number `999` in `index.html`, in the text `(max-width: 999px)`. Lower it only if the columns still look readable at that width.

## 5. Pictures

Where they are used (file names in `assets/`):

| Page | File |
|---|---|
| Home header | `sat-coast.jpg` |
| Home portrait | `portrait.jpg` |
| Research header | `lighthouse.jpg` |
| Resources header | `cranes.jpg` |
| Contacts header | `sat-white.jpg` |

### Replace a picture with a better one

1. Prepare the file (sizes below).
2. Save it in `assets/` under the same name. The page then shows the new picture without any code change.
3. Hard-refresh the browser (Ctrl+Shift+R, or Cmd+Shift+R on Mac), because browsers cache images.

### Use a different picture

1. Save it in `assets/` with a simple name, for example `harbour.jpg`.
2. In `index.html`, search for the old file name (for example `lighthouse.jpg`) and change it in the `<img src="./assets/OLD.jpg"` line of that page.
3. For the portrait, search for `portrait.jpg` in `index.html` and change it the same way.

### Which part of a picture is shown

Header pictures are cropped to fit a wide strip on a laptop and a tall strip on a phone. Choose what stays visible in `site-data.js`, in the lists `imageFocus` (laptop and tablet) and `imageFocusPhone` (phone):

```js
imageFocus: {home:'50% 50%', research:'50% 85%', resources:'50% 50%', contacts:'50% 30%', portrait:'50% 18%'},
```

Each value is two numbers: horizontal and vertical position, in percent. `0%` is the left or top edge of the picture, `50%` the centre, `100%` the right or bottom edge. A larger second number shows more of the lower part of the picture, a smaller one more of the upper part. Change a number, save, refresh. For wide pictures the vertical number matters on a laptop and the horizontal number on a phone.

### Sizes

Headers are shown full width and cropped to fit (`object-fit: cover`), so the subject must survive a wide crop on laptops and a tall crop on phones. Keep the subject near the centre or lower third.

| Picture | Recommended pixels | Notes |
|---|---|---|
| Header | 2400 to 2800 wide, at least 1400 tall | Sharp on retina laptops and 4K screens |
| Portrait | 1200 x 1500 (ratio 4:5) | Face in the upper part: the code centres the crop at 18% from the top |

Keep each file under about 1 MB. Larger files slow the site on phones and fill the repository.

With ImageMagick:

```
magick input.jpg -resize 2600x -strip -quality 82 assets/cranes.jpg
```

(`-strip` removes metadata.) With ExifTool, to remove location and camera data from a photo you took yourself: `exiftool -all= photo.jpg`. Do this before publishing personal photos: phone photos usually contain GPS coordinates.

Use pictures you own or are licensed to reuse.

### Fonts

The whole site uses Inter. The font files are in `fonts/` and are loaded by the two `@font-face` blocks at the top of the `<style>` in `index.html`, so no request goes to Google. Do not add a Google Fonts `<link>`: it sends every visitor's IP address to Google, and a German court ruled in 2022 that doing so without consent breached the GDPR.

To change the font: get the font as `.woff2` files from a self-hosting source (for example the npm packages `@fontsource/...` or `@fontsource-variable/...`, which contain the files and their licence), put them in `fonts/`, change the file names and the family in the `@font-face` blocks, replace `'Inter'` with the new family name in the rest of `index.html` (it appears about 30 times), and keep each font's licence file in `fonts/`.

## 6. Put the site on GitHub in a test repository

A test repository lets you try GitHub Pages without touching your current site.

### 6.1 Get the files

Use the `site-files` folder from the zip you were sent (it is the `site/` folder described in section 1, with the `index.html` name and only the 5 pictures in use). If you need a fresh copy later, ask Claude in this chat for a new zip.

### 6.2 Create the repository

1. Log in at github.com. Click New repository.
2. Name: `site-test`. Visibility: Public (GitHub Pages on a free personal account requires a public repository).
3. Do not add a README or other files. Create it.

### 6.3 Upload the files

With git (recommended, you will need it to update the site later):

```
cd path/to/site
git init
git add -A
git commit -m "first version"
git branch -M main
git remote add origin https://github.com/ceschi/site-test.git
git push -u origin main
```

GitHub asks for login on the first push. A password does not work: use a personal access token (GitHub: Settings, Developer settings, Personal access tokens) or GitHub Desktop, which handles login for you.

Without git: on the empty repository page, click "uploading an existing file" and drag the contents of the folder (including `assets`, `papers` and `charts`). Do not upload the folder itself, only what is inside it. The `.github` folder is hidden on many systems and the browser upload often skips it: create it in the GitHub web editor instead (Add file, Create new file, type the name `.github/workflows/pages.yml`, paste the content from section 9.3). Without that file the site is not published.

### 6.4 Turn on Pages

1. In the repository: Settings, Pages.
2. Build and deployment, Source: choose **GitHub Actions** (not "Deploy from a branch"). Nothing else to set: the file `.github/workflows/pages.yml` in the zip does the publishing (section 9.3).
3. Open the Actions tab of the repository: the first run starts at your push. Wait for the green tick, one to two minutes. The address is `https://ceschi.github.io/site-test/`.
4. If the page is blank, press Ctrl+Shift+R, then check that `index.html` is at the top level of the repository and not inside a subfolder.

### 6.5 Update the site later

Edit files locally, check on `localhost:8000`, then:

```
git add -A
git commit -m "describe the change"
git push
```

The live site updates in one to two minutes. Progress is in the repository's Actions tab.

### 6.6 When the test is good

Two options:

- Make this the real site: put the same files in the repository `ceschi.github.io` (your user site, served at `https://ceschi.github.io/`). Do it on a branch first so the current site is not overwritten: `git checkout -b new-site`, replace the files, push, check the branch, then merge to the branch GitHub Pages publishes (`master` according to your links).
- Or keep `site-test` and attach the domain to it. Only one repository can hold a given custom domain at a time.

## 7. Move your domain from Google Sites to GitHub Pages

What changes is the DNS (where the domain points). The domain registration stays at your registrar. You do not need to transfer the registration.

### 7.1 Before starting

1. Find out where the domain is registered and where its DNS is edited. A domain bought from Google Domains is now managed by Squarespace Domains. Otherwise it is at the registrar you paid. A WHOIS lookup (for example at who.is) shows the registrar.
2. Write down or screenshot every current DNS record. This is your rollback.
3. If the domain is used for email, note the `MX` records and the `TXT` records (SPF, DKIM, DMARC, verification). Do not delete these. Only the records for the website change.
4. Finish and test the site on the `github.io` address first (section 6).
5. One day ahead, if the DNS panel allows, lower the TTL of the website records to 300 seconds, so changes spread quickly.

### 7.2 Verify the domain in GitHub

This prevents someone else from claiming the domain on GitHub.

1. GitHub: your profile picture, Settings, Pages (left menu, "Pages" under Code, planning, and automation), Add a domain.
2. Enter the domain. GitHub shows a TXT record to add, named `_github-pages-challenge-ceschi.YOURDOMAIN`.
3. Add that TXT record at your DNS provider. Click Verify once it has spread (minutes to hours).

### 7.3 Change the DNS records

At your DNS provider, for the website only:

1. Delete the records that point to Google Sites or to a forwarding service: typically the `www` CNAME to `ghs.googlehosted.com` and any `A`/`AAAA` records on the bare domain (`@`) that you did not add for something else. If unsure what a record is for, leave it and ask before deleting.
2. Add four `A` records on `@`:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. Optional but recommended, four `AAAA` records on `@`:

   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```

4. Add a `CNAME` record: name `www`, value `ceschi.github.io` (your username only, without the repository name).
5. Do not add wildcard records such as `*.yourdomain`.

### 7.4 Tell GitHub the domain

1. In the repository that serves the site: Settings, Pages, Custom domain. Enter `yourdomain.com` and Save. GitHub adds a `CNAME` file to the repository root: if you push from your computer, run `git pull` first so you do not overwrite it.
2. Wait for the DNS check to pass (up to 24 hours, usually much less).
3. Tick Enforce HTTPS when it becomes available. It can take up to 24 hours to appear.
4. With both `yourdomain.com` and `www.yourdomain.com` set up, GitHub redirects one to the other.

### 7.5 Remove the old mapping in Google Sites

In Google Sites, open the site, Settings, and look for Custom domains; remove or unassign the domain. I could not confirm the current wording of that menu, so follow what your Google Sites settings show. Do this after the DNS change works, so the site is never offline.

### 7.6 Check

- `dig yourdomain.com +noall +answer -t A` should list the four GitHub IPs. On Windows use `Resolve-DnsName yourdomain.com` in PowerShell.
- Open `https://yourdomain.com` and `https://www.yourdomain.com`.
- Afterwards update the places that link to the old site: your CV, RePEc/IDEAS profile, ECB page, X/Twitter bio, email signature.

### 7.7 Limits worth knowing

The site is one HTML page that switches views with `#research`, `#resources`, `#contacts`. Search engines see a single URL. The pages are not separately indexed, and a shared link to `#research` opens the right view for people but is one address for Google. If search visibility of the individual pages matters, the site would need one real HTML file per page: ask Claude in this chat if you want that.

## 8. Audience statistics with Google Analytics 4

The site contains the Google Analytics code and a cookie notice. Both are ready; only your Measurement ID is missing.

### 8.1 Create the Google Analytics property

1. Go to analytics.google.com and sign in with a Google account.
2. Admin (gear icon), Create, Account. Name it freely. In the data sharing settings of the account, untick the optional options you do not need.
3. Create a Property: name, time zone, currency. Accept Google's data processing terms when asked (they are the contract under which Google processes the data for you).
4. Create a Web data stream: your site URL and a name.
5. Copy the Measurement ID, shaped like `G-AB12CD34EF`.

### 8.2 Put the ID in the site

In `site-data.js`, replace the placeholder:

```js
analyticsId: 'G-XXXXXXXXXX',   // before
analyticsId: 'G-AB12CD34EF',   // after: your real ID
```

Push the change (section 6.5). While the placeholder is there, the cookie notice shows but Google Analytics never loads. With `analyticsId: ''` the notice, the footer cookie link and tracking are all removed.

### 8.3 What the site does with it

- **First visit:** a notice at the bottom with a short text, a link to the privacy notice and two equal buttons, Decline and Accept. Nothing is requested from Google before Accept. No analytics cookie is set before Accept.
- **Accept:** the Google Analytics script loads and the visit is counted. Each time the visitor opens Home, Research, Resources, Contacts or Privacy, one page view is sent with the page name. Clicks on links to other sites and PDF downloads are counted by GA4 itself.
- **Decline:** nothing loads. The choice is remembered in the browser (`localStorage`, key `ga-consent`).
- **Change of mind:** the "Cookie settings" link in the footer reopens the notice. Declining after accepting switches tracking off and removes the `_ga` cookies where the browser allows.
- **Consent signals sent to Google:** analytics storage granted; advertising storage, advertising user data and ad personalisation denied. Google signals and ad personalisation are switched off in the code. Cookies last 13 months.
- **React and the font** are served from the site itself, so no other company's server is contacted.
- **To see the notice again while testing:** use a private window, or delete the `ga-consent` entry in the browser's developer tools (Application, Local storage).

### 8.4 Settings to change in GA4

1. Data stream, Enhanced measurement (gear icon), Page views, Show advanced settings: untick "Page changes based on browser history events". The site sends its own page views and this option could count them twice.
2. Admin, Data collection and modification, Data retention: set event data retention to 14 months (the default is 2 months). The privacy notice says 14 months, so this setting matters.
3. Admin, Data collection and modification, Data collection: leave Google signals off. The site already switches them off in the code.
4. Admin, Data streams, your stream: after your first visit the status shows data received.

### 8.5 Check that it works

Open the live site over `https`, click Accept, then open GA4, Reports, Realtime: your visit appears within a minute. If it does not: make sure the ID is correct and that you clicked Accept, and note that ad blockers and privacy extensions block Google Analytics, so the numbers always under-count.

### 8.6 What you get, and what you do not

"Basic information about visitors" means data that does not identify anyone and does not need Google signals:

| Question | Where in GA4 |
|---|---|
| Country, region, city | Reports, User, User attributes, Demographic details: choose Country, Region or City |
| Device, browser, operating system, language | Reports, User, Tech, Tech details; Demographic details: Language |
| Pages visited | Reports, Engagement, Pages and screens (names: home, research, resources, contacts, privacy) |
| Papers and files opened | Reports, Engagement, Events: `file_download` and `click` |
| Where visitors come from | Reports, Acquisition, Traffic acquisition |
| New or returning, engagement time | Reports, Engagement, Overview; Retention |

Age, gender and interest data are not collected. GA4 only produces them with Google signals, which link visits to Google accounts and need consent for advertising purposes. The notice and the privacy text do not ask for that, and I recommend against it for a personal academic site. Even with signals, small sites usually see most of that data hidden by Google's thresholds.

Numbers under-count: visitors who decline, ad blockers and privacy browsers are not counted.

### 8.7 Privacy: what is still your job

The site is built to the points below, and no tool can make a site fully compliant by itself. I am not a lawyer: check what applies to you.

- **Consent before any tracking:** done (section 8.3).
- **Equal Accept and Decline buttons, easy withdrawal:** done.
- **No third-party requests otherwise:** done. Font and React are local. External links on the site are the visitor's own choice.
- **Privacy notice:** a template is in `site-data.js`, block `privacy`. You must fill in your name, address, date and supervisory authority, and have it checked. Keep it in line with what you really do (for example if you change the retention period in GA4).
- **Legal notice (Impressum):** in Germany, websites that are not purely private generally need one with your name and an address. Whether your site needs it depends on how it is used. Check this.
- **Data transfers to the USA:** the notice states that Google LLC participates in the EU-US Data Privacy Framework. Verify that this is still true when you publish, because the framework has been challenged in court.
- **Your employer:** if you mention your employer on the site, check its rules on private websites.

### 8.8 Alternatives without cookies

GoatCounter (free for non-commercial use), Plausible, Umami (self-hosted) and Cloudflare Web Analytics count visits without cookies and give pages, referrers and country. They give no age or gender. Many of them need no cookie notice, but confirm this for your case. To use one, ask Claude in this chat to swap it in.

## 9. Charts, CV page, PDFs and automatic updates

### 9.1 Charts next to research entries

Every research entry has a chart cell on its right (under the text on a phone). Until you give an entry a chart, it shows a grey placeholder.

To add a chart to an entry:

1. Put the image in the `charts/` folder. PNG, JPG, WebP or SVG. Landscape, about 4:3 or 16:9, around 800 to 1200 px wide is enough. The whole image is shown, never cropped.
2. In `site-data.js`, add `chart:'file-name.png'` to the entry:

```js
{year:'2022',topics:[...],title:'...',url:'...',chart:'taylor-rule.png',venue:'...'},
```

Clicking a chart opens the full image in a new tab. A wrong file name falls back to the placeholder instead of a broken image. To replace a chart later, overwrite the file with the same name. To hide every chart, set `showCharts: false` near the top of `site-data.js`. To change the placeholder, replace `charts/placeholder.svg`.

### 9.2 CV page

- The header has a `CV` tab like the others. The CV link under the bio on the home page leads to the same page.
- The page shows the PDF embedded, with a Download PDF button and an Open in new tab link. Desktop browsers show the embedded file; many phone browsers do not embed PDFs and then show the text from `cvFallback`, so the two buttons are always there.
- The file is `papers/cv.pdf`, stored on your own site, not on any cloud service. To update the CV, overwrite `papers/cv.pdf` with the new file under the same name and push (section 6.5). Its address stays the same, so you can share `https://YOUR-SITE/papers/cv.pdf` too.
- The shipped `papers/cv.pdf` is only a placeholder page.
- Texts on the page (`cvTitle`, `cvDownload`, `cvOpen`, `cvFallback`) are in the `text` block of `site-data.js`.

### 9.3 Automatic "Updated" date and deployment

The file `.github/workflows/pages.yml` makes GitHub publish the site at every push and write the date of the last commit into the footer. Nothing to edit or run by hand. Content:

```yaml
# Publishes the site to GitHub Pages at every push, and stamps the footer date.
name: Deploy site
on:
  push:
    branches: [main, master]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Copy the site files (notes and workflow stay out of the published site)
        run: |
          mkdir _site
          rsync -a --exclude='.git' --exclude='.github' --exclude='_site' --exclude='CLAUDE.md' --exclude='guide.md' ./ _site/
      - name: Write build info (date of the last commit, short commit id)
        run: |
          D=$(TZ=Europe/Berlin git log -1 --format=%cd --date=format-local:%Y/%m/%d)
          echo "window.SITE_BUILD={updated:'$D',stamp:'${GITHUB_SHA::7}'};" > _site/build-info.js
      - uses: actions/configure-pages@v6
      - uses: actions/upload-pages-artifact@v5
        with:
          path: _site
      - id: deployment
        uses: actions/deploy-pages@v5
```

What it does at each push to `main` or `master`:

1. Copies the repository into a clean folder, leaving out `.github`, `CLAUDE.md` and `guide.md`, so these notes are not published.
2. Writes `build-info.js` (in that copy only) with the date of the last commit (Frankfurt time, as `2026/11/14`) and the short commit id.
3. Publishes the result to GitHub Pages.

Setup, once: Settings, Pages, Source: GitHub Actions (section 6.4). If you also have the old option "Deploy from a branch" selected, switch it.

Notes:

- The footer shows the date of the last commit, whichever file it changed. A push that only fixes a typo also moves the date.
- `build-info.js` in the repository stays an empty stub. The real one exists only in the published copy, so you never get commits caused by the date.
- Local preview (`localhost:8000`) has no build info, so the footer shows the fallback `updated:` from `site-data.js`.
- I wrote this workflow from the documentation and the current action versions (checkout v4, configure-pages v6, upload-pages-artifact v5, deploy-pages v5). I could not run it from here. If the Actions tab shows a red cross, open the run, copy the error and send it to me.
- GitHub reads the custom domain from Settings, Pages when you deploy this way; a `CNAME` file is not needed.
- The repository must be public on a free account, as before.

### 9.4 PDFs: upload a file, push, it is online

Yes. Procedure:

1. Copy the PDF into `papers/`. To replace a version, overwrite the file under the same name.
2. In `site-data.js`, link it with a relative path: `url:'papers/name.pdf'`, or in the `links` list of an entry: `{label:'Slides',url:'papers/slides.pdf'}`. This is needed once per file.
3. `git add -A`, `git commit -m "new version of name.pdf"`, `git push`.
4. About two minutes later the new file is live.

Details:

- Links on your site get the commit id appended (`papers/name.pdf?v=ab12cd3`), so visitors' browsers fetch the new version at once instead of an old copy. A link someone saved without that suffix can show the old file for up to about 10 minutes.
- A file in `papers/` that no entry links to is online but not listed anywhere. If you want a page that lists everything in the folder automatically, tell me.
- Old versions stay in the git history. GitHub accepts files up to 100 MB, and a Pages site should stay under 1 GB. Keep each PDF small.
- Do not put confidential files in the repository: the repository and everything in `papers/` is public.

### 9.5 Accent colour

The ECB blue is used in small touches: the bar above section titles, the year of each entry, the active tab underline, the active filter underline, the "Latest work" label, the footer square, the abstract's side line and the chart frame on hover. It is one setting in `index.html`, at the top of the `<style>`: `--ecb` (light theme `#003299`; a lighter blue in the dark theme so it stays visible). Change both values to recolour all of them, or set `--ecb` equal to `--ink` to remove the accents.

---

## Sources

- GitHub Docs, [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site): IP addresses, CNAME, HTTPS, domain verification.
- Google, [About data thresholds in GA4](https://support.google.com/analytics/answer/9383630).
- The GA4 menu names, the 14-month retention option, the consent settings and the statements about Google's IP handling and the Data Privacy Framework are from my own knowledge of Google's documentation and were not re-checked today, as was the Squarespace takeover of Google Domains. Google changes its menus often, so the wording on screen may differ.
