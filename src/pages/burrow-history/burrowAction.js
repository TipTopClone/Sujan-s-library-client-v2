import { toast } from 'react-toastify';
import {
  fetchBurrows,
  postBurrow,
  returnBurrowedBook,
} from '../../helpers/axiosHelper';
import { getABookAction } from '../book/bookAction';
// import { setBurrows } from './burrowSlice';

export const postBurrowAction = (obj) => async (dispatch) => {
  const pending = postBurrow(obj);
  toast.promise(pending, {
    pending: 'Please wait...',
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === 'success') {
    // refetch the selected book and update the page

    dispatch(getABookAction(obj.bookId));
  }
};

// export const fetchBurrowsAction = () => async (dispatch) => {
//   const { status, burrows } = await fetchBurrows();

//   if (status === 'success') {
//     // refetch the selected burrow and update the page

//     dispatch(setBurrows(burrows));
//   }
// };

// export const returnBurrowActioin = (_id) => async (dispatch) => {
//   const pending = returnBurrowedBook(_id);
//   toast.promise(pending, {
//     pending: 'Please wait...',
//   });
//   const { status, message } = await pending;
//   toast[status](message);

//   if (status === 'success') {
//     // refetch all the  book
//     //refetch all burrow

//     dispatch(fetchBurrowsAction());
//   }
// };
