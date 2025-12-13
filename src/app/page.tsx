
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
      {/** projekty */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.id} title={project.title}>
            <h1>{project.title}</h1>
          </div>
        ))}
      </div>

    </main>
  );
}