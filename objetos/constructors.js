function Task(name) {

    let _name = name; // private
    
    this.createdAt = new Date();
    this.updatedAt = null;
    this.changeName = function(newName) {
        _name.name = newName;
        this.updatedAt = new Date();
    }
    this.getName = function() {
        return _name;
    }
}

const task1 = new Task("Minha tarefa");
task1.changeName("Minha tarefa atualizada");
task1.name = "Proibido"

const task2 = new Task("Minha segunda tarefa");

console.log(task1);
console.log(task1.getName());

task1.changeName("Nome atualizado via método");
console.log(task1.getName());


console.log(task2);