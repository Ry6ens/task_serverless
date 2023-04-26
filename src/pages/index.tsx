import Head from "next/head";

import Hero from "@/components/Hero/Hero";
import Benefits from "@/components/Benefits/Benefits";

export default function Home() {
  return (
    <>
      <Head>
        <title>Severless_Team</title>
        <meta
          name="description"
          content="We help to navigate the cloud industry and recommend the best cloud-based solutions for your infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Hero />
        <Benefits />
      </>
    </>
  );
}
