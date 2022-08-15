/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchHeaderSection,
  SearchResultsSection,
  ProductCardListing,
  Transition,
} from "../../components";
import FilterPanel from "../../components/layouts/filters/FilterPanel";
import ProductsListing from "../../components/layouts/productCard/ProductCardListing";
import ProductListLayout from "../../components/layouts/productCard/ProductLayoutList/ProductLayoutList";

import { getProducts, setProducts } from "../../store/actions/product.action";

import { getAllProductsSelector } from "../../store/selectors/product.selector";
import { IProduct } from "../../store/types/product.types";
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

const ProductSearchPage = () =>
  // requestSearchQuery = "",
  // requestRentalCostFrom = 0,
  // requestRentalCostTo = 0,
  // requestFilterCategories = [],
  // requestPageNumber = 1,
  // requestPageLimit = 6,
  {
    // const [searchQuery, setSearchQuery] = useState(requestSearchQuery);
    // const [filterCategories, setFilterCategories] = useState(
    //   requestFilterCategories,
    // );
    // const [rentalCostFrom, setRentalCostFrom] = useState(requestRentalCostFrom);
    // const [rentalCostTo, setRentalCostTo] = useState(requestRentalCostTo);
    // const [orderBy, setOrderBy] = useState(sortByOptions[0].id);
    // const [pageNumber, setPageNumber] = useState(requestPageNumber);
    // const [pageLimit, setPageLimit] = useState(requestPageLimit);
    // const [isSearching, setIsSearching] = useState(true);

    const productData = useSelector(getAllProductsSelector);

    // const productData = useMemo(() => productFetchData, [productFetchData]);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, []);

    const [productList, setProductList] = useState(productData);

    const [foundProduct, setFoundProduct] = useState(true);
    const [searchInput, setSearchInput] = useState("");

    const [categories, setCategories] = useState([
      {
        id: 1,
        value: "Tablets and Cellphones",
        checked: false,
      },
      {
        id: 2,
        value: "Laptops",
        checked: false,
      },
      {
        id: 3,
        value: "Cameras",
        checked: false,
      },
      {
        id: 4,
        value: "Audio",
        checked: false,
      },
      {
        id: 5,
        value: "Gaming and VR",
        checked: false,
      },
      {
        id: 6,
        value: "E-Mobility",
        checked: false,
      },
      {
        id: 7,
        value: "Wearables",
        checked: false,
      },
      {
        id: 8,
        value: "Home Entertainment",
        checked: false,
      },
    ]);

    const [selectedCost, setSelectedCost] = useState([100, 5000]);

    // const contextValues = useMemo(
    //   () => ({
    //     filterCategories,
    //     isSearching,
    //     orderBy,
    //     pageLimit,
    //     pageNumber,
    //     rentalCostFrom,
    //     rentalCostTo,
    //     searchQuery,
    //   }),
    //   [
    //     filterCategories,
    //     isSearching,
    //     orderBy,
    //     pageLimit,
    //     pageNumber,
    //     rentalCostFrom,
    //     rentalCostTo,
    //     searchQuery,
    //   ],
    // );

    // const addFilterCategory = (category: string) => {
    //   if (!filterCategories.includes(category)) {
    //     setFilterCategories([...filterCategories, category]);
    //   }
    // };
    // const removeFilterCategory = (category: string) => {
    //   if (filterCategories.includes(category)) {
    //     setFilterCategories(filterCategories.filter((c) => c !== category));
    //   }
    // };
    // const triggerSearch = () => {
    //   setIsSearching(true);
    // };

    const handleChangeChecked = (id: any) => {
      const categoriesList = categories;
      const changeChecked = categoriesList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      );
      setCategories(changeChecked);
    };

    const handleChangeCost = (value: any) => {
      setSelectedCost(value);
    };

    // Filter
    const filters = () => {
      let updatedList = productData;

      // Search
      if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.name.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1,
        );
      }

      // Category
      const categoriesChecked = categories
        .filter((item) => item.checked)
        .map((item) => item.value);

      if (categoriesChecked.length) {
        updatedList = updatedList
          .filter((item) => categoriesChecked.includes(item.category))
          .map((item) => item);
      }

      // Rental Cost
      const min = selectedCost[0];
      const max = selectedCost[1];

      updatedList = updatedList.filter(
        (item) => item.rentalCost >= min && item.rentalCost <= max,
      );

      setProductList(updatedList);
      !updatedList.length ? setFoundProduct(false) : setFoundProduct(true);
    };

    useEffect(() => {
      filters();
    }, [productData, searchInput, categories, selectedCost]);

    return (
      <Transition>
        <DefaultLayout>
          {/* <SearchSectionContext.Provider value={contextValues}> */}
          <SearchHeaderSection
            // setSearchQuery={setSearchQuery}
            // setIsSearching={setIsSearching}
            searchInput={searchInput}
            onChangeInput={(e: any) => setSearchInput(e.target.value)}
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
          {/* </SearchSectionContext.Provider> */}

          <div className="grid grid-cols-5 pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
            <div className="col-span-1">
              <FilterPanel
                selectedCost={selectedCost}
                changeCost={handleChangeCost}
                categories={categories}
                changeChecked={handleChangeChecked}
              />
            </div>
            <div className="col-span-4">
              {/* <SearchResultsSection
              triggerSearch={triggerSearch}
              setIsSearching={setIsSearching}
              setOrderBy={setOrderBy}
              setPageNumber={setPageNumber}
            /> */}

              {foundProduct ? (
                <ProductListLayout products={productList} />
              ) : (
                <p>Failed</p>
              )}
            </div>
          </div>
        </DefaultLayout>
      </Transition>
    );
  };

// ProductSearchPage.getInitialProps = ({ query }: any) => {
//   const search =
//     typeof query.search === "string" && query.search.length > 0
//       ? query.search
//       : "";
//   const categories =
//     typeof query.categories === "string" && query.categories.length > 0
//       ? query.categories.split(",")
//       : [];
//   const rentalCostFrom =
//     typeof query.rentalCostFrom === "string"
//       ? Number(query.rentalCostFrom) ?? 0
//       : 0;
//   const rentalCostTo =
//     typeof query.rentalCostTo === "string"
//       ? Number(query.rentalCostTo) ?? 0
//       : 0;
//   const pageNumber =
//     typeof query.page === "string" ? Number(query.page) ?? 0 : 1;
//   const pageLimit =
//     typeof query.limit === "string" ? Number(query.limit) ?? 0 : 6;
//   return {
//     requestSearchQuery: search,
//     requestFilterCategories: categories,
//     requestRentalCostFrom: rentalCostFrom,
//     requestRentalCostTo: rentalCostTo,
//     requestPageNumber: pageNumber,
//     requestPageLimit: pageLimit,
//   };
// };

export default ProductSearchPage;
