function acceptInput(jsonString){
    let arr = []
    for(let items of jsonString){
        //console.log(items)
        arr.push(items)
    }
    
    const uniqueValues = arr.filter((obj,index)=>{
        return index === arr.findIndex(o=>obj.id === o.id &&obj.name === o.name)
    })
    console.log(uniqueValues);
    arr = []
    for(let item of uniqueValues){
        arr.push(JSON.stringify(item))
    }
    return arr;
}

const obj = [ { "id": 1, "name": "John" },  { "id": 2, "name": "Jane" },  { "id": 3, "name": "Bob" },  { "id": 4, "name": "Sarah" },  { "id": 5, "name": "Tom" },  { "id": 1, "name": "John" },  { "id": 6, "name": "Emily" },  { "id": 7, "name": "David" },  { "id": 4, "name": "Sarah" },  { "id": 8, "name": "Ava" },  { "id": 9, "name": "Grace" },  { "id": 10, "name": "Liam" },  { "id": 11, "name": "Oliver" },  { "id": 12, "name": "Emma" },  { "id": 13, "name": "Sophia" },  { "id": 14, "name": "Isabella" },  { "id": 15, "name": "Mia" },  { "id": 16, "name": "Avery" },  { "id": 17, "name": "Evelyn" },  { "id": 18, "name": "Aria" },  { "id": 19, "name": "Ella" },  { "id": 20, "name": "Abigail" },  { "id": 21, "name": "Emily" },  { "id": 22, "name": "Madison" },  { "id": 23, "name": "Eleanor" },  { "id": 24, "name": "Lucy" },  { "id": 25, "name": "Audrey" },  { "id": 26, "name": "Bella" },  { "id": 27, "name": "Chloe" },  { "id": 28, "name": "Hannah" },  { "id": 29, "name": "Elizabeth" },  { "id": 30, "name": "Lily" }]

acceptInput(obj)