"use client";
import { RandomData } from "@/libs/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Books = () => {
  const [data, setData] = useState<any>([]);

  const random: string[] = [
    "Harry Potter",
    "Lord of the Rings",
    "Game of Thrones",
    "The Hobbit",
    "The Lord of the Rings",
    "The Fellowship of the Ring",
    "The Two Towers",
    "The Return of the King",
    "The Silmarillion",
    "The Return of the King",
    "Science",
    "Technology",
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Geography",
    "History",
    "Art",
    "Music",
    "Philosophy",
  ];
  const index = Math.floor(Math.random() * random.length);
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const request = await RandomData(random[index], 10);
    setData(request);
  };

  return (
    <>
      <main>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 p-4">
          {data.map((datas: any, index: number) => (
            <Link href={`/book/${datas?.id}`} key={index} className="md:px-2">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={datas?.imageUrl}
                  alt={datas?.title}
                  width={200}
                  height={300}
                  className="w-full max-h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                  <h1 className="text-white text-lg font-semibold">
                    {datas?.title}
                  </h1>
                  <p className="text-white mt-1 text-[12px]">
                    {datas?.authors}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};
