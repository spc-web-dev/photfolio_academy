"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { motion } from "motion/react";

function HomeAbout() {
  return (
    <div className="max-w-[85%] space-y-4">
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <small>Hi, my name is</small>
        <h1 className="text-3xl font-bold">LA RESSANN</h1>
      </motion.div>
      <div className="space-y-4">
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          I am a dedicated <span className="text-blue-500">Web Developer</span>{" "}
          and <span className="text-blue-500">Network Engineer</span> with
          expertise in creating responsive web applications and managing secure,
          high-performance networks. I excel at bridging the gap between
          software and infrastructure, delivering seamless digital experiences
          and reliable connectivity.
        </motion.p>
        <Accordion type="single" collapsible className="">
          <AccordionItem value="kh">
            <AccordionTrigger>Translate</AccordionTrigger>
            <AccordionContent>
              ខ្ញុំជាអ្នកអភិវឌ្ឍន៍គេហទំព័រ
              និងវិស្វករបណ្តាញដែលមានជំនាញក្នុងការបង្កើតកម្មវិធីគេហទំព័រដែលឆ្លើយតប
              និងការគ្រប់គ្រងបណ្តាញប្រកបដោយសុវត្ថិភាព និងមានប្រសិទ្ធភាពខ្ពស់។
              ខ្ញុំពូកែក្នុងការភ្ជាប់គម្លាតរវាងផ្នែកទន់ និងហេដ្ឋារចនាសម្ព័ន្ធ
              ដោយផ្តល់នូវបទពិសោធន៍ឌីជីថល
              និងការតភ្ជាប់ដែលអាចទុកចិត្តបាន។
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileInView={{
          transition: {
            delay: 0.5,
            duration: 1,
            type: "spring",
          },
        }}
      >
        <Button asChild variant={"outline"}>
          <a href="/cv.pdf" download>
            Get my cv
          </a>
        </Button>
      </motion.div>
    </div>
  );
}

export default HomeAbout;
