"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Myavatar = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.2,
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <div className="relative w-[95%] h-[85%] overflow-hidden rounded-3xl">
        <Image
          src={"/images/avatar.jpg"}
          alt="avarta"
          width={800}
          height={800}
          className=" absolute object-cover w-full h-full"
          priority
          quality={95}
        />
      </div>
    </motion.div>
  );
};

export default Myavatar;
