import React, { type FC } from 'react';

const TextShadow: FC<{ title: string }> = (props) => <div className='text-shadow-container'>
    <span className='text-shadow-content'>{props.title}</span>
</div>;

export default TextShadow;
