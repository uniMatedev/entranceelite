import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

const HeaderLogo = () => (
  <div className="flex flex-wrap items-center text-xl ">
    <Image src="/logo.svg" alt={AppConfig.title} width={50} height={50} />
    <h1 className="text-center text-3xl font-bold text-blue-500  ">Entrance</h1>
    <h1 className="text-center text-3xl font-bold text-green-500  ">Elite</h1>
  </div>
);

export { HeaderLogo };
