import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Show, Hide } from "@chakra-ui/react";
import { SearchHeaderSection, SearchResultsSection } from "../../components";

import NotFoundProduct from "../../components/layouts/NotFoundResult/NotFoundProduct";
import FilterPanel from "../../components/layouts/filters/FilterPanel";

import { getAllProductsSelector } from "../../store/selectors/product.selector";

import DefaultLayout from "../DefaultLayout";
import ProductListLayout from "../../components/layouts/productCard/ProductLayoutList/ProductLayoutList";
import Helmet from "../../Helmet";

const ProductSearchPage = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<String>("");

  const productData = useSelector(getAllProductsSelector);

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

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelected(value);
  };

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
    updatedList = updatedList.sort((productA, productB) =>
      productA.name.localeCompare(productB.name),
    );

    // Sort
    if (selected) {
      // default
      if (selected === "default") {
        updatedList = updatedList.sort((productA, productB) =>
          productA.name.localeCompare(productB.name),
        );
      }

      // by date
      if (selected === "time") {
        updatedList = updatedList.sort((productA, productB) => {
          const productStart = productA;
          const productEnd = productB;
          productStart.createdDate = new Date(productStart.createdDate);
          productEnd.createdDate = new Date(productEnd.createdDate);
          return (
            productEnd.createdDate.getTime() -
            productStart.createdDate.getTime()
          );
        });
      }
    }

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

    if (!updatedList.length) {
      setFoundProduct(false);
    } else {
      setFoundProduct(true);
    }
  };

  // Count result(s)

  useEffect(() => {
    filters();
  }, [productData, searchInput, categories, selectedCost, selected]);

  return (
    <DefaultLayout>
      <Helmet
        title={t("ProductSearchPageHelmetTitle")}
        addPostfixTitle
        description={t("ProductSearchPageHelmetDes")}
      />
      <SearchHeaderSection
        searchInput={searchInput}
        onChangeInput={(e: any) => setSearchInput(e.target.value)}
      />

      <div className="grid grid-cols-5 mx-auto max-w-7xl md:py-12 md:px-6l g:py-12 lg:px-8">
        <Hide below="md">
          {" "}
          <div className="col-span-1 md:p-4 md:mx-4 md:flex ">
            <FilterPanel
              selectedCost={selectedCost}
              changeCost={handleChangeCost}
              categories={categories}
              changeChecked={handleChangeChecked}
            />
          </div>
        </Hide>

        <div className="col-span-5 md:col-span-4">
          <div className="flex justify-center px-5 text-base font-medium text-gray-400 sm:justify-start">
            {foundProduct ? <p>Found {productList.length} results</p> : null}
          </div>
          <Show below="md">
            <div className="flex justify-center w-full mx-auto">
              <FilterPanel
                selectedCost={selectedCost}
                changeCost={handleChangeCost}
                categories={categories}
                changeChecked={handleChangeChecked}
              />
            </div>
          </Show>

          <SearchResultsSection
            selectChange={handleSelected}
            selectedOption={selected}
          />

          {foundProduct ? (
            <div className="">
              <ProductListLayout products={productList} />
            </div>
          ) : (
            <div className="flex justify-center text-5xl font-bold text-center">
              <NotFoundProduct />
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductSearchPage;
