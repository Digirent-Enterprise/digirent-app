interface INewProductProps {
  productPrice: string;
  productDescription: string;
  productImage: string;
  productUrl: string;
}

const NewProduct = ({
  productDescription,
  productPrice,
  productImage,
  productUrl,
}: INewProductProps) => {
  return (
    <a href={productUrl} className="block">
      <div className="flex justify-center">
        <strong className="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
          {" "}
          New{" "}
        </strong>
      </div>

      <img
        alt="New Product"
        src={productImage}
        className="object-cover w-full -mt-3 h-96"
      />

      <h5 className="mt-4 text-sm text-black/90">{productDescription}</h5>

      <div className="flex items-center justify-between mt-4 font-bold">
        <p className="text-lg">${productPrice}</p>
      </div>
    </a>
  );
};

export default NewProduct;
