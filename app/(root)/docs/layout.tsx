import DocsLeftSidebar from "@/components/documents/docs-left-sidebar";


type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex gap-2">
      <DocsLeftSidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}
