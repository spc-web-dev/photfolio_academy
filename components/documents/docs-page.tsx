import { Separator } from "../ui/separator"
import DocsSubTitle from "./docs-sub-title"


function DocsPage() {
  return (
    <div className="text-sm pb-10">
        <section className="space-y-4">
            <h1 className="text-2xl font-semibold">Introduction</h1>
            <p className="text-sm">Welcome to the learning class documents!</p>
        </section>
        <Separator className="my-10" />
        <section className="space-y-4">
            <DocsSubTitle title="What're we gonna learn?"/>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore eveniet nobis quibusdam dolorem placeat, inventore totam numquam eum, quasi laudantium excepturi pariatur laboriosam aspernatur enim ipsum similique ab delectus!</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est mollitia et voluptate nostrum sint.</p>
        </section>
        <Separator className="my-10" />
        <section className="space-y-4">
            <DocsSubTitle title="Main Features"/>
            <p className="text-sm">Some of the main features include.</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa corrupti voluptas, earum iure aut modi consectetur quod iusto ullam architecto. Itaque labore dolore earum vel sequi voluptate fuga perspiciatis.</p>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsa corrupti voluptas, earum iure aut modi consectetur quod iusto ullam architecto. Itaque labore dolore earum vel sequi voluptate fuga perspiciatis.</p>
        </section>
        <Separator className="my-10" />
        <section className="space-y-4">
            <DocsSubTitle title="How to pratice if we don't have the real device?"/>
            <p className="text-sm">Mikrotik Router, check out the <span className="text-blue-500 cursor-pointer hover:text-blue-400">Installation</span> guide.</p>
            <p className="text-sm">Huawei Switch, check out the <span className="text-blue-500 cursor-pointer hover:text-blue-400">Installation</span> guide.</p>
        </section>
        <Separator className="my-10" />
        
        <section className="space-y-4">
            <DocsSubTitle title="Join our"/>
            <p className="text-sm">If you have questions about anything, you're always welcome to ask our on <span className="text-blue-500 cursor-pointer hover:text-blue-400">Telegram</span>.</p>
            <p className="text-sm">You can support our by: <span className="text-blue-500 cursor-pointer hover:text-blue-400">ABA,</span> <span className="text-blue-500 cursor-pointer hover:text-blue-400">ACLEDA</span></p>
        </section>
    </div>
  )
}

export default DocsPage