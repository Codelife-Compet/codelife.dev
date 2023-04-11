import Image from "next/image";
import Link from "next/link";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa"
import CompetIcon from "./CompetIcon";
import InstagramIcon from "./InstagramIcon";



function NavBar() {

    return(
        <nav className="m-0 box-border flex items-center justify-between gap-8 py-0 px-4">
            <Link href="/" className="">CODELIFE</Link>
            <ul className="m-0 flex list-none gap-4 p-0 text-sm">
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><a href="/">ENTRE</a></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><a href="/">CRIE UMA CONTA</a></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><a href="/">SOBRE O CODELIFE</a></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><a href="/">PORTUGUÊS</a></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><a href="/">INGLÊS</a></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><FaFacebookSquare /></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><FaYoutube /></li>
                <li className=" font-semibold text-codelife-green-400 hover:text-codelife-black-900"><InstagramIcon /></li>
            </ul>
        </nav>
    );
}


export default NavBar;