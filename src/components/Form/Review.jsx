export default function Review() {
  return (
    <>
      <h2 className="text-5xl font-bold mb-16">Review</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <th>Feelings</th>
                <th className="text-right">5</th>
              </tr>
              <tr>
                <th>Understanding</th>
                <th className="text-right">5</th>
              </tr>
              <tr>
                <th>Support</th>
                <th className="text-right">5</th>
              </tr>
              <tr>
                <th>Comments</th>
                <th className="text-right">
                  I feel great about this! What do you think ?{' '}
                </th>
              </tr>
            </tbody>
          </table>
          <div className="card-actions justify-end mt-8">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
