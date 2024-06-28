import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

function Home({ log, setLog }) {

    return (
        <>
            <Navbar log={log} setLog={setLog}></Navbar>
            <Hero log={log} setLog={setLog}></Hero>
        </>
    )
}


export default Home