import React, { type FC } from 'react';

const OlympicRings: FC<{ title: string }> = (props) => <div className='olympic-rings'>
    <span className='rings'></span>
    <span className='rings'></span>
    <span className='rings'></span>
    <span className='rings'></span>
    <span className='rings'></span>
</div>;

export default OlympicRings;
