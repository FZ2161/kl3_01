export default function NameList({imie, col, ok}) {
    var color
    var classnames
    
    if(col == "Nie"){
        color = "text-red-600"
    } else {
        color = "text-cyan-600"
    }

    if(ok){
        classnames = "border w-[50%] bg-green-300"
    } else {
        classnames = "border w-[50%]"
    }
      
    return (
    
    <div className={classnames}>
        <h1 className={color}>{imie}</h1>
    </div>
    )

}