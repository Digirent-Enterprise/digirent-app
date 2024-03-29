import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { getCategoryByID } from "../../../store/actions/category.action";
import CategoryBannerLayout from "./Layout/CategoryBannerLayout";
import { getCategoriesByIdSelector } from "../../../store/selectors/category.selector";
import SearchResultsSection from "../search/SearchResultsSection";
import ProductCard from "../productCard/Item/ProductCard";
import { IProduct } from "../../../store/types/product.types";
import NotFoundCategory from "../NotFoundResult/NotFoundCategory";

const ProductListingCategory = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedOpt, setSelectedOpt] = useState<String>("");
  const query = new URLSearchParams(useLocation().search);
  const queryName = query.get("queryName");
  const categoryFetchData = useSelector(getCategoriesByIdSelector);
  useEffect(() => {
    if (queryName) {
      dispatch(getCategoryByID(queryName));
    }
  }, [queryName]);
  const categoryData = useMemo(() => categoryFetchData, [categoryFetchData]);

  const { products }: any = categoryData[0];
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (products && products.length > 0) {
      setCurrentItems(products.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(products.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedOpt(value);
  };

  return (
    <>
      {categoryData && Object.keys(categoryData) && (
        <div className="gap-5">
          <Link to="/">
            <div className="flex px-8 py-8">
              <AiOutlineArrowLeft color="#4169E1" className="mx-2 text-3xl" />
              <p className="text-lg text-[#4169E1]">{t("BackToHome")}</p>
            </div>
          </Link>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex justify-center w-full">
                <CategoryBannerLayout categoryData={categoryData} />
              </div>
              <div className="w-[97.5%] flex justify-end">
                <SearchResultsSection
                  selectChange={handleSelected}
                  selectedOption={selectedOpt}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 pb-10 mx-auto lg:py-12 lg:px-8">
            <div className="col-span-5 gap-24 w-full">
              <div className=" border-black grid justify-center items-center pr-8 grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {currentItems.map((product: IProduct) => (
                  <Link to={`/product/${product._id}`} key={product._id}>
                    <ProductCard
                      id={product._id}
                      key={product._id}
                      name={product.name}
                      image={product.images[0]}
                      rentalCost={product.rentalCost}
                      rentalCostType={product.rentalCostType}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {products.length > 0 ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel={t("Next")}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={t("Previous")}
          containerClassName="pagination container flex justify-center mx-auto py-10"
          pageLinkClassName="age-num z-10 border-black relative inline-flex items-center px-4 py-2 border text-sm font-medium border-r-0 hover:bg-blue-100 hover:text-white"
          previousLinkClassName="age-num z-10 border-black text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium border-r-0 hover:bg-blue-100 hover:text-white"
          nextLinkClassName="page-num z-10 border-black text-black relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-blue-100 hover:text-white"
          activeLinkClassName="page-num text-white bg-blue-300"
        />
      ) : (
        <div className="flex justify-center text-5xl font-bold text-center">
          <NotFoundCategory />
        </div>
      )}
    </>
  );
};

export default ProductListingCategory;
