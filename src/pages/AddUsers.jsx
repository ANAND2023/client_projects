import React, { useEffect } from 'react';

import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';

import { Link } from 'react-router-dom';
import Dropdown from '../components/Dropdown';


const AddUsers = () => {
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

              <div>
                <div className='w-full  grid grid-cols-3 gap-6 p-5'>
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Name ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Mobile' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Emp-Id ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Password ' />
                  <input type="text" className="border px-3 text-sm outline-none py-2 " placeholder='Address ' />

                  <Dropdown options={['Admin', 'Admin2']} onSelect={handleSelect} />
                </div>
                <div className='pl-5'>
                  <Link to="/users">
                    <button className='px-4 py-2 border-none bg-cyan-600 text-white rounded-sm'>
                      Save
                    </button>
                  </Link>
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

export default AddUsers