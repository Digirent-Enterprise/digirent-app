/* eslint-disable @typescript-eslint/no-unused-vars */
import { useTranslation } from "react-i18next";
import { sortByOptions } from "../../../utils/constants/helper.constant";

type SearchResultsSectionProps = {
  selectChange: (value: any) => void;
  selectedOption: any;
};

const SearchResultsSection = ({
  selectChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectedOption,
}: SearchResultsSectionProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center sm:justify-end px-4 space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
        <div className="flex-1" />
        <div className="flex items-center text-sm text-gray-500">
          <label
            htmlFor="sort"
            className="inline-block w-auto pr-2 text-base font-medium text-gray-400"
          >
            {t("Sort")}
          </label>
          <select
            defaultValue="default"
            id="sort"
            name="sort"
            className="block w-auto py-2 pl-3 pr-10 text-base font-bold text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={selectChange}
          >
            <option value="default">A-Z</option>
            {sortByOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsSection;
