import React, { type FC } from 'react';

const ColorFullText: FC<{ title: string }> = (props) => <div className='color-full-text-container'>
    {props.title.split('').map((i, index) => <span key={index}>{i}</span>)}
</div>;

export default ColorFullText;
