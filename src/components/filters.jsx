import React from "react";

const filters = [
  "All",
  "T-shirts",
  "Joggers",
  "Shirts",
  "Pants",
  "Cargo",
  "Suits",
  "Jackets",
  "Coats",
  "Sweaters",
  "Hoodies",
  "Blazers",
  "Jeans",
  "Shorts",
  "Swimwear",
  "Underwear",
  "Socks",
  "Footwear",
  "Accessories",
  "Sportswear",
  "Formal Wear",
];

const Filters = () => {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 h-14 md:h-4/5 max-h-screen  no-scrollbar scroll-smooth bg-custom1 p-4">
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 lg:space-y-6 overflow-x-auto md:overflow-y-auto">
        {filters.map((filter, index) => (
          <React.Fragment key={index}>
            <div className="flex-shrink-0 md:flex-shrink">
              <h3 className="font-bold text-base md:text-lg lg:text-xl text-custom2 hover:text-mainColor2 transition ease-in-out cursor-pointer">
                {filter}
              </h3>
            </div>
            {index < filters.length - 1 && (
              <span className="text-custom2 mx-2 block md:hidden">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Filters;
