
import CarCard from "@/components/CarCard/CarCard";
import CustomFilter from "@/components/CustomFilter/CustomFilter";
import Header from "@/components/Header/Header";
import SearchBar from "@/components/SearchBar/SearchBar";
import SearchManuFacturer from "@/components/SearchManufacturer/SearchManuFacturer";
import axiosCars from "@/utils";



export default async function Home() {
  const allCars = await axiosCars();
const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || allCars;
  // console.log('allcars', allCars);
  
  return (
    <>
    <main className="overflow-hidden">
      <Header/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore the cars you night like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <SearchManuFacturer title="year" />
          </div>
        </div>
      {isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">{allCars?.map((car) =>(<CarCard 
          car={car}
          ></CarCard> ))}</div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">on result</h2>
          <p>{allCars?.message}</p>
        </div>
      )}
      </div>
    </main></>
  )
}
