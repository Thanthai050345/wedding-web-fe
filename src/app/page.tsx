import Head from "next/head";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/e-invitation");
  return (
    <>
      <Head>
        <title>คำเชิญร่วมงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา</title>
        <meta
          property="og:title"
          content="คำเชิญร่วมงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา"
        />
        <meta
          property="og:description"
          content="คำเชิญงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา เชิญท่านมาร่วมงานมงคลสมรสในโอกาสพิเศษนี้ ณ ศูนย์ประชุมมารินทร์"
        />
        <meta
          property="og:image"
          content="/images/wedding5.jpg"
        />
        <meta property="og:url" content="https://wedding-web-fe.vercel.app/e-invitation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="คำเชิญงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา เชิญท่านมาร่วมงานมงคลสมรสในโอกาสพิเศษนี้ ณ ศูนย์ประชุมมารินทร์"
        />
        <meta
          name="twitter:description"
          content="คำเชิญงานแต่งงานของ คุณวรเมธ และ คุณเทพปรียา เชิญท่านมาร่วมงานมงคลสมรสในโอกาสพิเศษนี้ ณ ศูนย์ประชุมมารินทร์"
        />
        <meta
          name="twitter:image"
          content="/images/wedding5.jpg"
        />
      </Head>
    </>
  );
}
