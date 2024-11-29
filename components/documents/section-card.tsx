import { useState } from "react";
import SectionCardFooter from "./section-card-footer";
import VideoCard from "./video-card";

type Props = {
  title: string;
  url: string;
  id: string;
}

const SectionCard = ({ title, url, id }: Props) => {
  const [more,setMore] = useState(false)
  return (
    <section className="space-y-2 font-sans">
      <h2 className="text-xl capitalize">{title}</h2>
      <p className="font-light text-sm dark:text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quasi
        modi dolore commodi quisquam. Ea! {!more && <span className="text-blue-500 cursor-pointer" onClick={()=>setMore(true)}>Show more</span>}
      </p>
      {more && <p className="font-light text-sm dark:text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque optio iusto nostrum. Quibusdam voluptates in assumenda quos libero eveniet? <span className="text-blue-500 cursor-pointer" onClick={()=>setMore(false)}>Show less</span></p>}
      <VideoCard url={url}/>
      <SectionCardFooter videoId={id}/>
    </section>
  );
};

export default SectionCard;
