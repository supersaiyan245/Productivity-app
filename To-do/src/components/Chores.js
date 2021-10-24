

function Chore({ chores }) {
  const choreName = chores.find(identifyChore => identifyChore.fields.chore)
  return (
    <div>
      <input type="checkbox" id="chore" name="assignedChore" />
      <label for="chore">{choreName}</label>
    </div>
  )
}

export default Chore;