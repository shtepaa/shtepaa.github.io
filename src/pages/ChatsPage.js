import React, {useState} from 'react';

const ChatsPage = () => {
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Ann'
        },
        {
            id: 2,
            name: 'Bella'
        }
    ]);

    const [name, setName] = useState('');

    const handleDelete = (id) => {
        const filteredValues = chats.filter((item) => item.id !== id);
        setChats(filteredValues);

    };

    const addHandler = () => {
        const randomId = Math.random();

        const obj = {
            id: randomId,
            name: name
        }
        setChats( prevState => [...prevState, obj])
    };
    return(
        <div style={{backgroundColor: 'pink'}}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button onClick={addHandler}>Добавить чат</button>
        {chats.map((chat) => {
            return(
                <div style={{display: 'flex', border: '2px solid gray', width: '100px', margin: '20px 0 20px 20px', borderRadius: '10px'}} key={chat.id}>
                    <h4 style={{ width: '50px'}}>{chat.name}</h4>
                    <button style={{backgroundColor: 'pink', marginLeft: '20px', borderRadius: '10px'}} onClick={() => handleDelete(chat.id)}>X</button>
                </div>
            )
        })}
    </div>
    );
};

export default ChatsPage;