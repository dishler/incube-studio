"use client";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1920px] px-[20px]">
      {children}
    </div>
  );
}
