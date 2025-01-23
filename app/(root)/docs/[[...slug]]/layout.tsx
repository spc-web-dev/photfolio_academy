import DocsLeftSidebar from "@/components/documents/docs-left-sidebar";
import DocsRightSidebar from "@/components/documents/docs-right-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";



type Props = {
  children: React.ReactNode;
  params: Promise<{
    slug: string[];
  }>
};
export default function Layout({ children, params }: Props) {
  return (
    <div className="flex gap-2">
      <DocsLeftSidebar />
      <ScrollArea className="w-full max-h-[calc(100vh_-_100px)] h-[calc(100vh_-_100px)]">
        {children}
      </ScrollArea>
      <DocsRightSidebar params={params}/>
    </div>
  );
}
