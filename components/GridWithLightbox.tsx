"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type GridItem = {
  src: string;
  title?: string;
  href?: string;
};

type Props = {
  items: GridItem[];
};

export default function GridWithLightbox({ items }: Props) {
  // Bara bilder utan href ska öppnas i lightbox
  const lightboxItems = useMemo(
    () => items.filter((item) => !item.href),
    [items]
  );

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (src: string) => {
    const index = lightboxItems.findIndex((item) => item.src === src);
    if (index !== -1) setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? lightboxItems.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === lightboxItems.length - 1 ? 0 : selectedIndex + 1
    );
  };

  const selectedItem =
    selectedIndex !== null ? lightboxItems[selectedIndex] : null;

  return (
    <>
      <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2">
        {items.map((item, index) => {
          const figure = (
            <figure className="group">
              <div className="w-full aspect-[3/2] overflow-hidden bg-neutral-100">
                <img
                  src={item.src}
                  alt={item.title || ""}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <figcaption className="mt-3 text-xs md:text-sm text-center">
                {item.title}
              </figcaption>
            </figure>
          );

          // Om bilden har href -> gå till case-sida
          if (item.href) {
            return (
              <Link
                key={`${item.src}-${index}`}
                href={item.href}
                className="block"
              >
                {figure}
              </Link>
            );
          }

          // Annars -> öppna lightbox
          return (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => openLightbox(item.src)}
              className="block w-full text-left"
            >
              {figure}
            </button>
          );
        })}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white text-sm md:text-base"
            >
              Close ✕
            </button>

            {lightboxItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 px-3 py-2 text-sm"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 px-3 py-2 text-sm"
                >
                  →
                </button>
              </>
            )}

            <div className="bg-black flex items-center justify-center">
              <img
                src={selectedItem.src}
                alt={selectedItem.title || ""}
                className="max-h-[85vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            {selectedItem.title?.trim() && (
              <p className="mt-4 text-center text-white text-sm">
                {selectedItem.title}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
