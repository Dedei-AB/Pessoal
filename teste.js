function numerosPrimos() {
  for (let i = 3; i > 0; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primo = false;
      }
    }
    if (primo) {
      console.log(i);
    }
  }
}
numerosPrimos();
