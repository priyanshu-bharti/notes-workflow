## Virtual Keyword

### What is it?

- Virtual keyword when used with a method of a class means that it is overridable.
- In C++ the methods are not overridable by default, you have to explicitly state so.
- Unlike C++, where the virtual keyword is used to declare a function as overridable, all non-static, non-private, and non-final methods in Java are implicitly virtual.
- Note that the virtual functions are different than the abstract functions which have no implementation.
- Virtual functions defines a default implementation but that can be changed through overriding.
- Pure Virtual functions however, have no implementation body.

###

```cpp
#include<iostream>
using namespace std;

class parent {
public:
    virtual void virtualDisplayMessage() {
        cout << "Parent class function virtual function."<<endl;
    }

    void simpleDisplayMessage() {
        cout << "Parent class simple function."<<endl;
    }
};

class child : public parent {
public:
    void virtualDisplayMessage() {
        cout << "Child class override virtual function. "<<endl;
    }

    void simpleDisplayMessage() {
        cout << "Child class simple function. "<<endl;
    }
};

int main()
{
   // declare class object
    parent *parentClassPointer; // make parent class pointer
    child childClassObject; // make derived class object
    parentClassPointer = &childClassObject;// assign derived class object

    // calling class functions
    parentClassPointer->virtualDisplayMessage(); //  Runtime polymorphism
    parentClassPointer->simpleDisplayMessage(); // Non virtual function

    return 0;
}
```
