function Events() {

    function formatDate (string) {
        var options = {month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    const eventsData = [
        {
            title: "Gragas Panzón",
            image: "https://static1-es.millenium.gg/articles/2/34/01/2/@/157793-kda-gragas-article_cover_bd-1.jpg",
            date: "2018-05-18T04:00:00.000Z",
            time: "120",
        },
        {
            title: "Convencion de Otakus y personas sin oficio",
            image: "https://ichef.bbci.co.uk/news/624/mcs/media/images/81966000/jpg/_81966848_otakuchracters.jpg",
            date: "24/07/2024",
            time: "120",
        }
    ]
    return(
        <div className="flex flex-row w-screen h-24 font-rubik">
            {eventsData.map((data) => {
                return (
                    <section className="transition duration-400 shadow-lg ml-2 mr-2 rounded-sm flex flex-col p-2 h-fit w-96 bg-gray-200 hover:shadow-blue-200">
                        <img src={data.image}/>
                        <b>{data.title}</b>
                        <h2>{formatDate(data.date)}</h2>
                        <h2>{data.time} min</h2>
                    </section>
                )
            })}
        </div>
    )
}

export default Events