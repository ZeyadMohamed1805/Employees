import { Flex, Box, Text } from "@chakra-ui/react"

const Sidebar = () => {
    return (
      <Flex className="bg-gradient-to-b from-dashboardGradientTop to-dashboardGradientBottom flex-col items-center min-h-[100vh]" width="106px" pt="50px">
        <Flex className="w-full flex-col justify-center items-center cursor-pointer" height="98px" gap="12.9px">
            <i className="fa-solid fa-grip text-dashboardIcons text-white"></i>
            <Text letterSpacing="0.66px" className="text-dashboardText text-white text-center">Dashboard</Text>
        </Flex>
        <Flex className="w-full flex-col justify-center items-center cursor-pointer" height="98px" gap="12.9px">
            <i className="fa-solid fa-laptop text-dashboardIcons text-white"></i>
            <Text letterSpacing="0.66px" className="text-dashboardText text-white text-center">Workplace</Text>
        </Flex>
        <Flex className="w-full flex-col justify-center items-center cursor-pointer" height="98px" gap="12.9px">
            <i className="fa-solid fa-mug-hot text-dashboardIcons text-white"></i>
            <Text letterSpacing="0.66px" className="text-dashboardText text-white text-center">Holidays</Text>
        </Flex>
        <Flex className="w-full flex-col justify-center items-center cursor-pointer bg-dashboardEmployees relative before:w-1.5 before:bg-dashboardPseudo before:h-full before:absolute before:left-0" height="98px" gap="12.9px">
            <i className="fa-solid fa-user text-dashboardIcons text-white"></i>
            <Box className="bg-dashboardNotificationColor text-white text-dashboardNotificationFont grid place-items-center absolute" top="22px" right="38px" height="15px" width="15px" borderRadius="15px" >5</Box>
            <Text letterSpacing="0.66px" className="text-dashboardText text-white text-center">Employees</Text>
        </Flex>
        <Flex className="w-full flex-col justify-center items-center cursor-pointer" height="98px" gap="12.9px">
            <i className="fa-solid fa-hands-holding text-dashboardIcons text-white"></i>
            <Text letterSpacing="0.66px" className="text-dashboardText text-white text-center">Inbound Requests</Text>
        </Flex>
      </Flex>  
    )
}

export default Sidebar;