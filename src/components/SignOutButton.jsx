import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';

function SignOutButton({ name, signOut }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSignOutClick = () => {
    setIsDialogOpen(true); // Menampilkan dialog konfirmasi
  };

  const handleCancel = () => {
    setIsDialogOpen(false); // Menutup dialog tanpa melakukan logout
  };

  const handleConfirm = () => {
    setIsDialogOpen(false); // Menutup dialog setelah konfirmasi
    signOut(); // Lakukan logout jika pengguna mengonfirmasi
  };

  return (
    <div>
      <button type="button" id="sign-out" onClick={handleSignOutClick}>
        <span><FiLogOut /></span>
      </button>

      {/* Dialog konfirmasi logout */}
      <dialog open={isDialogOpen} id="sign-out-dialog">
        <div>
          <h3>Are you sure you want to log out?</h3>
          <div>
            <button type="button" onClick={handleConfirm}>Yes</button>
            <button type="button" onClick={handleCancel}>No</button>
          </div>
        </div>
      </dialog>

      <style>
        {`
          dialog {
            border: none;
            padding: 20px;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            text-align: center;
          }

          dialog h3 {
            margin-bottom: 20px;
            font-size: 18px;
            color: #333;
          }

          dialog button {
            padding: 10px 20px;
            margin: 10px;
            font-size: 16px;
            cursor: pointer;
            border: 1px solid #4CAF50;
            border-radius: 5px;
            background-color: transparent;
            color: #4CAF50;
          }

          dialog button:hover {
            background-color: #4CAF50;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

SignOutButton.propTypes = {
  name: PropTypes.string.isRequired, // name harus bertipe string dan wajib ada
  signOut: PropTypes.func.isRequired, // signOut harus bertipe fungsi dan wajib ada
};

export default SignOutButton;
