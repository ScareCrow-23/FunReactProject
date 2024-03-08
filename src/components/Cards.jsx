import React from "react";
import { FaFile } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <>
      <div>
        <motion.div
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.2 }}
          dragElastic={0.2  }
          className="relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900 text-white py-8 px-10 overflow-hidden"
        >
          <FaFile />
          <p className="text-xs mt-5 font-semibold">{data.desc}</p>
          <div className="footer absolute bottom-0 w-full left-0">
            <div className="flex items-center justify-between py-3 px-8 mb-3">
              <h5>{data.filesize}</h5>
              {data.close ? <IoIosCloseCircle /> : <FaDownload />}
            </div>
            {data.tag.isOpen && (
              <div
                className={`tag w-full py-4 ${
                  data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
                } flex items-center justify-center`}
              >
                <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Cards;
