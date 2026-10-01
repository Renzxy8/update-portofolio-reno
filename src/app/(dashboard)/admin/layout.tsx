export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <main className="mx-auto min-h-screen max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        {children}
      </main>
    </div>
  );
}