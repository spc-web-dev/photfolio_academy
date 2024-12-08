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
    >
      <span className="relative w-[95%] h-[85%] overflow-hidden rounded-3xl">
        <Image
          src={"/images/avatar.jpg"}
          alt="avarta"
          width={800}
          height={800}
          className=" absolute object-cover w-full h-full"
          priority
          quality={95}
        />
      </span>
    </motion.div>
  );
};

export default Myavatar;
