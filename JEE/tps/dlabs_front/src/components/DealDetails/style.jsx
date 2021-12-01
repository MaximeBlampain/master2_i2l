import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
  background-color: #DEDEDE;

  display: flex;
  flex-direction: column;
`

export const CardContainer = styled.div`
  height: 800px;
  width: 100%;

  padding: 1rem;
  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;
  align-items: center;


  #promo_code {
    height: 50px;
    width: 100%;
    margin-top: 1rem;
    border: 2px dashed #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
  }

  #discount {
    margin-top: 1rem;
    height: 50px;
    width: 100%;
    border: 1px solid #707070;
    box-shadow: 3px 3px 5px #70707070;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;

    #oldPrice {
      font-style: italic;
      text-decoration: line-through;
      margin-right: 10px;
    }

    #newPrice {
      font-weight: 600;
      margin-right: 10px;
    }
  }

  #description {
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    border: 1px solid #707070;
    box-shadow: 3px 3px 5px #70707070;
    display: flex;
    justify-content: center;
    span {
      padding: 1rem;
      font-size: 1.1rem;
    }
  }
`