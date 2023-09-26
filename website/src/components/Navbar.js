import { Disclosure} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assests/logo.png'
import { useState } from 'react'
import { useMyContext } from './MyContext';
import na from '../assests/profile.png'


const user = {
  name: 'Abdullah Aleem',
  email: 'abdullhaleem2102@gmail.com',
  imageUrl:
    na,
}




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar(props) {
  const {scroll,re}=props;
 
  const [count,setCount]= useState(true)

  const [ navi, updateNavi ] = useMyContext();
 
  
  function updateS(item) {
    let x = navi;  
    console.log(item)
    x.map(y => y === item ? y.current = true :  y.current = false)
    
    updateNavi(x) 
    if(item.name==="Profile"){
      scroll(re[0]);
    }
    else if(item.name==="Services"){
      scroll(re[1]);
    }
    
    else if(item.name==="Projects"){
      console.log('duck')
      scroll(re[2]);
    }
    setCount(!count)  
  }        
  return (
    <> 
    <nav className='fixed top-0 left-0 w-full z-10'>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navi.map((item) => (
                          <button
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                             updateS(item)}}
                            className={classNames(
                              item.current
                                ? 'bg-white text-gray-600' 
                                : 'text-gray-300  hover:white',
                              'py-2  text-sm font-medium relative'
                            )}  
                            aria-current={item.current ? 'page' : undefined} 
                          >
                            <div className={`w-${item.current ? 'full' : '4'} ml-${item.current?'0':'0'} bg-gray-500 h-1 rounded-xl transition-width duration-1000 ease-in-out`}  style={{ position: 'absolute', bottom: 0, left: '0' }}></div>
                            {item.name} 
                          </button>
                        ))}   
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" /> 
                        
                      </button> */}

                      {/* Profile dropdown */}
                      {/* <Menu as="div" className="relative ml-3"> */}
                        <div className='relative ml-3'>
                          {/* <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span> */}
                            {/* <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
                          {/* </Menu.Button> */}
                        </div>
                        {/* <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition> */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navi.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div> */}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        
      </div>
      </nav>
    </>
  )
}

export default Navbar