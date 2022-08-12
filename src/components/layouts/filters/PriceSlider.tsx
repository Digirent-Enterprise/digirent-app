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
} from "@chakra-ui/react";

const PriceSlider = () => {
  const [value, setValue] = useState<number[]>([10, 30]);
  const [showTooltip, setShowTooltip] = useState(false);

  //   const handleChange = (event: Event, newValue: number | number[]) => {
  //     setValue(newValue as number[]);
  //   };

  return (
    <div>
      <Box  marginTop={10}>
        <FormControl>
          <FormLabel>Rental Cost</FormLabel>

          <RangeSlider
            min={0}
            max={5000}
            aria-label={["min", "max"]}
            defaultValue={[500, 1500]}
            onChangeEnd={(val) => setValue(val)}
            focusThumbOnChange={false}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
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
              label={`${value[0]}$`}
            >
              <RangeSliderThumb index={0} />
            </Tooltip>

            <Tooltip
              hasArrow
              bg="teal.500"
              color="white"
              placement="top"
              isOpen={showTooltip}
              label={`${value[1]}$`}
            >
              <RangeSliderThumb index={1} />
            </Tooltip>
          </RangeSlider>
        </FormControl>
      </Box>
    </div>
  );
};

export default PriceSlider;
