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
  Stack,
} from "@chakra-ui/react";

interface Props {
  // Category Props
  categories: any;
  changeChecked: (value: any) => void;
  // RentalCost Props
  selectedCost: any;
  changeCost: (value: any) => void;
}

const FilterPanel: React.FC<Props> = ({
  categories,
  selectedCost,
  changeChecked,
  changeCost,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <Box marginTop={10}>
        {/* Category filter */}
        <FormControl>
          <FormLabel>Categories</FormLabel>

              <CheckboxGroup colorScheme="green">
                {categories.map((category: any) => (
                  <Checkbox key={category.label} onChange={changeChecked} width={200}>
                    {category.value}
                  </Checkbox>
                  
                ))}
              </CheckboxGroup>
        </FormControl>

        {/* RentalCost filter */}
        <FormControl>
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
        </FormControl>
      </Box>
    </div>
  );
};

export default FilterPanel;
