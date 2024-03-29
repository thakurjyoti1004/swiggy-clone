const CategoryItemList = ({ categoryData }) => {

  return (
    <div className="m-2 text-left block justify-between">
      {categoryData?.itemCards.map((cardData) => {
        return (
          <div className="flex flex-row my-2 items-center border-b-2 pb-4 border-gray-400">
            <div className="w-[66%]">
              <h2 className="font-bold">{cardData.card.info.name}</h2>
              <p className="font-bold">
                ₹{" "}
                {cardData.card.info.defaultPrice
                  ? cardData.card.info.defaultPrice / 100
                  : cardData.card.info.price / 100}
              </p>
              <p>{cardData.card.info.description}</p>
            </div>
            <div className="ml-auto w-[12%] h-20 ">
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                  cardData?.card?.info?.imageId
                }
                className="object-cover h-full border rounded-lg w-full"
                alt="food-image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryItemList;
