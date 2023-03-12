import { Box, Flex, Input, Button, SimpleGrid } from "@chakra-ui/react";
import Cards from "../cards/Cards";

const Employees = () => {
    return (
        <Box bg="#f7f8f9" px="36px" minHeight="calc(100vh - 116px)" p="29px 58px">
            <Flex gap="12px" mb="49px">
                <Input type="text" placeholder="Search" />
                <Button className="text-white flex items-center" bg="#2764ac" gap="10px">
                    <i className="fa-solid fa-plus"></i>
                    Add new
                </Button>
            </Flex>
            <SimpleGrid columns={4} minChildWidth="401px" gap="45px">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </SimpleGrid>
        </Box>
    )
}

export default Employees;