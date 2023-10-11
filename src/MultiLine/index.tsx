import React, { type FC } from 'react';

const MultiLine: FC<{ text: string }> = (props) => <div className='multi-line-container'>
    <div className='more'>...</div>
    <div className='text'>{props.text}</div>
</div>;

export default MultiLine;
