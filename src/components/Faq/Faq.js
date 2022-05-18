import Item from "./Item";

export default function Faq() {
    const faqs = [
        {
            question: 'Apa perbedaan ULTKSP dan Konseling?',
            answered: 'Perbedaan ULTKSP dan Konseling ada pada konteks permasalahannya. ULTKSP berfokus pada layanan pelaporan dan konseling kekerasan seksual dan perundungan. Sedangkan, layanan Konseling meliputi masalah pribadi, sosial, bimbingan belajar, bimbingan karir, dan sebagainya.'
        },
        // {
        //     question: 'Mengapa harus menggunakan email UB saat mendaftar ULTKSP atau Konseling?',
        //     answered: 'Email UB  bertujuan untuk memastikan bahwa kamu salah satu dari mahasiswa FILKOM UB serta sebagai media konfirmasi setelah kamu melakukan pendaftaran ULTKSP dan Konseling. ',
        // },
        // {
        //     question: ' Apakah kerahasiaan data saya terjamin?',
        //     answered: ' Tidak perlu khawatir, privasi dan kerahasiaan Anda adalah prioritas kami. Segala data dan identitas hanya digunakan untuk kepentingan konseling. ',
        // },
        // {
        //     question: ' Bagaimana menentukan jadwal konseling saya?',
        //     answered: ' Untuk jadwal konseling akan dijadwalkan oleh kemahasiswaan dan diinformasikan lebih lanjut melalui contact person yang telah kamu berikan pada saat pendaftaran.',
        // },
        // {
        //     question: ' Siapa yang akan melayani saat konseling?',
        //     answered: ' Saat konseling kamu akan dilayani oleh psikolog dari fakultas atau teman sebaya yang sudah terverifikasi keahlianya. ',
        // },
    ];
    return (
        <>
            <div className=" bg-secondary pt-10 pb-5">
                <h1 className="text-primary font-bold text-center text-2xl pb-5"> Frequently Asked Questions </h1>
                <div className="mx-28 h-10 bg-white mb-4 rounded-md">
                    <div className="overflow-hidden divide-y shadow-sm text-center bg-white rounded-sm">
                        {faqs.map((item, key) => 
                            <Item question={item.question} answer={item.answered} key={key}/>
                        )
                        }
                </div>
                </div>
            </div>
        </>

    );
}

