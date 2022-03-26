import { useState } from 'react'
import styled from 'styled-components'
import TopSide from './components/TopSide'

const AppContent = styled.section`
    width: 35vw;
    height: 85vh;
    background-color: #202020;
    border-radius: 2px;
    overflow: hidden;
`

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <AppContent>
                <TopSide/>
            </AppContent>
        </div>
    )
}

export default App
