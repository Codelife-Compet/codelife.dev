import { useState, useEffect } from 'react'

// interface SlideProps {
//   name: string;
//   description: string;
//   theme: string;
//   baseCode: string;
//   userCodes?: UserCode[];
//   video?: Video;
//   levelId: string;
// }

interface SliderProps {
  slides: string[]
  imgurl: string
}

function Slider({ slides, imgurl }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  // const [slides, setSlides] = useState<SlideProps[]>([]);

  // useEffect(() => {
  //   const fetchSlides = async () => {
  //     try {
  //       const response = await fetch('https://your-backend-api-url.com/slides'); /get/slide/C/array/1
  //       const data = await response.json();
  //       setSlides(data);
  //     } catch (error) {
  //       console.error('Error fetching slides:', error);
  //     }
  //   };

  //   fetchSlides();
  // }, []);

  // if (slides.length === 0) {
  //   return <div>Carregando...</div>;
  // }

  const goPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? currentSlide : prevSlide - 1,
    )
  }

  const goNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? prevSlide : prevSlide + 1,
    )
  }

  const containerSlides = {
    // backgroundImage: `url(${imgurl})`,
  }

  // const { name, description, theme, baseCode, levelId } = slides;

  return (
    <>
      <div className="container-slides" style={containerSlides}>
        <div className="slide-itself">
          <div className="header">
            <h1>BEM-VINDO AO CODELIFE!</h1>
            <h3>Voltar para Ilha Selva ×</h3>
          </div>
          <div className="content">
            {slides[currentSlide]}
          </div>
          <div className="buttons">
            <button className={currentSlide == 0 ? "inactive-button" : "button"} onClick={goPrevSlide}>
              Anterior
            </button>
            <button className={currentSlide == slides.length - 1 ? "inactive-button" : "button"} onClick={goNextSlide}>
              Próximo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
