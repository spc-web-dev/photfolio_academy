import Navbar from "@/components/header/navbar";
import StoreProvider from "@/components/store-provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <main className={`w-full flex justify-center`}>
        <div className={`max-w-7xl xl:w-[80rem] lg:w-[90%] w-full`}>
          <Navbar />
          <div className="p-4">{children}</div>
        </div>
      </main>
    </StoreProvider>
  );
}
