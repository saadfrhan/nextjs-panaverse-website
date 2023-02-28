import { Text } from '@chakra-ui/react';
import { NumberLabel } from '@/ts';

const NumberLabel: React.FC<NumberLabel> = ({ number }): JSX.Element => (
  <Text textAlign='left' fontWeight='extrabold'>
    QUARTER {number}
  </Text>
);

export default NumberLabel;