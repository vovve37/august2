"use client";
import React, { useEffect } from "react";

type Item = { src:string; title?:string };

export default function Lightbox({
  open, items, index, onClose, setIndex
}: { open:boolean; items:Item[]; index:number; onClose:()=>void; setIndex:(i:number)=>void; }){
  if(!open || items.length===0) return null;
  const item = items[index];
  const next = () => setIndex((index+1)%items.length);
  const prev = () => setIndex((index-1+items.length)%items.length);

  useEffect(()=>{
    const onKey = (e:KeyboardEvent)=>{
      if(e.key==="Escape") onClose();
      if(e.key==="ArrowRight") next();
      if(e.key==="ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return ()=>window.removeEventListener("keydown", onKey);
  }, [index, items.length]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="max-w-6xl w-full relative" onClick={(e)=>e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 px-3 py-1 rounded-full border text-white">Close</button>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full border text-white">‹</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 rounded-full border text-white">›</button>
        <div className="flex items-center justify-center">
          <img
            src={item.src}
            alt={item.title||""}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
        {item.title && <div className="mt-2 text-sm text-white/80 text-center">{item.title}</div>}
      </div>
    </div>
  );
}
