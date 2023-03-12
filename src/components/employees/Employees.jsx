import { Box, Divider, Flex, Select, FormControl, Input, Checkbox, Button, SimpleGrid, Modal, useDisclosure, Text, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormLabel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useReducer } from "react";
import { addEmployee } from "../../redux/slices/employeesSlice";
import Cards from "../cards/Cards";



const Employees = () => {
    const employees = useSelector(store => store.employees.employees);
    const [state] = useReducer(null, {id: Math.max(...Object.keys(employees)) + 1, name: "", startDate: "", phone: "", email: "", office: "", department: "", attendanceProfile: "", role: "", position: "", directManager: "", workFromHome: ""});
    const [inputValue, setInputValue] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {   
        event.preventDefault();    
        let check = true;

        Object.values(state).forEach(input => {
            if (input === "") check = false;
        });

        if (check) {
            employees.forEach(employee => {
                if (employee.id === state.id) check = false
            })
        };

        if (check) {
            dispatch(addEmployee(state));
        }
    }

    return (
        <Box bg="#f7f8f9" px="36px" minHeight="calc(100vh - 116px)" p="29px 58px">
            <Flex gap="12px" mb="49px">
                <Input type="text" placeholder="Search" onChange={(event) => setInputValue(event.target.value)} />
                <Button className="text-white flex items-center" bg="#2764ac" gap="10px" onClick={onOpen}>
                    <i className="fa-solid fa-plus"></i>
                    Add new
                </Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent minHeight="658px" maxWidth="1174px" bg="white" mx="25px" as="form">
                        <ModalHeader borderBottom="solid #23aaeb 1px">
                            <Text color="#23aaeb" fontSize="18px">NEW EMPLOYEE</Text>
                        </ModalHeader>
                        <ModalBody>
                            <FormControl>
                            <Text color="#23aaeb" fontWeight="bold" fontSize="16px" mb="32px">Personal Info</Text>
                            <Flex alignItems="center" gap="13px" mb="18px" className="max-md:flex-col">
                                <Box border="dashed #707070" boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)" height="150px" width="260px" className="grid place-items-center">
                                    <Text color="#5c6974">DRAG IMAGE HERE</Text>
                                </Box>
                                <SimpleGrid width="full" columns={2} rowGap="15px" columnGap="25px">
                                    <FormControl>
                                        <FormLabel color="#313030" fontSize="13px" mb="7px">Name</FormLabel>
                                        <Input id="inputName" type="text" onChange={(event) => state.name = event.target.value} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="#313030" fontSize="13px" mb="7px">Start Date</FormLabel>
                                        <Input id="inputData" type="date" onChange={(event) => state.startDate = event.target.value} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="#313030" fontSize="13px" mb="7px">Phone</FormLabel>
                                        <Input id="inputPhone" type="number" onChange={(event) => state.phone = event.target.value} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel color="#313030" fontSize="13px" mb="7px">Email</FormLabel>
                                        <Input id="inputEmail" type="email" onChange={(event) => state.email = event.target.value} />
                                    </FormControl>
                                </SimpleGrid>
                            </Flex>
                            <Text color="#23aaeb" fontWeight="bold" fontSize="16px" mb="18px">Office Info</Text>
                            <FormControl mb="8.8px" color="#313030" fontSize="13px">
                                <Text>Office</Text>
                                <Select type="text" onChange={(event) => state.office = event.target.value}>
                                    <option value="1"></option>
                                    <option value="2"></option>
                                    <option value="3"></option>
                                    <option value="4"></option>
                                    <option value="5"></option>
                                </Select>
                            </FormControl>
                            <SimpleGrid columns={2} columnGap="32px" rowGap="11.5px" mb="13px">
                                <FormControl>
                                    <FormLabel fontSize="13px" color="#313030">Department</FormLabel>
                                    <Select id="inputDeparment" type="text" onChange={(event) => state.department = event.target.value}>
                                        <option value="1"></option>
                                        <option value="2"></option>
                                        <option value="3"></option>
                                        <option value="4"></option>
                                        <option value="5"></option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize="13px" color="#313030">Attendance Profile</FormLabel>
                                    <Select id="inputAttendance" type="text" onChange={(event) => state.attendanceProfile = event.target.value}>
                                        <option value="1"></option>
                                        <option value="2"></option>
                                        <option value="3"></option>
                                        <option value="4"></option>
                                        <option value="5"></option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize="13px" color="#313030">Role</FormLabel>
                                    <Select id="inputRole" type="text" onChange={(event) => state.role = event.target.value}>
                                        <option value="1"></option>
                                        <option value="2"></option>
                                        <option value="3"></option>
                                        <option value="4"></option>
                                        <option value="5"></option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize="13px" color="#313030">Position</FormLabel>
                                    <Select id="inputPosition" type="text" onChange={(event) => state.position = event.target.value}>
                                        <option value="1"></option>
                                        <option value="2"></option>
                                        <option value="3"></option>
                                        <option value="4"></option>
                                        <option value="5"></option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize="13px" color="#313030">Direct Manager</FormLabel>
                                    <Select id="inputManager" type="text" onChange={(event) => state.directManager = event.target.value}>
                                        <option value="1"></option>
                                        <option value="2"></option>
                                        <option value="3"></option>
                                        <option value="4"></option>
                                        <option value="5"></option>
                                    </Select>
                                </FormControl>
                            </SimpleGrid>
                            <Text color="#23aaeb" fontWeight="bold" fontSize="16px" mb="30px">Work From Home</Text>
                            <Flex alignItems="center" gap="12px" mb="27.5px">
                                <Checkbox id="inputCheckbox" onChange={(event) => state.workFromHome = event.target.checked} />
                                <FormLabel fontSize="13px" fontWeight="bold">Allow Employee To Work From Home</FormLabel>
                            </Flex>
                            <Divider />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter className="flex justify-end" gap="14px">
                            <Button onClick={onClose} bg="#ff6a6a" color="white">Cancel</Button>
                            <Button onClick={handleSubmit} type="submit" bg="#23aaeb" color="white">Save</Button>
                        </ModalFooter>
                        <Divider />
                    </ModalContent>
                <ModalCloseButton />
            </Modal>
            <SimpleGrid columns={4} minChildWidth="401px"  gap="45px">
                {employees.filter(employee => employee.name.toLowerCase().includes(inputValue.toLowerCase()))
                          .map(employee => (<Cards key={employee.id} id={employee.id} />))
                }
            </SimpleGrid>
        </Box>
    )
}

export default Employees;