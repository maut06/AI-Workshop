export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className="hero">
        <h1>Mau Tsujimura</h1>
        <p>a junior at UH Manoa studying computer science</p>
      </section>

      <section className="about">
        <p>
          Mau Tsujimura is a junior at UH Manoa studying computer science. He
          enjoys building things and learning by doing, picking up new tools
          and ideas through hands-on projects rather than just reading about
          them. He&apos;s always looking for the next project to dig into.
        </p>
      </section>

      <section className="semester">
        <h2>This semester</h2>
        {/*
          Placeholder items below — Mau will swap these out for his real
          coursework, project, and skill once he decides what to feature.
        */}
        <ul>
          <li>Taking Data Structures and Algorithms</li>
          <li>Working on a personal web app side project</li>
          <li>Learning more about backend development and databases</li>
        </ul>
      </section>

      <footer>
        <strong>Mau Tsujimura</strong> &middot; {year}
      </footer>
    </main>
  );
}
