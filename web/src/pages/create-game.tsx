import { Button } from "../components/button";
import { InnerPage } from "../components/inner-page";

export function CreateGame() {
  return <InnerPage>
    <h2>Create New Game</h2>

    <p>Choose a Haunt:</p>

    <Button>Curse of the Mummy</Button>
  </InnerPage>;
}