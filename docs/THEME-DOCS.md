# Theme documentation

## File structure
```
layout/theme.liquid          Page shell: head, fonts, colour variables, header/footer, scripts
templates/*.json             Which sections each page uses (index, product, collection, cart, search, page, 404)
sections/                    Editable building blocks
  announcement-bar, header, footer           (global)
  hero, island-groups, featured-collection, maker-story   (home page)
  main-product, main-collection, main-cart, main-search, main-page, main-404
snippets/product-card.liquid Reusable product card
snippets/sun.liquid          Eight-rayed sun SVG
assets/theme.css, theme.js   Styles and small scripts
config/settings_schema.json  Theme settings shown in the editor
```

## Design system
| Token | Default | Use |
|---|---|---|
| `--blue` | #0038A8 | Hero, island cards, frames |
| `--red` | #CE1126 | Buttons, origin ribbon, banig base |
| `--yellow` | #FCD116 | Sun, highlights, banig pattern |
| `--paper` | #FFFBF0 | Page background |
| `--ink` | #0A1F4D | Text, borders, footer |

- **Fonts:** Gloock (headings) and Figtree (body), loaded from Google Fonts in `layout/theme.liquid`.
- **Banig strip:** `.banig` in `theme.css` is a CSS zigzag pattern with no image files.
- **Sun:** `snippets/sun.liquid`. Rotates slowly in the hero and stops for visitors who prefer reduced motion.
- **Island stars:** the three cards on the home page represent Luzon, Visayas and Mindanao.
- Square corners, 2 px navy borders and hard offset shadows give the signage feel. Change them in `.btn`, `.card` and `.island`.

Colour contrast: white on the default red, navy on yellow and white on blue all read clearly. Re-check if you change the palette.

## Customizing
- **Text and images:** theme editor (Online Store → Themes → Customize).
- **New home section:** create `sections/my-section.liquid` with a `{% schema %}` that includes a `presets` entry, then add it from the editor's "Add section" menu.
- **Translations:** most visible strings are written in the section files as bilingual text (Filipino / English). Edit them directly or move them to `locales/` if you need a full multilingual store.
- **Origin metafield:** `product.metafields.custom.origin.value` is read in `product-card.liquid` and `main-product.liquid`.

## Outstanding work (what is not done)
1. **Not tested on a live store.** The theme was written and structurally validated (JSON and schema blocks parse) but never uploaded to Shopify. Run `shopify theme check`, upload it and click through every page.
2. **No product images or brand assets.** Cards show Shopify's placeholder until you add photos. Add a logo, favicon and a hero photo.
3. **No variant-driven price or image update.** Variants use a plain dropdown, so the price in the heading does not change when you pick one (the price is shown inside each option). Add JavaScript if you want live updates and variant images.
4. **No AJAX cart or cart drawer.** Add to cart goes to the cart page.
5. **No predictive search** or collection filters (price, region). Shopify's Search & Discovery app can add filters.
6. **No customer account templates** (login, register, orders) and **no password page** template. Shopify falls back to defaults, which will not match the theme.
7. **No blog or article templates.** Add `blog.json`/`article.json` if you plan content marketing (recipes, maker stories are good for SEO).
8. **Sections not yet built:** testimonials, newsletter signup, Instagram feed, FAQ, maker profile pages.
9. **Locales:** only a minimal `en.default.json`. No Filipino translation file yet.
10. **Payments, shipping, taxes and analytics are store settings, not theme code.** See the setup guide.
11. **Fonts load from Google Fonts.** For strict privacy or speed budgets, self-host them.
12. **Accessibility pass needed:** keyboard-check the whole flow, test with a screen reader, and review contrast after any colour changes.
13. **Legal pages** (privacy, terms, returns, data privacy notice) must be written by you. Check Philippine requirements for online sellers and the Data Privacy Act with a professional.
