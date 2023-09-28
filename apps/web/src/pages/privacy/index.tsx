import { Box, Heading, Text } from "@codelife-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    hydrated && (
      <Box className="bg-white rounded-md my-13 max-w-4xl md:mx-auto mx-3 md:p-13 px-6 shadow-2xl">
        <Heading
          style={{
            lineHeight: "1.1",
          }}
          className="mt-2 mb-6 text-[#233233] md:text-4xl text-3xl font-bold"
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
          style={{
            lineHeight: "1.1",
          }}
          className="mt-8 mb-3 text-[#233233] md:text-3xl text-2xl font-bold"
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
          style={{
            lineHeight: "1.1",
          }}
          className="mt-8 mb-3 text-[#233233] md:text-3xl text-2xl font-bold"
        >
          {t("privacy.access.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.access.p1")}
        </Text>

        <ul className="list-disc pl-6">
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
        </ul>

        <Heading
          style={{
            lineHeight: "1.1",
          }}
          className="mt-8 mb-3 text-[#233233] md:text-3xl text-2xl font-bold"
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
          style={{
            lineHeight: "1.1",
          }}
          className="mt-8 mb-3 text-[#233233] md:text-3xl text-2xl font-bold"
        >
          {t("privacy.registration.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.registration.p1")}
        </Text>

        <Heading
          style={{
            lineHeight: "1.1",
          }}
          className="mt-8 mb-3 text-[#233233] md:text-3xl text-2xl font-bold"
        >
          {t("privacy.cookies.title")}
        </Heading>

        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("privacy.cookies.p1")}
        </Text>

        <Heading
          style={{
            lineHeight: "1.1",
          }}
          className="mt-8 mb-3 text-[#233233] md:text-3xl text-2xl font-bold"
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
