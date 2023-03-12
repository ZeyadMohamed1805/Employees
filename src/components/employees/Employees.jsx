import { Box, Flex, Input, Button } from "@chakra-ui/react"

const Employees = () => {
    return (
        <Box bg="#f7f8f9" px="36px">
            <Flex gap="12px">
                <Input type="text" placeholder="Search" />
                <Button className="text-white flex items-center" bg="#2764ac" gap="10px">
                    <i className="fa-solid fa-plus"></i>
                    Add new
                </Button>
            </Flex>
        </Box>
    )
}

export default Employees;