import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface ListOfTodoProps {
  token: string | null;
}

const ListOfTodo: React.FC<ListOfTodoProps> = ({ token }) => {
  useEffect(() => {
    if (token) {
      fetchData(token);
    }
  }, [token]);

  const fetchData = async (token: string) => {
    try {
      const res: AxiosResponse = await axios.get('http://localhost:5000/api/todos', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      console.log(res)
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>List of todo</h1>
    </div>
  );
};

export default ListOfTodo;
