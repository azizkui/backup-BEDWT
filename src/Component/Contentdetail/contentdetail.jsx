import React from "react";

import { Button } from "react-bootstrap";

import "./contentdetail.css";

// Import Images
import img_detail1 from "../../Assets/images/content/sidney.png";
import img_detail2 from "../../Assets/images/content/wolrd.png";
import img_detail3 from "../../Assets/images/content/gol-coast.png";
import img_detail4 from "../../Assets/images/content/ocean-road-adventure.png";

// Import Icon
import hotel_icon from "../../Assets/icon-images/icon-information-trip/hotel.png";
import meal_icon from "../../Assets/icon-images/icon-information-trip/meal.png";
import calendar_icon from "../../Assets/icon-images/icon-information-trip/calendar.png";
import plane_icon from "../../Assets/icon-images/icon-information-trip/plane.png";
import time_icon from "../../Assets/icon-images/icon-information-trip/time.png";

export default function Contentdetail() {
  return (
    <div>
      <div className="flexbox-container">
        <div>
          <div className="title-text-content">
            6D/4N Fun Tassie Vacation + Sydney
          </div>
          <div className="country">Australia</div>
          <div>
            <img className="image-size-1" src={img_detail1} alt="" />
            <div>
              <img className="image-size-2" src={img_detail2} alt="" />
              <img className="image-size-2" src={img_detail3} alt="" />
              <img className="image-size-2" src={img_detail4} alt="" />
            </div>
          </div>
          <div className="information-trip">Information Trip</div>
          <div className="row-position">
            <div className="">
              <div className="information-trip-text">Acomodation</div>
              <div className="icon-and-text-flex ">
                <div>
                  <img
                    className="icon-trip-information"
                    src={hotel_icon}
                    alt=""
                  />
                </div>
                <div className="text-icon-trip-information ">Hotel 4 Night</div>
              </div>
            </div>
            <div className="">
              <div className="information-trip-text">Transportation</div>
              <div className="icon-and-text-flex ">
                <div>
                  <img
                    className="icon-trip-information"
                    src={plane_icon}
                    alt=""
                  />
                </div>
                <div className="text-icon-trip-information ">
                  {" "}
                  Qatar Airways{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className="information-trip-text">Eat</div>
              <div className="icon-and-text-flex ">
                <div>
                  <img
                    className="icon-trip-information"
                    src={meal_icon}
                    alt=""
                  />
                </div>
                <div className="text-icon-trip-information ">
                  {" "}
                  Included as ltinerary{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className="information-trip-text">Duration</div>
              <div className="icon-and-text-flex ">
                <div>
                  <img
                    className="icon-trip-information"
                    src={time_icon}
                    alt=""
                  />
                </div>
                <div className="text-icon-trip-information ">
                  {" "}
                  6 Day 4 Night{" "}
                </div>
              </div>
            </div>
            <div className="">
              <div className="information-trip-text">Date Trip</div>
              <div className="icon-and-text-flex ">
                <div>
                  <img
                    className="icon-trip-information"
                    src={calendar_icon}
                    alt=""
                  />
                </div>
                <div className="text-icon-trip-information ">
                  {" "}
                  26 August 2020{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flexbox-description">
            <div className="description-trip">Description</div>
            <div className="description-trip-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="flexbox-price">
            <div className="flexbox-price-and-person">
              <div className="text-price">IDR 12.398.000</div>
              <div className="text-person">/ Person</div>
            </div>
            <div className="flexbox-btn-up-down">
              <div>
                <Button className="register" variant="warning">
                  -
                </Button>
              </div>
              <div className="text-person"> 1</div>
              <div>
                <Button className="register" variant="warning">
                  +
                </Button>
              </div>
            </div>
          </div>
          <hr
            style={{
              color: "gray",
              height: 5,
            }}
          />
          <div className="flexbox-price">
            <div className="text-total">Total : </div>
            <div className="text-price">IDR. 12.398,000</div>
          </div>
          <hr
            style={{
              color: "gray",
              height: 5,
            }}
          />

          <div class="flexbox-book-now">
            <Button className="register" variant="warning">
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
