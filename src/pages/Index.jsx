import { Box, Flex, Heading, Table, Thead, Tbody, Tr, Th, Td, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

// Dummy data to simulate prices over time for different retailers
const productData = [
  {
    retailer: "Walmart",
    prices: [
      { date: "2023-01-01", price: 2.99 },
      { date: "2023-02-01", price: 3.19 },
      { date: "2023-03-01", price: 3.09 },
    ],
  },
  {
    retailer: "Target",
    prices: [
      { date: "2023-01-01", price: 3.09 },
      { date: "2023-02-01", price: 3.29 },
      { date: "2023-03-01", price: 3.39 },
    ],
  },
  {
    retailer: "Costco",
    prices: [
      { date: "2023-01-01", price: 2.89 },
      { date: "2023-02-01", price: 2.99 },
      { date: "2023-03-01", price: 2.95 },
    ],
  },
];

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <VStack spacing={6}>
      <Flex justifyContent="space-between" alignItems="center" width="full">
        <Heading as="h1" size="xl" fontWeight="bold" mb={4}>
          FMCG Product Dashboard
        </Heading>
        <Box as={FaChartLine} w={8} h={8} />
      </Flex>

      <Box bg={bg} borderRadius="lg" p={6} boxShadow="base" width="full">
        <Text fontSize="lg" fontWeight="semibold" mb={4}>
          Product Price Over Time
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Retailer</Th>
              <Th isNumeric>Jan Price</Th>
              <Th isNumeric>Feb Price</Th>
              <Th isNumeric>Mar Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {productData.map((data) => (
              <Tr key={data.retailer}>
                <Td>{data.retailer}</Td>
                {data.prices.map((price) => (
                  <Td isNumeric key={price.date}>
                    ${price.price.toFixed(2)}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default Index;
