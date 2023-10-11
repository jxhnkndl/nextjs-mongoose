import Image from 'next/image';
import Concert from './components/Concert';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="heading">The Bigger Lights</h1>
        <h2 className="subheading">Upcoming Tour Dates</h2>
      </header>
      <main>
        <Concert />
        <Concert />
        <Concert />
      </main>
    </>
  );
}
