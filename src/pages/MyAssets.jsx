import React, { useEffect } from 'react';
import Dropdown from '../components/Dropdown'
import DynamicButton from '../components/DynamicButton'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

const MyAssets = () => {
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

            <div className='m-10 space-y-4'>
              <div className="btn "
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
              <div>
                <div className='w-full  grid grid-cols-3 gap-6 p-5'>
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Link Id ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Site Name ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Address ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Model/Make ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Serial No. ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='IPAddress-1 ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='IPAddress-2 ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Connectivity ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Link BW ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Discovered Date ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Email Id ' />
                </div>
                <div className='pl-5'>
                  <button className='px-4 py-2 border-none bg-green-700 text-white rounded-sm'>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default MyAssets