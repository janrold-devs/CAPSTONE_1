export const metadata = {
  title: "Register - Kkopi",
};

export default function RegisterLayout({ children }) {
  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {children}
    </main>
  );
}