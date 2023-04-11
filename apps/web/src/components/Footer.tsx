import Link from "next/link";
import CompetIcon from "./CompetIcon";
import Socials from "./Socials";
import styles from '@/styles/Footer.module.css'
import { useTranslation } from "react-i18next";
import { UserPermissions } from "@/@types/user";
import { useAuth } from "@/context/auth/AuthContext";
import { useEffect, useState } from "react";
function Footer() {
  const [hydrated, setHydrated] = useState(false);
  const { user } = useAuth()
  useEffect(() => {
    setHydrated(true);
  }, []);
  const { t } = useTranslation()


  return (
    hydrated ?
      (<footer className={styles.footer}>
        <div className={styles["inner-footer"]}>
          <nav role={"navigation"} className={user ? styles["nav-4-links-footer"] : styles["nav-3-links-footer"]}>
            <div className={styles["nav-footer-section"]}>
              <h3>{t("About ")}</h3>
              <ul>
                <li><Link href="">{t("About")}</Link></li>
                <li><Link href="">{t("Privacy Policy")}</Link></li>
                <li><Link href="">{t("Partners")}</Link></li>
                <li><Link href="">{t("Contact")}</Link></li>
              </ul>
            </div>
            <div className={styles["nav-footer-section"]}>
              <h3>{t("Explore")}</h3>
              <ul>
                <li><Link href="">{t("Lesson plan")}</Link></li>
                <li><Link href="">{t("Glossary")}</Link></li>
                {user?.permission !== UserPermissions.regular &&
                  <li><Link href="">{t("Leaderboard")}</Link></li>
                }
              </ul>
            </div>
            {user &&
              <div className={styles["nav-footer-section"]}>
                <h3>{t("Account")}</h3>
                <ul>
                  <li><Link href="">{t("My Profile")}</Link></li>
                  <li><Link href="">{t("My Projects")}</Link></li>
                  {user?.permission !== UserPermissions.regular &&
                    <li><Link href="" onClick={() => /*logout()*/null}>{t("Admin")}</Link></li>
                  }
                  <li><Link href="" onClick={() => /*logout()*/null}>{t("Log out")}</Link></li>
                </ul>
              </div>
            }
            <div className={styles["nav-footer-section"]}>
              <h3>{t("Language")}</h3>
              <ul>
                <li><Link href="/" locale="en">{t("English")}</Link></li>
                <li><Link href="/" locale="pt-BR">{t("Portuguese")}</Link></li>

              </ul>
            </div>
          </nav>
          <div className={styles["footer-partners-section"]}>
            <div className={styles["footer-partners-container"]}>
              <div className={styles["footer-partners-datawheel"]}>
                <Link href={"https://www.datawheel.us/"} target="_blank">
                  <span className="text-md flex justify-center font-medium text-codelife-zinc-500 ">
                    {t("developed by")}
                  </span>
                  <img src="/datawheel.svg" alt="Logotipo da Datawheel" width={160} height={160} className="cursor-pointer opacity-80 hover:opacity-100" />
                </Link>
              </div>
              <div className={styles["footer-partners-helpfull-container"]}>
                <div className={styles["footer-partners-item"]}>
                  <Link href="https://www.mg.gov.br">
                    <span className="text-sm font-thin text-codelife-zinc-400">Governo do Estado de Minas Gerais</span>
                  </Link>
                </div>
                <div className={styles["footer-partners-item"]}>
                  <Link href="http://www.fapemig.br/" target="_blank" rel="noopener noreferrer">
                    <img src="/fapemig.svg" alt="Logotipo da Fapemig" height={160} width={160} className=" cursor-pointer px-2 opacity-80 hover:opacity-100" />
                  </Link>
                </div>
                <div className={styles["footer-partners-item"]}>
                  <Link href={"http://www.fapemig.br/"} target="_blank" rel="noopener noreferrer" >
                    <img src="/innpact.svg" alt="Logotipo da Innpact" height={160} width={160} className=" cursor-pointer opacity-80 hover:opacity-100 " />
                  </Link>
                </div>
                <div className={styles["footer-partners-item"]}>
                  <Link href="https://compet.vercel.app/" target="_blank" rel="noopener noreferrer" className="grid grid-cols-3 items-center justify-items-center">
                    <CompetIcon className="sm:w-30 col-span-1 w-10" />
                    <span className="col-start-2 col-end-4 pl-2 font-merry text-sm text-codelife-zinc-400">Compet | CEFET - MG</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={styles["socials-container"]}
        >
          <Socials
            size="sm"
            facebook={{ id: "/CodelifeBR", link: "https://www.facebook.com/CodeLifeBR/" }}
            youtube={{ id: "@CodelifeBR", link: "https://www.youtube.com/channel/UCR6iTxyV9jdSy21eqS1Ovyg" }}
            instagram={{ id: "@CodelifeBR", link: "https://www.instagram.com/codelifebr/" }}
          />
        </div>
      </footer >) : <></>);
}

export default Footer;