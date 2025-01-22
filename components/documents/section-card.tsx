import { useState } from "react";
import SectionCardFooter from "./section-card-footer";
import VideoCard from "./video-card";
import type { VideoType } from "@/lib/type";


const SectionCard = ({ props }: { props: VideoType}) => {
  const [more,setMore] = useState(false)
  return (
    <section className="space-y-2 font-sans">
      <h2 className="text-xl capitalize">{props.titleEn}</h2>
      <p className="font-light text-sm dark:text-slate-400">
        {props.descriptionsEn} {(!more && props.descriptionsKh && props.descriptionsEn)&& <span className="text-blue-500 cursor-pointer" onClick={()=>setMore(true)}>Show more</span>}
      </p>
      {(more && props.descriptionsKh )&& <p className="font-light text-sm dark:text-slate-400">{props.descriptionsKh}<span className="text-blue-500 cursor-pointer" onClick={()=>setMore(false)}>Show less</span></p>}
      <VideoCard url={props.url}/>
      <SectionCardFooter videoId={props.id as string}/>
    </section>
  );
};

export default SectionCard;
