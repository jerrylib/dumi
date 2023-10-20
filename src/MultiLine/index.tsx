import React, { type FC } from 'react';

const MultiLine: FC<{ text: string }> = (props) => <div className='multi-line-wrapper'>
    <input id="exp1" className="exp" type='checkbox' />
    <div className='text'>
        <label className='btn' htmlFor="exp1" />
        {props.text}
    </div>
</div>;

export default MultiLine;
