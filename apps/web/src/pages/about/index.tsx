import { Box, Heading, Text } from "@codelife-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t, i18n } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const isPt = i18n.language.includes("pt");

  return (
    hydrated && (
      <Box className="bg-white rounded-md my-13 max-w-4xl md:mx-auto mx-3 md:p-13 px-6 shadow-2xl">
        <Heading
          size={"xl"}
          style={{ lineHeight: "1.1" }}
          className="mt-2 mb-6 text-[#233233] md:text-4xl text-3xl font-bold"
        >
          {t("About")}
        </Heading>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("aboutP1")}
        </Text>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("aboutP2")}
        </Text>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("aboutP3")}
        </Text>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("aboutP4")}
        </Text>
        <Text className="mb-2 font-body text-codelife-black-500 font-normal text-md">
          {t("aboutP5")}
        </Text>
        {isPt && (
          <Text className="font-body text-codelife-black-500 font-normal text-md">
            {t("aboutP6")}
          </Text>
        )}
      </Box>
    )
  );
}
