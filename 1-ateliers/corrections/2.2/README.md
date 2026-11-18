# Correction atelier 2.2 :  JavaScript, le coeur du langage : algortihmes

<!-- AUTO-GENERATED -->

### 1-ateliers/corrections/2.2/

#### `1-ateliers/corrections/2.2/index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Correction Atelier 2.2 : JavaScript, le coeur du langage : algorithmes</title>
    <script src="index.js" type="module"></script>
</head>
<body>
    
</body>
</html>
```

#### `1-ateliers/corrections/2.2/index.js`

```javascript
import { 
    shortestWord,
    divide,
    checkEmail
} from "./util.js";

console.log("", shortestWord(["a", "bb", "cccc"]));
console.log("", shortestWord(["aaaaaaaa", "bbbbb", "ccc"]));
console.log("", divide(10, 2));
console.log("", divide(20, 0));
console.log("", checkEmail("chuck@"));
console.log("", checkEmail("bob@gmail.com"));

```

#### `1-ateliers/corrections/2.2/util.js`

```javascript
// Algo 1
function getGeneration (birthDayYear) {
  const currentYear = (new Date()).getFullYear()
  const age = currentYear - parseInt(birthDayYear)
  if (age <= 10) {
    return 'Enfant'
  } else if (age > 10 && age < 18) {
    return 'Adolescent'
  } else if (age < 50) {
    return 'Majeur'
  } else {
    return 'Senior'
  }
}

// Algo 2 : ...args spread operator permet de prendre tous les paramètres dans un tableau
function calcAvg (...args) {
  let sum = 0
  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }
  return sum / args.length
}
// ou bien alternative
function calcAvgArray (numbers) {
  let sum = 0
  // la méthode .forEach itère chaque élément du tableau qui sera ici stocké dans la variable num
  numbers.forEach((num) => {
    sum += num
  })
  return sum / numbers.length
}

// Algo 3
function calcTTC (ht, rate) {
  return ht * (1 + rate / 100)
}

// Algo 4
function getMoment (hours) {
  if (hours > 6 && hours < 12) {
    return 'Matin'
  } else if (hours >= 12 && hours < 18) {
    return 'Après-midi'
  } else if (hours >= 18) {
    return 'Soirée'
  }
  return 'Nuit'
}
// Alternative avec dt un objet de type Date
function getMomentFrom (dt) {
  const hours = dt.getHours()
  switch(true) {
    case hours > 6 && hours < 12 :
      return 'Matin'
    case hours >= 12 && hours < 18:
      return 'Après-midi'
    case hours >= 18:
      return 'Soirée'
    default:
      return 'Nuit'
  }
}

// Algo 5
function findAllPostCodes (code) {
  const postCodes = []
  const min = parseInt(code) * 1000
  const max = min + 1000
  let i = min
  while (i < max) {
    postCodes.push(i)
    i++
  }
  return postCodes
}

// Algo 5 affichage
function findAllPostCodesToString () {
  return findAllPostCodes().join("") // transforme le tableau en string avec par défaut ,(virgule) comme sépareteur
}

// Algo 6
function multiply (table, end = 10) {
  const results = []
  for (let i = 1; i <= end; i++) {
    const result = table * i
    results.push(`${table}*${i}=${result}`)
  }
  return results.join('')
}

// Algo 7
function tree (nb) {
  let result = ''
  for (let i = 1; i <= nb; i++) {
    for (let j = 0; j < i; j++) {
      result += i
    }
  }
  return result
}

// Algo 8
export function checkEmail (email) {
  // regex d'un email un peu plus robuste
  /**
   * Pour les emails, téléphones, adresse, etc. (choses communes),
   *  vous trouverez facile le regex directement à partir d'une recherche Google
   *  par exemple, "regex email"
   */
  return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(
    email
  )
}

// Algo 9
function permutation (coca, water) {
  const empty = coca
  coca = water
  water = empty
  return [coca, water]
}

// Algo 10
function fibonacci (max = 89) {
  const values = [1, 2]
  let next = 1
  for (let i = 0; next < max; i++) {
    next = values[i] + values[i + 1]
    if (next <= max) {
      values.push(next)
    }
  }
  return values
}

// Algo 11
function countPopulation (countries) {
  let sum = 0
  countries.forEach((value) => {
    sum += value
  })
  return {
    size: countries.length,
    population: sum
  }
}

// Algo 12
function generateNumbers (total = 10, min = 0, max = 100) {
  const numbers = []
  for (let i = 0; i < total; i++) {
    const num = Math.floor(Math.random() * (max - min + 1) + min) // Génère un nombre aléatoire entre 0 et 100
    numbers.push(num)
  }
  return numbers
}

function isInside(nb) {
  return generateNumbers().includes(nb)
}

// Algo 13
function slice (limit = 50, total = 10, min = 0, max = 100) {
  const numbers = generateNumbers(total, min, max)
  const less = []
  const greater = []
  numbers.forEach((nb) => {
    if (nb <= limit) {
      less.push(nb)
    } else {
      greater.push(nb)
    }
  })
  return [less, greater]
}

// Algo 14
/**
 * Return the shortest word
 * @param {Array} words 
 * @returns string
 */
export function shortestWord(words) {
  let shortest = words[0]; // hypothèse que le premier mot est le plus court
  for (const word of words) { // utilisation de for of mais en utilisant un for classique ça revient au même
    if (word.length < shortest.length) {
      shortest = word; // ici on trouve un mot plus petit et mise à jour du mot le plus petit
    }
  }

  return shortest;
}

// Algo 15
/**
 * Divide 2 numbers
 * @param {number} nb1 
 * @param {number} nb2 
 * @returns number || Error
 */
export function divide (nb1, nb2) {
  if (nb2 === 0) {
    throw new Error('Impossible to divide by 0')
  }
  return nb1 / nb2
}

```

<!-- END AUTO-GENERATED -->