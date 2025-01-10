//components
import MyFavList from "../components/travels/MyFavList.jsx";
import MyTravelsList from "../components/travels/MyTravelsList.jsx";

//hooks
import { Link } from "react-router-dom";

//css
import "./MyTravelsPage.css";

function MyTravelsPage({ travels, setTravels, favorites, addFavorite }) {
  return (
    <>
      <div className="title-container">
        <h2>My trips</h2>
      </div>

      <section className="fav-list">
        <div className="carousel" >
          <MyFavList
            travels={travels}
            favorites={favorites}
            addFavorite={addFavorite}
          />
        </div>
      </section>


      <section className="my-trips-list">
      <div className="create-trip-card">
        <Link to="/add-trip">+</Link>
        </div>
        <div className="carousel">
        <MyTravelsList travels={travels} setTravels={setTravels} />
        </div>
      </section>
    </>
  );
}

export default MyTravelsPage;
