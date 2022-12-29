import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light")
 useEffect(()=> {
  if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    setTheme("dark")
  }else{
    setTheme("light")
  }
 }, [])
  useEffect(() => {
    if(theme === "dark"){
       document.documentElement.classList.add("dark")
      }else{
        document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
     setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div className="App">
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
    </div>
  );
}

export default App;
