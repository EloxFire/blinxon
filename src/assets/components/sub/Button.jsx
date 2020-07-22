import React from 'react';

import '../../sass/sub/button.scss';

interface ButtonProps {
  title: String,
  to: String
}
const Button:React.FC<ButtonProps> = ({title, to}) => (
  <div>
    <a href={to}>
      <button className="buttons m-2">{title}</button>
    </a>
  </div>
)

export default Button;
