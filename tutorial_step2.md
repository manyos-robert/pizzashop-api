# Read the catalog

In einem neuen Ordner wird zunächst die NodeJs Paketverwaltung initialisiert. Das passiert mit *npm init*.

Dadurch wird die Datei *package.json* angelegt. Sie enthält die Basisconfiguration des Projektes. Unter anderem sind dort alle installierten Pakete verzeichnet.

# Express installieren

Wir können nun erste Pakete installieren. Wir beginnen mit Express. Einem einfachen Webframework. *npm install express --save*

# Die erste Datei

Wir erstellen zunächst die Datei index.js.

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

# Der erste Start

Mit *node index.js* können wir den NodeJS Server starten. Wir sehen dann auf der Console:

```
Example app listening at http://localhost:3000
```

Unser Server lauscht jetzt auf Port 3000. Wenn wir die Url http://localhost:3000 aufrufen, dann bekommen wir als Antwort:

```
Hello World!
``` 

Damit ist unsere 1. Kleine API fertig! :-)