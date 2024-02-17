import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { data } from "./data";
import "./index.css";

function App() {
    const journalCards = data.map(journal => {
        return (
            <Card key={journal.id} {...journal}/>
        )
    })
    return (
        <div>
            <Navbar />
            {journalCards}
        </div>
    )
}

export default App;
