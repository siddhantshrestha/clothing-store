import Image from "next/image"
import img from "@/assets/img1.jpeg"
export default function ProductCard() {
  const productData = [
    {
      img,
      name: "Classic coat with wool blend",
      price: "$10.00",
      rating: "5",
    },
    {
      img,
      name: "Classic sweater",
      price: "$10.00",
      rating: "5",
    },
    {
      img,
      name: "Wool blend",
      price: "$10.00",
      rating: "5",
    },
    {
      img,
      name: "Shirt wool",
      price: "$10.00",
      rating: "5",
    },
  ]

  return (
    <div>
      {productData.map(items => (
        <div>
          <Image src={items.img} alt='product Image' />
          <p>{items.name}</p>
          <p>${items.price}</p>
          <p>rating</p>
        </div>
      ))}
    </div>
  )
}
