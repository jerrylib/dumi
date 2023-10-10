import React, { type FC } from 'react';

const ColorBorder: FC<{ text: string }> = (props) => <div className='color-border-card'>
    <div className='text'>
        {props.text}
    </div>
</div>;

export default ColorBorder;
