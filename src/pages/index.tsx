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
          backgroundImage="/200logo.png"
          subtitle="Subtitle"
          buttonLink=""
          buttonText="Button"
          title={'Title'}
        />
        <TagLine tagLine="Elevating your entrance management" />
        <Introduction />
      </div>
    </Main>
  );
};

export default Index;
