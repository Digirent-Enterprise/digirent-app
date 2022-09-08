import React, { useState } from "react";
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  Show,
  Hide,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

interface Props {
  // Category Props
  categories: any;
  changeChecked: (value: any) => void;
  // RentalCost Props
  selectedCost: any;
  changeCost: (value: any) => void;
}

interface CheckboxProps {
  category: any;
  checkedCategory: any;
}

const CategoryCheckbox: React.FC<CheckboxProps> = ({
  checkedCategory,
  category,
}) => {
  const { id, value, checked } = category;
  return (
    <CheckboxGroup colorScheme="green">
      <Checkbox
        w={[50, 100, 200]}
        isChecked={checked}
        onChange={() => checkedCategory(id)}
      >
        {value}
      </Checkbox>
    </CheckboxGroup>
  );
};

const FilterPanel: React.FC<Props> = ({
  categories,
  selectedCost,
  changeCost,
  changeChecked,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <Box marginTop={10} w="full">
        {/* Category filter */}
        <FormControl
          marginBottom={10}
          className="grid grid-cols-2 md:grid-cols-1"
        >

          <p className="pt-2 pr-">Categories & filter</p>
          <Hide below="md">
            {categories.map((category: any) => (
              <CategoryCheckbox
                key={category.id}
                category={category}
                checkedCategory={changeChecked}
              />
            ))}
            <FormLabel>Rental Cost</FormLabel>
            <RangeSlider
              min={100}
              max={5000}
              focusThumbOnChange={false}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              value={selectedCost}
              onChange={changeCost}
              marginTop={30}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>

              <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${selectedCost[0]}$`}
              >
                <RangeSliderThumb index={0} />
              </Tooltip>

              <Tooltip
                hasArrow
                bg="teal.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${selectedCost[1]}$`}
              >
                <RangeSliderThumb index={1} />
              </Tooltip>
            </RangeSlider>
            <div className="grid grid-cols-2 pb-4">
              <div className="col-span-1">
                <Box>
                  <span>Min: {selectedCost[0]}$</span>
                </Box>
              </div>
              <div className="col-span-1">
                <Box>
                  <span>Max: {selectedCost[1]}$</span>
                </Box>
              </div>
            </div>
          </Hide>
          <Show below="md">
            <Popover>
              <PopoverTrigger>
                <div className="pb-4">
                  <Button>Choose!</Button>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Select anything you want!</PopoverHeader>
                <PopoverBody>
                  {categories.map((category: any) => (
                    <CategoryCheckbox
                      key={category.id}
                      category={category}
                      checkedCategory={changeChecked}
                    />
                  ))}

                  {/* RentalCost filter */}
                  <FormLabel>Rental Cost</FormLabel>
                  <RangeSlider
                    min={100}
                    max={5000}
                    focusThumbOnChange={false}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    value={selectedCost}
                    onChange={changeCost}
                    marginTop={30}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>

                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={showTooltip}
                      label={`${selectedCost[0]}$`}
                    >
                      <RangeSliderThumb index={0} color="blue" />
                    </Tooltip>

                    <Tooltip
                      hasArrow
                      bg="teal.500"
                      color="white"
                      placement="top"
                      isOpen={showTooltip}
                      label={`${selectedCost[1]}$`}
                    >
                      <RangeSliderThumb index={1} />
                    </Tooltip>
                  </RangeSlider>
                  <div className="grid grid-cols-2 pb-4">
                    <div className="col-span-1">
                      <Box>
                        <span>Min: {selectedCost[0]}$</span>
                      </Box>
                    </div>
                    <div className="col-span-1">
                      <Box>
                        <span>Max: {selectedCost[1]}$</span>
                      </Box>
                    </div>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Show>

        </FormControl>
        <FormControl> </FormControl>
      </Box>
    </div>
  );
};

export default FilterPanel;
