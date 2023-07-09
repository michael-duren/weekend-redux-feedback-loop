import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FEEDBACK_ACTION_TYPES from '../../store/actions/feedbackTypes';
import Spinner from '../Spinner/Spinner';
import FeedbackRow from './FeedbackRow';

export default function Admin() {
  const dispatch = useDispatch();
  const feedbackList = useSelector((state) => state.feedback.feedbackList);
  const isLoading = useSelector((state) => state.feedback.isLoading);
  useEffect(() => {
    dispatch({ type: FEEDBACK_ACTION_TYPES.GET_ALL_FEEDBACK });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const recentFeedbackList = feedbackList
    .map((feedback) => feedback)
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <div>
      <h2 className="text-5xl font-bold mb-8">Feedback Results</h2>
      <table className="table text-base">
        {/* head */}
        <thead>
          <tr>
            <th className="min-w-[4rem]">#</th>
            <th>Feeling</th>
            <th>Comprehension</th>
            <th>Support</th>
            <th>Comments</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 2 */}
          {recentFeedbackList.map((feedback, i) => {
            return (
              <FeedbackRow key={feedback.id} id={i + 1} feedback={feedback} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
