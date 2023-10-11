import React, { type FC } from 'react';

const TaperedGradient: FC<{ type: string }> = (props) => <div className={'tapered-gradient-' + props.type}></div>;

export default TaperedGradient;
