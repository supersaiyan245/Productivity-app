


function Fun() {
  const [fun, setFun] = useState('');
  const funUrl = ('')
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(url);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);
}