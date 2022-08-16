/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchHeaderSection,
  SearchResultsSection,
  ProductCardListing,
} from "../../components";

import { getProducts, setProducts } from "../../store/actions/product.action";
import { getAllProductsSelector } from "../../store/selectors/product.selector";
import { sortByOptions } from "../../utils/constants/helper.constant";
import DefaultLayout from "../DefaultLayout";

interface SearchSectionContextValue {
  searchQuery: string;
  filterCategories: string[];
  rentalCostFrom: number;
  rentalCostTo: number;
  orderBy: string;
  pageNumber: number;
  pageLimit: number;
  isSearching: boolean;
}

const defaultSearchSectionContextValue: SearchSectionContextValue = {
  searchQuery: "",
  filterCategories: [],
  rentalCostFrom: 0,
  rentalCostTo: 100,
  orderBy: "views",
  pageNumber: 1,
  pageLimit: 6,
  isSearching: false,
};

export const SearchSectionContext = createContext<SearchSectionContextValue>(
  defaultSearchSectionContextValue,
);

interface SearchSectionProps {
  setIsSearching: boolean;
  setOrderBy: string;
  setPageNumber: number;
  triggerSearch: any;
  setSearchQuery: string;
}

interface ProductSearchPageProps {
  requestSearchQuery?: string;
  requestRentalCostFrom?: number;
  requestRentalCostTo?: number;
  requestOrderBy?: string;
  requestFilterCategories?: string[];
  requestPageNumber?: number;
  requestPageLimit?: number;
}

const ProductSearchPage = ({
  requestSearchQuery = "",
  requestRentalCostFrom = 0,
  requestRentalCostTo = 0,
  requestFilterCategories = [],
  requestPageNumber = 1,
  requestPageLimit = 6,
}: ProductSearchPageProps) => {
  const [searchQuery, setSearchQuery] = useState(requestSearchQuery);
  const [filterCategories, setFilterCategories] = useState(
    requestFilterCategories,
  );
  const [rentalCostFrom, setRentalCostFrom] = useState(requestRentalCostFrom);
  const [rentalCostTo, setRentalCostTo] = useState(requestRentalCostTo);
  const [orderBy, setOrderBy] = useState(sortByOptions[0].id);
  const [pageNumber, setPageNumber] = useState(requestPageNumber);
  const [pageLimit, setPageLimit] = useState(requestPageLimit);
  const [isSearching, setIsSearching] = useState(true);

  const productData = useSelector(getAllProductsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const contextValues = useMemo(
    () => ({
      filterCategories,
      isSearching,
      orderBy,
      pageLimit,
      pageNumber,
      rentalCostFrom,
      rentalCostTo,
      searchQuery,
    }),
    [
      filterCategories,
      isSearching,
      orderBy,
      pageLimit,
      pageNumber,
      rentalCostFrom,
      rentalCostTo,
      searchQuery,
    ],
  );

  const addFilterCategory = (category: string) => {
    if (!filterCategories.includes(category)) {
      setFilterCategories([...filterCategories, category]);
    }
  };
  const removeFilterCategory = (category: string) => {
    if (filterCategories.includes(category)) {
      setFilterCategories(filterCategories.filter((c) => c !== category));
    }
  };
  const triggerSearch = () => {
    setIsSearching(true);
  };

  return (
    <DefaultLayout>
      <SearchSectionContext.Provider value={contextValues}>
        <SearchHeaderSection
          setSearchQuery={setSearchQuery}
          setIsSearching={setIsSearching}
        />
        {/* <div className="pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-5"> */}
        {/* <div
            data-triggerSearch={triggerSearch}
            data-setRentalCostFrom={setRentalCostFrom}
            data-setRentalCostTo={setRentalCostTo}
            data-addFilterCategory={addFilterCategory}
            data-removeFilterCategory={removeFilterCategory}
          /> */}
        {/* <SearchResultsSection

              triggerSearch={triggerSearch}
              setIsSearching={setIsSearching}
              setOrderBy={setOrderBy}
              setPageNumber={setPageNumber}
            />
          </div> */}
      </SearchSectionContext.Provider>

      <div className="grid grid-cols-5 pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
        <div className="col-span-1">Filter Panel</div>
        <div className="col-span-4">
          <SearchResultsSection
            triggerSearch={triggerSearch}
            setIsSearching={setIsSearching}
            setOrderBy={setOrderBy}
            setPageNumber={setPageNumber}
          />
          <ProductCardListing />
        </div>
      </div>
    </DefaultLayout>
  );
};

ProductSearchPage.getInitialProps = ({ query }: any) => {
  const search =
    typeof query.search === "string" && query.search.length > 0
      ? query.search
      : "";
  const categories =
    typeof query.categories === "string" && query.categories.length > 0
      ? query.categories.split(",")
      : [];
  const rentalCostFrom =
    typeof query.rentalCostFrom === "string"
      ? Number(query.rentalCostFrom) ?? 0
      : 0;
  const rentalCostTo =
    typeof query.rentalCostTo === "string"
      ? Number(query.rentalCostTo) ?? 0
      : 0;
  const pageNumber =
    typeof query.page === "string" ? Number(query.page) ?? 0 : 1;
  const pageLimit =
    typeof query.limit === "string" ? Number(query.limit) ?? 0 : 6;
  return {
    requestSearchQuery: search,
    requestFilterCategories: categories,
    requestRentalCostFrom: rentalCostFrom,
    requestRentalCostTo: rentalCostTo,
    requestPageNumber: pageNumber,
    requestPageLimit: pageLimit,
  };
};

export default ProductSearchPage;
