import React from "react";

const MenuCard = ({ Menudata }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {Menudata.map((curElem) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    <span className="card-author subtle">
                      {curElem.category}
                    </span>
                    <h2 className="card=title">{curElem.name}</h2>
                    <span className="card-discription subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img
                    src={curElem.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">order now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
