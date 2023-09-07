import { Box, Heading, Text } from "@codelife-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const isPt = i18n.language.includes("pt");

  return (
    hydrated && (
      <Box className="bg-white rounded-md mx-auto my-13 max-w-4xl p-13 w-full custom-heading">
        <Heading
          size={"xl"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold"
        >
          {t("Privacy Policy")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.notice.p1")}
        </Text>
        <ol className="list-decimal pl-6">
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.notice.li1")} 
          </li>
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.notice.li2")} 
          </li>
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.notice.li3")} 
          </li>
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.notice.li4")} 
          </li>
        </ol>

        <Heading
          size={"lg"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold"
        >
          {t("privacy.info.title")}
        </Heading>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.info.p1")}
        </Text>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.info.p2")}
          </Text>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">

          {t("privacy.info.p3")}
        </Text>

        <Heading
          size={"lg"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold 7"
        >
          {t("privacy.access.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
         {t("privacy.access.p1")}
         </Text>
         
        <ol className="list-decimal pl-6">
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.access.li1")} 
          </li>
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.access.li2")} 
          </li>
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.access.li3")} 
          </li>
          <li className="mb-2 font-body text-codelife-black-500 font-normal text-md">
            {t("privacy.access.li3")} 
          </li>
        </ol>
        
        <Heading
          size={"lg"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold 7"
        >
          {t("privacy.security.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.security.p1")}
        </Text>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.security.p2")}
          </Text>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">

          {t("privacy.security.p3")}
        </Text>

        <Heading
          size={"lg"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold 7"
        >
          {t("privacy.registration.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.registration.p1")}
        </Text>

        <Heading
          size={"lg"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold 7"
        >
          {t("privacy.cookies.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.cookies.p1")}
        </Text>

        <Heading
          size={"lg"}
          style={{
            lineHeight: "1.1",
            marginTop: "25px"
          }}
          className="font-heading mb-7 text-[#233233] font-bold 7"
        >
          {t("privacy.links.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.registration.p1")}
        </Text>
      </Box>
    )
  );
}
