import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Introduction = () => (
  <div className=" text-left ">
    <h2 className="text-xl font-bold">Welcome to {AppConfig.title}</h2>
    <p className="text-base font-medium text-gray-700">
      We are a leading provider of premium entrance management solutions,
      offering a range of services to enhance the flow of people, goods, and
      vehicles in and out of your facilities. Our focus on innovation and
      customer satisfaction sets us apart from the competition.
    </p>
    <p className="text-base font-medium text-gray-700">
      Our team of experts is certified by AAADM, and we specialize in providing
      automatic door systems, metal and glass door repair and installation, and
      commercial hardware repair and installation. We also offer automatic
      handicap swing doors to meet the needs of those with disabilities.
    </p>
  </div>
);
export { Introduction };
