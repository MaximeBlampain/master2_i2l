import faker from '@faker-js/faker';
export function generateTask(number = 0){
  const fakeImg = "https://fakeimg.pl/300/"
  const taskListToReturn = []

  for(let i =0; i<number ; i++){
    taskListToReturn.push({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      deadline: faker.date.future(),
        img: fakeImg,
    })
  }
  return taskListToReturn
}