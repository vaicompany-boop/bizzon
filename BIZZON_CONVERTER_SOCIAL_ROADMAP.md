# Bizzon Roadmap — File Converters + Social Creator Tools

Created: 2026-07-15
Status: approved direction from Tedi for three-hour product cron

## Strategy

Bizzon can expand from text/SEO utilities into two practical clusters:

1. **Converter tools** — transform one file/data format into another, preferably browser-only.
2. **Social creator tools** — safer tools around YouTube/X/Instagram/TikTok/Facebook workflows without building risky video downloaders.

## Safety/product rules

- Prefer browser-only processing.
- Clearly say when files stay in the browser and are not uploaded.
- Avoid direct YouTube/TikTok/Instagram/Facebook/X video downloaders, watermark removers, or tools designed to bypass platform restrictions.
- Avoid server-side conversion until there is a clear reason and privacy/hosting plan.
- Every new tool must be registered in `src/data/tools.ts` only when route exists and works.
- Mark future tools as roadmap/planned in docs; do not mark as live in registry before implementation.

## Converter roadmap — 10 tools

| Priority | Tool | Suggested URL | Processing | Notes |
|---:|---|---|---|---|
| 1 | CSV to JSON | `/csv-to-json` | browser-only text/file | Best first converter; strong SEO and simple implementation. |
| 2 | JSON to CSV | `/json-to-csv` | browser-only text/file | Pair with CSV to JSON; handle arrays of objects first. |
| 3 | JSON Formatter & Validator | `/json-formatter` | browser-only text | Pretty/minify/validate/copy; very useful. |
| 4 | Base64 Encoder / Decoder | `/base64-encoder-decoder` | browser-only text/file-lite | Text first; optional small file mode later. |
| 5 | Markdown to HTML | `/markdown-to-html` | browser-only text | Preview + copy HTML; avoid dangerous script execution in preview. |
| 6 | HTML to Markdown | `/html-to-markdown` | browser-only text | Useful for writers/devs; keep first version simple. |
| 7 | YAML to JSON | `/yaml-to-json` | browser-only text | Requires small YAML parser dependency or simple subset warning. |
| 8 | JSON to YAML | `/json-to-yaml` | browser-only text | Natural pair with YAML to JSON. |
| 9 | Image to WebP | `/image-to-webp` | browser-only canvas | User image stays local; export quality slider. |
| 10 | PNG/JPG Converter | `/png-jpg-converter` | browser-only canvas | Convert PNG ↔ JPG with background color option for transparency. |

### Converter implementation order

Recommended for cron:

```text
CSV to JSON -> JSON to CSV -> JSON Formatter -> Base64 -> Markdown to HTML -> HTML to Markdown -> Image to WebP -> PNG/JPG Converter -> YAML to JSON -> JSON to YAML
```

After these are live, review traffic/usefulness before adding deeper file-mode polish or the safer social creator tools.

## Social creator roadmap — 10 tools

| Priority | Tool | Suggested URL | Risk | Notes |
|---:|---|---|---|---|
| 1 | YouTube Thumbnail Downloader | `/youtube-thumbnail-downloader` | low | Extract video ID and show public thumbnail URLs/resolutions; no video download. |
| 2 | YouTube URL Cleaner | `/youtube-url-cleaner` | low | Remove tracking params like `si`, `feature`, `utm_*`; output clean URL. |
| 3 | X / Twitter Character Counter | `/x-character-counter` | low | Count post length and thread chunks; useful and safe. |
| 4 | Instagram Caption Formatter | `/instagram-caption-formatter` | low | Clean line breaks, spacing, hashtags, copy-ready caption. |
| 5 | TikTok Caption & Hashtag Cleaner | `/tiktok-caption-hashtag-cleaner` | low | Normalize hashtags, remove duplicates, count length. |
| 6 | YouTube Title & Description Checker | `/youtube-title-description-checker` | low | Length guidance and snippet preview. |
| 7 | Social Bio Formatter | `/social-bio-formatter` | low | Format short bios for IG/TikTok/X with character limits. |
| 8 | Hashtag Deduplicator | `/hashtag-deduplicator` | low | Normalize, dedupe and count hashtags across platforms. |
| 9 | Social Link Cleaner | `/social-link-cleaner` | low-medium | Clean YouTube/X/TikTok/Instagram/Facebook URLs; no scraping. |
| 10 | Shorts/Reels/TikTok Size Guide | `/shorts-reels-size-guide` | low | Static + small calculator for aspect ratio/resolution/duration notes. |

### Explicit no-go tools for now

Do not build these into Bizzon unless Tedi explicitly revisits legal/product risk:

```text
YouTube video downloader
TikTok video downloader
Instagram video downloader
Facebook video downloader
X/Twitter video downloader
watermark remover
private story/reel downloader
```

Reason: platform ToS/copyright/hosting/reputation risk; usually needs backend/proxy and breaks often.

## Cron instructions for Bizzon chunks

When the three-hour rotation selects Bizzon:

1. Prefer the highest-priority roadmap item that is not live yet.
2. Build exactly one focused tool per Bizzon run unless the change is tiny.
3. Keep the tool browser-only if possible.
4. Add route, component, registry entry, and concise SEO/help copy.
5. Run `npm run build`.
6. Browser-check changed route and `/tools`.
7. Update `THREE_HOUR_PRODUCT_CRON_STATE.json` with the exact tool added and next recommended roadmap item.

## Current recommended next Bizzon chunk

```text
Build YouTube URL Cleaner at /youtube-url-cleaner, or add file upload/download polish to the converter tools if Tedi wants richer utility UX first.
```

Acceptance criteria for YouTube Thumbnail Downloader:

- accepts common YouTube watch, youtu.be, Shorts, embed, and live URLs;
- extracts only the public video ID and shows thumbnail image URLs/resolution options;
- no video/audio download or platform bypass behavior;
- copy/open actions and clear errors for invalid IDs;
- route listed as live after working.

Acceptance criteria for YouTube URL Cleaner:

- accepts common YouTube watch, youtu.be, Shorts, embed, live, playlist and channel URLs;
- removes tracking/noise parameters such as `si`, `feature`, `utm_*`, `fbclid`, `gclid` while preserving essential IDs like `v` and `list`;
- never downloads video/audio or calls a backend;
- copy/clear actions and clear errors for invalid URLs;
- route listed as live after working.
