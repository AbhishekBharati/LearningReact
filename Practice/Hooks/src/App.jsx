import DataFetcher from "./DataFetcher";
import TitleUpdater from "./TitleUpdater";
const App = () => {
  return (
    <div>
      <DataFetcher></DataFetcher>
      <TitleUpdater />
    </div>
  )
}

export default App;

// The useEffect hooks is used to run side effects in your components. Side effects can include data fetching, subscription or manually 
// changing the Dom.
