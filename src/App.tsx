
import { Layout } from './layout/Layout'
import {produtos} from "../src/data/data"
import style from "./app.module.css"
import { Card } from './components/card/Card'
function App() {
    return <Layout>
      <main> 
        <ul className={style.ul_produtos}>
          {produtos.map((produto)=>{
            return <Card produto={produto} />
          })}
        </ul>
        
      </main>
    </Layout>
  
    
   
  
}

export default App
