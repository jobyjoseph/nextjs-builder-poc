interface PageProps {
  htmlContent: string;
}

async function getData() {
  const apiKey = "cf73ee0cd9104dbaa2c7c228f9ab89a1"; // Replace with your actual API key
  const url = "/about-joby"; // Replace with the actual URL you want to encode
  const encodedUrl = encodeURIComponent(url);
  const res = await fetch(
    `https://cdn.builder.io/api/v1/html/page?apiKey=${apiKey}&url=${encodedUrl}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return <div dangerouslySetInnerHTML={{ __html: data.data.html }} />;
}
