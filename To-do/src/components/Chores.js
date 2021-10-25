

function Chore({ chores }) {
  const choreName = chores.find(identifyChore => identifyChore.fields.chore)
  const [chore, setChore] = useState('');
  const choreUrl = ('')
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(url);
      setActivity(resp.data.records)

    }
    getData();
  }, [toggleFetch]);
  return (
    <div>
      <form >
        <label>Chore</label>
        <input value={chore} onChange={(e) => setChore(e.target.value)} onKeyPress={handleKeyPress} placeholder="Add a Chore"/>
      </form>
      <input type="checkbox" id="chore" name="assignedChore" />
      <label for="chore">{choreName}</label>
    </div>
  )
}

export default Chore;