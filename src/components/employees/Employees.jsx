import { Box, Divider, Flex, Input, Button, SimpleGrid, Modal, useDisclosure, Text, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import Cards from "../cards/Cards";

const Employees = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box bg="#f7f8f9" px="36px" minHeight="calc(100vh - 116px)" p="29px 58px">
            <Flex gap="12px" mb="49px">
                <Input type="text" placeholder="Search" />
                <Button className="text-white flex items-center" bg="#2764ac" gap="10px" onClick={onOpen}>
                    <i className="fa-solid fa-plus"></i>
                    Add new
                </Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent minHeight="658px" maxWidth="1174px" bg="white" mx="25px">
                        <ModalHeader borderBottom="solid #23aaeb 1px">
                            <Text color="#23aaeb" fontSize="18px">NEW EMPLOYEE</Text>
                        </ModalHeader>
                        <ModalBody>
                            <Text color="#23aaeb" fontWeight="bold" fontSize="16px" mb="32px">Personal Info</Text>
                            <Flex alignItems="center" gap="13px" mb="18px">
                                <Box border="dashed #707070" boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)" height="150px" width="260px" className="grid place-items-center">
                                    <Text color="#5c6974">DRAG IMAGE HERE</Text>
                                </Box>
                                <SimpleGrid width="full" columns={2} rowGap="15px" columnGap="25px">
                                    <Box>
                                        <Text color="#313030" fontSize="13px" mb="7px">Name</Text>
                                        <Input type="text" />
                                    </Box>
                                    <Box>
                                        <Text color="#313030" fontSize="13px" mb="7px">Start Date</Text>
                                        <Input type="date" />
                                    </Box>
                                    <Box>
                                        <Text color="#313030" fontSize="13px" mb="7px">Phone</Text>
                                        <Input type="number" />
                                    </Box>
                                    <Box>
                                        <Text color="#313030" fontSize="13px" mb="7px">Email</Text>
                                        <Input type="email" />
                                    </Box>
                                </SimpleGrid>
                            </Flex>
                            <Text color="#23aaeb" fontWeight="bold" fontSize="16px" mb="18px">Office Info</Text>
                            <Box mb="8.8px" color="#313030" fontSize="13px">
                                <Text>Office</Text>
                                <Input type="text" />
                            </Box>
                            <SimpleGrid columns={2} columnGap="32px" rowGap="11.5px" mb="13px">
                                <Box>
                                    <Text fontSize="13px" color="#313030">Department</Text>
                                    <Input type="text" />
                                </Box>
                                <Box>
                                    <Text fontSize="13px" color="#313030">Attendance Profile</Text>
                                    <Input type="text" />
                                </Box>
                                <Box>
                                    <Text fontSize="13px" color="#313030">Role</Text>
                                    <Input type="text" />
                                </Box>
                                <Box>
                                    <Text fontSize="13px" color="#313030">Position</Text>
                                    <Input type="text" />
                                </Box>
                                <Box>
                                    <Text fontSize="13px" color="#313030">Direct Manager</Text>
                                    <Input type="text" />
                                </Box>
                            </SimpleGrid>
                            <Text color="#23aaeb" fontWeight="bold" fontSize="16px" mb="30px">Work From Home</Text>
                            <Flex alignItems="center" gap="12px" mb="27.5px">
                                <input type="checkbox" />
                                <Text fontSize="13px" fontWeight="bold">Allow Employee To Work From Home</Text>
                            </Flex>
                            <Divider></Divider>
                        </ModalBody>
                        <ModalFooter className="flex justify-end" gap="14px">
                            <Button onClick={onClose} bg="#ff6a6a" color="white">Cancel</Button>
                            <Button onClick={onClose} bg="#23aaeb" color="white">Save</Button>
                        </ModalFooter>
                        <Divider></Divider>
                    </ModalContent>
                <ModalCloseButton />
            </Modal>
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