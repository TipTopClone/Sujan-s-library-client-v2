import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/layout/MainLayout';
import CustomCarousel from '../../components/carousel/CustomCarousel';
import { Col, Container, Row, Form, Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CustomCard } from '../../components/custom-card/CustomCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [filteredBook, setFilteredBook] = useState([]);

  useEffect(() => {
    const activeBooks = books.filter((book) => book.status === 'active');

    setFilteredBook(activeBooks);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const str = value.toLowerCase();

    const searchedbook = books.filter((book) =>
      // book.status === 'active' && book.name.toLowerCase().includes(str)
      book.name.toLowerCase().includes(str)
    );

    console.log(searchedbook);
    setFilteredBook(searchedbook);
  };

  return (
    <MainLayout>
      <div>
        {/* carousel */}
        <CustomCarousel />

        {/* book list cart  */}
        <Container className='mt-5' fluid>
          <Row>
            <Col className='d-flex justify-content-between'>
              <label htmlFor=''>{filteredBook.length} books found!</label>
              <div>
                <Form.Control
                  onChange={handleOnSearch}
                  placeholder='Search book by name...'
                  className='search-input'
                />
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='d-flex justify-content-center flex-wrap mt-5 gap-3'>
              {filteredBook.map((book, i) => (
                <Link key={book._id} to={`/book/${book._id}`}>
                  <CustomCard {...book} />
                </Link>
              ))}
              {filteredBook.length < 1 && (
                <Alert variant='warning' className='no-result-alert'>
                  No book found
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Home;
