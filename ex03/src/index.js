class Person{
    
    static display(){
        var message = "Static method is invoked from Person class";
        return messasge;
    }
    
    show(){
        console.log(Person.display());
    }
}
var messasge = new Person;
messasge.show();
module.exports = Person;