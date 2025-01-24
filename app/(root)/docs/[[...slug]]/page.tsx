import DocsPage from "@/components/documents/docs-page";
import ProgrammingContainer from "@/components/documents/programming/programming-container";
import SectionContainer from "@/components/documents/section-container";
import { getSkillsByType } from "@/lib/action/action-skills";
import { SkillType } from "@/lib/type";
import { notFound } from "next/navigation";



type Props = {
  params: Promise<{
    slug: string[];
  }>;
};
export async function generateStaticParams() {
  const { data, success } = await getSkillsByType('networking');

  if(!success && !data) {
    return [
      { slug: ["programming",'web_dev'] },
    ];
  }
  const networkingParams =(data as SkillType[]).map((skill: SkillType) => ({
    slug: ["networking", skill.id as string],
  }));

  return [
    { slug: ["programming",'web_dev'] },
    ...networkingParams,
  ];
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return {
      title: "Documentation",
      description: "Welcome to the documentation page.",
    };
  }

  switch (slug[0]) {
    case "programming":
      return {
        title: "Programming Documentation",
        description: "Learn about various programming topics.",
      };
    case "networking":
      return {
        title: `Networking: ${slug[1]}`,
        description: `Detailed information about networking topic: ${slug[1]}.`,
      };
    default:
      return {
        title: "Documentation",
        description: "Welcome to the documentation page.",
      };
  }
}
async function Page({ params }: Props) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    return <DocsPage />;
  }
  
  switch (slug[0]) {
    case "programming":
      return <ProgrammingContainer />;
    case "networking":
      const { data, success } = await getSkillsByType('networking');
      if(success && data) {
        const isValideSlug = (data as SkillType[]).some((skill: SkillType) => (skill.id === slug[1].toString()));
        console.log(slug[1])
        console.log(isValideSlug)
        if(!isValideSlug) {
          return notFound();
        }
      return <SectionContainer id={slug[1]} />;
      }
    default:
      return <DocsPage />;
  }
}

export default Page;
