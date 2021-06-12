import Header from "../header/headerProduct"
import ContentProduct from "../content/contentProduct"
import ContextProvider from "../../context/contextProvider"
export default function Product(){
    return(
       <div>
            <Header/>
            <ContextProvider>
                <ContentProduct/>
            </ContextProvider>
            
        </div>
    )
}