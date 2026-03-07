// CONTACT MANAGEMENT SYSTEM

// store contacts
let contacts = [];


// validate email
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}


// validate phone
function isValidPhone(phone) {
  return /^[0-9]{10,15}$/.test(phone);
}


// add contact
function addContact(name, phone, email, address) {

  if (!isValidPhone(phone)) {
    console.log("Invalid phone number");
    return;
  }

  if (!isValidEmail(email)) {
    console.log("Invalid email");
    return;
  }

  const contact = {
    name,
    phone,
    email,
    address
  };

  contacts.push(contact);

  console.log("Contact added");
}


// view contacts
function viewContacts() {

  if (contacts.length === 0) {
    console.log("No contacts");
    return;
  }

  contacts.forEach((c, index) => {
    console.log(
      index + 1 + ".",
      c.name,
      "|",
      c.phone,
      "|",
      c.email,
      "|",
      c.address
    );
  });

}


// search by name
function searchByName(name) {

  const result = contacts.filter(c =>
    c.name.toLowerCase().includes(name.toLowerCase())
  );

  console.log(result);

}


// search by phone
function searchByPhone(phone) {

  const result = contacts.find(c =>
    c.phone === phone
  );

  console.log(result);

}


// update contact
function updateContact(phone, newAddress) {

  const contact = contacts.find(c =>
    c.phone === phone
  );

  if (!contact) {
    console.log("Contact not found");
    return;
  }

  contact.address = newAddress;

  console.log("Contact updated");

}


// delete contact
function deleteContact(phone) {

  contacts = contacts.filter(c =>
    c.phone !== phone
  );

  console.log("Contact deleted");

}


// sort contacts
function sortContacts() {

  contacts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

}


// TESTING PROGRAM

addContact("John", "08012345678", "john@gmail.com", "Lagos");

addContact("Alice", "09011112222", "alice@gmail.com", "Abuja");

addContact("Mike", "08133334444", "mike@gmail.com", "Benin");

console.log("\nAll Contacts");
viewContacts();

console.log("\nSearch Name");
searchByName("john");

console.log("\nSearch Phone");
searchByPhone("09011112222");

console.log("\nUpdate Contact");
updateContact("08133334444", "Port Harcourt");

console.log("\nSorted Contacts");
sortContacts();
viewContacts();

console.log("\nDelete Contact");
deleteContact("08012345678");

viewContacts();