import React from "react";
import { useSelector } from "react-redux";
import { selectContact } from "../../Utils/ContactsSlice";

function ProfileReceiver() {
  const { reciverData } = useSelector(selectContact);
  return (
    <div className="profile-receiver">
      <div className="img-profile-receiver">
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt={reciverData?.username}
        />
      </div>
      <div className="desc-profile-receiver">
        <p>{reciverData?.username}</p>
        <p>{reciverData?.email}</p>
      </div>
    </div>
  );
}

export default ProfileReceiver;
