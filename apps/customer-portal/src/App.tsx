import { Button } from "@repo/ui";
import { formatCurrency } from "@repo/utils";

const App = () => (
  <>
    <h1>Complete Frontend Dev and Deployment Lifecycle</h1>
    <div className="card">
      <Button onClick={() =>{ alert(formatCurrency(12345)); }}>Click me</Button>
    </div>
  </>
);

export default App;
