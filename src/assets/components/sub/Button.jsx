import React from 'react';

import '../../sass/sub/button.scss';

interface ButtonProps {
  title: String
}
const Button:React.FC<ButtonProps> = ({title}) => (
  <div>
    <button className="buttons m-2">{title}</button>
  </div>
)

export default Button;