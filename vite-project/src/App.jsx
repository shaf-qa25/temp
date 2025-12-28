// App.js
import Greeting from './components/greeting';
import Counter from './components/counter';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>React Basics Demo 💻</h1>
      <Greeting name="User" />
      <Counter />
      <p style={{ marginTop: '20px', color: 'gray' }}>
        Built with ❤️ using React hooks.
      </p>
    </div>
  );
}

export default App;