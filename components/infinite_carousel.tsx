"use client";
import { useEffect, useRef, useState } from "react";

export default function Carousel(props: { children: Array<React.ReactNode> }) {
  const { children } = props;
  return (
    <>
      <div
        className="overflow-hidden w-full h-25 group hover:cursor-pointer bg-amber-50 flex flex-col justify-center border-b border-t border-dashed"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000, transparent)",
        }}
      >
        <div
          style={{
            minWidth: `calc(100px * ${children.length})`,
          }}
          className="relative flex w-full h-full items-center gap-0"
        >
          {children.map((child, idx) => {
            return (
              <div
                style={{
                  left: "100%",
                  animationDelay: `calc((10s/${children.length}) * ${idx})`,
                }}
                className=" [animation:carousel_10s_linear_infinite] group-hover:[animation-play-state:paused] absolute w-[100px] h-[64px]  md:w-[200px] md:h-[64px]"
                key={idx}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
