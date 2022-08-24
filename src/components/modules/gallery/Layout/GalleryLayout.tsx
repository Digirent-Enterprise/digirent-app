import Gallery from "../Item/Gallery";
import { DEFAULT_PRODUCT_DETAIL_IMAGE } from "./constant";

type GalleryLayoutProps = {
  productData: {
    images: string[];
  };
};

const GalleryLayout = ({ productData }: GalleryLayoutProps) => {
  const defaultImages = {
    images: productData.images || [DEFAULT_PRODUCT_DETAIL_IMAGE],
  };
  return (
    <div className="w-full">
      <Gallery {...defaultImages} />
    </div>
  );
};

export default GalleryLayout;
