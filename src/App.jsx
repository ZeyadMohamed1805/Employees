import { Flex } from "@chakra-ui/react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Main />
    </Flex>
  )
}

export default App;