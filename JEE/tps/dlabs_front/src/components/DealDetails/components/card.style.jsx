import styled from 'styled-components'

export const Container = styled.div`
  height: 200px;
  width: 100%;
  padding: 1rem 0;
  background-color: #FFFFFF;
  
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.33fr 1fr 0.33fr;
`

export const Image = styled.img`
  height: 150px;
  margin-left: 1rem;
`
 
export const InformationsContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #cold {
    color: #2E86AB;
  }
  #hot {
    color : #F24236;
  }

  #author_shop{
    font-weight: 400;
  }
`
 
export const DateBtnContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  a {
    color: #000;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 80px;
    font-size: 1rem;
    font-weight: 600;
    border : 1px solid #707070;
    border-radius: 5px;
    box-shadow: 3px 3px 5px #70707070;
  }
`