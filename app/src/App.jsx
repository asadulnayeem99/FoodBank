import { useEffect, useState } from "react";
import SearchResult from "./components/SearchResult";
import {
  Button,
  FilterContainer,
  GlobalStyle,
  MainContainer,
  TopContainer,
} from "./components/styled/Style";
export const BASE_URL = "http://localhost:9000";
const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState();
  const [selectedBtn, setSelectBtn] = useState("all");

  useEffect(() => {
    const FetchFoodData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const da = await res.json();
        setData(da);
        console.log(data);
        setFilter(da);
      } catch (e) {
        setError("Error");
      }
    };
    FetchFoodData();
  }, []);

  const SearchFood = (e) => {
    const svalue = e.target.value;

    if (svalue === "") {
      setFilter(null);
    }
    const filterData = data?.filter((food) =>
      food.name.toLowerCase().includes(svalue.toLowerCase())
    );
    setFilter(filterData);
  };

  const filterDataFood = (type) => {
    if (type === "all") {
      setFilter(data);
      setSelectBtn("all");
      return;
    }
    const filteredData = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilter(filteredData);
    setSelectBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading........</div>;

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <TopContainer>
          <div className="log">
            <img src="/logo.svg" alt="logo" />
          </div>

          <div className="search">
            <input
              onChange={SearchFood}
              type="text"
              name=""
              placeholder="Search..."
              id=""
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              key={value.name}
              isSelected={selectedBtn === value.type}
              onClick={() => filterDataFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </MainContainer>
      <SearchResult data={filter} />
    </>
  );
};

export default App;
