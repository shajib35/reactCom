const TodoTitle="Call familly";
const ipsam ="Ipsam dolor loeam et slet ippsam accuse laboretory";
const date=Date();

function Card(props ){
  const {titleT,monopoli,titlett,desc}=props 
  return <div className="card">
  <h3  className="title">{TodoTitle}</h3>
  <p className="trt">{titlett}</p>
  <p className="trtw">{desc}</p>
  <h1 className="tr" >{titleT}</h1>
  <p className="mn">{monopoli}</p>
  <p className="ipsam">{ipsam}</p>
  <p className="date">{date}</p>
  
  </div>
}

export default Card;