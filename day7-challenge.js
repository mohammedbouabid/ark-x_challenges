const fetchUserData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const { users } = await response.json();

    const processedUsers = processUserData(users);
    const totalAge = summarizeAge(users);

    console.log("Processed Users:");
    processedUsers.forEach(user => console.log(`- ${user}`));

    console.log(`Total Age of Male Users: ${totalAge}`);
  } catch (error) {
    console.error("Failed to fetch user data:", error.message);
  }
};

const processUserData = users =>
  users
    .filter(({ gender }) => gender === 'male')
    .map(({ firstName, lastName, age }) => `Name: ${firstName} ${lastName}, Age: ${age}`);

const summarizeAge = users =>
  users
    .filter(({ gender }) => gender === 'male')
    .reduce((total, { age }) => total + age, 0);

fetchUserData();
