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

  if (!slug || slug.length === 0) {
    return <DocsPage />;
  }

  switch (slug[0]) {
    case "programming":
      return <ProgrammingContainer />;
    case "networking":
      return <SectionContainer id={slug[1]} />;
    default:
      return <DocsPage />;
  }
}

export default Page;
