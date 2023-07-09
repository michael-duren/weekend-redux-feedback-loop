import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FEEDBACK_ACTION_TYPES from '../../store/actions/feedbackTypes';

export default function Review() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback.newFeedback);
  const { feeling, understanding, support, comments } = feedback;

  const onSubmit = () => {
    dispatch({
      type: FEEDBACK_ACTION_TYPES.CREATE_FEEDBACK,
      payload: feedback,
    });
    navigate('/confirmation');
  };

  return (
    <div className="max-w-md">
      <h2 className="text-5xl font-bold mb-16">Review</h2>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <th>Feelings</th>
                <th className="text-right">{feeling}</th>
              </tr>
              <tr>
                <th>Understanding</th>
                <th className="text-right">{understanding}</th>
              </tr>
              <tr>
                <th>Support</th>
                <th className="text-right">{support}</th>
              </tr>
              <tr>
                <th>Comments</th>
                <th className="text-right">{comments}</th>
              </tr>
            </tbody>
          </table>
          <div className="card-actions justify-end mt-8">
            <button
              onClick={() => onSubmit(feedback)}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
