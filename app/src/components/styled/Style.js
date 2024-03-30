import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }
  body{
  background-color: #323343;
  color: white;
  max-height: 100vh;
  }
`;
export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      font-size: 16px;
      padding: 0 10px;
      height: 40px;
    }
  }
  @media (0<width<600px) {
    flex-direction: column;
    height: 80px;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "#f22f2f" : "#ff4343")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;

export const FoodCardContainer = styled.section`
  background-image: url("./bg.png");
  min-height: calc(100vh - 170px);
  background-size: cover;
`;

export const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

export const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);
  border-radius: 20px;
  display: flex;
  /* flex-direction: row; */
  padding: 8px;
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
  }
  h3 {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
  }
  p {
    margin-top: 8px;
    font-size: 12px;
  }
  button {
    font-size: 12px;
  }
`;
