import SectionCardFooter from "./section-card-footer";
import VideoCard from "./video-card";

type Props = {
  title: string;
  url: string;
}

const SectionCard = ({ title, url }: Props) => {
  return (
    <section className="space-y-2 font-sans">
      <h2 className="text-xl capitalize">{title}</h2>
      <p className="font-light text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quasi
        modi dolore commodi quisquam. Ea!
      </p>
      <VideoCard url={url}/>
      <SectionCardFooter />
    </section>
  );
};

export default SectionCard;
