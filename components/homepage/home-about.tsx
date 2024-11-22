'use client'
import { Button } from "../ui/button";
import { motion } from 'motion/react'

function HomeAbout() {
  return (
    <div className="max-w-[85%] space-y-4">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale:1,
          opacity:1,
          transition: {
            type: 'spring',
            duration: 1,
          }
        }}
        viewport={{ once: true }}
      >
        <small>Hi, my name is</small>
        <h1 className="text-3xl font-bold">LA RESSNN</h1>
      </motion.div>
      <div className="space-y-4">
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay:.5,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
        I am a dedicated <span className="text-blue-500">Web Developer</span> and <span className="text-blue-500">Network Engineer</span> with expertise in creating responsive web applications and managing secure, high-performance networks. I excel at bridging the gap between software and infrastructure, delivering seamless digital experiences and reliable connectivity.
        </motion.p>
      </div>
      <motion.div
        initial={{
          opacity:0,
        }}
        animate={{
          opacity:1,
        }}
        whileInView={{
          transition:{
            delay:.5,
            duration:1,
            type: 'spring',
          }
        }}
      >
        <Button asChild variant={'outline'}>
            <a href="/cv.pdf" download>Get my cv</a>
        </Button>
      </motion.div>
    </div>
  );
}

export default HomeAbout;
