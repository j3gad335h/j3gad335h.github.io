import Header from "./header";

export default function ProjcetLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="bg-site bg-no-repeat bg-cover h-screen overflow-auto">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      {children}
    </section>
  );
}
