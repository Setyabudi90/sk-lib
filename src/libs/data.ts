export const RandomData = async (
  query: string,
  count: number
): Promise<any> => {
  const request = await fetch(
    `https://buku.glitch.me/random?query=${query}&count=${count}`
  );
  const response = await request.json();

  return response;
};

export const SearchData = async (query: string): Promise<any> => {
  const request = await fetch(`https://buku.glitch.me/search?query=${query}`);
  const response = await request.json();

  return response;
};

export const DetailData = async (id: string): Promise<any> => {
  const request = await fetch(`https://buku.glitch.me/book/${id}`);
  const response = await request.json();
  return response;
};
