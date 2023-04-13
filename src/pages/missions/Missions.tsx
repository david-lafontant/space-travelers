const Missions = () => {
  return (
    <article className="row">
      <div className="col">
        <div className="p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">blank</th>
              </tr>
            </thead>
            <tbody>
              {/* {data?.map((mission: JSX.IntrinsicAttributes & AMission) => (
                <Mission key={mission.mission_id} {...mission} />
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  )
}

export default Missions
