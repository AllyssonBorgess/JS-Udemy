//function changeName(name) {
//    console.log(name);
//    console.log(this);
//}
const changeName = name => {
     console.log(name);
     console.log(this);
}

changeName("fora de objeto")

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    completed: false,
    changeName: changeName
        
    
}

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updateAt: null,
    completed: false
}

task1.name = "task 1 updated";
task1.updateAt = new Date();

task1.changeName("");

console.log(task1);
console.log(task2);

