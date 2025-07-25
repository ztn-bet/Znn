import styled from 'styled-components';

const Card = styled.div`
  background: #2a2a2a;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
  object-fit: contain;
`;

const Score = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffcc00;
  min-width: 60px;
  text-align: center;
`;

const Time = styled.div`
  color: #aaa;
  font-size: 0.8rem;
  text-align: center;
`;

const BetCard = ({ match }) => {
  return (
    <Card>
      <Team>
        <Logo src={match.teams.home.logo} alt={match.teams.home.name} />
        <span>{match.teams.home.name}</span>
      </Team>

      <div>
        <Score>
          {match.goals.home} - {match.goals.away}
        </Score>
        <Time>الدقيقة: {match.fixture.status.elapsed || '0'}</Time>
      </div>

      <Team style={{ justifyContent: 'flex-end' }}>
        <span>{match.teams.away.name}</span>
        <Logo src={match.teams.away.logo} alt={match.teams.away.name} />
      </Team>
    </Card>
  );
};

export default BetCard;
