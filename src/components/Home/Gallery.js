import React, {useState} from 'react';
import './gallery.css';
import img1 from '../../assets/g-img-1-min.JPG';
import img2 from '../../assets/g-img-2-min.JPG';
import img3 from '../../assets/g-img-3-min.JPG';
import img4 from '../../assets/g-img-4-min.JPG';
import img5 from '../../assets/g-img-5-min.JPG';
import img6 from '../../assets/g-img-6-min.JPG';
import img7 from '../../assets/g-img-7-min.JPG';
import img8 from '../../assets/g-img-8-min.JPG';

function Gallery() {
  const [shown, setShown] = useState(false);
  const [img, setImg] = useState(img1);

  const showImage = (i) => {
    setImg(i);
    setShown(true);
  };

  return (
    <>
      <div className="container">
        <div className="image-gallery">
          <div className="row">
            <div className="image-item" onClick={() => showImage(img1)}>
              <img src={img1} alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="image-item" onClick={() => showImage(img2)}>
              <img src={img2} alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="image-item" onClick={() => showImage(img3)}>
              <img src={img3} alt=""/>
              <div className="overlay"></div>
            </div>
          </div>
          <div className="row">
            <div className="image-item" onClick={() => showImage(img4)}>
              <img src={img4} alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="image-item" onClick={() => showImage(img5)}>
              <img src={img5} alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="image-item" onClick={() => showImage(img6)}>
              <img src={img6} alt=""/>
              <div className="overlay"></div>
            </div>
          </div>
          <div className="row">
            <div className="image-item" onClick={() => showImage(img7)}>
              <img src={img7} alt=""/>
              <div className="overlay"></div>
            </div>
            <div className="image-item" onClick={() => showImage(img8)}>
              <img src={img8} alt=""/>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      {shown && <ImageOverlay img={img} onDismiss={() => setShown(false)}/>}
    </>
  );
}

function ImageOverlay({img, onDismiss}) {
  return (
    <div className="image-overlay" onClick={onDismiss}>
      <img src={img} className="image-overlay-content" alt={'placeholder'}/>
    </div>
  );
}

export default Gallery;
