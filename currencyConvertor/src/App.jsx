import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// It uses the useEffect hook to make an API call to fetch the currency data when the component mounts or when the currency code changes.

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [result, setResult] = useState(0);
  const currenctInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currenctInfo).sort();

  const swapHandler = () => {
    setFrom(to);
    setTo(from);
    setResult(amount);
    setAmount(result);
  }

  const amountChangeHandler = (value) => {
    if (currenctInfo && currenctInfo[to]) {
      setResult(value * currenctInfo[to]);
    } else {
      setResult(0);
    }
  }
  
  return (
    <>
     <div className='w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: "url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <div className='w-full max-w-md mx-auto border border-gray-200 rounded-2xl p-8 backdrop-blur-md bg-white/40 shadow-2xl mt-10'>
        <h1 className='text-3xl font-bold text-center text-blue-700 mb-6 drop-shadow-lg'>Currency Converter</h1>
        <form onSubmit={(event) => {event.preventDefault(); amountChangeHandler(amount)}}>
          <div className='w-full mb-4'>
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              onCurrencyChange={setFrom}
              currencyOptions={currencyOptions}
              selectCurrency={from}
            />
          </div>
          <div className='relative w-full flex justify-center mb-4'>
            <button
              type='button'
              className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-200 transition-colors border border-blue-300 text-blue-700 font-bold text-lg'
              onClick={swapHandler}>
              &#8646;
            </button>
          </div>
          <div className='w-full mb-6'>
            <InputBox
              label="To"
              amount={result}
              onAmountChange={setResult}
              onCurrencyChange={setTo}
              currencyOptions={currencyOptions}
              selectCurrency={to}
              amountDisable={true}
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}  
          </button>
        </form>
      </div>
     </div>
    </>
  )
}

export default App
