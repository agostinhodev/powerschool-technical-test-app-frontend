import Autocomplete from "@/components/Autocomplete";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box textAlign="center" mt={20}>
      <Box mb={10}>
        <Text fontSize="4xl" fontWeight="bold">
          Search countries
        </Text>
      </Box>
      <Box>
        <Autocomplete />
      </Box>
      <Box mt={10}>
        <Text fontSize="sm" color="gray.500">
          We offer access to a wide range of over 200 countries for you to
          choose from.
        </Text>
      </Box>
    </Box>
  );
}
