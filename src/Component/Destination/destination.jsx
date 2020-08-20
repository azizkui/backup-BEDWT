import React from "react";
import { Link } from "react-router-dom";

// IMAGES IMPORT DESTINATION
import destination1 from "../../Assets/images/destination1.png";
import destination2 from "../../Assets/images/destination2.png";
import destination3 from "../../Assets/images/destination3.png";
import destination4 from "../../Assets/images/destination4.png";
import destination5 from "../../Assets/images/destination5.png";
import destination6 from "../../Assets/images/destination6.png";

const destination = [
  {
    id: "1",
    title_des: "6D/4N Fun Tassie Vacation ...",
    rating: "12/15",
    price: "IDR. 12,398,000",
    place: "Australia",
    images_des: destination1,
  },
  {
    id: "2",
    title_des: "6D/4N Exciting Summer in ...",
    rating: "14/15",
    price: "IDR. 10,288,000",
    place: " South Korea ",
    images_des: destination2,
  },
  {
    id: "3",
    title_des: "8D/6N Wonderful Autum ... ",
    rating: "10/15",
    price: "IDR. 28,999,000 ",
    place: "Japan",
    images_des: destination3,
  },
  {
    id: "4",
    title_des: "4D/3N Overland Jakarta B...",
    rating: "8/10",
    price: "IDR. 3,188,000",
    place: "Indonesia",
    images_des: destination4,
  },
  {
    id: "5",
    title_des: "4D/3N Labuan Bajo Delight",
    rating: "14/15",
    price: "IDR. 10,488,000",
    place: "Indonesia",
    images_des: destination5,
  },
  {
    id: "6",
    title_des: "5D/4N Magic Tokyo Fun",
    rating: "10/15",
    price: "IDR. 11,188,000",
    place: "Japan",
    images_des: destination6,
  },
];
export default function Destination() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridGap: "1rem",
        justifyItems: "center",
      }}
    >
      {destination.map((destinations) => (
        <div className="bg-group-tour-content">
          <Link to={`details/${destinations.id}`}>
            <div className="img-group-tour-content">
              <img
                src={destinations.images_des}
                width="328px"
                height="241px"
                alt=""
              />
            </div>
            <div className="bg-rating-group-tour-content"></div>
            <div className="rating-group-tour-content">
              {destinations.rating}
            </div>
            <div className="container-text-destination">
              <div className="title-group-tour-content">
                {destinations.title_des}
              </div>
              <div className="flex-price-and-place">
                <p className="price-group-tour-content">
                  {destinations.price}{" "}
                </p>
                <p className="place-group-tour-content">{destinations.place}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
