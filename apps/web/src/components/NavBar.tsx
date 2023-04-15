import Link from 'next/link'
import { FaYoutube, FaFacebookSquare } from 'react-icons/fa'
import { InstagramSVGIcon } from './InstagramSVGIcon'

function NavBar() {
  return (
    <nav className="m-0 box-border flex items-center justify-between gap-8 px-4 py-0">
      <Link href="#" className="">
        CODELIFE
      </Link>
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
          <Link href="#">PORTUGUÊS</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <Link href="#">INGLÊS</Link>
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <FaFacebookSquare />
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <FaYoutube />
        </li>
        <li className=" text-codelife-green-400 hover:text-codelife-black-900 font-semibold">
          <InstagramSVGIcon />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
