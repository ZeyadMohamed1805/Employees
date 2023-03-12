import { Flex, Text, Button, Box, Image } from "@chakra-ui/react"

const Header = () => {
    return (
        <Flex height="116px" className="w-full items-center justify-end">
            <Text fontSize="15px" fontWeight="normal" color="#474747">Thursday, 03 Oct 02:08:07 PM</Text>
            <Button className="text-white cursor-pointer" backgroundColor="#59c203" ml="49px" mr="24.5px" height="27px" width="94px" fontSize="13px" borderRadius="5px">Sign In</Button>
            <Box height="45px" padding="12.5px" mr="12.5px" className="relative border-r-[1px] border-l-[1px] grid place-items-center">
                <i className="fa-solid fa-bell text-headerNotificationColor text-[24px] cursor-pointer"></i>
                <Box className="bg-dashboardPseudo text-white text-dashboardNotificationFont grid place-items-center absolute" top="1px" right="1px" height="15px" width="15px" borderRadius="15px" >1</Box>
            </Box>
            <Flex alignItems="center" gap="8px" mr="41.3px">
                <Image src="./images/Profile.png" height="32px" width="32px" />
                <Text color="#8997a4" fontWeight="normal" fontSize="20px">Zeyad Mohamed</Text>
                <i className="fa-solid fa-chevron-down text-headerNotificationColor cursor-pointer"></i>
            </Flex>
        </Flex>
    )
}

export default Header;