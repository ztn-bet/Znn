import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 1rem 0;
  text-align: center;
  border-bottom: 3px solid #ffcc00;
`;

const Logo = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ZTN = styled.span`
  color: #ffcc00;
`;

const X = styled.span`
  margin: 0 15px;
  color: #aaa;
  font-weight: 300;
`;

const BZEZEL = styled.span`
  color: #00ccff;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <ZTN>ZTN_BET</ZTN>
        <X>X</X>
        <BZEZEL>BZEZEL</BZEZEL>
      </Logo>
    </HeaderContainer>
  );
};

export default Header;
