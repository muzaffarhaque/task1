import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import "./graph.scss"

export default function Graph() {
const compref=useRef()

    function logout(){
        localStorage.clear()
    }
    let print=useReactToPrint({
        content:()=>compref.current,
        documentTitle:"emp-data",
        onAfterPrint:()=>alert("Print success")
    })


  return (
    <>
        <div className='content-graph' ref={compref}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis iusto commodi tenetur repellat non eveniet explicabo aperiam sint eum veritatis voluptatem consequuntur nihil voluptate itaque id quis, quam incidunt fuga?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque iusto possimus vitae exercitationem porro ab quidem dolorum, explicabo quo sapiente minima nostrum eius totam sit culpa earum voluptatem repellendus modi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam corrupti voluptate temporibus magni tempore repudiandae dolores voluptates, consequuntur, omnis dolorum non fugit doloremque alias eos nihil iusto adipisci facilis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione dolor quis necessitatibus, odio porro pariatur, soluta autem possimus facilis nam esse, asperiores consequuntur? Quia explicabo earum doloremque fuga possimus! Molestiae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non suscipit porro facilis, consectetur minima tempora dignissimos provident repellendus nobis veniam laborum impedit molestias nihil veritatis? Tempore sint perferendis consequuntur adipisci!

        </div>




        <NavLink to="/"><button className='graph-button' onClick={logout}>Log out</button></NavLink>


        <button className='graph-button' onClick={print}>Print page</button>
    </>
  )
}
