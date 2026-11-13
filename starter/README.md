# Frontend interview · Binocular reveal

**45 minutes total, including setup and walkthrough. AI and existing libraries are welcome.**

## Your task

Using the [Figma interview reference](https://www.figma.com/design/KkGqYv8ieORKyQo2Pk6A4y?node-id=11-3) and the supplied React starter, build one scroll-driven reveal. Start with the open underwater scene, move into the binocular view, bring the sunset into the same opening, then open to the full sunset. Scrolling back should retrace the sequence.

Use the desktop reference as your baseline. The four frames show the target states. You choose how the text and coral give way to the lens and how the scene moves between checkpoints. The starter has intentional visual mismatches in the opening scene.

1. Compare the starter’s open-water scene with Figma in the browser. Identify the mismatch with the biggest visual impact and make one targeted fix.
2. Build the scroll reveal. Share what you're trying, what you notice, and what you decide to change.
3. Try **1440 × 640** or **390 × 640**. Check forward and reverse scroll and handle the most consequential issue you find. Use the mobile crop reference if you choose the phone viewport.
4. In the walkthrough, show the change you made, explain one tradeoff, and name the next issue you'd prioritize before shipping.

A working subset is fine. Aim for a convincing desktop reveal and one thoughtful stress check. We'll review what works, the choices you made, and what you learned in the browser.

## Start locally

Use Node 20.19+ on the 20.x line or Node 22.12+.

```sh
npm ci
npm run dev
```

The starter renders the open-water scene with coral and editable copy. `src/scenes.jsx` also exports reusable `Underwater` and `Sunset` backgrounds. Desktop and mobile lens SVGs are in `public/assets/`. You can use the supplied mask or build an equivalent one. The scroll behavior, scene handoff, and responsive lens treatment are yours to implement.
