import React from 'react';
import "./style.scss";
//we use props set data for skeleton
const loadingSkeleton = (props) =>
{
    console.log(props);
    return (
        <div className='skeleton' style={{
            height: props.height,
            width: props.width,
            borderRadius: props.radius,
        }}>
            
        </div>
    );
};

export default loadingSkeleton;