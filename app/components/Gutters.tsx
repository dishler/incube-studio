"use client";

export default function Gutters() {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] flex justify-between">
      <div className="px-[20px]"></div>
      <div className="px-[20px]"></div>
    </div>
  );
}
