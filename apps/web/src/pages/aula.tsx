import NavBar from '@/components/NavBar'
import Slider from '@/components/Slider'

export default function Aula() {
  const slides = ['[1] Seja', '[2] Bem', '[3] Vindo', '[4] ao', '[5] CodeLife']
  return (
    <>
      <NavBar />
      <Slider
        slides={slides}
        imgurl="https://i.pinimg.com/originals/fa/a6/c5/faa6c52d67d20f1fe1ac5a93a8edd62b.png"
      />
    </>
  )
}
