import { Disclosure} from '@headlessui/react'
import { BellIcon} from '@heroicons/react/24/outline'

import { useState } from 'react'

import na from '../assests/profile.png'


const user = {
  name: 'Abdullah Aleem',
  email: 'abdullhaleem2102@gmail.com',
  imageUrl:
    na,
}


const navi=[{
  "name":'Home',
  "current":true,
},{ 
  "name":'About',
  "current":false,
},{
  "name":'Projects',
  "current":false,
}
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar(props) {
  const {scroll}=props;
 
  const [count,setCount]= useState(true)

  
 
  
  function updateS(item) {
    
    navi.map(x=>x.current=false);
    item.current=true

    if(item.name==="Home"){
     scroll("Profile")
      
    }
    else if(item.name==="About"){
      scroll("Services")
    }
    
    else if(item.name==="Projects"){
      console.log('duck')
      scroll("Project")
    }
    else if(item.name==="Proficiencies"){
      console.log('duck')
      scroll("Proficencies")
      
      
      
    }
    setCount(!count)  
  }        
  return (
    <> 
    <nav className=' fixed top-0 left-0 w-full z-50 '>
      <div className="ml-1 mr-1 min-h-full  "> 
        <Disclosure as="nav" className="bg-white" style={{borderRadius:'200px'}}>
          {({ open }) => (
            <>
              <div className=" max-w-7xl px-4 sm:px-6 lg:px-8"> 
                <div className="flex h-16  items-center">
                <div className="ml-0 ">
                      <p className='text-sm md:text-lg'>Abdullah Aleem.</p>
                    </div>
                  <div className="mx-auto flex items-center">
                  
                    <div className=" md:block">
                      <div className="ml-10 flex items-baseline space-x-2 md:space-x-4">
                        {navi.map((item) => (
                          <button
                            key={item.name}
                            
                            onClick={() => {
                             updateS(item)}}
                            className={classNames(
                              'py-2  font-medium relative',item.current
                                ? 'bg-trasparent text-black [font-size:12px]  md:text-lg' 
                                : 'text-gray-500 [font-size:12px] md:text-sm transition-all duration-300 hover:text-gray-600 md:hover:text-base ',
                              
                            )}  
                            aria-current={item.current ? 'page' : undefined} 
                          >
                            <div className={`w-${item.current ? 'full' : '6'} ml-${item.current?'0':'0'} bg-cyan h-1 rounded-xl transition-width duration-1000 ease-in-out`}  style={{ position: 'absolute', bottom: 0, left: '0' }}></div>
                            {item.name} 
                          </button>
                        ))}   
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     
                        <div className='relative ml-3'>
                          
                        </div>
                        
                    </div>
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