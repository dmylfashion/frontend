import { useEffect, useState } from 'react';
import axios from 'axios';

const ClientPortal = () => {
  const [approved, setApproved] = useState([]);

  useEffect(() => {
    const fetchApproved = async () => {
      try {
        const res = await axios.get('/api/approved');
        setApproved(res.data);
      } catch (error) {
        console.error('Error fetching approved', error);
      }
    };
    fetchApproved();
  }, []);

  return (
    <div className="portal">
      <h1>Client Portal</h1>
      {approved.map((item) => (
        <div key={item.id}>
          <p>Your approved music:</p>
          <audio controls src={item.audioUrl} />
        </div>
      ))}
    </div>
  );
};

export default ClientPortal;