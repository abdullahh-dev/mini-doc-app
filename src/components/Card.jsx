import React, { useEffect } from 'react';
import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from 'framer-motion';

function Card({ data, reference }) {
  useEffect(() => {
    console.log('this is a side effect..');
  }, []);

  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.7 }}
        className="w-60 text-white flex-shrink-0 relative px-8 py-8 h-72 rounded-[36px] bg-zinc-950/40 overflow-hidden ">
        <FaRegFileAlt />
        <p className="mt-5 font-semibold text-sm leading-5">{data.desc}</p>
        <div className="w-full absolute bottom-0  left-0">
          <div className="flex justify-between mb-5 px-8 items-center">
            <h5>{data.fileSize}</h5>
            <span className=" w-6 h-6 flex bg- justify-center items-center bg-white rounded-full">
              {data.close ? (
                <IoClose size=".8rem" color="#000" />
              ) : (
                <LuDownload size=".8rem" color="#000" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`w-full h-12 ${
                data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'
              } flex justify-center items-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
