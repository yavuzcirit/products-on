import React, { useState, useEffect } from "react";

const FilterBar = ({ onFilterChange }: { onFilterChange: (filter: any) => void }) => {
  const [filter, setFilter] = useState({
    size: "all",
    exactSize: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "asc",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevFilter) => ({ ...prevFilter, [event.target.name]: event.target.value }));
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prevFilter) => ({ ...prevFilter, sortBy: event.target.value }));
  };

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-auto items-center bg-gray-200 p-4 mb-4 rounded-lg shadow-md">

      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
        <input
          placeholder="Exact Size..."
          type="text"
          name="exactSize"
          value={filter.exactSize}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
        <input
          placeholder="Min. Price..."
          type="text"
          name="minPrice"
          value={filter.minPrice}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
        <input
          placeholder="Max. Price..."
          type="text"
          name="maxPrice"
          value={filter.maxPrice}
          onChange={handleInputChange}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="flex items-center space-x-4">
        <label className="font-bold text-lg">Sort by:</label>
        <select
          className="border p-2 rounded-md"
          value={filter.sortBy}
          onChange={handleSortChange}
        >
          <option value="asc">Size: Low to High</option>
          <option value="desc">Size: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
