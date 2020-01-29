//convertendo o dia de hoje para um formato simples (YYYY-MM-DD)

module.exports = {
    parseDate(){
        //code by https://pt.stackoverflow.com/questions/6526/como-formatar-data-no-javascript
        const data = new Date(),
            day  = data.getDate().toString().padStart(2, '0'),
            month  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            year  = data.getFullYear();
        return year+"-"+month+"-"+day;
    }
} 