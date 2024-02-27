import React from "react";
import PropTypes from "prop-types";

function Vtuber({ name, picture, rating }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <h4>rating {rating}</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Vtuber.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const vILike = [
  {
    id: 1,
    name: "Ouro Kronii",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Ouro-Kronii_pr-img_02.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "NaNashi Mumei",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Nanashi-Mumei_pr-img_02.png",
    rating: 3.9,
  },
  {
    id: 3,
    name: "Hakos Baelz",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Hakos-Baelz_pr-img_02.png",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Ceres Fauna",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Ceres-Fauna_pr-img_02.png",
    rating: 3.6,
  },
  {
    id: 5,
    name: "IRyS",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/IRyS_pr-img_01-1.png",
    rating: 4.4,
  },
];

function App() {
  return (
    <div>
      {vILike.map((idol) => (
        <Vtuber
          key={idol.id}
          name={idol.name}
          picture={idol.image}
          rating={idol.rating}
        />
      ))}
    </div>
  );
}

export default App;
