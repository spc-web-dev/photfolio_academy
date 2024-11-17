import SectionContainer from "@/components/documents/section-container";


type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

async function Page({ params }: Props) {
  const { slug } = await params;
  if (slug[1] === "web_dev") {
    return <div>web developer here.</div>;
  } else {
    return (
      <>
        <SectionContainer id={slug[1]} />
      </>
    );
  }
}

export default Page;
