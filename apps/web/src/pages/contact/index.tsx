import Link from "next/link";
import { Box, Heading } from "@codelife-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const mail = "codelife@codelife.com";

  return (
    hydrated && (
      <Box className="bg-white rounded-md my-13 max-w-4xl md:mx-auto mx-3 md:p-13 px-6 shadow-2xl text-center">
        <Heading
          style={{ lineHeight: "1.1" }}
          className="mb-7 text-[#233233] md:text-4xl text-3xl font-bold"
        >
          {t("Contact")}
        </Heading>
        <Link
          href={`mailto:${mail}`}
          className="mx-auto text-[#0f807e] hover:text-codelife-green-500 md:text-3xl text-xl font-bold"
        >
          {mail}
        </Link>
      </Box>
    )
  );
}
