# Setup guide: launching a Filipino products store on Shopify

This guide takes you from an empty Shopify account to a store ready for test orders. Steps that depend on Shopify's current screens may be worded slightly differently in your admin. Menu names below are the ones used at the time of writing.

## 1. Create the store
1. Sign up at shopify.com and create a store. Use a working store name, because the theme shows it as the logo text.
2. In **Settings → Store details**, set the store address in the Philippines and the contact email.
3. In **Settings → Markets** (or **Store currency**), make sure the currency is **Philippine peso (PHP)**.
4. Set the money format so prices show with the peso sign: **Settings → General → Store currency → Change formatting**. Use `₱{{amount}}` for both HTML fields (and `₱{{amount}} PHP` for the with-currency fields if you want the code shown).

## 2. Install the theme
Pick one method.

**A. Upload the zip (fastest)**
1. Go to **Online Store → Themes → Add theme → Upload zip file**.
2. Choose `lokal-pilipinas-theme.zip` (the theme-only zip, not the full repository zip).
3. Click **Customize** to open the theme editor. Click **Publish** when ready.

**B. Connect GitHub (best for ongoing development)**: follow `GITHUB-GUIDE.md`.

## 3. Add products
1. **Products → Add product.** Fill in title, description, price, images and weight (weight is needed for shipping rates).
2. Set **Vendor** to the maker, for example "Calinan Cacao Farmers".
3. Add variants only when needed (size, pack size). A single-variant product needs none.
4. Use clear alt text on images, for example "Tablea cacao discs on a banana leaf".

### Create the "Origin" metafield (one time)
1. **Settings → Custom data → Products → Add definition.**
2. Name: `Origin`. Namespace and key: `custom.origin`. Type: **Single line text**.
3. Save, then fill **Origin** on each product (for example "Davao"). It appears as the red ribbon on product cards and the product page.

## 4. Create collections and menus
1. **Products → Collections → Create collection.** Suggested: **Luzon**, **Visayas**, **Mindanao** (manual or by tag), plus category collections such as **Pagkain**, **Kape at kakaw**, **Habi at sining**.
2. **Content → Menus.** Edit `main-menu` (for example Lahat, Luzon, Visayas, Mindanao, Tungkol sa amin) and `footer` (Shipping, Returns, Contact, Privacy).
3. In the theme editor, open the home page, select each **Island group** block and pick its collection.

## 5. Add pages
Create these under **Content → Pages** (they use the theme's page template): About / Tungkol sa amin, Shipping, Returns and refunds, Contact. Also fill in **Settings → Policies** (refund, privacy, terms, shipping), because checkout links to them.

## 6. Customize the look
Open **Online Store → Themes → Customize**.
- **Theme settings → Colors:** the flag palette is the default. Change only if you have brand colors.
- **Theme settings → Branding:** upload a logo and favicon. Without a logo the theme shows the sun mark and your store name.
- **Home page:** edit the hero text, upload a portrait photo for the arch frame, reorder or remove sections.
- **Photos:** use square product photos (at least 1200 × 1200 px) so cards and the gallery crop cleanly.

## 7. Payments in the Philippines
Shopify Payments is not offered in every country, so Philippine stores normally use third-party providers. Check **Settings → Payments** for what your account can add. Commonly used options include:

| Option | Notes |
|---|---|
| PayMongo | Cards, GCash, Maya and other local methods; installs from the Shopify App Store or the payments settings |
| Xendit | E-wallets, bank transfer, cards, over-the-counter |
| HitPay | GCash, Maya, QR Ph, cards and others |
| Cash on delivery | Add under **Manual payment methods** and name it "Cash on delivery" |

Typical steps for a provider: **Settings → Payments → Add payment methods** (or **Choose a provider**), search the provider, connect your provider account or API keys, **Activate**, then **Save**. Fees, monthly costs and available methods change, so confirm on the provider's own site.

**Always place a test order** (use the provider's test mode) before going live. Test the exact methods you advertise.

## 8. Shipping
1. **Settings → Shipping and delivery.** Create shipping profiles if some items are fragile or heavy.
2. Create zones and rates, for example: Metro Manila ₱150, Rest of Luzon ₱200, Visayas and Mindanao ₱250. Use your real courier quotes (LBC, J&T, Lalamove, Ninja Van, etc.).
3. Add a **free shipping rate with a minimum order of ₱1,500**. The theme only displays this message. The real rule lives here. Keep both numbers the same (theme number: **Theme settings → Branding**).
4. Set up your courier's app or manual fulfillment. Shopify's carrier-calculated rates depend on the carriers and apps available to you.

## 9. Taxes
Under **Settings → Taxes and duties** decide whether prices include VAT. Ask your accountant or BIR-registered advisor what applies to your business. This guide does not give tax advice.

## 10. Domain, SEO and analytics
- **Domain:** Settings → Domains → connect or buy a domain.
- **SEO:** write a unique page title and meta description for the home page and each collection (edit "Search engine listing" on each). Keep product titles descriptive, and use alt text on images. The theme already outputs canonical links, Open Graph tags and product structured data.
- **Analytics:** Shopify has built-in reports. For Google Analytics or a Meta pixel, use **Settings → Customer events** or the sales-channel apps, not hand-pasted code in the theme.
- **Speed:** compress images before upload, keep apps to what you need, and test with PageSpeed Insights.

## 11. Pre-launch checklist
- [ ] Currency is PHP and prices show ₱
- [ ] Every product has: photo, alt text, price, weight, vendor, Origin
- [ ] Island group blocks point to collections
- [ ] Menus and footer links work
- [ ] Policies and pages filled in
- [ ] At least one payment method tested end to end (and cash on delivery if offered)
- [ ] Shipping rates and the free-shipping rule match the theme message
- [ ] Mobile check: home, product, cart and checkout on a real phone
- [ ] Remove the storefront password (Online Store → Preferences) when ready
