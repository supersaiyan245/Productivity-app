

function GetChore({ chores }) {
  const params = useParams();
  const choreName = chores.find(chore => chore.id === params.id)
  return (
    <div>
      <input type="checkbox" id="" name="horns" />
      <label for="horns">{choreName.fields.date.chore}</label>
    </div>
  )
}

export default GetChore;