const FavoriteContainer = ({ favorites, children }: any) => {
  if (!Object.values(favorites).length) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div>
          <h1 className="text-[86px] text-center">No Favorites</h1>
          <p className="text-[20px]">
            Add products to favorites by pressing heart icon inside product
            card.
          </p>
        </div>
      </div>
    );
  }
  return children;
};

export default FavoriteContainer;
