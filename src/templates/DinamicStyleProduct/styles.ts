import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    width: 100%;
    gap: 2rem;
    margin-bottom: 20rem;
  }
`;

export const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const Value = styled.h3`
  font-size: 3rem;
  font-weight: 500;
`;

export const WrapperInformation = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const ImageStyle = styled(Image)`
  width: 40rem;
  height: 50rem;
  object-fit: cover;
  border-radius: 0.6rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
