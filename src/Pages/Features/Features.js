import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="carousel w-full py-4">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/VqDpGPS/Available-soon.png" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/9Y80gn2/Untitled-design-42.png" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/bXJB91w/Untitled-design-43.png" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/8jFBrbq/Untitled-design-46.png" className="w-full" />
  </div>
  <div id="item5" className="carousel-item w-full">
    <img src="https://i.ibb.co/N6SqqBQ/Untitled-design-45.png" className="w-full" />
  </div>
  <div id="item6" className="carousel-item w-full">
    <img src="https://i.ibb.co/6Zf91F4/Untitled-design-47.png" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
  <a href="#item5" className="btn btn-xs">5</a>
  <a href="#item6" className="btn btn-xs">6</a>
</div>
        </div>
    );
};

export default Features;