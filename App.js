import React from 'react';
import countdownData from './data';

function App() {
  return (
    <div style={{ padding: '2rem', direction: 'rtl', fontFamily: 'sans-serif' }}>
      <h1>برنامج مراقبة المباراة</h1>
      {countdownData.map((section, index) => (
        <div key={index} style={{ marginTop: '2rem' }}>
          <h2>{section.category}</h2>
          <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'right' }}>
            <thead>
              <tr>
                <th>الوقت (دقيقة قبل المباراة)</th>
                <th>المهمة</th>
              </tr>
            </thead>
            <tbody>
              {section.tasks.map((task, i) => (
                <tr key={i}>
                  <td>{task.time}</td>
                  <td>{task.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default App;