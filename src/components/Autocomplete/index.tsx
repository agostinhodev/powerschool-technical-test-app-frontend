import { Country } from "@/models/Country";
import {
  Box,
  Flex,
  Image,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Autocomplete() {
  const [filteredItems, setFilteredItems] = useState<Country[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      axios
        .get(`http://localhost:3000/autocomplete?name=${inputValue}`)
        .then((response) => setFilteredItems(response.data))
        .catch((error) => console.log(error));
    } else {
      setFilteredItems([]);
      setSelectedIndex(-1);
    }
  }, [inputValue]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleListItemClick(item: Country) {
    setInputValue(item.name);
    setFilteredItems([]);
    setSelectedIndex(-1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex <= 0 ? filteredItems.length - 1 : prevIndex - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (selectedIndex !== -1) {
        setInputValue(filteredItems[selectedIndex].name);
        setFilteredItems([]);
        setSelectedIndex(-1);
      }
    }
  }

  return (
    <Flex alignItems="center" flexDirection="column">
      <Box position="relative">
        <Input
          width="lg"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Please enter the name of the country here..."
        />
        {filteredItems.length > 0 && (
          <List
            position="absolute"
            top="100%"
            left={0}
            zIndex={1}
            backgroundColor={"white"}
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            width={"full"}
            alignItems={"flex-start"}
          >
            {filteredItems.map((item, index) => (
              <ListItem
                key={item.code}
                bg={selectedIndex === index ? "blue.50" : undefined}
                onMouseOver={() => setSelectedIndex(index)}
                onClick={() => handleListItemClick(item)}
                px={2}
                py={1}
                width={"full"}
                display={"flex"}
                borderWidth={1}
                cursor={"pointer"}
              >
                <Image
                  src={`https://flagcdn.com/32x24/${item.code.toLowerCase()}.png`}
                  alt={item.name}
                  boxSize="32spx"
                />
                <Text ml={2} fontWeight={600}>
                  {item.name}
                </Text>
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Flex>
  );
}
