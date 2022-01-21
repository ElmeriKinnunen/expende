
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        
      </header>
      <main>
        <section className='payment-form'>
          <div className='wrap'>
            <h1>Add payment</h1>
            <form>
              <label>
                Target:
                <select>
                  <option value='shopping'>Shopping</option>
                  <option value='grocery'>Grocery</option>
                  <option value='car'>Car</option>
                  <option value='transport'>Transport</option>
                  <option value='lunch'>Lunch</option>
                  <option value='living'>Living</option>
                  <option value='other'>Other</option>
                </select>
              </label>

              <label>
                Category:
                <select>
                  <option value='mandatory'>Mandatory</option>
                  <option value='nonmandatory'>Nonmandatory</option>
                </select>
              </label>

              <label>
                Receiver:
                <input type='text' name='receiver' />
              </label>


              <label>
                Description:
                <input type='text' name='comment' />
              </label>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <p>© Elmeri Kinnunen {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
