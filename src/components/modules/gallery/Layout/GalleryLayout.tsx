import Gallery from "../Item/Gallery";
import {DEFAULT_PRODUCT_DETAIL_IMAGE} from "./constant";

type GalleryLayoutProps = {
    productData: {
        images: string[]
    }
}

const GalleryLayout = ({ productData }: GalleryLayoutProps) => {
    const defaultImages = {
        firstImages: productData.images[0] ||DEFAULT_PRODUCT_DETAIL_IMAGE,
        secondImages: productData.images[1] || DEFAULT_PRODUCT_DETAIL_IMAGE,
        thirdImages: productData.images[2] || DEFAULT_PRODUCT_DETAIL_IMAGE,
        fourthImages: productData.images[3]|| DEFAULT_PRODUCT_DETAIL_IMAGE,
        fifthImages: productData.images[4] || DEFAULT_PRODUCT_DETAIL_IMAGE,
        images: productData.images || [DEFAULT_PRODUCT_DETAIL_IMAGE]
    }
return (
    <div className="w-full">
      <Gallery
          {...defaultImages}
      />
    </div>
  );
};

export default GalleryLayout;
