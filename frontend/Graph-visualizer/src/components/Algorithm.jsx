import MinSpan from "./MinSpan";
import ShortDist from "./ShortDist";
import StrComp from "./StrComp";

function Algorithm({V,edge,Algono,type}){
    return (
        <>
        {Algono == 0 && <ShortDist />}
        {Algono == 1 &&  <MinSpan />}
        {Algono==3 &&  <StrComp V={V} edge={edge}  type={type}/>}
        </>
    )
}
export default Algorithm;