import Hero from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { TagLine } from '@/components/TagLine';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div>
        <Hero
          backgroundImage="/cf4.png"
          subtitle="The EntranceElite Way"
          buttonLink=""
          buttonText="Get Door Service Now"
          title={`Revolutionizing Entrance Management`}
        />
        <TagLine tagLine="Elevating your entrance management" />
        <Introduction />
      </div>
    </Main>
  );
};

export default Index;
