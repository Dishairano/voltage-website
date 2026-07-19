'use client';

import { useState, type ReactNode } from 'react';

export type QA = { q: string; a: ReactNode };

export default function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list reveal">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={i}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <span className="faq-ic" aria-hidden="true"></span>
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? '32em' : 0 }}>
              <p>{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
