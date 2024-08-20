export const TextInput = ({type ,onChangeText,className,placeholder}) =>{
    return(<input type={type} onChange={onChangeText} className={className} placeholder={placeholder}/>)
}