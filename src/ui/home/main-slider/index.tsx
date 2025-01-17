import Products from "./products";

export default async function MainSlider() {
  const data = await fetch(`${process.env.BASE_URl}/products`);
  const posts = await data.json();
  console.log(posts);

  return <Products />;
}
