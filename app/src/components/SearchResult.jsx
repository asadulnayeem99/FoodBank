import { BASE_URL } from "../App";
import {
  Button,
  FoodCard,
  FoodCardContainer,
  FoodCards,
  MainContainer,
} from "./styled/Style";

const SearchResult = ({ data }) => {
  return (
    <>
      <FoodCardContainer>
        <MainContainer>
          <FoodCards>
            {data?.map((food) => (
              <FoodCard key={food.name}>
                <div className="food-image">
                  <img src={BASE_URL + food.image} alt="" />
                </div>

                <div className="food_info">
                  <div className="info">
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                  </div>
                  <Button>${food.price.toFixed(2)}</Button>
                </div>
              </FoodCard>
            ))}
          </FoodCards>
        </MainContainer>
      </FoodCardContainer>
    </>
  );
};

export default SearchResult;
