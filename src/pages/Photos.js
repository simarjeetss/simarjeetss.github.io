import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  'https://res.cloudinary.com/dhpsavjod/image/upload/v1762931303/1_m0idlh.jpg',
  'https://res.cloudinary.com/dhpsavjod/image/upload/v1762931303/10_ycur22.jpg'
];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Photos = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  return (
    <div style={{ maxWidth: '1000px', margin: '2em auto' }}>
      <h2 style={{ marginTop: '2em', textAlign: 'center', marginBottom: '1em', fontWeight: 600 }}>
        random photos :)
      </h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx + 1}`}
            style={{
              width: '100%',
              display: 'block',
              marginBottom: '1em',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'transform 0.2s',
              cursor: 'pointer',
            }}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          />
        ))}
      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </div>
  );
};

export default Photos;
