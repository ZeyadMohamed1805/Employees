import { Box } from "@chakra-ui/react";
import Header from "../header/Header";
import Employees from "../employees/Employees";

const Main = () => {
    return (
        <Box className="min-h-full w-full" ml="106px">
            <Header />
            <Employees />
        </Box>
    )
}

export default Main;