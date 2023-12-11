import { seo } from "@/content/content";
import Layout from "@/layout/layout";
import About from "@/sections/about";
import Apply from "@/sections/apply";
import Brand from "@/sections/brand";
import Competitions from "@/sections/competitions";
import Faq from "@/sections/faq";
import HelpYou from "@/sections/helpyou";
import Hero from "@/sections/hero";
import Library from "@/sections/library";
import Spotlight from "@/sections/spotlight";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='title' content={seo.title} />
        <meta name="description" content={seo.desc} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta property='og:title' content={seo.title} />
        <meta property="og:type" content={seo.type} />
        <meta property="og:image" content={seo.photoPreview} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Hero />
        <Spotlight />
        <Brand />
        <HelpYou />
        <Competitions />
        <About />
        <Library />
        <Apply />
        <Faq />
      </Layout>
    </>
  )
}