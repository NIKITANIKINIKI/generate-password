interface SettingType {
  length: number
  uppercase: boolean
  lowercase: boolean
  number: boolean
  symbol: boolean
}

export const generatePassword = (settings: SettingType): string => {
  const chars = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+[]{}|;:,.<>?',
  }

  let possibleChars = ''
  const selectedChars: string[] = []  

  if (settings.uppercase) {
    possibleChars += chars.uppercase
    selectedChars.push(chars.uppercase.charAt(Math.floor(Math.random() * chars.uppercase.length)))  
  }
  if (settings.lowercase) {
    possibleChars += chars.lowercase
    selectedChars.push(chars.lowercase.charAt(Math.floor(Math.random() * chars.lowercase.length)))  
  }
  if (settings.number) {
    possibleChars += chars.number
    selectedChars.push(chars.number.charAt(Math.floor(Math.random() * chars.number.length)))  
  }
  if (settings.symbol) {
    possibleChars += chars.symbol
    selectedChars.push(chars.symbol.charAt(Math.floor(Math.random() * chars.symbol.length))) 
  }

  if (possibleChars === '') return '' 

  for (let i = selectedChars.length; i < settings.length; i++) {
    const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length))
    selectedChars.push(randomChar)
  }

  selectedChars.sort(() => Math.random() - 0.5)

  return selectedChars.join('')
}
