import { Flex, Image, Box, Text, Badge } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Cards = () => {
    return (
        <Flex bg="white" boxShadow="0 3px 15px 0 rgba(0, 0, 0, 0.09)">
            <Flex className="flex-col items-center justify-center" w="104px" gap="9.7px" p="11px 19px" borderRight="solid 1px #8997a4">
                <Image src="./images/Profile.png" height="64px" width="64px" />
                <Flex gap="17px">
                    <EditIcon boxSize="9px" cursor="pointer"></EditIcon>
                    <i className="fa-regular fa-circle-pause text-[9px] cursor-pointer"></i>
                    <DeleteIcon boxSize="9px" cursor="pointer"></DeleteIcon>
                </Flex>
            </Flex>
            <Box w="full" p="12px 22px">
                <Text color="#5c6974" fontSize="20px" letterSpacing="1.1px">Zeyad Khaled Ahmed</Text>
                <Text color="#313030" fontSize="13px" letterSpacing="0.72px">HR Head</Text>
                <Text color="#5c6974" fontSize="10px" letterSpacing="0.55px">Business Development</Text>
                <Flex className="w-full items-center justify-between">
                    <Badge bg="green.100" fontSize="11px" color="#27b40c">Present</Badge>
                    <Flex gap="6px" alignItems="center">
                        <i className="fa-solid fa-envelope text-[7px] rounded-[19px] grid place-items-center p-[8px] cursor-pointer bg-[#eaeef0]"></i>
                        <i className="fa-solid fa-phone text-[7px] rounded-[19px] grid place-items-center p-[8px] cursor-pointer bg-[#eaeef0]"></i>
                        <i className="fa-solid fa-circle-exclamation text-[7px] rounded-[19px] grid place-items-center p-[8px] cursor-pointer bg-[#eaeef0]"></i>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Cards;