import Card from './Card';
import React, { useRef } from 'react';

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: 'This is a Card in React and I am conditional rendeing it to my DOM',
      fileSize: '.4mb',
      close: false,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      desc: 'This is a Card in React and I am conditional rendeing it to my DOM',
      fileSize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      desc: 'This is a Card in React and I am conditional rendeing it to my DOM',
      fileSize: '.9mb',
      close: false,
      tag: { isOpen: true, tagTitle: 'Upload', tagColor: 'blue' },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed px-5 py-10 top-0 left-0 z-[3] flex gap-10 flex-wrap  w-full h-screen">
      {data.map((item, index) => (
        <Card key={index} reference={ref} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
