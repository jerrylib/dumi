import React, { type FC } from 'react';

// import style from './style.pcss'

const style = {
    color: 'red'
}
console.log('style=', style)
const BackgroundHover: FC<{ title: string }> = (props) => <span className='text'>{props.title}</span>;

export default BackgroundHover;
