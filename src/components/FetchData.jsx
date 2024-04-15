
import DataDisplay from "./DataDisplay";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const DisplayData = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    DisplayData();
  }, []);

  return (
    <div>
      <DataDisplay data={data} />
    </div>
  );
};

export default FetchData;
