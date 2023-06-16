import { Link } from "react-router-dom";
export default function Event({ item }) {
  
    const parseDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date)
    }

  return (
    <div >
      <Link to={`/view/${item.id}`} >
        <img src={item.cover} width="200" />
        <section className="transition duration-400 shadow-lg rounded-sm flex flex-col p-2 h-80 w-80 bg-gray-100 hover:cursor-pointer hover:bg-blue-200">
                        <img src={item.image} className="rounded-lg aspect-video"/>
                        <b className="mt-3">{item.title}</b>
                        <h2 className="text-orange-700">{parseDate(item.date)}</h2>
                        <h2 className="text-gray-600">{item.time} min</h2>
        </section>
      </Link>
    </div>
  );
}
