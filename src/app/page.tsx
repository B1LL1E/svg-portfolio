import { Hero } from "./hero";
//strona glowna
export default function Home() {
  const projects = [
    {id: 1, title: "Besties"},
    {id: 2, title: "przyklad nr 2"},
    {id: 3, title: "nie wiem nr 3"}
  ]
  return (
    // <main> to standardowy kontener dla głównej treści
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Hero/>
      {/** projekty */}
      <h1 className="mb-12 text-4xl font-bold text-white tracking-tight">Wybrane projekty</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto ">
        {projects.map((project) => (
          <div key={project.id} // usunełem ze wzgledu na wyskakujacy zolty napis title={project.title}
          className="
          group relative aspect-video bg-neutral-900 border
        border-neutral-800 flex items-center justify-center
          cursor-pointer overflow-hidden transition-all hover:border-white/50">
            <h2 className="opacity-80 group-hover:opacity-100">{project.title}</h2>
          </div>
        ))}
      </div>

    </main>
  );
}