import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        employees: [
            {id: 0, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 1, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 2, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 3, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 4, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 5, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 6, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 7, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 8, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 9, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 10, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
            {id: 11, name: "Zeyad Khaled Ahmed", startDate: "05/18/2000", phone: "01019508838", email: "zeyadmohamed.bus.acc@gmail.com", office: "Arabic Localizer", department: "IT", attendanceProfile: "Present", role: "Programming", position: "Frontend Developer", directManager: "Abdelrahman Elbawab", workFromHome: false},
        ]
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        deleteEmployee: (state, action) => {
            state.employees.forEach(employee => {
                if (employee.id === action.payload) state.employees.splice(employee, 1);
            });
        }
    }
});

export const { getEmployees, addEmployee, deleteEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;