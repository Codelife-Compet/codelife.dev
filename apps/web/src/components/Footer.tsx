import Link from "next/link";
import CompetIcon from "./CompetIcon";
import styles from "@/styles/Footer.module.css";
import { useTranslation } from "react-i18next";
import { UserPermissions } from "@/@types/user";
import { useAuth } from "@/context/auth/AuthContext";
import { useEffect, useState } from "react";
import { Socials, Text } from "@codelife-ui/react";
import Image from "next/image";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { InstagramSVGIcon } from "./InstagramSVGIcon";
function Footer() {
  const [hydrated, setHydrated] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    setHydrated(true);
  }, []);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("language");

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };
  return hydrated ? (
    <footer className={styles.footer}>
      <div className={styles["inner-footer"]}>
        <nav
          role={"navigation"}
          className={
            user ? styles["nav-4-links-footer"] : styles["nav-3-links-footer"]
          }
        >
          <div className={styles["nav-footer-section"]}>
            <h3>{t("About ")}</h3>
            <ul>
              <li>
                <Link href="/about">{t("About")}</Link>
              </li>
              <li>
                <Link href="/privacy">{t("Privacy Policy")}</Link>
              </li>
              <li>
                <Link href="">{t("Partners")}</Link>
              </li>
              <li>
                <Link href="/contact">{t("Contact")}</Link>
              </li>
            </ul>
          </div>
          <div className={styles["nav-footer-section"]}>
            <h3>{t("Explore")}</h3>
            <ul>
              <li>
                <Link href="">{t("Lesson plan")}</Link>
              </li>
              <li>
                <Link href="">{t("Glossary")}</Link>
              </li>
              {user?.permission !== UserPermissions.regular && (
                <li>
                  <Link href="">{t("Leaderboard")}</Link>
                </li>
              )}
            </ul>
          </div>
          {user && (
            <div className={styles["nav-footer-section"]}>
              <h3>{t("Account")}</h3>
              <ul>
                <li>
                  <Link href="">{t("My Profile")}</Link>
                </li>
                <li>
                  <Link href="">{t("My Projects")}</Link>
                </li>
                {user?.permission !== UserPermissions.regular && (
                  <li>
                    <Link href="" onClick={() => /* logout() */ null}>
                      {t("Admin")}
                    </Link>
                  </li>
                )}
                <li>
                  <Link href="" onClick={() => /* logout() */ null}>
                    {t("Log out")}
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <div className={styles["nav-footer-section"]}>
            <h3>{t("Language")}</h3>
            <ul>
              <li onClick={handleChangeLanguage}>
                <Link href="" locale="en">
                  {t("English")}
                </Link>
              </li>
              <li onClick={handleChangeLanguage}>
                <Link href="" locale="pt-BR">
                  {t("Portuguese")}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles["footer-partners-section"]}>
          <div className={styles["footer-partners-container"]}>
            <div className={styles["footer-partners-datawheel"]}>
              <Link href={"https://www.datawheel.us/"} target="_blank">
                <Text
                  as="span"
                  css={{ color: "$codelife-black-100" }}
                  className=" flex justify-center text-lg font-medium "
                >
                  {t("developed by")}
                </Text>
                <Image
                  src="/datawheel.svg"
                  alt="Logotipo da Datawheel"
                  width={160}
                  height={160}
                  className="cursor-pointer opacity-80 hover:opacity-100 h-12 w-auto"
                />
              </Link>
            </div>
            <div className={styles["footer-partners-helpfull-container"]}>
              <div className={styles["footer-partners-item"]}>
                <Link href="https://www.mg.gov.br">
                  <Text
                    as={"span"}
                    size={"xs"}
                    css={{
                      color: "$codelife-black-100",
                      fontWeight: "$thin",
                    }}
                  >
                    Governo do Estado de Minas Gerais
                  </Text>
                </Link>
              </div>
              <div className={styles["footer-partners-item"]}>
                <Link
                  href="http://www.fapemig.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/fapemig.svg"
                    alt="Logotipo da Fapemig"
                    height={100}
                    width={100}
                    className=" cursor-pointer px-2 opacity-80 hover:opacity-100 h-8 w-auto"
                  />
                </Link>
              </div>
              <div className={styles["footer-partners-item"]}>
                <Link
                  href={"http://www.fapemig.br/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/innpact.svg"
                    alt="Logotipo da Innpact"
                    height={100}
                    width={100}
                    className=" cursor-pointer opacity-80 hover:opacity-100 h-8 w-auto"
                  />
                </Link>
              </div>
              <div className={styles["footer-partners-item"]}>
                <Link
                  href="https://compet.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-3 items-center justify-items-center"
                >
                  <CompetIcon className="col-span-1 w-10 sm:w-[30]" />
                  <Text
                    as={"span"}
                    size={"sm"}
                    css={{ color: "$codelife-black-100" }}
                    className="col-start-2 col-end-4 pl-2 text-sm"
                  >
                    Compet | CEFET - MG
                  </Text>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Socials.Root className="py-2 border-t border-codelife-black-400 justify-around">
        <Socials.IconContainer link="https://www.facebook.com/CodeLifeBR/">
          <FaFacebookSquare className="text-codelife-black-400 hover:text-codelife-blue-600" />
        </Socials.IconContainer>
        <Socials.IconContainer link="https://www.youtube.com/channel/UCR6iTxyV9jdSy21eqS1Ovyg">
          <FaYoutube className="text-codelife-black-400 hover:text-codelife-red-600" />
        </Socials.IconContainer>
        <Socials.IconContainer link="https://www.instagram.com/codelifebr/">
          <InstagramSVGIcon className="fill-codelife-black-400 hover:fill-[url(#instagram-gradient-hover)]" />
        </Socials.IconContainer>
      </Socials.Root>
    </footer>
  ) : (
    <></>
  );
}

export default Footer;
