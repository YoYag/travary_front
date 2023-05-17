import React from "react";
import { Link } from "react-router-dom";
import main_plan from "../assets/images/main/travel_1.jpg";
import main_diary from "../assets/images/main/travel_2.jpg";

const Main = () => {
  return (
    <div className="w-full">
      <div className="card lg:card-side my-4 bg-base-100 shadow-xl">
        <figure>
          <img className="h-96" src={main_plan} alt="main_banner_img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nemo
            alias temporibus sed voluptatibus veritatis earum velit labore, iste
            veniam ipsum quo voluptas fugiat quia magni quas a! Quae, sapiente?
          </p>
          <div className="card-actions justify-end">
            <Link to={`/create_plan`}>
              <button className="btn">여행 계획</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nemo
            alias temporibus sed voluptatibus veritatis earum velit labore, iste
            veniam ipsum quo voluptas fugiat quia magni quas a! Quae, sapiente?
          </p>
          <div className="card-actions justify-start">
            <Link to={`/create_diary`}>
              <button className="btn">여행 일기</button>
            </Link>
          </div>
        </div>
        <figure>
          <img className="h-96" src={main_diary} alt="main_banner_img" />
        </figure>
      </div>
    </div>
  );
};

export default Main;
