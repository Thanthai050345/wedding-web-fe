import React from "react";
import Head from "next/head";

const WeddingCard = () => {
  return (
    <>
      <Head>
        <title>คำเชิญงานแต่งงานของ คุณวรเมธ & คุณเทพปรียา</title>
        <meta
          name="description"
          content="คำเชิญงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา เชิญท่านมาร่วมงานมงคลสมรสในโอกาสพิเศษนี้"
        />
        <meta
          name="keywords"
          content="งานแต่งงาน, งานแต่ง, งานแต่งคุณวรเมธ & คุณเทพปรียา, งานแต่งแบงค์กว๊าน, คำเชิญ, คุณวรเมธ และ คุณเทพปรียา, พิธีมงคลสมรส, แบงค์กว๊าน"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="คำเชิญงานแต่งงานของ BANK & KWAN" />
        <meta
          property="og:description"
          content="ร่วมงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา ในโอกาสพิเศษนี้"
        />
        <meta property="og:image" content="/images/floral.png" />
      </Head>

      <div className="font-sans min-h-[90vh] mt-8 flex items-center justify-center py-12 px-6 relative overflow-hidden bg-gradient-to-b from-[#f8f4f2] to-[#e5e3e4]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-bottom-right opacity-10"
          style={{
            backgroundImage: "url(/images/floral.png)",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-contain bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(/images/floral.png)",
            transform: "rotate(45deg)",
          }}
        ></div>

        <div
          className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-contain bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(/images/floral.png)",
            transform: "rotate(225deg)",
          }}
        ></div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <div className="flex justify-center mb-8">
            <div className="h-0.5 w-16 bg-[#B7A982]"></div>
            <div className="h-0.5 w-32 mx-2 bg-[#AD414E]"></div>
            <div className="h-0.5 w-16 bg-[#B7A982]"></div>
          </div>

          <div className="text-center mb-10">
            <h1 className="font-sans text-primary text-3xl md:text-5xl font-serif font-light text-[#AD414E] mb-2">
              วรเมธ & เทพปรียา
            </h1>
            <p className="font-sans text-sm md:text-base uppercase tracking-widest text-[#B7A982]">
              เราขอเชิญท่านร่วมเป็นสักขีพยานในวันพิเศษของเรา
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg border border-[#F2DBA7]/30">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#AD414E] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#F2DBA7]/50"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-lg md:text-xl font-medium text-[#AD414E]">
                เรียน ท่านผู้มีเกียรติทุกท่าน
              </p>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
              <p>
                ด้วยความยินดีและเป็นเกียรติอย่างยิ่งที่{" "}
                <span className="font-medium text-[#AD414E]">
                  คุณวรเมธ และ คุณเทพปรียา
                </span>{" "}
                จะได้ร่วมกันเริ่มต้นการเดินทางใหม่ในชีวิต
                เราขอเรียนเชิญท่านเข้าร่วมเป็นสักขีพยานในพิธีมงคลสมรสของเรา
              </p>
              <p>
                เราจะรู้สึกเป็นเกียรติและยินดีอย่างยิ่งหากท่านสามารถมาร่วมแสดงความยินดีในโอกาสสำคัญนี้
                ขอขอบพระคุณสำหรับความกรุณา
                และการสนับสนุนที่ท่านได้มอบให้เราทั้งสองเสมอมา
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <div className="text-center">
                <p className="text-sm md:text-base italic text-[#B7A982]">
                  ด้วยรักและความเคารพ
                </p>
                <p className="text-base md:text-lg font-medium text-[#AD414E] mt-1">
                  วรเมธ & เทพปรียา
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="h-0.5 w-16 bg-[#B7A982]"></div>
            <div className="h-0.5 w-32 mx-2 bg-[#AD414E]"></div>
            <div className="h-0.5 w-16 bg-[#B7A982]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeddingCard;
