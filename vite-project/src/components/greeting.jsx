// Greeting.js
const Greeting = ({ name }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h2>Hey {name}! 👋</h2>
      <p>Welcome to my random React app.</p>
    </div>
  );
};

export default Greeting;