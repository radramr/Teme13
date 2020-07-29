let obj1 = { name: "Alex", age: 24 };
let obj2 = { age: 24, name: "Alex" };


let obj3 = { name: "Alex", age: 24 };
let obj4 = { age: 24, name: "Alex", job: "Programator" };


if (obj1.name == obj2.name && obj1.age == obj2.age)
    console.log("Egale");

let ok = 1;
if (obj4 != obj3)
    console.log("nu sunt egale");
else{
        for (let key in obj3) {
        if (obj3[key] != obj4[key])
            ok = 0;

    }

if (ok == 0)
    console.log("nu sunt egale");
else
    console.log("sunt egale");

}