import React from 'react';

type TagLineProps = {
  tagLine: string;
};

const TagLine = (props: TagLineProps) => (
  <div className="py-5 text-center text-3xl font-bold text-blue-500">
    {props.tagLine}
  </div>
);

export { TagLine };
