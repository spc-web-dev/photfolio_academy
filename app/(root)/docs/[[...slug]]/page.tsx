import DocsPage from "@/components/documents/docs-page";
import ProgrammingContainer from "@/components/documents/programming/programming-container";
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
    return (
      <>
        <ProgrammingContainer />
      </>
    );
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
