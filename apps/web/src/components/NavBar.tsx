import Link from 'next/link'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '@/components/Logo.svg'
import {
  FaDoorOpen,
  FaUserPlus,
  FaQuestionCircle,
  FaGlobeAmericas,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

function NavBar() {
  return (
    <nav className="m-0 box-border flex items-center justify-between gap-8 pr-6 navbar bg-codelife-green-500">
      <Link href="#" className="codelife-logo">
        <Logo />
      </Link>
      {/*
      <form action="#" className="hidden search-form">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input
          className="input-box"
          type="text"
          placeholder="Buscar usuários e projetos"
        />
      </form>
      */}
      <ul className="m-0 flex list-none gap-6 p-0 text-sm items-center">
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold flex items-center cursor-pointer">
          <FaDoorOpen className="mr-1 text-[20px]" />
          <Link href="#">ENTRE</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold flex items-center cursor-pointer">
          <FaUserPlus className="mr-1 text-[20px]" />
          <Link href="#">CRIE UMA CONTA</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold flex items-center cursor-pointer">
          <FaQuestionCircle className="mr-1 text-[16px]" />
          <Link href="#">SOBRE O CODELIFE</Link>
        </li>
        <div className="flex items-center">
          <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold flex items-center cursor-pointer">
            <FaGlobeAmericas className="mr-1 text-[16px]" />
            <Link href="#" className="pt-div pr-2">
              PORTUGUÊS
            </Link>
          </li>
          <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold flex cursor-pointer">
            <Link href="#" className="en-div pl-2">
              INGLÊS
            </Link>
          </li>
        </div>
        <div className="flex gap-2 items-center">
          <li className=" text-codelife-green-400 hover:text-codelife-black-900 cursor-pointer font-semibold text-[23px]">
            <FaFacebookSquare />
          </li>
          <li className=" text-codelife-green-400 hover:text-codelife-black-900 cursor-pointer font-semibold text-[29px]">
            <FaYoutube />
          </li>
          <li className=" text-codelife-green-400 hover:text-codelife-black-900 cursor-pointer font-semibold text-[24px]">
            <FaInstagram />
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar
