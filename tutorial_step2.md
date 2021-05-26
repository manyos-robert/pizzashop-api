# Read the catalog

Nachdem unsere kleine API nun antwortet können wir uns dem Pizzashop Funktionen widmen. Als ersten benötigen wir die Liste der bestellbaren Pizzen. Nennen wir es den Catalog.

Wir lesen den Katalog aus einer JSON Datei aus. Diese legen wir im Ordner conf als catalog.json an. Die Struktur unseres Pizza Katalogs sieht so aus:

#### **`conf/catalog.json`**
```json
[
  {
    "id": "pizSal",
    "name": "Pizza Salami",
    "description": "Frischer Pizzateig, Tomatensauce, frisch geriebener Käse, Salami",
    "variants": [
      {
        "name": "Single",
        "description": "33cm",
        "price": 7.9
      },
      {
        "name": "Double",
        "description": "33cm",
        "price": 11.5
      },
      {
        "name": "Magnum",
        "description": "33cm",
        "price": 17.5
      }
    ]
  }
]

```

Unser Katalog enthält ein Array von Pizzen. Jede Pizza hat 4 Attribute:

* id: die interne ID der Pizza. Diese bleibt immer fix.
* name: der Name der Pizza wie er angezeigt werden soll. Dieser kann sich ändern.
* description: die Beschreibung der Pizza. Also was ist drauf.
* variants: eine Liste der Varianten der Pizza. 
  
Jede Variante hat die folgenden Attribute:

* name: der Name der Variante
* description: die Beschreibung der Variante
* price: der Preis der Variante

In dem Beispiel oben nutzen wir die Varianten um die Größe der Pizza festzulegen. Ausserdem wird der Preis über die Variante festgelegt. Ich bestelle also eine Pizza Salami in der Variante *double*. Damit sind die Größe und der Preis festgelegt.

# Auslesen des Catalogs

Um den Catalog über die API bereitzustellen, müssen wir ihn zunächst auslesen. Dazu verwenden wir das Paket 'fs'.

https://nodejs.org/api/fs.html

```javascript
fs.readFileSync('conf/catalog.json')
```

Die Rohdaten müssen wir nun noch in Javascript Objekte umwandeln. Hier hilft uns die Funktion *JSON.parse()*

So sieht die vollständige Funktion aus:

#### **`index.js`**
```javascript
const fs = require('fs')

function getCatalog() {
    console.log('start to read config from file')
    const rawData = fs.readFileSync('conf/catalog.json')
    return JSON.parse(rawData)
}
```

# Bereitstellen als URL

Damit der Katalog nun abgerufen werden kann, müssen wir noch die Route definieren.

#### **`index.js`**
```javascript
app.get('/catalogItems', (req, res) => {
    res.json(getCatalog());
})
```

Über einen GET Request auf die URL http://localhost:3000/catalogItems können nun die bestellbaren Positionen abgerufen werden.

#### **`API response`**
```json
[
  {
    "id": "pizSal",
    "name": "Pizza Salami",
    "description": "Frischer Pizzateig, Tomatensauce, frisch geriebener Käse, Salami",
    "variants": [
      {
        "name": "Single",
        "description": "33cm",
        "price": 7.9
      },
      {
        "name": "Double",
        "description": "33cm",
        "price": 11.5
      },
      {
        "name": "Magnum",
        "description": "33cm",
        "price": 17.5
      }
    ]
  }
]
```