import { useEffect, useState } from 'react';
import axios from 'axios';

const EditorDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await axios.get('/api/submissions');
        setSubmissions(res.data);
      } catch (error) {
        console.error('Error fetching submissions', error);
      }
    };
    fetchSubmissions();
  }, []);

  const handleApprove = async (id, approved) => {
    try {
      await axios.post('/api/approve', { id, approved });
      setSubmissions(submissions.filter((sub) => sub.id !== id));
    } catch (error) {
      console.error('Error approving', error);
    }
  };

  return (
    <div className="editor">
      <h1>Editor Dashboard</h1>
      {submissions.map((sub) => (
        <div key={sub.id}>
          <p>Prompt: {sub.prompt}</p>
          <audio controls src={sub.audioUrl} />
          <button onClick={() => handleApprove(sub.id, true)}>Approve</button>
          <button onClick={() => handleApprove(sub.id, false)}>Disapprove</button>
        </div>
      ))}
    </div>
  );
};

export default EditorDashboard;