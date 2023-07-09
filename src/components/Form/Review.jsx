export default function Review() {
  return (
    <>
      <h2 className="text-5xl font-bold mb-16">Review</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <table className="table">
            <tr>
              <th>Feelings</th>
              <th>5</th>
            </tr>
            <tr>
              <th>Understanding</th>
              <th>5</th>
            </tr>
            <tr>
              <th>Support</th>
              <th>5</th>
            </tr>
            <tr>
              <th>Comments</th>
              <th>I feel great about this! What do you think ? </th>
            </tr>
          </table>
          <div className="card-actions justify-end mt-8">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
