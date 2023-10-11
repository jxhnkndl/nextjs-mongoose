import Image from 'next/image';
import Concert from './components/Concert';
import Form from './components/Form';

async function fetchConcerts() {
  try {
    const res = await fetch(
      `${
        'https://nextjs-mongoose-eight.vercel.app/api/concerts' ||
        process.env.BASE_URL
      }/api/concerts`,
      {
        // This helps refresh page to load new dynamically created data
        next: {
          // Number of secons to wait until fresh data is fetched
          revalidate: 60,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const concerts = await fetchConcerts();
  console.log(concerts);

  return (
    <>
      <header>
        <h1 className="heading">The Bigger Lights</h1>
        <h2 className="subheading">Upcoming Tour Dates</h2>
      </header>
      <main>
        <Form />
        {concerts.data.map((concert) => (
          <Concert key={concert._id} concert={concert} />
        ))}
      </main>
    </>
  );
}
