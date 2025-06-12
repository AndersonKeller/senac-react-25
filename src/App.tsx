
import { Layout } from './layout/Layout'
import {produtos, type iProdutos} from "../src/data/data"
import style from "./app.module.css"
import { Card } from './components/card/Card'
import { useEffect, useState } from 'react'

function App() {
    const [carrinho,setCarrinho] = useState([] as iProdutos[])
    const [total,setTotal] = useState(0)
    

    const addCart=(prod:iProdutos)=>{
      console.log("callback",prod)
      // carrinho.push(prod)
      setCarrinho([...carrinho,prod])
    
    }
    const remove = (prod:iProdutos)=>{
      const findIndex = carrinho.findIndex((item)=>item.id===prod.id)
      const newArray = carrinho.filter((cart,index)=>{
        if(index!=findIndex){
          return cart
        }
      })
      setCarrinho(newArray)
     
    }
    useEffect(()=>{
      console.log("rodou useeffect")
      setTotal(carrinho.length*21)
    },[carrinho.length])
    return <Layout>
      <main> 
        <ul className={style.ul_produtos}>
          {produtos.map((produto)=>{
            return <Card callback={addCart} produto={produto} />
          })}
        </ul>
     
        <ul>
          {carrinho.length===0 && 
            <p>Carrinho vazio</p>
          }
          {carrinho.length > 0 && carrinho.map((item)=>{
            return <li>
              {item.name}
              <button onClick={()=>remove(item)}>Remover</button>
              </li>
          })}
          <p>Total R$ {total}</p>
          <p>Total com juros</p>
        </ul>
      </main>
    </Layout>
  
    
   
  
}

export default App
