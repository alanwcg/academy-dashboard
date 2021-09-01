import { Box, HStack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack
      spacing="6"
      mt="8"
      align="center"
      justify="space-between"
    >
      <Box>
        <Text as="strong">0</Text> - <Text as="strong">3</Text> de <Text as="strong">100</Text>
      </Box>

      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </HStack>
    </HStack>
  );
}