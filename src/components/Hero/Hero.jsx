import "./Hero.css";
import hero_img from "../../assets/hero_img.png";
const Hero = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero">
        <div className="subscribe">
          <h1>Subscribe to the best of Udemy</h1>
          <p>
            With Personal Plan, you get access to 8000 of our top-rated courses
            in tech, business, design, and more
          </p>
          <button>Learn more</button>
        </div>
        <img src={hero_img} alt="" className="hero-img" />
      </div>
    </div>
      <div className="allthe">
        <h1 className="h1">All the skills you need in one place</h1>
        <p className="p">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
      </div>
      </>
  );
};

export default Hero;
