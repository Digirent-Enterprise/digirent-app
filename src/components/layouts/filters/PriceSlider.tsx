import React, { useState } from "react";
import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
} from "@chakra-ui/react";

const PriceSlider = () => {
  const [value, setValue] = useState<number[]>([10, 30]);
  const [showTooltip, setShowTooltip] = useState(false);

  //   const handleChange = (event: Event, newValue: number | number[]) => {
  //     setValue(newValue as number[]);
  //   };

  return (
    <div>
      <h1 className="my-5 text-bold">Rental cost</h1>
      <Box marginTop={30} width={200}>
        <RangeSlider
          min={0}
          max={5000}
          aria-label={["min", "max"]}
          defaultValue={[500, 1500]}
          onChangeEnd={(val) => setValue(val)}
          focusThumbOnChange={false}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
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
      </Box>
    </div>
  );
};

export default PriceSlider;
