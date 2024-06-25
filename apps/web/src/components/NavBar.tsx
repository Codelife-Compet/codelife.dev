import Link from 'next/link'
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { InstagramSVGIcon } from './InstagramSVGIcon'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '@/components/Logo.svg'

function NavBar() {
  return (
    <nav className="m-0 box-border flex items-center justify-between gap-8 px-4 py-0 navbar">
      <Link href="#" className="codelife-logo">
        <Logo />
      </Link>
      <form action="#" className="search-form">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
        <input className="input-box" type="text" placeholder="Buscar usuários e projetos"></input>
      </form>
      <ul className="m-0 flex list-none gap-4 p-0 text-sm">
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <Link href="#">ENTRE</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <Link href="#">CRIE UMA CONTA</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <Link href="#">SOBRE O CODELIFE</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <Link href="#" className="pt-div">PT</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <Link href="#" className="en-div">EN</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold fb">
          <FaFacebookSquare />
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold yt">
          <FaYoutube />
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold ig">
          <InstagramSVGIcon />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
