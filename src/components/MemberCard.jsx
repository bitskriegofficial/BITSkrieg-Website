export default function MemberCard({value}){
    return(
        <div>
            <p><span>{value.username}</span></p>
            <p>{value?.name}</p>
            <p>{value?.designation}</p>
            
        </div>
    )
}