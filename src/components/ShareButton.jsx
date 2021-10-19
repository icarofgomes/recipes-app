import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ url, testID }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    copy(`http://localhost:3000${url}`);
    const time = 3000;
    setTimeout(() => setCopied(false), time);
  };

  return (
    <div>
      <input
        className="mt-2"
        type="image"
        src={ shareIcon }
        alt="Ícone de compartilhar"
        data-testid={ testID !== undefined && testID.length > 0 ? testID : 'share-btn' }
        onClick={ handleClick }
      />
      {
        copied && <span>Link copiado!</span>
      }
    </div>
  );
}

ShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  testID: PropTypes.string.isRequired,
};

export default ShareButton;
