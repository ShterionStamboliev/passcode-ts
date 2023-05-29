import Heading from './components/Heading';
import NumberPad from './components/NumberPad';
import './styles/Styles.css'

function App() {
  return (
    <>
      <Heading
        title={'This is a simple passcode lockscreen'}
        subTitle={'Please enter your passcode:'}
      />
      <NumberPad />
    </>
  );
};

export default App;
