/* eslint-disable jsx-a11y/anchor-is-valid */

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {  
  FireIcon,
    MenuIcon, 
    TableIcon, 
    UploadIcon,  
    UserIcon,
    XIcon,
  } from '@heroicons/react/outline'

import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { Pagina1 } from '../pages/Pagina1';
import { Pagina2 } from '../pages/Pagina2';
import { Pagina3 } from '../pages/Pagina3';


  
  const navigation = [
    { name: 'Pagina1', href: '#', icon: UserIcon, current: true , to: '/pagina1' },
    { name: 'Pagina2', href: '#', icon: TableIcon, current: false, to: '/pagina2' },
    { name: 'Pagina3', href: '#', icon: TableIcon, current: false, to: '/pagina3' },

  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export const SideBar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
     
      <div className="h-screen flex">

        {/* Mobile Menu */}
        <div className="fixed right-0 top-0">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                      <div className="flex-shrink-0 flex items-center px-4">
                        <FireIcon className='h-7 w-7 mr-2' /> <h1 className="Mont-Bold text-2xl">OrdenApp</h1>
                      </div>
                      <nav aria-label="Sidebar" className="mt-5">
                        <div className="px-2 space-y-1">
                          {navigation.map((item) => (
                            <NavLink 
                              key={item.name}
                              to={item.to!}
                              className = { ({ isActive }) => (isActive ? 'nav-active group': 'nav-inactive group')}
                            >
                              <item.icon
                                className={classNames(
                                  item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                  'mr-3 h-6 w-6'
                                )}
                                aria-hidden="true"
                              />
                              { item.name }
                            </NavLink> 
                          ))}
                        </div>
                      </nav>
                    </div>                  
                  </Dialog.Panel>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </div>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <FireIcon className='h-7 w-7 mr-2' /> <h1 className="Mont-Bold text-2xl">OrdenApp</h1>
                </div>
                <nav className="mt-5 flex flex-col justify-around" aria-label="Sidebar">
                  <div className="px-2">
                    {navigation.map((item) => (                      
                        <NavLink 
                            key={item.name}
                            to={item.to!}
                            className = { ({ isActive }) => (isActive ? 'nav-active group': 'nav-inactive group')}
                            >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          { item.name }
                        </NavLink>                      
                    ))}
                  </div>                

                </nav>
              </div>   
                   
            </div>

            
          </div>
        </div>
        
        {/* Routes */}
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
              <div className='flex items-center'>
                  <FireIcon className='h-7 w-7 mr-2' /> <h1 className="Mont-Bold text-lg">OrdenApp</h1>
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 p-6 relative z-0 flex overflow-hidden overflow-y-auto">
            <main className="flex-1 relative z-0  focus:outline-none xl:order-last">
            
              <Routes>

                <Route path='/pagina1' element={<Pagina1 />} />         
                <Route path='/pagina2' element={<Pagina2 />} />         
                <Route path='/pagina3' element={<Pagina3 />} />       
          
           

                <Route path='*' element={ <Navigate to ='/pagina1' replace />} />         
                
              </Routes>
            
            </main>            
          </div>
        </div>
        
      </div>
    </>
  )
}

