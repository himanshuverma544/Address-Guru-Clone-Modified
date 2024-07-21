import ActiveStar from '../../assets/utility/rating/star-active.svg?react';
import InactiveStar from '../../assets/utility/rating/star-inactive.svg?react';


export default function Rating({ className, rated, length = 5 }) {

  return (
    <div className={`${className} rating flex p-1`}>
      {Array.from({ length: length }).map((_, index) =>
        <div key={index} className="icon-cont">
          {index < rated ? 
            <ActiveStar/> : <InactiveStar/>
          }
        </div>
      )}
    </div>
  );
}
