import AboutUs from '@/components/layouts/about-us';
import Footer from '@/components/layouts/footer';
import HeroSection from '@/components/layouts/hero-section';
import OurGames from '@/components/layouts/our-games';
import Partner from '@/components/layouts/partner';
import { getDictionary } from '@/dictionaries';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className=''>
      <HeroSection dict={dict.hero} />
      <AboutUs dict={dict.about_us} />
      <OurGames dict={dict.games} />
      <Partner dict={dict.partners} />
      <Footer dict={dict.footer} />
    </main>
  );
}
