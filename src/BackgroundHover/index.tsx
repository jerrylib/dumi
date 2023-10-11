import React, { type FC } from 'react';

const BackgroundHover: FC<{ title: string }> = (props) => <span className='text'>{props.title}</span>;

export default BackgroundHover;
