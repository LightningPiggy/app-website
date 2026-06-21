# Lightning Piggy App site (app.lightningpiggy.com)

Marketing and install site for the **Lightning Piggy mobile app** - a serverless
Bitcoin Lightning wallet and Piglet geocache game for kids and families. Kept
separate from the main device site ([lightningpiggy.com](https://lightningpiggy.com))
so the app (currently open beta) can be iterated independently, and so the main
site's security policy stays narrow.

Built with [Astro](https://astro.build) + Tailwind, deployed on Netlify.

## Pages

- `/` - Get the App (TestFlight beta + Android APK), feature overview, privacy note.
- `/piglets` - live Piglet geocache map (MapLibre GL + Nostr NIP-GC listings, read-only).

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server (localhost:4321)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Notes

- The Piglet map loads MapLibre GL JS from jsDelivr (version-pinned + SRI) and reads
  public Nostr listings over WebSockets. The required Content-Security-Policy lives in
  [`public/_headers`](public/_headers) (`script-src`/`style-src` allow jsDelivr,
  `worker-src blob:` for MapLibre's worker, `connect-src wss: https:` for relays/tiles).
- Geolocation is strictly opt-in (a "locate me" control); there is no auto-prompt and
  no IP-geolocation fallback.
- Credit: original `/app` and `/piglets` pages contributed by Ben Weeks.
