// import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customersData, customersGrid } from '../data/dummy';
// import { Header } from '../components';

// const Orders = () => {
//   const selectionsettings = { persistSelection: true };
//   const toolbarOptions = ['Delete'];
//   const editing = { allowDeleting: true, allowEditing: true };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Customers" />
//       <GridComponent
//         dataSource={customersData}
//         enableHover={false}
//         allowPaging
//         pageSettings={{ pageCount: 5 }}
//         selectionSettings={selectionsettings}
//         toolbar={toolbarOptions}
//         editSettings={editing}
//         allowSorting
//       >
//         <ColumnsDirective>

//           {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import DynamicButton from "../components/DynamicButton";
import { useStateContext } from '../contexts/ContextProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { Ecommerce, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '../pages';
// import './App.css';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "link_id", headerName: "link_id", width: 70 },
  { field: "firstName", headerName: "Site Name", width: 90 },
  { field: "connectivity", headerName: "Connectivity", width: 100 },
  {
    field: "LinkBW",
    headerName: "Link BW",
    type: "number",
    width: 90,
  },
  {
    field: "ip",
    headerName: "IP",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
    // valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => (
      <div className="text-center bg-gray-300 rounded-sm py-2 px-5  ">
        <Link to={``}>
          <p>Active</p>
        </Link>
      </div>
    ),
  },
  {
    field: "AutoTickets",
    headerName: "AutoTickets",
    width: 100,
    renderCell: (params) => (
      <div className="text-center bg-yellow-500 brounded-sm py-2 px-5 text-white">
        <Link to={``}>
          <p>yes</p>
        </Link>
      </div>
    ),
  },
  {
    field: "view",
    headerName: "View",
    width: 80,
    renderCell: (params) => (
      <div className="bg-yellow-300 rounded-sm py-2 px-5 text-white">
        <Link to={``}>
          <p>View</p>
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
];

const rows = [
  {
    id: 1,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Jon",
    LinkBW: "35mbps",
  },
  {
    id: 2,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Cersei",
    LinkBW: "42mbps",
  },
  {
    id: 3,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Jaime",
    LinkBW: "45mbps",
  },
  {
    id: 4,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Arya",
    LinkBW: "16mbps",
  },
  {
    id: 5,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Daenerys",
    LinkBW: "numbps",
  },
  {
    id: 6,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: null,
    LinkBW: "15mbps",
  },
  {
    id: 7,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Ferrara",
    LinkBW: "44mbps",
  },
  {
    id: 8,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL",
    firstName: "Rossini",
    LinkBW: "36mbps",
  },
  {
    id: 9,
    link_id: "123",
    ip: "192.168.132",
    connectivity: "ILL bb",
    firstName: "Harvey",
    LinkBW: "65mbps",
  },
];

const Analytics = () => {
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
    alert("Button clicked!");
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

            <div className=" mt-8" style={{ overflowY: "hidden" }}>
              <div className="btn ml-16"
                  data-aos="fade-left"
                  data-aos-duration="1500" 
              >
                {/* <h1 className="text-2xl font-bold mb-4">Dropdown Component Example</h1> */}
                <Dropdown  
              
               options={["Active", "Inactive"]} onSelect={handleSelect} />

                <DynamicButton text="Active All/ Block All" onClick={handleClick} />

                <Dropdown options={["Yes", "No"]} onSelect={handleSelect} />
                <DynamicButton
                  text="Tickets All Yes/ Block All No"
                  onClick={handleClick}
                />
                <DynamicButton text="Add My Assets" onClick={handleClick} />
                <DynamicButton text="Export My Assets" onClick={handleClick} />
              </div>
              <div className="w-[88%]  mx-auto flex justify-between pt-5">
                <div>
                  <p
                  
                  className="text-gray-600"> Display</p>
                  <input
                    type="text"
                    placeholder="10"
                    className="border w-10 rounded-md text-center bg-gray-300"
                  />
                </div>
                <div>
                  <input type="text" className="border" />
                </div>
              </div>
              <div
               data-aos="fade-right"
               data-aos-duration="1500" 
              className="my-4 rounded-3xl">
                <div>
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
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
