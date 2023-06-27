import { useEffect, useState } from "react";

import axios from "axios";
function BoxContact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const dataLoginUser = JSON.parse(localStorage.getItem("data"));
    const getUserChat = async () => {
      try {
        const { data } = await axios.get(
          `/api/conversation/${dataLoginUser.user.id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserChat();
  }, []);
  return (
    <div className="container-contact">
      {contacts.map(({ user }, i) => {
        return (
          <div className="box-contact" key={i}>
            <div className="img-contact">
              <img
                src="https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="{contact.name} "
              />
            </div>
            <div className="desc-contact">
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxContact;
