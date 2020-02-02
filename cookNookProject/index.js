class aClass{
    constructoe(name, age){
        this.name = name;
        this.age = age;
    }
    
    sayName() {
        alert(this.name);
    }
    
    sayAge() {
        alert(this.age);
    }
    
}

const myInstance = new aClass("andrew", 30);
myInstance.sayAge;