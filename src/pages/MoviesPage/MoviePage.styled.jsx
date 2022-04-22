import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  font-size: 18px;
  border-radius: 4px;
  border: 2px solid #2a363b;
`;
export const Button = styled.button`
  text-decoration: none;
  text-transform: uppercase;
  border: 2px solid #ff6b08;
  background-color: #ff6b08;
  padding: 8px;
  border-radius: 5px;
  color: #fff;
  :not(:last-child) {
    margin-right: 30px;
  }
  :hover {
    background-color: #fff;
    color: #ff6b08;
    transition: all 1s linear 0s;
  }
`;
export const ContainerDiv = styled.div`
  padding: 0px 30px;
  margin: 0px auto;
`;

export const ListUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
  margin: 0px auto;
  padding: 15px 20px 0px;
  list-style: none;
`;

export const ListItemLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  :hover {
    cursor: pointer;
    transform: scale(1.03) translateY(-3px);
    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
  }
`;

export const ItemLink = styled(Link)`
  text-decoration: none;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 355px;
  border-radius: 5px;
  object-fit: cover;
`;

export const ItemInfoDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ItemTitleH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2a363b;
  text-decoration: none;
  margin-left: 10px;
`;

export const ItemRateSpan = styled.span`
  padding: 0 10px;
  margin-left: 10px;
  margin-right: 10px;

  background-color: #ff6b08;
  color: #fff;
  border-radius: 5px;
`;
