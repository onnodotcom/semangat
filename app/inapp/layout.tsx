import ZTopLeftBar from "@/components/ZTopLeftBar";

export default function InApp({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ZTopLeftBar />
      <div className="text-gray-900 p-4 bg-gray-100 h-screen">
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
