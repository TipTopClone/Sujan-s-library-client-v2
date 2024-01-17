// import Carousel from 'react-bootstrap/Carousel';
// import a from '../../assets/a.jpg';
// import b from '../../assets/b.jpg';
// import c from '../../assets/c.jpg';
// const CustomCarousel = () => {
//   return (
//     <Carousel data-bs-theme=''>
//       <Carousel.Item>
//         <img className='d-block w-100' src={a} alt='First slide' />
//         <Carousel.Caption>
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className='d-block w-100' src={b} alt='Second slide' />
//         <Carousel.Caption>
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className='d-block w-100' src={c} alt='Third slide' />
//         <Carousel.Caption>
//           <h5>Third slide label</h5>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// };

// export default CustomCarousel;

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import libraryImageA from '../../assets/a.jpg';
import libraryImageB from '../../assets/b.jpg';
import libraryImageC from '../../assets/c.jpg';

const CustomCarousel = () => {
  const carouselItems = [
    {
      image: libraryImageA,
      label: 'Welcome to Our Library',
      description:
        'Explore a vast collection of books covering various genres and topics.',
    },
    {
      image: libraryImageB,
      label: 'Reading Spaces for Everyone',
      description:
        'Find comfortable reading spaces equipped with cozy chairs and quiet ambiance.',
    },
    {
      image: libraryImageC,
      label: 'Engage in Community Events',
      description:
        'Participate in book clubs, author talks, and other exciting community events.',
    },
  ];

  return (
    <Carousel data-bs-theme='' interval={3000}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            src={item.image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h5>{item.label}</h5>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
