import { useEffect, useState } from 'react';
import { getLiveMatches } from '../api/football';
import BetCard from '../components/BetCard';

const Home = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLiveMatches();
      setMatches(data);
      setLoading(false);
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // تحديث كل دقيقة

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h2>المباريات المباشرة</h2>
      {loading ? (
        <p>جاري تحميل البيانات...</p>
      ) : (
        matches.map((match) => (
          <BetCard 
            key={match.fixture.id}
            match={match}
          />
        ))
      )}
    </div>
  );
};

export default Home;
