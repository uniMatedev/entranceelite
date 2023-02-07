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
        <TagLine tagLine="Elevating your entrance management" />
        <Introduction />
      </div>
    </Main>
  );
};

export default Index;
