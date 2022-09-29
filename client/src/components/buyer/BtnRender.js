import { Link } from "react-router-dom"


function BtnRender({prods}) {
    
    
                
    return(<div className='row_btn'>
                    
                    <Link id="btn_view" to={`/cancel/${prods._id}`}   >
                        view and cancel
                    </Link>

    
    </div>)


}

export default BtnRender
