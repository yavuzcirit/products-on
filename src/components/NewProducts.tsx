'use client';
import React, { useState } from "react";
import { IProduct } from "@/types";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

const NewProducts = ({ productsData }: { productsData: IProduct[] }) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | undefined>(productsData);

  const handleFilterChange = (filter: any) => {
    let filtered = [...productsData];

    if (filter.size !== "all") {
      filtered = filtered.filter((product) => product.sizes.includes(filter.size));
    }

    if (filter.exactSize !== "") {
      filtered = filtered.filter((product) => product.sizes.includes(filter.exactSize));
    }

    if (filter.minPrice !== "") {
      filtered = filtered.filter((product) => product.priceO >= parseFloat(filter.minPrice));
    }

    if (filter.maxPrice !== "") {
      filtered = filtered.filter((product) => product.priceO <= parseFloat(filter.maxPrice));
    }

    if (filter.sortBy === "asc") {
      filtered = filtered.sort((a, b) => a.sizes.length - b.sizes.length);
    } else {
      filtered = filtered.sort((a, b) => b.sizes.length - a.sizes.length);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <div className="container mx-auto">
        <FilterBar onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts?.map((item: IProduct) => (
            <ProductCard
              key={item?.id}
              img={item.images[0]}
              title={item.brand}
              desc={item.description}
              rating={5}
              price={String(item.priceO)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
