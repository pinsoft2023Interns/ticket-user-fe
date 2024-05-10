const faqs = [
  {
    id: 1,
    question: "Nasıl bir otobüs bileti satın alabilirim?",
    answer:
      "Otobüs bileti satın almak için web sitemizdeki rezervasyon sayfasını ziyaret edin. Kalkış ve varış noktalarınızı, seyahat tarihini ve yolcu sayısını belirtin. Ardından uygun olan seferleri görüntüleyebilir ve satın alabilirsiniz.",
  },
  {
    id: 2,
    question: "Satın aldığım bileti nasıl iptal edebilirim?",
    answer:
      "Biletinizi iptal etmek için hesabınıza giriş yapın ve rezervasyonlarınızı yönetin. İptal politikamız ve iade prosedürleri hakkında daha fazla bilgi almak için lütfen İptal Politikası sayfamızı ziyaret edin.",
  },
  {
    id: 3,
    question: "Bilet değişikliği yapabilir miyim?",
    answer:
      "Evet, bilet değişikliği yapabilirsiniz. Ancak, değişiklik yapmadan önce politikamızı ve ilgili ücretleri kontrol etmek önemlidir. Daha fazla bilgi için lütfen Bilet Değişikliği sayfamızı ziyaret edin.",
  },
  {
    id: 4,
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer:
      "Kredi kartları, banka kartları ve çeşitli online ödeme yöntemlerini kabul ediyoruz. Tam bir liste için lütfen Ödeme Seçenekleri sayfamızı ziyaret edin.",
  },
  {
    id: 5,
    question:
      "Bir hata yaptım ve biletimi yanlış tarih/sefer için aldım. Ne yapmalıyım?",
    answer:
      "Eğer yanlışlıkla hatalı bir bilet satın aldıysanız, müşteri hizmetlerimizle hemen iletişime geçin. Durumunuzu değerlendirecek ve mümkünse size yardımcı olacaklar.",
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div
        className="absolute inset-x-0 top-[10rem] z-50 transform-gpu overflow-hidden blur-3xl sm:top-[20rem] "
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Sıkça Sorulan Sorular
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
