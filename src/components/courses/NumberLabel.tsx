import { NumberLabel } from "@/ts";
import { Text } from "@chakra-ui/react";

const NumberLabel: React.FC<NumberLabel> = ({ number }) => (
  <Text textAlign="left" fontWeight="extrabold">
    QUARTER {number}
  </Text>
);

export default NumberLabel;