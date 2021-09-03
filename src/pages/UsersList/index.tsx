import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useHistory } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page);

  const history = useHistory();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" bgColor="gray.800" borderRadius={8} p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários

              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              cursor="pointer"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              onClick={() => history.push('/users/create')}
            >
              Criar novo
            </Button>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Th px="6" color="gray.300" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  <Th w="8"></Th>
                </Thead>

                <Tbody>
                  {data?.users.map(user => (
                    <Tr key={user.id}>
                      <Td px="6">
                        <Checkbox colorScheme="pink" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{user.created_at}</Td>}
                      <Td>
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          cursor="pointer"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Editar
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data?.totalCount}
                registersPerPage={10}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}