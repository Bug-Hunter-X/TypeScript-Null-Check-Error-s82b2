function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

function printName2(name: string | null): void {
  console.log(name?.toUpperCase() || 'Name is null');
}

printName(null); // Output: Name is null
printName('John'); // Output: JOHN
printName2(null); // Output: Name is null
printName2('Jane'); // Output: JANE