const data = new Date()
console.log(data) // Data atual
console.log(data.getDay()) // Dia da semana (0-6)
console.log(data.getDate()) // Dia do mês (1-31)
console.log(data.getMonth()) // Mês (0-11)
console.log(data.getFullYear()) // Ano (4 dígitos)
console.log(data.getHours()) // Hora (0-23)
console.log(data.getMinutes()) // Minutos (0-59)
console.log(data.getSeconds()) // Segundos (0-59)
console.log(data.getMilliseconds()) // Milissegundos (0-999)
console.log(data.getTime()) // Timestamp (milissegundos desde 1970-01-01)
console.log(data.getUTCHours()) // Hora em UTC (0-23)
console.log("--------")
console.log(data.toString()) // Data em formato string
console.log(data.toDateString()) // Data em formato string (sem hora)
console.log(data.toISOString()) // Data em formato ISO 8601
console.log(data.toUTCString()) // Data em formato UTC
console.log(data.toLocaleDateString('pt-BR', { dateStyle: 'full' })) // Data em formato local (Brasil)
console.log(data.toLocaleTimeString('pt-BR', { timeStyle: 'short' })) // Hora em formato local (Brasil)
console.log(data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' })) // Data e hora em formato local (Brasil)
