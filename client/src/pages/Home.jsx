import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching data
  const fetchData = async () => {
    try {
      setLoading(true); 
      // Simulate an API call
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: ["Sample 1", "Sample 2", "Sample 3"] }), 1000)
      );
      setSamples(response.data);
    } catch (err) {
      setError("Failed to fetch samples");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {samples.map((sample) => (
          <li key={sample}>
            <Link to={`/samples/${sample}`}>{sample}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
