import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";
import DocsSubTitle from "./docs-sub-title";

function DocsPage() {
  return (
    <div className="text-sm pb-10">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Introduction</h1>
        <p className="text-sm">Welcome to my Photfolio!</p>
      </section>
      <Separator className="my-10" />
      <section className="space-y-4">
        <DocsSubTitle title="Who am i?" />
        <p className="text-sm">
          My name is <span className="text-blue-500">LA RESSANN</span>, I am a
          Web Developer and Junior Network Engineer.
        </p>
        <p className="text-sm">
          As a web developer, I have expertise in both frontend and backend
          technologies. My proficiency includes foundational web technologies
          like HTML and CSS, along with advanced styling using Tailwind CSS. I
          am skilled in JavaScript and modern frameworks like React.js and
          Next.js, which enable me to create dynamic, user-friendly web
          applications. On the backend, I specialize in Node.js and Express.js
          for server-side development, and I possess robust database management
          skills in MongoDB, MySQL, and PostgreSQL. My comprehensive skill set
          allows me to develop full-stack applications that combine seamless
          functionality with elegant design.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="kh">
            <AccordionTrigger>Translate</AccordionTrigger>
            <AccordionContent>
              ក្នុងនាមជាអ្នកបង្កើតគេហទំព័រ ខ្ញុំមានជំនាញទាំងផ្នែកខាងមុខ
              និងផ្នែកខាងក្រោយនៃបច្ចេកវិទ្យា។
              ជំនាញរបស់ខ្ញុំរួមបញ្ចូលបច្ចេកវិទ្យាគេហទំព័រជាមូលដ្ឋានដូចជា HTML
              និង CSS រួមជាមួយនឹងរចនាប័ទ្មកម្រិតខ្ពស់ដោយប្រើ Tailwind CSS ។
              ខ្ញុំមានជំនាញក្នុង JavaScript និងក្របខ័ណ្ឌទំនើបដូចជា React.js និង
              Next.js ដែលអាចឱ្យខ្ញុំបង្កើតកម្មវិធីគេហទំព័រដែលងាយស្រួលប្រើ
              និងសកម្ម។ នៅលើផ្នែកខាងក្រោយ ខ្ញុំមានជំនាញក្នុង Node.js និង
              Express.js សម្រាប់ការអភិវឌ្ឍន៍ផ្នែកខាងម៉ាស៊ីនមេ
              ហើយខ្ញុំមានជំនាញគ្រប់គ្រងមូលដ្ឋានទិន្នន័យដ៏រឹងមាំនៅក្នុង MongoDB,
              MySQL និង PostgreSQL ។
              សំណុំជំនាញដ៏ទូលំទូលាយរបស់ខ្ញុំអនុញ្ញាតឱ្យខ្ញុំបង្កើតកម្មវិធីជង់ពេញលេញដែលរួមបញ្ចូលគ្នានូវមុខងារគ្មានថ្នេរជាមួយនឹងការរចនាឆើតឆាយ។
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p>
          In addition to web development, I have strong expertise in networking
          and security systems. I am experienced in configuring and managing
          devices such as MikroTik routers, Huawei switches, TP-Link routers,
          and access points. I excel in designing and maintaining efficient,
          reliable, and secure network infrastructures. My knowledge also
          extends to CCTV systems, where I ensure seamless integration and
          optimal performance for video surveillance. Whether it&apos;s setting
          up advanced routing protocols, optimizing switch performance, or
          troubleshooting connectivity issues, I bring a combination of
          technical expertise and problem-solving skills to deliver effective
          solutions tailored to diverse environments.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="kh">
            <AccordionTrigger>Translate</AccordionTrigger>
            <AccordionContent>
              បន្ថែមពីលើការអភិវឌ្ឍន៍គេហទំព័រ
              ខ្ញុំមានជំនាញខ្លាំងក្នុងការភ្ជាប់បណ្តាញ និងប្រព័ន្ធសុវត្ថិភាព។
              ខ្ញុំមានបទពិសោធន៍ក្នុងការកំណត់រចនាសម្ព័ន្ធ និងការគ្រប់គ្រង
              ឧបករណ៍ដូចជា រ៉ោតទ័រ MikroTik, កុងតាក់ Huawei, រ៉ោតទ័រ TP-Link,
              និងចំណុចចូលដំណើរការ។ ខ្ញុំពូកែខាងរចនា និងរក្សាប្រសិទ្ធភាព
              ហេដ្ឋារចនាសម្ព័ន្ធបណ្តាញដែលអាចទុកចិត្តបាន និងសុវត្ថិភាព។
              ចំណេះដឹងរបស់ខ្ញុំផងដែរ។ ពង្រីកដល់ប្រព័ន្ធ CCTV
              ដែលខ្ញុំធានាបាននូវការរួមបញ្ចូលយ៉ាងរលូន និង
              ដំណើរការល្អបំផុតសម្រាប់ការតាមដានវីដេអូ។ ថាតើវាជាការកំណត់
              ដំឡើងពិធីការនាំផ្លូវកម្រិតខ្ពស់ បង្កើនប្រសិទ្ធភាពដំណើរការប្តូរ ឬ
              ការដោះស្រាយបញ្ហាការតភ្ជាប់, ខ្ញុំនាំមកនូវការរួមបញ្ចូលគ្នានៃ
              ជំនាញបច្ចេកទេស និងជំនាញដោះស្រាយបញ្ហា ដើម្បីផ្តល់ប្រសិទ្ធភាព
              ដំណោះស្រាយសមស្របទៅនឹងបរិស្ថានចម្រុះ។
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <div className="my-10" />
      <section className="space-y-4">
        <DocsSubTitle title="Main Features" />
        <p className="text-sm">Some of the main features include.</p>
        <p className="text-sm">
          Explore all the programming projects I have completed, along with
          their source code, which is available in my GitHub repository
        </p>
        <p className="text-sm">
          Learn more about networking, including how to configure network
          devices such as MikroTik routers.
        </p>
        <p className="text-sm">
          Access educational videos included in this portfolio to enhance your
          knowledge and skills in networking and programming.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="kh">
            <AccordionTrigger>Translate</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-sm">
                រុករកគម្រោងសរសេរកម្មវិធីទាំងអស់ដែលខ្ញុំបានបញ្ចប់
                រួមជាមួយនឹងកូដប្រភពរបស់វា ដែលមាននៅក្នុងឃ្លាំង GitHub របស់ខ្ញុំ
              </p>
              <p className="text-sm">
                ស្វែងយល់បន្ថែមអំពីការភ្ជាប់បណ្តាញ
                រួមទាំងរបៀបកំណត់រចនាសម្ព័ន្ធឧបករណ៍បណ្តាញ ដូចជារ៉ោតទ័រ MikroTik
                ជាដើម។
              </p>
              <p className="text-sm">
                ចូលប្រើវីដេអូអប់រំដែលរួមបញ្ចូលនៅក្នុងផលប័ត្រនេះ
                ដើម្បីបង្កើនចំណេះដឹង និងជំនាញរបស់អ្នកក្នុងបណ្តាញ និងកម្មវិធី។
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <div className="my-10" />
      <section className="space-y-4">
        <DocsSubTitle title="How to pratice if we don't have the real device?" />
        <p className="text-sm">
          Mikrotik Router, check out the{" "}
          <span className="text-blue-500 cursor-pointer hover:text-blue-400">
            Installation
          </span>{" "}
          guide.
        </p>
        <p className="text-sm">
          Huawei Switch, check out the{" "}
          <span className="text-blue-500 cursor-pointer hover:text-blue-400">
            Installation
          </span>{" "}
          guide.
        </p>
      </section>
      <Separator className="my-10" />

      <section className="space-y-4">
        <DocsSubTitle title="Join our" />
        <p className="text-sm">
          If you have questions about anything, you&apos;re always welcome to
          ask our on{" "}
          <span className="text-blue-500 cursor-pointer hover:text-blue-400">
            Telegram
          </span>
          .
        </p>
        <p className="text-sm">
          You can support our by:{" "}
          <span className="text-blue-500 cursor-pointer hover:text-blue-400">
            ABA,
          </span>{" "}
          <span className="text-blue-500 cursor-pointer hover:text-blue-400">
            ACLEDA
          </span>
        </p>
      </section>
    </div>
  );
}

export default DocsPage;
