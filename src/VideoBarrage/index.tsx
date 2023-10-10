import React, { type FC } from 'react';

const VideoBarrage: FC<{ text: string }> = (props) => <div className='video-barrage-container'>
    <div className='modal'>{props.text}</div>
</div>;

export default VideoBarrage;
