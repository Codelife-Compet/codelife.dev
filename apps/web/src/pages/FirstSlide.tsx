import { Box, Heading } from "@codelife-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function FirstSlide() {
  const { t, i18n } = useTranslation();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const isPt = i18n.language.includes("pt");

  return (
    hydrated && (
      <Box className="bg-white bg-opacity-50 p-4 rounded-md mx-auto my-13 max-w-8xl p-13 w-full">
        <Heading
          size={"xl"}
          style={{ lineHeight: "1.1"}}
          className="font-heading mb-7 text-[#233233] font-bold"
        >
          Slide
        </Heading>
        <div>
          <Swiper
            autoplay={{
              delay:500
            }}
            modules={[Navigation, Autoplay]}
          >
            <SwiperSlide>
              <div className="h-screen w-full bg-red-300">
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-screen w-full bg bg-green-300">
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-screen w-full bg bg-yellow-300">
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-screen w-full bg bg-blue-300">
                
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Box>
    )
  );
}