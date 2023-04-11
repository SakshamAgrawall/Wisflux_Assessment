export{}

interface todo{
    name:string,
    description : string,
    done:boolean
}
var todos:todo[] = [];


function add(name:string,description:string){
    return todos.push({
        name:name,
        description: description,
        done:false
    });
}

function remove(index:number){
    return todos.splice(index,1)
}

function list() {
todos.forEach(function(todos:todo, index:number) {
console.log(index + " - " + todos.name);
});
}


function update(index:number, name:string, description:string){
todos[index].name = name;
todos[index].description = description;
return todos[index];
}