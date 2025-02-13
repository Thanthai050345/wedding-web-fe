import Head from "next/head";

const WeddingCard = () => {
  return (
    <>
      <Head>
        <title>คำเชิญงานแต่งงานของ BANK & KWAN</title>
        <meta
          name="description"
          content="คำเชิญงานแต่งงานของ BANK และ KWAN เชิญท่านมาร่วมงานมงคลสมรสในโอกาสพิเศษนี้"
        />
        <meta
          name="keywords"
          content="งานแต่งงาน, งานแต่ง, งานแต่ง BANK & KWAN, งานแต่งแบงค์กว๊าน, คำเชิญ, BANK & KWAN, พิธีมงคลสมรส, แบงค์กว๊าน"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="คำเชิญงานแต่งงานของ BANK & KWAN" />
        <meta
          property="og:description"
          content="ร่วมงานแต่งงานของ BANK และ KWAN ในโอกาสพิเศษนี้"
        />
        <meta property="og:image" content="/images/floral.png" />
      </Head>

      <div className="bg-[#E5E3E4] mt-8 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-bottom-right opacity-15"
          style={{
            backgroundImage: "url(/images/floral.png)",
            width: "100%",
            backgroundPosition: "bottom right",
          }}
        ></div>

        <div className="text-primary grid gap-[60px] font-sans p-10 md:p-20 lg:p-20 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            BANK & KWAN
          </h2>
          <div className="w-full flex justify-center">
            <div className="grid gap-8 max-w-[756px] mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed">
              <p>
                <strong>เรียน ท่านผู้มีเกียรติทุกท่าน</strong>
              </p>
              <p className="mt-2">
                ด้วยความยินดีและเป็นเกียรติอย่างยิ่งที่{" "}
                <strong>BANK และ KWAN</strong>{" "}
                จะได้ร่วมกันเริ่มต้นการเดินทางใหม่ในชีวิต
                เราขอเรียนเชิญท่านเข้าร่วมเป็นสักขีพยานในพิธีมงคลสมรสของเรา
              </p>
              <p className="mt-2">
                เราจะรู้สึกเป็นเกียรติและยินดีอย่างยิ่งหากท่านสามารถมาร่วมแสดงความยินดีในโอกาสสำคัญนี้
                ขอขอบพระคุณสำหรับความกรุณา
                และการสนับสนุนที่ท่านได้มอบให้เราทั้งสองเสมอมา
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingCard;
