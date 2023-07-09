import { useDispatch } from 'react-redux';
import FEEDBACK_ACTION_TYPES from '../../store/actions/feedbackTypes';

export default function FeedbackRow({ id, feedback }) {
  const dispatch = useDispatch();
  const { understanding, feeling, support, comments } = feedback;
  const deleteFeedback = () => {
    dispatch({
      type: FEEDBACK_ACTION_TYPES.DELETE_FEEDBACK,
      payload: feedback.id,
    });
  };

  return (
    <tr className="hover">
      <th>{id}</th>
      <td>{feeling}</td>
      <td>{understanding}</td>
      <td>{support}</td>
      <td>"{comments}"</td>
      <td className="text-xl">
        <button onClick={deleteFeedback} className="btn btn-error btn-outline">
          ⛔
        </button>
        ️
      </td>
    </tr>
  );
}
