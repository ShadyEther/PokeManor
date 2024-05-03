"use client"

const PokeBox=(props:any)=>{
        var data= props.data;

    if(data==null){
        return(
            <div>Loading</div>
        )
    }
    else{
        return(
            <div>
                {data.name}
                <img src={data.sprites.other.showdown.front_default} alt="hehe" />
            </div>
        )

    }
    
}

export default PokeBox;