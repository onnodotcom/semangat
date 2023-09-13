import ZTopLeftBar from "@/components/ZTopLeftBar";

export default function InApp({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ZTopLeftBar />
      <div className="text-gray-900 p-4 bg-gray-100 h-screen overflow-auto">
        <div className="mt-10 mb-3">{children}</div>
      </div>
    </section>
  );
}
