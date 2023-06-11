import React from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function WorkPage({ params: { slug } }: Props) {
  const res = await getData()
  return (
    <div>
      <div>banner</div>
      <div>Description</div>
      <div>screen</div>
      <div>palette</div>
      <div>palete</div>
    </div>
  );
}
