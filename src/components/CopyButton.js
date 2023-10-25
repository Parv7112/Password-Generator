import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

function CopyButton(props) {
  const copyToClipboard = () => {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
  };

  return (
    <button id="copy" onClick={copyToClipboard} className='copy-button bg-dark'>
      <FaRegCopy />
    </button>
  );
}

export default CopyButton;
