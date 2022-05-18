import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";
import { Fragment } from "react";
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>

      <div className="bg-secondary pb-3">

        <div>
          <h1 className="text-center text-primary font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl pt-10 pb-3 md:pb-8">Frequently Asked Questions</h1>
        </div>

        <div className="max-w-lg md:max-w-7xl container">
          <Accordion open={open === 1} onClick={() => handleOpen(1)} className="bg-white mb-3 md:mb-5 rounded-lg">
            <AccordionHeader className="text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10">Apa perbedaan ULTKSP dan Konseling?</AccordionHeader>
            <AccordionBody className="p-5 text-center font-semibold text-xs">
              Perbedaan ULTKSP dan Konseling ada pada konteks permasalahannya. 
              ULTKSP berfokus pada layanan pelaporan dan konseling kekerasan seksual dan perundungan. 
              Sedangkan, layanan Konseling meliputi masalah pribadi, sosial, bimbingan belajar, bimbingan karir, 
              dan sebagainya.
            </AccordionBody>
          </Accordion>
        
        
          <Accordion open={open === 2} onClick={() => handleOpen(2)} className="bg-white mb-3 md:mb-5 rounded-lg">
            <AccordionHeader className="text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10">Mengapa harus menggunakan email UB saat mendaftar ULTKSP atau Konseling?</AccordionHeader>
            <AccordionBody className="p-5 text-center font-semibold text-xs">
              Email UB  bertujuan untuk memastikan bahwa kamu salah satu dari mahasiswa FILKOM UB serta sebagai 
              media konfirmasi setelah kamu melakukan pendaftaran ULTKSP dan Konseling.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} onClick={() => handleOpen(3)} className="bg-white mb-3 md:mb-5 rounded-lg">
            <AccordionHeader className="text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10">Apakah kerahasiaan data saya terjamin?</AccordionHeader>
            <AccordionBody className="p-5 text-center font-semibold text-xs">
            Tidak perlu khawatir, privasi dan kerahasiaan Anda adalah prioritas kami. Segala data dan identitas hanya digunakan untuk kepentingan konseling. 
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} onClick={() => handleOpen(4)} className="bg-white mb-3 md:mb-5 rounded-lg">
            <AccordionHeader className="text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10">Bagaimana menentukan jadwal konseling saya?</AccordionHeader>
            <AccordionBody className="p-5 text-center font-semibold text-xs">
            Untuk jadwal konseling akan dijadwalkan oleh kemahasiswaan dan diinformasikan lebih lanjut melalui contact person yang telah kamu berikan pada saat pendaftaran.
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 5} onClick={() => handleOpen(5)} className="bg-white mb-3 md:mb-5 rounded-lg">
            <AccordionHeader className="text-primary text-sm sm:text-base md:text-lg lg:text-xl py-2 font-semibold px-10">Siapa yang akan melayani saat konseling?</AccordionHeader>
            <AccordionBody className="p-5 text-center font-semibold text-xs">
            Saat konseling kamu akan dilayani oleh psikolog dari fakultas atau teman sebaya yang sudah terverifikasi keahlianya. 
            </AccordionBody>
          </Accordion>
        </div>
      </div>

    </Fragment>
  );
}
