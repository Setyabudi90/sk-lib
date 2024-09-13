"use client";

import { DetailData } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BookData {
  imageUrl: string;
  title: string;
  authors: string;
  publisher?: string;
  categories?: string[];
  pageCount: number;
  description: string;
  infoLink: string;
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  const [data, setData] = useState<BookData>({
    imageUrl: "",
    title: "",
    authors: "",
    publisher: undefined,
    categories: [],
    pageCount: 0,
    description: "",
    infoLink: "",
  });

  const fetchBookById = async (): Promise<void> => {
    const request = await DetailData(id);
    setData(request);
  };

  useEffect(() => {
    fetchBookById();
  }, [id]);

  const validateDescription = (text: string): string => {
    if (text) {
      if (text.length >= 501) {
        return text.substring(0, 610) + "...";
      }
    }
    return text;
  };

  return (
    <div
      className="flex flex-col md:gap-2 w-full"
      style={{
        background: "linear-gradient(135deg, #dddddd56, #0d161b)",
        padding: "20px",
      }}
    >
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        <div className="flex justify-center items-center h-auto">
          <Image
            src={data.imageUrl}
            alt={`${id}`}
            width={250}
            height={250}
            className="w-full max-h-[600px] rounded object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4 text-white">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold">{data.title}</span>
            <div className="flex gap-2 flex-wrap">
              <span className="whitespace-nowrap rounded-full bg-purple-400 px-2.5 py-0.5 text-sm">
                Authors: {data.authors}
              </span>
              {data.publisher && (
                <span className="whitespace-nowrap rounded-full bg-purple-400 px-2.5 py-0.5 text-sm">
                  Publisher: {data.publisher}
                </span>
              )}
              {data.categories && data.categories.length > 0 && (
                <span className="whitespace-nowrap rounded-full bg-purple-400 px-2.5 py-0.5 text-sm">
                  Category: {data.categories[0]}
                </span>
              )}
              <span className="whitespace-nowrap rounded-full bg-purple-400 px-2.5 py-0.5 text-sm">
                Popularity: {data.pageCount}
              </span>
            </div>
          </div>

          <p
            className="text-justify leading-relaxed max-w-xl"
            dangerouslySetInnerHTML={{
              __html: validateDescription(data.description),
            }}
          />

          <Link href={data.infoLink} className="underline text-blue-300">
            See on Google Books
          </Link>
        </div>
      </div>
    </div>
  );
}
