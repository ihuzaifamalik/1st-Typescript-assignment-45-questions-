let personName :string='huzaifa ';
let lowercase :string = personName.toLowerCase();
let uppercase :string = personName.toUpperCase();
let titlecase:string = personName.split('').map(word => word.charAt(0).toLowerCase()).join('')
console.log(`hello ${personName},your name in :
    lowercase:${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}`)

