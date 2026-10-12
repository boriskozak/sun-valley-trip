# Sun Valley Trip Brief, Redesigned

A minimalist redesign of the Sun Valley trip brief for Clint, Mike, Cubby, and
Boris: one week in Ketchum, Idaho (Jan 30 to Feb 6, 2027) with a Sun Valley
Heli Ski day on Wed Feb 3.

The original brief lives on Muse as a hosted web page. This repo is the
redesign, built so the two can be compared side by side.

## Run it

No build step. Serve the folder over HTTP:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open http://localhost:8000.

## What's here

- `index.html`: page structure: hero, the heli day, Baldy, Ketchum, the week,
  getting there, the house
- `style.css`: the design system: warm paper, ink, hairline rules, one accent
- `app.js`: countdown to Jan 30, the "feel the drop" vertical slider,
  scroll reveals, nav state
- `assets/`: photography generated for this brief (hero heli, Baldy, Ketchum)

## Design notes

Editorial and quiet on purpose: oversized grotesque type, serif italic accents,
numbered sections, hairline rules instead of cards and shadows, one restrained
accent color reserved for the heli day. Everything from the original brief is
here; nothing about money is, by request.
