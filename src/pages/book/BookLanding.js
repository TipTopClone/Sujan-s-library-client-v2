import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getABookAction } from './bookAction';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { postBurrowAction } from '../burrow-history/burrowAction';

const BookLanding = () => {
  const dispatch = useDispatch();
  //grab the id from url parameter
  const { _id } = useParams();
  const [showReview, setShowReview] = useState(false);

  //pull the book info from the state and implement in UI below
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    //fetch book from server to get latest update and put in our state
    _id && dispatch(getABookAction(_id));
  }, [_id, dispatch]);

  const handleOnBurrow = () => {
    if (
      window.confirm(
        'Are you sure you want to burrow this, you need to return the book in 15 days'
      )
    ) {
      const obj = {
        bookId: _id,
        bookName: name,
        thumbnail,
        userId: user._id,
        userName: user.fName,
      };
      dispatch(postBurrowAction(obj));
    }
  };

  const {
    thumbnail,
    name,
    author,
    publishYear,
    description,
    isAvailable,
    dueDate,
  } = selectedBook;

  return (
    <MainLayout>
      <Container>
        <Row className='mt-4 g-3'>
          <Col md={5}>
            <img
              src={thumbnail}
              alt=''
              width='100%'
              className='shadow-lg img-thumbnail'
            />
          </Col>
          <Col md={7}>
            <h1>{name}</h1>

            <p>
              {author} - {publishYear}
            </p>

            <p className='mb-5'>
              <FaStar className='text-warning' />
              <FaStar className='text-warning' />
              <FaStar className='text-warning' />
              <FaStar className='text-warning' />
              <FaStarHalfAlt className='text-warning' />
            </p>

            <p className='pt-5'>Summary: {description?.slice(0, 120)}...</p>

            <p className='d-grid pt-2'>
              {isAvailable ? (
                user?._id ? (
                  <Button onClick={handleOnBurrow}>Burrow Book</Button>
                ) : (
                  <Link to='/login' className='d-grid pt-2'>
                    <Button>Login To Borrow</Button>
                  </Link>
                )
              ) : (
                <Button disabled={true}>
                  Available from: {dueDate?.slice(0, 10)}
                </Button>
              )}
            </p>
          </Col>
        </Row>

        <Row className='mt-5 '>
          <Col className='border p-2 rounded'>
            <div className='button-group'>
              <ButtonGroup aria-label='Basic example'>
                <Button variant='primary' onClick={() => setShowReview(false)}>
                  Description
                </Button>
                <Button variant='warning' onClick={() => setShowReview(true)}>
                  Reviews
                </Button>
              </ButtonGroup>
            </div>

            {showReview ? (
              <>
                <div className='d-flex gap-3 shadow mb-4'>
                  <div className='avatar'>SM</div>
                  <div className='review'>
                    <h4>Best Book Ever</h4>
                    <p className='mb-3'>
                      <span>
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStarHalfAlt className='text-warning' />
                      </span>{' '}
                      <small>5 days ago</small>
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores tenetur maxime eveniet, explicabo placeat harum
                      neque vel at. Laudantium sapiente nostrum ab tempore
                      explicabo in optio illo eligendi vitae velit.
                    </p>
                  </div>
                </div>
                <div className='d-flex gap-3 shadow mb-4'>
                  <div className='avatar'>SM</div>
                  <div className='review'>
                    <h4>Best Book Ever</h4>
                    <p className='mb-3'>
                      <span>
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStarHalfAlt className='text-warning' />
                      </span>{' '}
                      <small>5 days ago</small>
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores tenetur maxime eveniet, explicabo placeat harum
                      neque vel at. Laudantium sapiente nostrum ab tempore
                      explicabo in optio illo eligendi vitae velit.
                    </p>
                  </div>
                </div>
                <div className='d-flex gap-3 shadow mb-4'>
                  <div className='avatar'>SM</div>
                  <div className='review'>
                    <h4>Best Book Ever</h4>
                    <p className='mb-3'>
                      <span>
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStarHalfAlt className='text-warning' />
                      </span>{' '}
                      <small>5 days ago</small>
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores tenetur maxime eveniet, explicabo placeat harum
                      neque vel at. Laudantium sapiente nostrum ab tempore
                      explicabo in optio illo eligendi vitae velit.
                    </p>
                  </div>
                </div>
                <div className='d-flex gap-3 shadow mb-4'>
                  <div className='avatar'>SM</div>
                  <div className='review'>
                    <h4>Best Book Ever</h4>
                    <p className='mb-3'>
                      <span>
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStar className='text-warning' />
                        <FaStarHalfAlt className='text-warning' />
                      </span>{' '}
                      <small>5 days ago</small>
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Maiores tenetur maxime eveniet, explicabo placeat harum
                      neque vel at. Laudantium sapiente nostrum ab tempore
                      explicabo in optio illo eligendi vitae velit.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              description
            )}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default BookLanding;
