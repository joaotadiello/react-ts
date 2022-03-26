import { useState } from 'react'
import styled from 'styled-components'
import ItemCard from './components/ItemCard'
import TopSide from './components/TopSide'

const AppContent = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const AppContainer = styled.section`
    width: 35vw;
    height: 85vh;
    background-color: #202020;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

const MyList = styled.section`
    width: 100%;
    height: 76vh;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`

function App() {
    const [count, setCount] = useState(0)

    return (
        <AppContent>
            <AppContainer>
                <TopSide />
                <MyList>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    
                </MyList>
            </AppContainer>
        </AppContent>
    )
}

export default App
