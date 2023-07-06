import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getUserProfile } from "../../Utils/ContactsSlice";
import { getMessage } from "../../Utils/MessageSlice";
function BoxContact() {
  const [contacts, setContacts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const dataLoginUser = JSON.parse(localStorage.getItem("data"));
    const getUserChat = async () => {
      try {
        const { data } = await axios.get(
          `/api/conversation/${dataLoginUser.id}`,
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

  const handleGetMessage = async (reciverData, conversationId) => {
    dispatch(getUserProfile({ reciverData, conversationId }));
    try {
      await dispatch(getMessage(conversationId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-contact">
      {contacts.map(({ reciverData, conversationId }) => {
        return (
          <div
            className="box-contact"
            key={conversationId}
            onClick={() => handleGetMessage(reciverData, conversationId)}
          >
            <div className="img-contact">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt={reciverData?.username}
              />
            </div>
            <div className="desc-contact">
              <p>{reciverData?.username}</p>
              <p>{reciverData?.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxContact;
