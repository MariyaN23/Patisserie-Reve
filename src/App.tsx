import {Header} from "./components/menu/Header.tsx";
import {Main} from "./components/main/Main.tsx";
import {DarkThemeProvider} from "./context/dark-theme-context.tsx";

function App() {
    return (
        <DarkThemeProvider>
            <Header/>
            <Main/>
        </DarkThemeProvider>
    )
}

export default App
