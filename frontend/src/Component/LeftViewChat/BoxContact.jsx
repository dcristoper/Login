import "./Box_contact.scss";

function BoxContact() {
  const contacts = [
    {
      id: 1,
      name: "John",
      text: "Hello",
      img: "https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      status: true,
    },
    {
      id: 2,
      name: "Marry",
      text: "Come One",
      img: "https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      status: true,
    },
    {
      id: 3,
      name: "Alex",
      text: "Let's go",
      img: "https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      status: true,
    },
    {
      id: 4,
      name: "Adam",
      text: "Guide me please",
      img: "https://images.unsplash.com/photo-1600481176431-47ad2ab2745d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      status: true,
    },
  ];

  return (
    <div className="container-contact">
      {contacts.map((contact) => {
        return (
          <div className="box-contact" key={contact.id}>
            <div className="img-contact">
              <img src={contact.img} alt={contact.name} />
            </div>
            <div className="desc-contact">
              <h2>{contact.name}</h2>
              <p>{contact.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoxContact;
