import React from "react";

function Vtuber({ name, picture }) {
  return (
    <div>
      <h3>I love {name}</h3>
      <img src={picture} />
    </div>
  );
}

const vILike = [
  {
    name: "Ouro Kronii",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Ouro-Kronii_pr-img_02.png",
  },
  {
    name: "NaNashi Mumei",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Nanashi-Mumei_pr-img_02.png",
  },
  {
    name: "Hakos Baelz",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Hakos-Baelz_pr-img_02.png",
  },
  {
    name: "Ceres Fauna",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/Ceres-Fauna_pr-img_02.png",
  },
  {
    name: "IRyS",
    image:
      "https://hololive.hololivepro.com/wp-content/uploads/2020/07/IRyS_pr-img_01-1.png",
  },
];

function renderVtuber(idol) {
  console.log(idol);
  return <Vtuber name={idol.name} picture={idol.image} />;
}

function App() {
  return <div>{vILike.map(renderVtuber)}</div>;
}

export default App;
