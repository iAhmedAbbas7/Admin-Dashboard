// <== IMPORTS ==>
import { JSX } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";

// <== POPULAR CONTENT ==>
const POPULAR_CONTENT = [
  {
    id: 1,
    title: "JavaScript Tutorial",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 4300,
  },
  {
    id: 2,
    title: "Tech Trends 2025",
    badge: "Tech",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 3200,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2400,
  },
  {
    id: 4,
    title: "React Hooks Explained",
    badge: "Coding",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1500,
  },
  {
    id: 5,
    title: "Image Generation with AI",
    badge: "AI",
    image:
      "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1200,
  },
];

// <== LATEST TRANSACTIONS ==>
const LATEST_TRANSACTIONS = [
  {
    id: 1,
    title: "Subscription Renewal",
    badge: "John Doe",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Payment for Services",
    badge: "Jane Smith",
    image:
      "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Subscription Renewal",
    badge: "Michael Johnson",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Payment for Services",
    badge: "Lily Adams",
    image:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Subscription Renewal",
    badge: "Sam Brown",
    image:
      "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

// <== CARD LIST COMPONENT ==>
const CardList = ({ title }: { title: string }): JSX.Element => {
  // RETURNING THE CARD LIST CONTENT
  const renderedList =
    title === "Popular Content" ? POPULAR_CONTENT : LATEST_TRANSACTIONS;
  // RETURNING THE CARD LIST CONTENT
  return (
    // MAIN CONTAINER
    <div>
      {/* TITLE */}
      <h1 className="flex items-center gap-1 text-lg mb-6 font-semibold">
        {title === "Popular Content" ? <TrendingUp /> : <CreditCard />}{" "}
        <span>{title}</span>
      </h1>
      {/* CARD LIST */}
      <div className="flex flex-col gap-2">
        {renderedList.map((item) => (
          // CARD COMPONENT
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 p-4 "
          >
            {/* LEFT SECTION */}
            <div className="flex flex-row items-center gap-3">
              {/* IMAGE */}
              <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* CARD CONTENT */}
              <CardContent className="p-0 ">
                <CardTitle className="text-sm font-semibold">
                  {item.title}
                </CardTitle>
                <Badge variant="secondary">{item.badge}</Badge>
              </CardContent>
            </div>
            {/* RIGHT SECTION */}
            <div>
              {/* CARD FOOTER */}
              <CardFooter className="p-0">{item.count / 1000}K</CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// <== EXPORTING THE CARD LIST COMPONENT ==>
export default CardList;
