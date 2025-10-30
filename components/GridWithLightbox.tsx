"use client";
import React, {useState} from "react";
import Lightbox from "@/components/Lightbox";

export type MediaItem = { src:string; title?:string };

export default function GridWithLightbox({items}:{items:MediaItem[]}){
  const [open,setOpen] = useState(false);
  const [index,setIndex] = useState(0);
  const openAt = (i:number)=>{ setIndex(i); setOpen(true); };
  return (
    <>
      <div className="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2">
        {items.map((it,i)=>(
          <figure key={i} className="cursor-zoom-in" onClick={()=>openAt(i)}>
            <img src={it.src} alt={it.title||""} className="w-full h-auto object-cover"/>
            {it.title && <figcaption className="text-center text-xs md:text-sm mt-3">{it.title}</figcaption>}
          </figure>
        ))}
      </div>
      <Lightbox open={open} items={items} index={index} setIndex={setIndex} onClose={()=>setOpen(false)} />
    </>
  );
}
