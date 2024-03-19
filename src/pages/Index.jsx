import { Box, Flex, Heading, VStack, Text, useColorModeValue } from "@chakra-ui/react";
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
        <Box width="full" height="300px" position="relative">
          {productData.map((retailerData, index) => (
            <Flex key={index} direction="column" position="absolute" left={`${index * 100 + 50}px`} height="100%" alignItems="center">
              {retailerData.prices.map((price, priceIndex) => (
                <Box key={priceIndex} height={`${price.price * 10}px`} width="2px" bg="blue.500" mb="1px" />
              ))}
              <Text fontSize="xs">{retailerData.retailer}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </VStack>
  );
};

export default Index;
