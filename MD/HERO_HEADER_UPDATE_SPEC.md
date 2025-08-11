## Hero Header Alignment Spec (for Claude to implement; no code changes applied yet)

- **Purpose**: Make the homepage hero header match the About page header, set hero text to white for readability, and add the company logo above the title.
- **Scope**: `hero.tsx` only. Consumed by `app/page.tsx` via `import { Hero } from '@/hero'`.
- **Related files (read-only)**: `app/about/page.tsx` (reference styles), `components/OptimizedImage.tsx`, `config/business-info.ts`, `next.config.js` (already allows `canadianmetalfab.com` domain).

### Current references

```20:47:app/about/page.tsx
<section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">
  <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
    <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
      <span className="text-industry-blue mr-2">🏭</span>
      <span className="text-sm font-medium">Since 1992</span>
    </div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Solving Sheet Metal Basics with
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Unshakeable Reliability</span>
    </h1>
    <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">Our Story: Over three decades...</p>
```

```5:12:hero.tsx
<section className="relative bg-industry-gradient py-20 px-6 md:py-32 md:px-12 overflow-hidden">
...
<div className="relative max-w-7xl mx-auto text-center animate-fade-in">
  <div className="inline-flex items-center px-4 py-2 rounded-full bg-industry-blue/20 border border-industry-blue/40 mb-6">
    <span className="text-industry-blue mr-2">🛠️</span>
    <span className="text-sm font-medium">Mastering the Fundamentals</span>
  </div>
  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
    Solve Your Sheet Metal Basics with
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange">Unshakeable Reliability</span>
  </h1>
  <p className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto text-gray-800 leading-relaxed">End supplier headaches...</p>
```

## Required changes in `hero.tsx`

- **Section color (match About)**
  - Change: `<section className="relative bg-industry-gradient py-20 px-6 md:py-32 md:px-12 overflow-hidden">`
  - To: `<section className="relative bg-industry-gradient text-white py-20 px-6 md:py-32 md:px-12 overflow-hidden">`

- **Badge content and contrast**
  - Replace copy/emoji:
    - From: `🛠️ Mastering the Fundamentals`
    - To: `🏭 Since 1992`
  - Keep container classes; if contrast is low on the gradient, prefer `bg-white/10 border border-white/20` for the badge background/border.

- **Add company logo (centered above title)**
  - Add imports at top of file:
    - `import { businessInfo } from '@/config/business-info'`
    - `import { OptimizedImage } from '@/components/OptimizedImage'`
  - Insert directly under the badge and before the `<h1>`:
    ```tsx
    <div className="mb-6 flex justify-center">
      <OptimizedImage
        src={businessInfo.logo}
        alt={`${businessInfo.name} logo`}
        width={200}
        height={48}
        priority
        className="h-12 w-auto"
      />
    </div>
    ```
  - Note: External image domain `canadianmetalfab.com` is already whitelisted in `next.config.js` under `images.domains`.

- **Heading typography and copy (match About)**
  - Sizes: change `text-4xl md:text-6xl lg:text-7xl` → `text-4xl md:text-5xl lg:text-6xl`
  - Copy: change to `Solving Sheet Metal Basics with`
  - Keep the gradient span for “Unshakeable Reliability” with a leading space inside the span, as in About.
  - Before:
    ```tsx
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Solve Your Sheet Metal Basics with{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange">
        Unshakeable Reliability
      </span>
    </h1>
    ```
  - After:
    ```tsx
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      Solving Sheet Metal Basics with
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-industry-blue to-industry-orange"> Unshakeable Reliability</span>
    </h1>
    ```

- **Paragraph style and color (match About)**
  - Classes: change `text-lg md:text-2xl text-gray-800` → `text-lg md:text-xl text-gray-200`
  - Recommended copy (optional, for full parity):
    "Our Story: Over three decades of mastering manufacturing fundamentals, eliminating supplier headaches, and delivering truth in execution for multinational companies across Ontario."

- **Benefit bullets**
  - Keep `text-gray-300` for bullets. No change needed.

- **Optional button parity**
  - Secondary button can mimic About’s white-outline variant:
    - From: `border-industry-blue text-industry-blue hover:bg-industry-blue hover:text-white`
    - To: `border-white text-white hover:bg-white hover:text-industry-dark`

## Acceptance criteria

- All hero text renders white on the gradient, consistent with the About header.
- Badge reads “Since 1992” with the factory emoji; contrast passes on dark background.
- Company logo appears centered above the heading, is crisp, has accessible alt text (`${businessInfo.name} logo`), and loads with `priority`.
- Heading sizes match About; “Unshakeable Reliability” retains the blue→orange gradient.
- Paragraph uses `text-gray-200` and About’s size scale; copy optionally matches.
- Layout remains responsive with no layout shift on mobile or desktop.

## QA checklist

- Verify no CLS when the logo loads (use `priority`).
- Confirm color contrast for badge, paragraph, and bullets meets WCAG AA on the gradient.
- Ensure no console warnings from the image component or domain configuration.
- Smoke test homepage and About page at sm/md/lg breakpoints for spacing and responsiveness. 