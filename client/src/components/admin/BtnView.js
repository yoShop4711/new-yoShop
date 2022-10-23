import {Link} from 'react-router-dom'



function BtnView({notProcess}) {

    


                
    return(<div className='row_btn'>
                

                        
            
                    <Link id="btn_view" to={`/to_merchant/${notProcess._id}`}>
                        View
                    </Link>

    
    </div>)


}

export default BtnView
