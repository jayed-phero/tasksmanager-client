import { Fragment, useContext, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const [the, setThe] = useState(false)

    const [theme, setTheme] = useState(null)
    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [])
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate('/')
            })
    }
    return (
        <Popover className="relative bg-white border-b-2 border-gray-100  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex items-center justify-between  py-6 md:justify-start md:space-x-10">
                    {/* <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="">TasksManager</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div> */}
                    <div className='flex items-center gap-2 lg:flex-1'>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <h3 className='text-semibold text-xl'>TasksManager</h3>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">


                        <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </Link>
                        <Link to='/addtasks' className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Add Tasks
                        </Link>
                        <Link to='/mytasks' className="text-base font-medium text-gray-500 hover:text-gray-900">
                            My Tasks
                        </Link>
                        <Link to='/completedtasks' className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Completed Tasks
                        </Link>
                        {
                            user?.uid ?
                                <Link onClick={handleLogout} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Logout
                                </Link>
                                :
                                undefined
                        }


                    </Popover.Group>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 text-gray-500 ">
                        <div className='cursor-pointer' onClick={handleThemeSwitch}>

                            <div className='mr-5' onClick={() => setThe(!the)}>
                                {
                                    the ?
                                        <i class="fa-solid fa-moon text-3xl"></i>
                                        :
                                        <i class="fa-solid fa-sun text-3xl "></i>
                                }
                            </div>

                        </div>
                        <Link to='/signin' className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300">
                            Sign in
                        </Link>
                        <Link
                            to='/signup'
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div className='flex items-center gap-2'>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                    <h3 className='text-semibold text-xl'>TasksManager</h3>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 mt-5 z-50'>
                                <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Home
                                </Link>
                                <Link to='/addtasks' className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Add Tasks
                                </Link>
                                <Link to='/mytasks' className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    My Tasks
                                </Link>
                                <Link to='/completedtasks' className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Completed Tasks
                                </Link>
                                {
                                    user?.uid ?
                                        <Link onClick={handleLogout} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            Logout
                                        </Link>
                                        :
                                        undefined
                                }
                                <div className=" flex items-center gap-3 mt-5 cursor-pointer">
                                    <div onClick={handleThemeSwitch}>

                                        <div className='mr-5' onClick={() => setThe(!the)}>
                                            {
                                                the ?
                                                    <i class="fa-solid fa-moon text-3xl"></i>
                                                    :
                                                    <i class="fa-solid fa-sun text-3xl "></i>
                                            }
                                        </div>

                                    </div>
                                    <Link to='/signin' className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 border-2 border-blue-500 px-4 py-2 rounded-md">
                                        Sign in
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                            {/* <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                        >
                                            <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a>
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
