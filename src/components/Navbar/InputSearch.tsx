"use client";
import { useRouter } from "next/navigation";
import { FormEvent, KeyboardEvent, MutableRefObject, useRef } from "react";

export const InputSearch = () => {
  const searchRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const router = useRouter();

  const handleSearch = (
    e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    const key = searchRef.current?.value;
    if (!key || key.trim() === "") return;
    router.push(`/search?query=${key}`);
    searchRef.current!.value = "";
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(e);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <input
          id="search"
          type="text"
          placeholder="search books..."
          className={`p-2 w-full rounded text-black border border-color-dark outline-none`}
          ref={searchRef}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          className="absolute top-[0px] bottom-[0px] end-0 bg-slate-700 py-[0.619rem] px-1 rounded-r hover:bg-slate-800 flex items-center justify-center"
        >
          Search
        </button>
      </form>
    </div>
  );
};
