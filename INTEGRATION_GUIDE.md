# AI Photo Classifier — Integration Guide

## What this adds

A real, in-browser deep learning feature using **TensorFlow.js + MobileNet** (a pre-trained
image classification model). Learners upload a photo, and the AI predicts what it is —
then the app maps that prediction onto your existing Living / Non-Living framing.

No backend, no API key, no server cost — everything runs client-side in the browser, so it
fits your fully-static Vercel deployment with zero architecture changes.

---

## Step 1 — Install the two new dependencies

From your project root:

```bash
npm install @tensorflow/tfjs @tensorflow-models/mobilenet
```

This adds two entries to your `package.json` `dependencies`. Nothing else changes.

---

## Step 2 — Add the component file

Copy `AIPhotoClassifier.tsx` (included in this pack) into:

```
src/components/AIPhotoClassifier.tsx
```

It's styled to match your existing dark/emerald theme exactly (same `rounded-[36px]`,
`border-emerald-400/30`, `font-black` conventions used throughout `LivingNonLivingPage.tsx`),
so it should drop in visually seamlessly.

---

## Step 3 — Wire it into LivingNonLivingPage.tsx

**3a. Add the import** near the top of `src/components/LivingNonLivingPage.tsx`, after the
existing `lucide-react` import block:

```tsx
import { AIPhotoClassifier } from './AIPhotoClassifier';
```

**3b. Render it** at the very end of the page, just before the final closing `</div>`:

```tsx
        </div>
      </section>

      {/* AI-Powered Photo Classifier */}
      <AIPhotoClassifier />
    </div>
  );
};
```

(This goes right after the existing "Interactive Classification Discovery Game" section closes.)

---

## Step 4 — Test locally

```bash
./cleanstart.sh 3001
```

Navigate to the Living vs Non-Living page, upload a photo (try an animal, a plant, and an
everyday object like a chair or phone), and click "Ask the AI." The first classification
will take a few seconds while the model downloads and loads — subsequent uses on the same
page visit are much faster since the model stays cached in memory.

Run a type-check before deploying, as always:

```bash
npm run lint
```

---

## What to know before you ship it

**Bundle size**: TensorFlow.js + MobileNet adds roughly 3–5MB, but only downloads when a user
actually visits the Living vs Non-Living page and clicks "Ask the AI" (the imports inside
`runClassification` are dynamic `import()` calls, so they're code-split by Vite automatically
— your other pages are completely unaffected).

**First-use delay**: expect a 2–4 second pause the first time a user classifies a photo, while
the model downloads. A loading state is already built in ("Loading AI model (first time
only)...").

**Accuracy is genuinely imperfect**: MobileNet is a general-purpose model trained on everyday
photos (ImageNet), not curated for a children's science app. It will occasionally misclassify
something, or return an unexpected label. I've deliberately framed this as a feature in the
UI copy ("even AI can make mistakes sometimes") rather than hiding it — it's honestly a good,
age-appropriate teaching moment about how machine learning actually works, rather than
something to apologize for.

**Living/Non-Living mapping is a simple keyword heuristic**, not a second trained model — it
checks MobileNet's returned label against a list of ~30 common living-thing keywords
(`LIVING_HINTS` array at the top of the component). This is intentionally simple and
transparent; if you want to expand or adjust which words count as "living," that list is the
only place you'd need to edit.

**A note on testing**: I wrote and manually reviewed this code carefully (brace/paren balance,
matching your existing patterns, checked against your actual `tsconfig.json` settings), but I
was not able to run a live `npm install` + build in my environment to execute-test it, since I
don't have network access here. Please run `npm run lint` and test it in your browser before
deploying — if anything doesn't compile cleanly, paste me the exact error and I'll fix it
immediately.

---

## Optional next step: update your design docs

If you'd like, I can also add this as a documented module in your HLD/LLD (a new "AI Photo
Classifier" entry in Section 4 Functional Modules, plus a note in the Technology Stack table
for `@tensorflow/tfjs` and `@tensorflow-models/mobilenet`) — just ask.
