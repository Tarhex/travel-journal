import Header from './components/Header'
import Journal from './components/Journal'
import Entry from './components/Entry'
import './App.css';

function App() {

    const journalEntry = Entry.map(entry =>{
        return <Journal
					{...entry}
				/>
    })

	return (
		<div>
			<Header />
			{journalEntry}
		</div>
	);
}

export default App;
