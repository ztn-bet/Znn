const API_KEY = process.env.REACT_APP_API_KEY;

export const getLiveMatches = async () => {
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?live=all`,
      {
        headers: {
          'x-apisports-key': API_KEY
        }
      }
    );
    const data = await response.json();
    return data.response || [];
  } catch (error) {
    console.error("Error fetching matches:", error);
    return [];
  }
};
