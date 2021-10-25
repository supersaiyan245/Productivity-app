


function Errand() {
  const [errand, setErrand] = useState('');
  const errandUrl = ('');
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(apiUrl);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);
}