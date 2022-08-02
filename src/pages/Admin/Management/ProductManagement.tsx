/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Box,
  Button,
  IconButton,
  Flex,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuOptionGroup,
  MenuList,
} from "@chakra-ui/react";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import { useTable, useSortBy, usePagination } from "react-table";

import { ProductColumns } from "./Columns";

// import { useDisclosure } from "@chakra-ui/hooks";
// import {
//   DeleteProductModal,
//   DeleteTransactionModal,
//   DeleteUserModal,
//   EditProductModal,
//   EditTransactionModal,
//   EditUserModal,
// } from "../../../components";
import DefaultAdminLayout from "../DefaultAdminLayout";
import { getAllProducts } from "../../../store/selectors/product.selector";
import { getProducts } from "../../../store/actions/product.action";

const ProductManagement = () => {
  const dispatch = useDispatch();

  const productFetchData = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productColumns = useMemo(() => ProductColumns, []);
  const productData = useMemo(() => productFetchData, []);
  const tableInstance = useTable(
    {
      columns: productColumns,
      data: productData,
    },
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setSortBy,
    allColumns,
  } = tableInstance;

  const { pageIndex } = state;

  const [selectedSortColumn, setSelectedSortColumn] = useState({
    id: "",
    desc: false,
  });

  function handleSort(e: any) {
    const temp = { ...selectedSortColumn };
    temp.id = e;
    setSelectedSortColumn(temp);
    setSortBy([temp]);
  }

  const typeOfSort = (e: any) => {
    let tempColumn;
    if (e === "0") {
      tempColumn = { ...selectedSortColumn };
      tempColumn.desc = false;
      setSelectedSortColumn(tempColumn);
      setSortBy([tempColumn]);
    } else {
      tempColumn = { ...selectedSortColumn };
      tempColumn.desc = true;
      setSelectedSortColumn(tempColumn);
      setSortBy([tempColumn]);
    }
  };

  return (
    <DefaultAdminLayout>
      <Box>
        <Menu>
          <MenuButton
            alignSelf="center"
            rightIcon={<ChevronDownIcon />}
            variant="outline"
            mx="1em"
            size="xs"
            as={Button}
            colorScheme="blue"
          >
            {selectedSortColumn.desc === true ? "Descending" : "Ascending"}
          </MenuButton>
          <MenuList color="gray.800" zIndex="3" minWidth="240px">
            <MenuOptionGroup
              type="radio"
              defaultValue="0"
              onChange={(e) => typeOfSort(e)}
            >
              <MenuItemOption key={0} value="0">
                Ascending
              </MenuItemOption>
              <MenuItemOption key={1} value="1">
                Descending
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            alignSelf="center"
            rightIcon={<ChevronDownIcon />}
            variant="outline"
            mx="1em"
            size="xs"
            as={Button}
            colorScheme="blue"
          >
            Sort By
          </MenuButton>
          <MenuList color="gray.800" zIndex="3" minWidth="240px">
            <MenuOptionGroup type="radio" onChange={(e) => handleSort(e)}>
              {allColumns.map((column: any, idx: any) => (
                <MenuItemOption
                  icon={
                    column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon />
                      ) : (
                        <TriangleUpIcon />
                      )
                    ) : (
                      ""
                    )
                  }
                  key={idx}
                  value={column.id}
                >
                  {column.Header}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Button
          size="xs"
          m="4px"
          colorScheme="red"
          variant="outline"
          onClick={() => setSortBy([])}
        >
          Reset Sorting
        </Button>
      </Box>
      <Box maxH="30em" overflowY="scroll">
        <Table {...getTableProps()} size="sm" variant="simple">
          <Thead
            p="0"
            position="sticky"
            zIndex="1"
            top="0px"
            style={{ overflow: "scroll" }}
            bg="gray.100"
          >
            {headerGroups.map((headerGroup: any, indexKey: any) => (
              <Tr p="0" key={indexKey} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any, columnIndex: any) => (
                  <Th
                    borderColor="gray.200"
                    p="1em"
                    className="th1"
                    key={columnIndex}
                    color="gray.800"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {/* This will render the Title of column */}
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon />
                      ) : (
                        <TriangleUpIcon />
                      )
                    ) : (
                      ""
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>

          <Tbody className="body1" p="1em" {...getTableBodyProps()}>
            {page && page.length > 0 ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <Tr className="tr1" {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <Td
                          className="td1"
                          color="gray.600"
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}{" "}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })
            ) : (
              <Text textAlign="center" fontSize="1em" mx="auto">
                No Data Found
              </Text>
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex
        borderTop="5px solid"
        borderColor="gray.200"
        justifyContent="flex-end"
      >
        <Spacer />
        <Flex alignContent="center">
          <IconButton
            _focus={{ boxShadow: "" }}
            _hover={{ backgroundColor: "" }}
            _active={{ backgroundColor: "" }}
            color="gray.800"
            bg="white"
            fontSize="15px"
            icon={<ArrowLeftIcon />}
            disabled={!canPreviousPage}
            onClick={() => gotoPage(0)}
            aria-label=""
          />
          <IconButton
            _focus={{ boxShadow: "" }}
            _hover={{ backgroundColor: "" }}
            _active={{ backgroundColor: "" }}
            color="gray.800"
            bg="white"
            fontSize="30px"
            icon={<ChevronLeftIcon />}
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
            aria-label=""
          />
          <Text m="0" alignSelf="center">
            {pageIndex + 1} - {pageOptions.length}{" "}
          </Text>
          <IconButton
            _focus={{ boxShadow: "" }}
            _hover={{ backgroundColor: "" }}
            _active={{ backgroundColor: "" }}
            color="gray.800"
            bg="white"
            fontSize="30px"
            icon={<ChevronRightIcon />}
            disabled={!canNextPage}
            onClick={() => nextPage()}
            aria-label=""
          />
          <IconButton
            _focus={{ boxShadow: "" }}
            _hover={{ backgroundColor: "" }}
            _active={{ backgroundColor: "" }}
            color="gray.800"
            bg="white"
            fontSize="15px"
            icon={<ArrowRightIcon />}
            disabled={!canNextPage}
            onClick={() => gotoPage(pageCount - 1)}
            aria-label=""
          />
          <Text
            m="0"
            alignSelf="center"
            borderRightColor=""
            defaultChecked={pageIndex + 1}
            borderColor="gray.300"
            fontWeight="bold"
            fontSize="sm"
            whiteSpace="nowrap"
          >
            Go to page
          </Text>
          <Input
            mx="5px"
            alignSelf="center"
            borderColor="gray.600"
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            w="10%"
            size="sm"
          />
        </Flex>
      </Flex>
    </DefaultAdminLayout>
  );
};

export default ProductManagement;
