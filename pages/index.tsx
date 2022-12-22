import Head from "next/head";
import Events from "../src/components/index/Events";
import Home from "../src/components/index/Home";
import Story from "../src/components/index/Story";
import Travel from "../src/components/index/Travel";
import homeStyle from '../styles/Home.module.css'
import travelStyle from '../styles/Travel.module.css'

export default function IndexPage() {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Karen & Lucas Wedding</title>
    </Head>
    <Home styles={homeStyle} />
    <Events />
    <Travel styles={travelStyle}/>
    <Story/>
  </>)
}
