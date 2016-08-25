var parseSocketName = function(socket){
    var parsed = /^s(\d{1,2})$/i.exec(socket);
    if(parsed === null){
        return null
    }else{
        return "s"+parsed[1].replace(/^0/,"")
    }
}

var parsePinName = function(pin){
    var parsed = /^S(\d{1,2})([ABCD])$/i.exec(pin);
    if(parsed === null){
        return null
    }else{
        return "S"+parsed[1].replace(/^0/,"")+parsed[2].toUpperCase();
    }
}

var parseSocketNamesList = function(list){
    if(typeof list !== "string" && typeof list !== "object"){
        return null
    } else if(typeof list === "string"){
        list = [list]
    }
    var parsed = list.map(function(socket){
        return parseSocketName(socket)
    })
    if(parsed
        .filter(function(socket){
            return socket === null
        })
        .length > 0
    ){
        return null
    }else{
        return parsed
    }
}

module.exports = {
    parseSocketName : parseSocketName,
    parsePinName : parsePinName,
    parseSocketNamesList : parseSocketNamesList
}
