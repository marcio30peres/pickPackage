import { Agency } from "./components/Agency";
import { Postman } from "./components/Postman";
import { PositionContextProvider } from "./contexts/PositionContext";

import { Globals } from "./styles/globals";

export function App() {
  return (
    <>
      <PositionContextProvider>
        <Postman />
        <Agency />
      </PositionContextProvider>
      <Globals />
    </>
  )
}