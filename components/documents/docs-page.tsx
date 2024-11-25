
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
          Web Developer and  Junior Network Engineer.
        </p>
        <p className="text-sm">
        As a web developer, I have expertise in both frontend and backend technologies. My proficiency includes foundational web technologies like HTML and CSS, along with advanced styling using Tailwind CSS. I am skilled in JavaScript and modern frameworks like React.js and Next.js, which enable me to create dynamic, user-friendly web applications. On the backend, I specialize in Node.js and Express.js for server-side development, and I possess robust database management skills in MongoDB, MySQL, and PostgreSQL. My comprehensive skill set allows me to develop full-stack applications that combine seamless functionality with elegant design.
        </p>
        <p>
        In addition to web development, I have strong expertise in networking and security systems. I am experienced in configuring and managing devices such as MikroTik routers, Huawei switches, TP-Link routers, and access points. I excel in designing and maintaining efficient, reliable, and secure network infrastructures. My knowledge also extends to CCTV systems, where I ensure seamless integration and optimal performance for video surveillance. Whether it's setting up advanced routing protocols, optimizing switch performance, or troubleshooting connectivity issues, I bring a combination of technical expertise and problem-solving skills to deliver effective solutions tailored to diverse environments.
        </p>
      </section>
      <Separator className="my-10" />
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
      </section>
      <Separator className="my-10" />
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
          If you have questions about anything, you're always welcome to ask our
          on{" "}
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
