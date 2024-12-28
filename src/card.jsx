import './App.css'

function card({image="IMAGE",name="CARD"}){
  return (
    <div className='card'>
      <img src={image} />
      <h2>{name}</h2>
      <p>This is {name} discription</p>
    </div>
  )
}

export default card
