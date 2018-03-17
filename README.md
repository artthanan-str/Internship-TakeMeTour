### TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being and intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript
Code must be writted in Javascript language. The code will be tested with Node8, so you can use all Javascript features that equivalent to Node8.

1. Write a function that shift the elements of array to left or right by n elements in infinity loop. the function recevice 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,
```
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```
Answer:
```
var arr = ['john', 'jane', 'sarah', 'alex'];
var direc = 'left';
var N = 2;

//shift([1, 2, 3, 4 ,5], 'right', 3)

shift(arr, direc, N)

function shift(arr, direc, N){
    var temp = null;
    if (direc == 'left'){
        for(var i = 0; i < N; i++){
            temp = arr.shift();
            arr.push(temp);
        }
        console.log(arr);
    }
    else if (direc == 'right'){
        for(var i = 0; i < N; i++){
            temp = arr.pop();
            arr.unshift(temp);
        }
        console.log(arr);
    }
    else {
        console.log("Wrong input");
    }

}
```
2. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to caculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

Answer:
```
// Class
class mostAssist{
  constructor(name, assist){
    this.name = name;
    this.assist = assist;
  }
}

class worstRatio{
  constructor(name, kill, death){
    this.name = name;
    this.ratio = kill/death;
  }
}

const fs = require('fs');
var arr_networth = [];
var arr_level = [];
const assistPerson = new mostAssist('Mr.X', -Infinity);
const worstKD = new worstRatio("Mr.X", Infinity, 1);

fs.readFile('hero.json', 'utf-8', (err, data) => {
  if (err) throw err;
  
  jsonData = JSON.parse(data);
  for (var i = 0; i < jsonData.length; i++){

    arr_networth.push(jsonData[i].networth)
    if (jsonData[i].primary_attribute == 'intelligent'){
      arr_level.push(jsonData[i].level);
    }

    if(jsonData[i].assist > assistPerson.assist){
      assistPerson.name = jsonData[i].name;
      assistPerson.assist = jsonData[i].assist;
    }

    var tempRatio = parseInt(jsonData[i].kill)/parseInt(jsonData[i].death);
    if(tempRatio < worstKD.ratio){
      worstKD.name = jsonData[i].name;
      worstKD.ratio = tempRatio;
    }

  }

  var ans_avgNetworth = avgAnything(arr_networth);
  var ans_avgLevel = avgAnything(arr_level);

  console.log('Average networth: ' + ans_avgNetworth)
  console.log('Average level of all intelligent heros: ' + ans_avgLevel)
  console.log(assistPerson.name + ' got the most assist ' + assistPerson.assist + ' times');
  console.log(worstKD.name + ' has the lowest kill/death (' + worstKD.ratio + ')');

})

// Functions
function avgAnything(arr){
  var temp = 0;

  for(var i = 0; i < arr.length; i++){
    temp = temp + parseInt(arr[i]);
  }

  return temp/arr.length;
}
```

## Simple Web Application: A joke from Chuck Norris.

This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features
- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- UI Design as you wish.

### Technical description
- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

```
the source code is in the NorrisChuckWeb/src/.
```

## Questions
Q1: What is GraphQL and how it is different from REST API?

A1: GraphQL is a query langauge for getting data from API which renders at the server side. GraphQL can query the data from any database, and it can also query the data as long as needed (Ex. we want only customer_id and total_amount. GraphQL can do this for you). The main different of REST API and GraphQL is the size of data that we get. REST API cannot specific the field and limit the size of data. But GraphQL can do. Therefore, we can only get the neccessary data that we want by using GraphQL.


Q2: Please explain how javascript benefits from cross-platform development

A2: The first advantage is developers do not have study new languages, if we use JavaScript for whole system (Implement application with React Native, design the user interface with JSX, and use Node.JS at the server side). Second, JavaScript in cross-platform development or React Native is developed by Facebook. So, we can feel free to use React Native because Facebook supports us. Third, the performance is almost equal to Native.

Q3: What do you expect to get from during an internship at TakeMeTour?

A3: First of all, I expect to gain new knowledge about JavaScript (Node.JS+React+React Native), tools and protocol that TakeMeTour uses to organize a project and team. I expect to gain how Startup works, how to do the production (real project with real world business), and how to do the business. Last thing, I expect to get a good new experience. It is going to be challange if I can get an internship at TakeMeTour.

## Submitting

Please fork this repo and submit your repository at jet@takemetour.com along with your contact information.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
