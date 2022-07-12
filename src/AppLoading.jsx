import React from 'react';
import LoadingSkeleton from './loadingSkeleton/loadingSkeleton';
import "./Loading.scss"
const AppLoading = () => {
    return (
        <div className="result">
            <h3 >
                <LoadingSkeleton width ="420px" height="20px"/>
            </h3>
            <p>
                <LoadingSkeleton width="420px" height="12px" />
                <div className='h-2'></div>
                <LoadingSkeleton width="420px" height="12px" />
                <div className='h-2'></div>
                <LoadingSkeleton width="420px" height="12px" />
                {/* <div className='h-2'></div>
                <LoadingSkeleton width="420px" height="15px" /> */}
            </p>
            <a className='inline-block p-[12px_16px] !bg-[#ffff]'>
                <LoadingSkeleton width="60px" height="30px"/>
            </a>
        </div>
    );
};

export default AppLoading;