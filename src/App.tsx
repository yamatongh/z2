import { useState } from 'react';

    function App() {
      const [result, setResult] = useState('');
      const serverUrl = 'http://localhost:3001';

      const handleGetRequest = async () => {
        try {
          const response = await fetch(`${serverUrl}/api/test`);
          const data = await response.text();
          setResult(data);
        } catch (error) {
          setResult('Error fetching data');
        }
      };

      const handlePostRequest = async () => {
        try {
          const response = await fetch(`${serverUrl}/api/postest`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: 'Hello from client' }),
          });
          const data = await response.text();
          setResult(data);
        } catch (error) {
          setResult('Error posting data');
        }
      };

      return (
        <div>
          <h1>Hello World</h1>
          <button onClick={handleGetRequest}>Get Request</button>
          <button onClick={handlePostRequest}>Post Request</button>
          <div id="result">{result}</div>
        </div>
      );
    }

    export default App;
