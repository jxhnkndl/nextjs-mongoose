export default function Concert({ concert }) {
  const { date, venue, city, doors, show } = concert;
  return (
    <div className="concert">
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="location">
        <p>{venue}</p>
        <p>{city}</p>
      </div>
      <div className="time">
        <p>Doors @ {doors} PM</p>
        <p>Show @ {show} PM</p>
      </div>
    </div>
  );
}
