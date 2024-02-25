
let invitees = ["maryam", "anusha", "ayesha"];
invitees.forEach((invitee) => {
    console.log(`Assalamualaikum ${invitee},\n I would like to invite you to dinner.\n Thank you.`);
});
let absent_invite = 'maryam';
let new_invite = 'asiya';
invitees[0] = new_invite;
invitees.forEach((invitee) => {
    console.log(`Assalamualaikum ${invitee},\n I would like to invite you to dinner.\n Thank you.`);
});
console.log(`${absent_invite} is not coming.`);