
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 70 },
  { field: "mobile", headerName: "Mobile", width: 110 },
  { field: "emp_id", headerName: "Emp-Id", width: 100 },
  { field: "user_type", headerName: "User Type", width: 100 },
  {
    field: "location",
    headerName: "Location",
    width: 120,
    renderCell: (params) => (
      <div className="bg-yellow-300 rounded-sm py-2 px-5 text-white">
        <Link to={``}>
          <p>Google Map</p>
        </Link>
      </div>
    ),
  },
  {
    field: "edit",
    headerName: "Edit",
    width: 100,
    renderCell: (params) => (
      <div className="bg-blue-600 rounded-sm py-2 px-5 text-white">
        <Link to={``}>
          <p>Edit</p>
        </Link>
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => (
      <div className="text-center bg-gray-300 rounded-sm py-2 px-5 ">
        <Link to={``}>
          <p>Active</p>
        </Link>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },
  {
    id: 2,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },
  {
    id: 3,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },
  {
    id: 4,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },
  {
    id: 5,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },
  {
    id: 6,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },
  {
    id: 7,
    name: "Anand",
    mobile: 1234567890,
    emp_id: "anand@12",
    user_type: "Admin"
  },

];

const Users = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const handleSelect = (option) => {
    console.log(`Selected: ${option}`);
    // Add your logic here to handle the selected option
  };
  const handleClick = () => {
    alert('Button clicked!');
  };
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with custom duration
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>

          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {themeSettings && (<ThemeSettings />)}
            <div className="overflow-hidden mt-8">
              <div className="w-[90%] mx-auto">
                <h2>Users List</h2>
                <Link to="/addusers">
                  <button className="rounded-sm py-2 px-5 text-white bg-cyan-600">
                    Add Users
                  </button></Link>
              </div>
              <div className="w-[90%] mx-auto flex justify-between pt-5">
                <div>
                  <p className="text-gray-600"> Display</p>
                  <input
                    type="text"
                    placeholder="10"
                    className="border w-10 rounded-md bg-gray-300 text-center"
                  />
                </div>
                <div>
                  <input type="text" className="border" />
                </div>
              </div>
              <div
                //  style={{ height: 400, width: '100%' }}
                className="m-2   p-2 md:px-10 bg-white rounded-3xl"
                data-aos="fade-right"
                data-aos-duration="1500" 
              >
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5, 10, 20]}
                  checkboxSelection
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Users;
