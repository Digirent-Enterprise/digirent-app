import Gallery from "../Item/Gallery";

const GalleryLayout = ({ productData }: any) => {
  return (
    <div>
      <Gallery
        firstImages={productData.images[0]}
        secondImages={productData.images[1]}
        thirdImages={productData.images[2]}
        fourthImages={productData.images[3]}
        fifthImages={productData.images[4]}
        images={productData.images}
      />
    </div>
  );
};

export default GalleryLayout;
