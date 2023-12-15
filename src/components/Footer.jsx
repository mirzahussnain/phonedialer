import { IoStar } from "react-icons/io5";
import { IoIosKeypad,IoMdContact } from "react-icons/io";
import { LuClock9 } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className={`w-full py-3 cursor-pointer`}>
    <ul className={`flex justify-evenly items-center`}>
      <li>
        <NavLink to="/favourites" className={({ isActive }) => {
            if (isActive) {
              return `text-blue-700 flex flex-col items-center justify-center`} else {
              return `text-gray-200 flex flex-col items-center justify-center`;
            }
          }
          
        }>
          <IoStar className={`text-xl`} />
          <span className={`text-xs`}>Favourites</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/calllog" className={({ isActive }) => {
            if (isActive) {
              return `text-blue-700 flex flex-col items-center justify-center`} else {
              return `text-gray-200 flex flex-col items-center justify-center`;
            }
          }
          
        }>
          <LuClock9 className={`text-xl`} />
          <span className={`text-xs`}>Recents</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contacts" className={({ isActive }) => {
            if (isActive) {
              return `text-blue-700 flex flex-col items-center justify-center`} else {
              return `text-gray-200 flex flex-col items-center justify-center`;
            }
          }
          
        }>
          <IoMdContact className={`text-xl`} />
          <span className={`text-xs`}>Contacts</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/"  className={({ isActive }) => {
            if (isActive) {
              return `text-blue-700 flex flex-col items-center justify-center`} else {
              return `text-gray-200 flex flex-col items-center justify-center`;
            }
          }
          
        }>
          <IoIosKeypad className={`text-xl`} />
          <span className={`text-xs`}>KeyPad</span>
        </NavLink>
      </li>
    </ul>
  </div>
    </>
  )
}

export default Footer