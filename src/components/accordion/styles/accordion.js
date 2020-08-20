import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 50px;
  flex-direction: column;
  max-width: 800px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 4em;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  transition: 0.25s cubic-bezier(0.5 0 0.1 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background-color: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 23px;
  }
`;