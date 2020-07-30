var objs = [ 
    { name: 'Lazslo', age: 19 , job: "Analist"   },
    { name: 'Ana', age: 22 , job: "Programmer"    },
    { name: 'Jack', age: 17 , job: "Student"  }
];

var byName = objs.slice(0);
byName.sort(function(a,b) {
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

console.log('by name:');
console.log(byName);