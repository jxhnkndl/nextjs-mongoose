import Image from 'next/image';
import Concert from './components/Concert';
import Form from './components/Form';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="heading">The Bigger Lights</h1>
        <h2 className="subheading">Upcoming Tour Dates</h2>
      </header>
      <main>
        <Form />
        <Concert />
        <Concert />
        <Concert />
      </main>
    </>
  );
}
