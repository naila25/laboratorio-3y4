import WelcomeWidget from "./WelcomeWidget";


export default function Home({email}) {

    return (
        <>
          <h2> Your at home!</h2> 
          <WelcomeWidget email={email}/>
        </>
    );


}