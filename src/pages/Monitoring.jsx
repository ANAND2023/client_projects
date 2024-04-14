


import React, { useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Dropdown from "../components/Dropdown";
import DynamicButton from "../components/DynamicButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  { field: "link_id", headerName: "link id", width: 100 },
  { field: "sitename", headerName: "Site Name", width: 170 },
  { field: "ip", headerName: "IP", width: 100, },
  { field: "down_for", headerName: "Down For", width: 100 },
  { field: "livestatus", headerName: "Live Status", width: 90, },
  { field: "connetivity", headerName: "Connetivity", width: 90, },
  { field: "status", headerName: "Status", width: 110, },
];

const rows = [
  {
    id: 1,
    link_id: 2021007,
    sitename: "IGL BHAWAN AIRTEL",
    ip: "192.168.132",
    down_for: "0:5:23",
    livestatus: "UP",
    connetivity: "ILL",
    status: "LINK DOWN"
  },
  {
    id: 2,
    link_id: 2021007,
    sitename: "IGL BHAWAN AIRTEL",
    ip: "192.168.132",
    down_for: "0:5:23",
    livestatus: "DOWN",
    connetivity: "ILL",
    status: "LINK DOWN"
  },
  {
    id: 3,
    link_id: 2021007,
    sitename: "IGL BHAWAN AIRTEL",
    ip: "192.168.132",
    down_for: "0:5:23",
    livestatus: "UP",
    connetivity: "ILL",
    status: "LINK DOWN"
  },
  {
    id: 4,
    link_id: 2021007,
    sitename: "IGL BHAWAN AIRTEL",
    ip: "192.168.132",
    down_for: "0:5:23",
    livestatus: "UP",
    connetivity: "ILL",
    status: "LINK DOWN"
  },
  {
    id: 5,
    link_id: 2021007,
    sitename: "IGL BHAWAN AIRTEL",
    ip: "192.168.132",
    down_for: "0:5:23",
    livestatus: "UP",
    connetivity: "ILL",
    status: "LINK DOWN"
  },
  {
    id: 6,
    link_id: 2021007,
    sitename: "IGL BHAWAN AIRTEL",
    ip: "192.168.132",
    down_for: "0:5:23",
    livestatus: "DOWN",
    connetivity: "ILL",
    status: "LINK DOWN"
  },

];

const Monitoring = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 }); // Initialize AOS with custom duration
  }, []);
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
              <div className="btn ml-16"
               data-aos="fade-left"
               data-aos-duration="1500" 
              >

                {/* <h1 className="text-2xl font-bold mb-4">Dropdown Component Example</h1> */}
                <Dropdown options={['Active', 'Inactive']} onSelect={handleSelect} />

                <DynamicButton text="Active All/ Block All" onClick={handleClick} />

                <Dropdown options={['Yes', 'No']} onSelect={handleSelect} />
                <DynamicButton text="Tickets All Yes/ Block All No" onClick={handleClick} />
                <DynamicButton text="Add My Assets" onClick={handleClick} />
                <DynamicButton text="Export My Assets" onClick={handleClick} />

              </div>
              <div className="w-[90%] mx-auto flex justify-between pt-5">
                <div>
                  <p className="text-gray-600"> Display</p>
                  <input
                    type="text"
                    placeholder="10"
                    className="border w-10 text-center rounded-md bg-gray-300"
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

export default Monitoring;
