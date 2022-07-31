import React from "react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const CustomBreadcrumb = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="#">
          Category
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Phone</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
