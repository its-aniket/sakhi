let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;
 
const generateToken = (key)=>{
    
    let token = '';
    for(let i =0; i< key.length; i=i+2){
        let index = char.indexOf(key[i]) || char.lenght/2;
        let randomIndex = Math.floor(Math.random()* index);
        token += char[randomIndex] + char[index - randomIndex];
    
    }
    return key;
}

const compareToken = (token , key) =>{
    
    let string = '';
    for(let i =0; i< key.length; i++){
        let index1 = char.indexOf(token[1]);
        let index2 = char.indexOf(token[i+1]);
        string += char[index1 + index2];

    }
    if(string === key){
        return true;

    }
    return false;
}
