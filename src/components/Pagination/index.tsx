import { Box, HStack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter(page => page > 0);
}

export function Pagination({
  totalCountOfRegisters,
  registersPerPage,
  currentPage,
  onPageChange
}: PaginationProps) {

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage
   ? generatePagesArray(currentPage, Math.min(currentPage + siblingCount, lastPage))
   : [];

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
        {currentPage > (1 + siblingCount) && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingCount) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem key={page} onPageChange={onPageChange} number={page} />
        ))}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem key={page} onPageChange={onPageChange} number={page} />
        ))}

        {(currentPage + siblingCount) < lastPage && (
          <>
            {(currentPage + 1 + siblingCount) < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
        
      </HStack>
    </HStack>
  );
}