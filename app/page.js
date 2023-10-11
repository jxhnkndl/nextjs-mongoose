import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <h1 className="heading">The Bigger Lights</h1>
        <h2 className="subheading">Upcoming Tour Dates</h2>
      </header>
      <main>
        <div className="concert">
          <div className="date">
            <p>October 10</p>
          </div>
          <div className="location">
            <p>The National</p>
            <p>Richmond, VA</p>
          </div>
          <div className="time">
            <p>Doors @ 6:00 PM</p>
            <p>Show @ 7:00 PM</p>
          </div>
        </div>
        <div className="concert">
          <div className="date">
            <p>October 10</p>
          </div>
          <div className="location">
            <p>The National</p>
            <p>Richmond, VA</p>
          </div>
          <div className="time">
            <p>Doors @ 6:00 PM</p>
            <p>Show @ 7:00 PM</p>
          </div>
        </div>
        <div className="concert">
          <div className="date">
            <p>October 10</p>
          </div>
          <div className="location">
            <p>The National</p>
            <p>Richmond, VA</p>
          </div>
          <div className="time">
            <p>Doors @ 6:00 PM</p>
            <p>Show @ 7:00 PM</p>
          </div>
        </div>
      </main>
    </>
  );
}
