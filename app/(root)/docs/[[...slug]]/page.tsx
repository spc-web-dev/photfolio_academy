import DocsPage from "@/components/documents/docs-page";
import SectionContainer from "@/components/documents/section-container";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

async function Page({ params }: Props) {
  const { slug } = await params;
  if (!slug)
    return (
      <>
        <DocsPage />
      </>
    );
  if (slug && slug[0] === "programming") {
    return <div>web developer here.</div>;
  }
  if (slug && slug[0] === "networking") {
    return (
      <>
        <SectionContainer id={slug[1]} />
      </>
    );
  }
}

export default Page;
