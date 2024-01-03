import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className=" flex-shrink-0 relative w-48 h-60 rounded-[30px] bg-zinc-900/90 text-white px-6 py-6 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight font-semibold py-5">{data.desc}</p>
      <div className="footer absolute w-full left-0  ">
        <div className="flex items-center justify-between  px-8 py-5">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ">
            {data.close ? (
              <IoCloseOutline />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        <div>
          {" "}
          {data.tag.isOpen ? (
            <div
              className={`tag w-full p-2 ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className="text-md ">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
