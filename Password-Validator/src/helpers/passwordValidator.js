export const checkfirstCapital = (password)=>{
    if (password[0] >= 'A' && password[0] <= 'Z') return true
    return false
  }

export const checkContainSmaller = (password)=>{
    for (let i of password){
      if (i >= 'a' && i <= 'z') return true
    }
    return false
  }

 export const checkContainDigit = (password)=>{
    for (let i of password){
      if (i >= '0' && i <= '9') return true
    }
    return false
  }

export const checkContainSpecial = (password)=>{
    for (let i of password){
      if (i == '@' || i == '$' || i == '#' || i == '&') return true
    }
    return false
  }