import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  theme,
} from '@chakra-ui/react';
import Chart, { Props } from 'react-apexcharts';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const options: Props['options'] = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-08-23',
      '2021-08-24',
      '2021-08-25',
      '2021-08-26',
      '2021-08-27',
      '2021-08-28',
      '2021-08-29',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [
  {
    name: 'series1',
    data: [12, 120, 10, 28, 61, 18, 109],
  }
]

export function Dashboard() {
  return (
    <Flex
      h="100vh"
      direction="column"
    >
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
          <Box p="8" bgColor="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p="8" bgColor="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}