import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import all images directly using our image module
import importedImages from '../assets/pics';

// Provide fallback paths as well for robustness
const fallbackImages = [
  '/assets/pics/1.jpg',
  '/assets/pics/2.jpg',
  '/assets/pics/3.jpg',
  '/assets/pics/4.jpg',
  '/assets/pics/5.jpg',
  '/assets/pics/6.jpg',
  '/assets/pics/7.jpg',
  '/assets/pics/8.jpg',
  '/assets/pics/9.jpg',
  '/assets/pics/10.jpg',
  '/assets/pics/11.jpg'
];

// Use imported images if they're available, otherwise fallback to paths
const images = importedImages || fallbackImages;

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Photos = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [debugInfo, setDebugInfo] = useState('');
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  // Debug image loading issues
  useEffect(() => {
    const pathInfo = {
      publicURL: process.env.PUBLIC_URL,
      imagesCount: images.length,
      imageType: typeof images[0],
      sampleImagePath: images[0],
      isDevelopment: process.env.NODE_ENV === 'development',
      protocol: window.location.protocol,
      hostname: window.location.hostname
    };
    setDebugInfo(JSON.stringify(pathInfo, null, 2));
    console.log('Image Debug Info:', pathInfo);
  }, []);

  // Track image load successes and failures
  const handleImageLoad = (idx) => {
    setImageLoadStatus(prev => ({...prev, [idx]: 'loaded'}));
    console.log(`Image ${idx} loaded successfully`);
  };

  const handleImageError = (idx) => {
    setImageLoadStatus(prev => ({...prev, [idx]: 'error'}));
    console.error(`Image ${idx} failed to load`);
  };

  const slides = images.map((src) => ({ src }));

  return (
    <div style={{ maxWidth: '1000px', margin: '2em auto' }}>
      <h2 style={{ marginTop: '2em', textAlign: 'center', marginBottom: '1em', fontWeight: 600 }}>random photos :)</h2>
      {/* Debug panel, only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          padding: '10px', 
          margin: '10px 0', 
          background: '#f5f5f5', 
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '12px',
          fontFamily: 'monospace',
          whiteSpace: 'pre-wrap'
        }}>
          {/* <h4>Debug Info:</h4>
          <pre>{debugInfo}</pre>
          <h4>Image Load Status:</h4>
          <pre>{JSON.stringify(imageLoadStatus, null, 2)}</pre> */}
        </div>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, idx) => (
          <div key={idx} style={{ position: 'relative' }}>
            <img
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
                border: imageLoadStatus[idx] === 'error' ? '2px solid red' : 'none',
              }}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
              onLoad={() => handleImageLoad(idx)}
              onError={() => handleImageError(idx)}
            />
            {/* Show path for debugging */}
            {/* {process.env.NODE_ENV === 'development' && (
              <div style={{
                position: 'absolute',
                bottom: '1.5em',
                left: 0,
                right: 0,
                background: 'rgba(0,0,0,0.5)',
                color: 'white',
                padding: '2px 5px',
                fontSize: '10px',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {typeof src === 'string' ? src : 'Webpack Module'}
              </div>
            )} */}
          </div>
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