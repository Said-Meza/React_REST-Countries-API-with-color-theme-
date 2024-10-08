
export const BorderContries = ({border}) => {

  return ((

        border.map((el,index)=>(<h5 key={index} data-dark-element className="botton botton--modifi" > {el} </h5>)))
    
  )
}
