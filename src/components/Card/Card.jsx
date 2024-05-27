import "./Card.css";
import card from "../../assets/card.jpg";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";

const Card = () => {
  return (
    <div>
      <div className="toggle-nav">
        <a href="#">Web Development</a>
        <a href="#">IT Certifications</a>
        <a href="#">Leadership</a>
        <a href="#">Data Science</a>
        <a href="#">Communication</a>
        <a href="#">Business Analytics & Intelligence</a>
      </div>
      <hr />
      <div className="card">
        <div className="btns">
          <button className="active">Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
          <button>Web Developement</button>
        </div>
        <div className="cards-section">
          <div className="cards">
            <div className="upper">
              <img src={card} alt="" />
            </div>
            <div className="lower">
              <h3>The Complete 2024 Web Development Bootcamp</h3>
              <p className="person">Dr.Angela Yu</p>
              <p>
                4.7 <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />{" "}
                <FaStarHalf className="ratings" />
                (378,179)
              </p>
              <p>
                $449 <span>$999</span>
              </p>
              <button className="bestseller">Bestseller</button>
            </div>
          </div>
          <div className="cards">
            <div className="upper">
              <img src={card} alt="" />
            </div>
            <div className="lower">
              <h3>The Complete 2024 Web Development Bootcamp</h3>
              <p>Dr.Angela Yu</p>
              <p>
                4.7 <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />{" "}
                <FaStarHalf className="ratings" />
                (378,179)
              </p>
              <p>
                $449 <span>$999</span>
              </p>
              <button className="bestseller">Bestseller</button>
            </div>
          </div>{" "}



          <div className="cards">
            <div className="upper">
              <img src={card} alt="" />
            </div>
            <div className="lower">
              <h3>The Complete 2024 Web Development Bootcamp</h3>
              <p>Dr.Angela Yu</p>
              <p>
                4.7 <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />{" "}
                <FaStarHalf className="ratings" />
                (378,179)
              </p>
              <p>
                $449 <span>$999</span>
              </p>
              <button className="bestseller">Bestseller</button>
            </div>
          </div>
          {" "}



          
          <div className="cards">
            <div className="upper">
              <img src={card} alt="" />
            </div>
            <div className="lower">
              <h3>The Complete 2024 Web Development Bootcamp</h3>
              <p>Dr.Angela Yu</p>
              <p>
                4.7 <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />
                <FaStar className="ratings" />{" "}
                <FaStarHalf className="ratings" />
                (378,179)
              </p>
              <p>
                $449 <span>$999</span>
              </p>
              <button className="bestseller">Bestseller</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
